import delPath from '../utils/delpath'
import { series, parallel, src, dest } from 'gulp'
import { pkgPath, componentPath } from '../utils/paths'
import gulpSass from 'gulp-sass'
import sassLang from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import run from '../utils/run'

const sass = gulpSass(sassLang)

//删除dist目录
export const removeDist = () => {
  return delPath(`${pkgPath}/y-design`)
}

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/theme/src/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/y-design/lib/components/theme/src`))
    .pipe(dest(`${pkgPath}/y-design/es/components/theme/src`))
}

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath)
}

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
)
