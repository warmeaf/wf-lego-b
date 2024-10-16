<script setup lang="ts">
import { ref } from 'vue'
import TemplateList from '@/components/TemplateList.vue'
const value = ref('')
</script>

<template>
  <div class="relative top-neg-70">
    <div class="relative overflow-hidden h-450">
      <img
        class="object-cover w-full h-full"
        src="https://oss.imooc-lego.com/editor/img/background.3744875e.png"
      />
      <div class="absolute inset-0 flex items-center justify-center">
        <a-space direction="vertical">
          <a-typography-title class="text-white">
            海量精彩设计 一键生成
          </a-typography-title>
          <a-input-search
            v-model:value="value"
            placeholder="搜索一下，快速找模板"
            enter-button
            size="large"
          />
        </a-space>
      </div>
    </div>
    <div class="max-w-screen-xl mx-auto bg-white">
      <a-row class="h-16">热门海报</a-row>
      <a-row class="mx-neg-8"><template-list /></a-row>
    </div>
  </div>
</template>
