<script lang="ts">
  import type { StyleValue } from 'vue'
  import { defineComponent, computed } from 'vue'
  import { getNamespace } from '../../../utils/global-config'
  import { addUnit } from '../../../shared/utils'

  export default defineComponent({
    name: 'BnIconAppOa',
    props: {
      size: {
        type: [Number, String],
        default: undefined
      },
      rotate: {
        type: Number,
        default: undefined
      },
      spin: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: undefined
      }
    },
    setup(props) {
      const ns = getNamespace('icon')

      const styles = computed(() => {
        const styles: StyleValue = {}
        if (props.size) {
          styles.fontSize = addUnit(props.size)
        }

        if (props.rotate) {
          styles.transform = `rotate(${props.rotate}deg)`
        }

        if (props.color) {
          styles.color = props.color
        }
        return styles
      })

      const cls = computed(() => [
        ns,
        {
          [`${ns}-loading`]: props.spin
        }
      ])

      return {
        cls,
        styles
      }
    }
  })
</script>

<template>
  <i :class="cls" :style="styles">
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <title>协同办公</title>
      <g id="图标" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="图标1" transform="translate(-327.000000, -203.000000)" fill="#242934">
          <g id="一级-协同办公" transform="translate(305.000000, 189.000000)">
            <g id="协同办公" transform="translate(22.000000, 14.000000)">
              <g id="编组-7" transform="translate(3.000000, 3.000000)">
                <path
                  id="矩形"
                  d="M16,4 C17.1045695,4 18,4.8954305 18,6 L18,16 C18,17.1045695 17.1045695,18 16,18 L2,18 C0.8954305,18 0,17.1045695 0,16 L0,6 C0,4.8954305 0.8954305,4 2,4 L16,4 Z M16,6 L2,6 L2,16 L16,16 L16,6 Z"
                  fill-rule="nonzero"
                ></path>
                <path
                  id="矩形"
                  d="M9,0 C12.2383969,0 14.8775718,2.56557489 14.9958615,5.77506174 L15,6 L3,6 C3,2.6862915 5.6862915,0 9,0 Z M9,2 C7.60475432,2 6.37635637,2.71436007 5.66060341,3.79728294 L5.535,4 L12.464,4 L12.3707485,3.84495359 C11.6927317,2.78715834 10.53039,2.07078389 9.20067321,2.00495638 L9,2 Z"
                  fill-rule="nonzero"
                ></path>
                <rect id="矩形" x="8" y="7" width="2" height="4"></rect>
                <polygon
                  id="矩形"
                  points="1.67379174 8 16.2885112 8 16.2885112 10 1.67379174 10"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  </i>
</template>
