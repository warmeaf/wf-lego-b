<template>
  <div class="props-table">
    <div v-for="(value, key) in finalProps" :key="key" class="prop-item">
      <span v-if="value.text" class="label">
        {{ value.text }}
      </span>
      <div class="prop-component">
        <component
          v-if="value"
          :is="value.component"
          v-bind="value.extralProps"
          :value="value.value"
        >
          <template v-if="value.subComponent">
            <component
              :is="value.subComponent"
              v-for="(option, index) in value.options"
              :key="index"
              :value="option.value"
            >
              {{ option.text }}
            </component>
          </template>
        </component>
      </div>
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
        item.value =
          typeof item.initalTransform === 'function'
            ? item.initalTransform(value)
            : (value as any)
        result[newKey] = item
      }
      return result
    },
    {} as Required<PropsToForms>
  )
})
</script>

<style scoped>
.prop-item {
  display: flex;
  margin-bottom: 10px;
  align-items: center;
}
.label {
  width: 28%;
}
.prop-component {
  width: 70%;
}
</style>
