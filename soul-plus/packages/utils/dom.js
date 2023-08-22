import { createApp } from 'vue';
import { isObject } from '.';

export function mountComponent(RootComponent) {
  const app = createApp(RootComponent);
  const root = document.createElement('div');

  document.body.appendChild(root);

  return {
    instance: app.mount(root),
    unmount() {
      app.unmount();
      document.body.removeChild(root);
    }
  };
}

// 将 htmlCollection append to parentElement
export function appendElements(htmlCollection, parentElement) {
  Array.from(htmlCollection).forEach(child => {
    if (child.nodeType === 1) {
      (parentElement || document.body).appendChild(child);
    }
  });
}

// trigger dom event
export function trigger(target, type) {
  const inputEvent = document.createEvent('HTMLEvents');
  inputEvent.initEvent(type, true, true);
  target.dispatchEvent(inputEvent);
}

export function getScrollTop(el) {
  const top = 'scrollTop' in el ? el.scrollTop : el.pageYOffset;
  return Math.max(top, 0);
}

export function setScrollTop(el, value) {
  if ('scrollTop' in el) {
    el.scrollTop = value;
  } else {
    el.scrollTo(el.scrollX, value);
  }
}

export function getRootScrollTop() {
  return (
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0
  );
}

export function setRootScrollTop(value) {
  setScrollTop(window, value);
  setScrollTop(document.body, value);
}

export function getVisibleHeight(el) {
  if (el === window) {
    return el.innerHeight;
  }

  if ('getBoundingClientRect' in el) {
    return el.getBoundingClientRect().height;
  }

  return el.offsetHeight;
}

export function resizeTextarea(input, autosize = true) {
  if (!autosize) return;

  const scrollTop = getRootScrollTop();
  input.style.height = 'auto';

  let height = input.scrollHeight;
  if (isObject(autosize)) {
    const { minHeight, maxHeight } = autosize;
    if (minHeight !== undefined) {
      height = Math.max(height, minHeight);
    }
    if (maxHeight !== undefined) {
      height = Math.min(height, maxHeight);
    }
  }

  if (!height) return;
  input.style.height = `${height}px`;
  setRootScrollTop(scrollTop);
}
