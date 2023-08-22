import { ref, watch } from 'vue';

// @bool 为 true 时，赋值boolex为true
export function useTruthy(bool) {
  const boolEx = ref(false);

  watch(
    bool,
    value => {
      if (value) {
        boolEx.value = value;
      }
    },
    { immediate: true }
  );

  return boolEx;
}
