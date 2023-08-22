import { unref, onUnmounted, onDeactivated } from 'vue';
import { onMountedOrActivated } from './onMountedOrActivated';
import { inBrowser } from '../utils';

// eslint-disable-next-line
export let supportsPassive = false;

if (inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        supportsPassive = true;
      }
    });
    window.addEventListener('test-passive', null, opts);
    // eslint-disable-next-line no-empty
  } catch (e) {}
}

export function useEventListener(type, listener, options = {}) {
  if (!inBrowser) {
    return;
  }

  const { target = window, passive = false, capture = false } = options;

  let attached;

  const add = () => {
    const element = unref(target);

    if (element && !attached) {
      element.addEventListener(
        type,
        listener,
        supportsPassive ? { capture, passive } : capture
      );
      attached = true;
    }
  };

  const remove = () => {
    const element = unref(target);

    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  };

  onUnmounted(remove);
  onDeactivated(remove);
  onMountedOrActivated(add);
}
