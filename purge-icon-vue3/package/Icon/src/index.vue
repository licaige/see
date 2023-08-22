<template>
  <!-- iconify图标 -->
  <Iconify 
    v-if="props.type === 'iconify'" 
    :icon="props.icon"
    v-bind="$attrs"
  />

  <!-- iconfont图标 -->
  <Iconfont
    v-else-if="props.type === 'iconfont'"
    :icon="props.icon"
    v-bind="$attrs"
  />

  <!-- svg图标 -->
  <IconSvg
    v-else
    :icon="props.icon"
    v-bind="$attrs"
  />
</template>

<script lang="ts" setup>
  import '@purge-icons/generated'
  import IconSvg from './IconSvg.vue'
  import Iconify from './Iconify.vue'
  import Iconfont from './Iconfont.vue'

  const props = defineProps({
    type: {
      type: String,
      default: 'iconify',
      validator: (value: string) => {
        return ['iconify', 'iconfont', 'svg'].includes(value)
      }
    },
    icon: {
      type: String,
      required: true
    }
  })
</script>

<script lang="ts">
  export default { name: 'PurgeIcon' }
</script>
