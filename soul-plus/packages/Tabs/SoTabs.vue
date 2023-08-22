<template>
  <div class="so-tabs">
    <div class="so-tabs__nav">
      <div
        v-for="(pane, index) in panes"
        :key="index"
        :class="{ 'so-tabs__item': true, 'so-tabs__item--active': pane.active }"
        @click="handleTabClick(pane, pane.paneName, $event)"
      >
        {{ pane.props.title }}
      </div>
    </div>

    <div class="so-tabs__content">
      <slot>内容</slot>
    </div>
  </div>
</template>

<script setup>
import {
  ref,
  getCurrentInstance,
  provide,
  useSlots,
  onMounted,
  onUpdated,
  watch
} from 'vue';

const props = defineProps({
  active: { type: String, default: '' }
});

const emit = defineEmits(['update:active', 'click-tab', 'change']);

const slots = useSlots();

const currentName = ref(props.active || '0');
const instance = getCurrentInstance();
const panes = ref([]);
const paneStateMap = {};

// provide,inject
provide('rootTabs', { props, currentName });

provide('updatePaneState', pane => {
  paneStateMap[pane.uid] = pane;
});

// 递归获取 slot 中的 SoTabPane 组件实例
const getPaneInstanceFromSlot = (vnode, instanceList) => {
  Array.from(vnode.children || []).forEach(node => {
    let type = node.type;
    type = type.name || type;
    if (type === 'SoTabPane' && node.component) {
      instanceList.push(node.component);
    } else {
      getPaneInstanceFromSlot(node, instanceList);
    }
  });
};

// 设置正确顺序的 pane 实例
const setPaneInstances = isForceUpdate => {
  if (slots.default) {
    const children = instance.subTree.children;
    const content = Array.from(children).find(child => {
      return child.props.class === 'so-tabs__content';
    });

    if (!content) return;

    // 根据实际生成的 slot 排序 pane 实例
    let paneInstanceList = [];
    getPaneInstanceFromSlot(content, paneInstanceList);
    paneInstanceList = paneInstanceList.map(paneComponent => {
      return paneStateMap[paneComponent.uid];
    });

    // 新实例 paneInstanceList 对比 已有panes
    const panesChanged = !(
      paneInstanceList.length === panes.value.length &&
      paneInstanceList.every(
        (pane, index) => pane.uid === panes.value[index].uid
      )
    );

    if (isForceUpdate || panesChanged) {
      panes.value = paneInstanceList.map((pane, index) => {
        pane.index.value = index;
        return pane;
      });
    }
  } else {
    panes.value = [];
  }
};

const changeCurrentName = value => {
  currentName.value = value;
  emit('update:active', value);
  emit('change', value);
};

const setCurrentName = value => {
  if (currentName.value === value) return;
  changeCurrentName(value);
};

const handleTabClick = (tab, name, event) => {
  if (tab.props.disabled) return;

  setCurrentName(name);
  let { title, disabled } = tab.props;
  emit('click-tab', { name, title, event, disabled });
};

watch(
  () => props.active,
  value => {
    setCurrentName(value);
  }
);

onUpdated(() => {
  setPaneInstances();
});

onMounted(() => {
  setPaneInstances();
});
</script>
