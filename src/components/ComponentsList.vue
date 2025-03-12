<template>
  <div class="create-components-list">
    <div v-for="(item, index) in list" :key="index" @click="handleClick(item)">
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
const emits = defineEmits(['click'])

const handleClick = (item) => {
  emits('click', item)
}
</script>
