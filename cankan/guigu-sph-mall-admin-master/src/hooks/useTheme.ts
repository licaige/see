import { computed } from 'vue'
import { useSettingsStore } from '@/store/modules/settings'
import { DEFAULT_PRIMARY } from '../config/config'
import { ElMessage } from 'element-plus'
import { getLightColor, getDarkColor } from '@/utils/color'

export const useTheme = () => {
  const settingsStore = useSettingsStore()
  const themeConfig = computed(() => settingsStore.themeConfig)

  // 切换暗黑模式
  const switchDark = () => {
    // 获取html元素
    const body = document.documentElement as HTMLElement
    if (themeConfig.value.isDark) body.setAttribute('class', 'dark')
    else body.setAttribute('class', '')
    changePrimary(themeConfig.value.primary)
  }

  // 修改主题颜色
  const changePrimary = (val: string | null) => {
    // 拿到传过来的val值（十六进制颜色值），第一步判断如果是空值，就设置为默认的主题色DEFAULT_PRIMARY
    if (!val) {
      val = DEFAULT_PRIMARY
      ElMessage({
        type: 'success',
        message: `主题颜色已重置为 ${DEFAULT_PRIMARY}`,
      })
    }
    // 第二步，val不为空，把这个主题色存储到pinia中
    settingsStore.setThemeConfig({ ...themeConfig.value, primary: val })
    // 第三步，通过setProperty修改--el-color-primary的值
    document.documentElement.style.setProperty(
      '--el-color-primary',
      themeConfig.value.primary,
    )

    // 颜色加深或变浅
    for (let i = 1; i <= 9; i++) {
      document.documentElement.style.setProperty(
        `--el-color-primary-light-${i}`,
        themeConfig.value.isDark
          ? `${getDarkColor(themeConfig.value.primary, i / 10)}`
          : `${getLightColor(themeConfig.value.primary, i / 10)}`,
      )
    }
  }

  // 初始化主题
  const initTheme = () => {
    switchDark()
    // changePrimary(themeConfig.value.primary)
  }
  return {
    initTheme,
    switchDark,
    changePrimary,
  }
}
