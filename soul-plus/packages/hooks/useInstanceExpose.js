import { getCurrentInstance } from 'vue';

// pubilsh apis to instance
export function useInstanceExpose(apis) {
  const instance = getCurrentInstance();
  if (instance && apis) {
    Object.assign(instance.proxy, apis);
  }
}
