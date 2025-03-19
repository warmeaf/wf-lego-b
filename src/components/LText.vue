<template>
  <component
    :is="tag"
    :style="styleProps"
    class="l-text-component"
    @click="handleClick"
  >
    {{ text }}
  </component>
</template>

<script lang="ts" setup>
// import { computed } from 'vue'
// import { pick } from 'lodash-es'
import {
  transformToComponentProps,
  textDefaultProps,
  textStylePropNames
} from '@/defaultProps'
import useComponentCommon from '../hooks/useComponentCommon'

const props = defineProps({
  tag: {
    type: String,
    default: 'span'
  },
  ...transformToComponentProps(textDefaultProps)
})

// 其他组件也会有这样的逻辑，所以需要重用并且简化
// 抽离并且获得 styleProps
// const styleProps = computed(() => {
//   return pick(props, textStylePropNames)
// })
const { styleProps, handleClick } = useComponentCommon(
  props,
  textStylePropNames
)
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>
