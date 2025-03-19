<template>
  <div
    class="editor-wrapper"
    :class="{
      active: active
    }"
    @click="onItemClick"
  >
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
const emits = defineEmits(['set-active'])

const onItemClick = () => {
  emits('set-active', props.id)
}
</script>

<style scoped>
.editor-wrapper {
  padding: 0px;
  cursor: pointer;
  border: 1px solid transparent;
  user-select: none;
}
.editor-wrapper:hover {
  border: 1px dashed #ccc;
}
.editor-wrapper.active {
  border: 1px solid #1890ff;
  user-select: none;
  z-index: 1500;
}
</style>
