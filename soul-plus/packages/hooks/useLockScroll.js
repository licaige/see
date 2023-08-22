import { onMounted, onBeforeUnmount, watch } from 'vue';

const BODY_LOCK_CLASS = 'so-overflow-hidden';

export function useLockScroll(_rootRef, withLock) {
  const lock = () => {
    let existClass = document.body.classList.contains(BODY_LOCK_CLASS);
    if (!existClass) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }
  };

  const unlock = () => {
    let existClass = document.body.classList.contains(BODY_LOCK_CLASS);
    if (existClass) {
      document.body.classList.remove(BODY_LOCK_CLASS);
    }
  };

  onMounted(() => {
    if (withLock && withLock()) {
      lock();
    }
  });
  onBeforeUnmount(() => {
    if (withLock && withLock()) {
      unlock();
    }
  });

  watch(withLock, value => {
    value ? lock() : unlock();
  });
}
