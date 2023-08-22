import Button from './src/button.vue'
import { withInstall } from '../utils/withInstall'

const YButton = withInstall(Button)

export default YButton

export type { ButtonInstance, ButtonType } from './src/button'
