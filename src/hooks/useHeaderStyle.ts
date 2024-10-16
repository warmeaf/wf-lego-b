import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

interface HeaderStyle {
  background: string
}

/**
 * 自定义 header 样式，并根据路由变化而改变背影色
 */
export function useHeaderStyle() {
  const router = useRouter()
  const headerStyle = ref<HeaderStyle>({
    background: 'rgba(0, 0, 0, 0.5)'
  })

  watch(
    () => router.currentRoute.value.path,
    (newValue) => {
      if (newValue === '/') {
        headerStyle.value.background = 'rgba(0, 0, 0, 0.5)'
      } else {
        headerStyle.value.background = 'rgb(0, 21, 41)'
      }
    },
    { immediate: true }
  )

  return {
    headerStyle
  }
}
