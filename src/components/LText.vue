<template>
  <component :is="tag" :style="styleProps" class="l-text-component">
    {{ text }}
  </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { pick } from 'lodash-es'
import {
  transformToComponentProps,
  textDefaultProps,
  textStylePropNames
} from '@/defaultProps'

const props = defineProps({
  tag: {
    type: String,
    default: 'span'
  },
  ...transformToComponentProps(textDefaultProps)
})

// 重用并且简化
// 抽离并且获得 styleProps
const styleProps = computed(() => {
  return pick(props, textStylePropNames)
})
</script>

<style scoped>
h2.l-text-component,
p.l-text-component {
  margin-bottom: 0;
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
