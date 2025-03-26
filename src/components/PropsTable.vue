<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <component v-if="value" :is="value.component" :value="value.value" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TextComponentProps } from '@/defaultProps'
import type { PropsToForms } from '@/propsMap'

import { computed } from 'vue'
import { reduce } from 'lodash-es'

import { mapPropsToForms } from '@/propsMap'

const props = defineProps({
  props: {
    type: Object as PropType<Partial<TextComponentProps>>,
    required: true
  }
})

const finalProps = computed(() => {
  return reduce(
    props.props,
    (result, value, key) => {
      const newKey = key as keyof TextComponentProps
      const item = mapPropsToForms[newKey]
      if (item) {
        item.value = value
        result[newKey] = item
      }
      return result
    },
    {} as PropsToForms
  )
})
</script>
