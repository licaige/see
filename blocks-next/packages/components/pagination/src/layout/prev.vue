<script lang="ts">
  import { computed, defineComponent } from 'vue'
  import { getNamespace } from '../../../../utils/global-config'
  import { BnIconCaret as PrevIcon } from '../../../icon'

  export default defineComponent({
    name: 'PaginationPrev',
    components: {
      PrevIcon
    },
    props: {
      disabled: Boolean,
      currentPage: {
        type: Number,
        default: 0
      }
    },
    emits: ['click'],
    setup(props, { emit }) {
      const ns = getNamespace('pagination-prev')
      const canPrev = computed(() => props.currentPage! > 1)
      const cls = computed(() => [ns, !canPrev.value && 'is-disabled'])

      const prev = (e: Event) => {
        if (!canPrev.value) return
        emit('click', e)
      }

      return {
        cls,
        prev
      }
    }
  })
</script>

<template>
  <button type="button" :disabled="disabled" :class="cls" @click="prev">
    <PrevIcon :rotate="90" />
  </button>
</template>
