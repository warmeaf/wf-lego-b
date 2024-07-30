<script setup lang="ts">
import TemplateList from '@/components/TemplateList.vue'
const headerStyle = {
  background: 'rgba(0, 0, 0, 0.5)',
  height: '4.375rem',
  lineHeight: '4.375rem'
}
</script>

<template>
  <a-layout class="bg-white">
    <a-layout-header class="z-1" :style="headerStyle">
      <div class="font-bold text-white">wf 乐高</div>
    </a-layout-header>

    <a-style-provider hash-priority="high">
      <a-layout-content class="relative top-neg-70">
        <div class="relative overflow-hidden h-450">
          <img
            class="object-cover w-full h-full"
            src="https://oss.imooc-lego.com/editor/img/background.3744875e.png"
          />
        </div>
        <div class="max-w-screen-xl mx-auto bg-white">
          <a-row class="h-16">热门海报</a-row>
          <a-row class="mx-neg-8"><TemplateList /></a-row>
        </div>
      </a-layout-content>
    </a-style-provider>
    
    <a-layout-footer>@ wf 乐高 版权所有 2022</a-layout-footer>
  </a-layout>
</template>
