import { defineComponent } from 'vue'
import { dongProps } from './types'

const NAME = 'yyg-dong'

export default defineComponent({
  name: NAME,
  props: dongProps,
  setup (props, context) {
    console.log(props, context)
    return () => (
      <div class={NAME}>
        <div>
          yyg-dong
        </div>
      </div>
    )
  }
})
