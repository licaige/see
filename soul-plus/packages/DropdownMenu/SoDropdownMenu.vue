<template>
  <div ref="rootRef" class="so-dropdown-menu">
    <div
      ref="barRef"
      :class="[
        'so-dropdown-menu__bar',
        { 'so-dropdown-menu__bar--opened': state.opened }
      ]"
    >
      <div
        role="button"
        tabindex="0"
        class="so-dropdown-menu__item"
        v-for="(item, index) in panes"
        :key="index"
        @click="toggleItem(index)"
      >
        <span
          :class="[
            'so-dropdown-menu__title',
            {
              'so-dropdown-menu__title--active':
                index === activeIdx && state.opened
            }
          ]"
        >
          <div>{{ item.props?.title }}</div></span
        >
      </div>
    </div>

    <div
      class="so-dropdown-menu__container"
      :style="{
        top: state.offset + 'px',
        display: state.showWrapper ? '' : 'none'
      }"
    >
      <transition name="so-fade">
        <div
          class="so-dropdown-menu__overlay"
          v-show="state.opened"
          @click="clickOverlay"
        ></div>
      </transition>

      <transition name="so-slide-down" @after-leave="onClosed">
        <div
          class="so-dropdown-menu__content"
          v-show="state.opened"
          :style="{ height: state.wrapHeight }"
        >
          <slot></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, provide, computed, useSlots } from 'vue';
import {
  useRect,
  useEventListener,
  useScrollParent,
  onMountedOrActivated
} from '../hooks';

const emit = defineEmits(['closed']);

const slots = useSlots();

const state = reactive({
  offset: 0,
  opened: false,
  showWrapper: false,
  wrapHeight: 'auto'
});

const activeIdx = ref(-1); // 激活的 index
const panes = ref([]); // 存放 dropdown-item 实例
const rootRef = ref();
const barRef = ref();
const scrollParent = useScrollParent(rootRef);

const paneSlots = computed(() => {
  let ps = slots.default?.() || [];
  return ps.filter(v => v.type?.name === 'SoDropdownItem');
});

const activeUid = computed(() => panes.value[activeIdx.value]?.uid);

// 提供 current active uid
provide('rootActive', activeUid);

// 提供 pane 实例入栈 fun
provide('updatePaneState', pane => {
  let findPane = panes.value.find(v => v.uid === pane.uid);
  if (findPane) {
    panes.value = panes.value.filter(v => v.uid !== findPane.uid);
  } else {
    panes.value.push(pane);
  }

  if (paneSlots.value.length === 0) {
    console.warn('Warn--SoDropdownMenu: lose default slots');
    return;
  }
  // 排序 -- paneSlots
  let newPanes = [];
  for (let v of paneSlots.value) {
    let vPane = panes.value.find(p => p.props.title === v.props.title);
    if (vPane) newPanes.push(vPane);
  }
  panes.value = newPanes;

  if (activeIdx.value > panes.value.length - 1) {
    activeIdx.value = 0;
  }
});

// 提供 wrap heigth-px fun
provide('updateWrapHeight', heigth => {
  state.wrapHeight = heigth || 'auto';
});

const updateOffset = () => {
  if (!barRef.value) return;
  const rect = useRect(barRef);
  state.offset = rect.bottom;
};

const onScroll = () => {
  updateOffset();
};

const toggleItem = idx => {
  if (idx === null || idx === undefined || idx === -1) {
    state.opened = false;
    return;
  }

  if (idx === activeIdx.value) {
    state.opened = !state.opened;
  } else {
    state.opened = true;
  }
  activeIdx.value = idx;

  if (state.opened) {
    state.showWrapper = true;
  }
};

const clickOverlay = () => {
  state.opened = false;
};

// content 离开动画结束触发 onAfterLeave 隐藏 container
const onClosed = () => {
  state.showWrapper = false;
  emit('closed');
};

onMountedOrActivated(() => {
  updateOffset();
});

useEventListener('scroll', onScroll, { target: scrollParent });

defineExpose({ toggleItem });
</script>

