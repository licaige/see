import { ref, onMounted } from 'vue';
import { inBrowser } from '../utils';

const overflowScrollReg = /scroll|auto/i;
const defaultRoot = inBrowser ? window : undefined;

function isElement(node) {
  const ELEMENT_NODE_TYPE = 1; // 1代表元素节点类型
  return (
    node.tagName !== 'HTML' &&
    node.tagName !== 'BODY' &&
    node.nodeType === ELEMENT_NODE_TYPE
  );
}

export function getScrollParent(el, root = defaultRoot) {
  let node = el;
  while (node && node !== root && isElement(node)) {
    const { overflowY } = window.getComputedStyle(node);
    if (overflowScrollReg.test(overflowY)) {
      return node;
    }
    node = node.parentNode; // 自身node非滚动则递归查找父元素
  }
  return root;
}

export function useScrollParent(el, root = defaultRoot) {
  const scrollParent = ref();

  onMounted(() => {
    // el为响应ref，此次不可unref
    if (el.value) {
      scrollParent.value = getScrollParent(el.value, root);
    }
  });

  return scrollParent;
}
