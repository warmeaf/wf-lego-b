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
defineProps({
  list: {
    type: Array,
    required: true
  }
})
const emits = defineEmits(['item-click'])

const handleClick = (data) => {
  emits('item-click', data)
}
</script>
