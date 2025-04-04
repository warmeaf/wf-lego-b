import { computed } from 'vue'
import { pick } from 'lodash-es'

import type { TextComponentProps } from '@/defaultProps'

const useComponentCommon = (
  props: Readonly<Partial<TextComponentProps>>,
  picks: string[]
) => {
  const styleProps = computed(() => {
    return pick(props, picks)
  })
  const handleClick = () => {
    if (props.actionType === 'url' && props.url) {
      window.location.href = props.url
    }
  }

  return {
    styleProps,
    handleClick
  }
}

export default useComponentCommon
