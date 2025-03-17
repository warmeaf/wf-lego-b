<template>
  <div class="create-components-list">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="component-item"
      @click="handleClick(item)"
    >
      <l-text v-bind="item" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import type { TextComponentProps } from '@/defaultProps'

defineProps({
  list: {
    type: Array as PropType<
      Partial<
        TextComponentProps & {
          tag: string
        }
      >[]
    >,
    required: true
  }
})
const emits = defineEmits(['item-click'])

const handleClick = (
  data: Partial<
    TextComponentProps & {
      tag: string
    }
  >
) => {
  emits('item-click', data)
}
</script>
