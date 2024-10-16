<script setup lang="ts">
import { useHeaderStyle } from '@/hooks/useHeaderStyle'
const { headerStyle } = useHeaderStyle()
// import { useUserStore } from '@/store/user';
// const user = useUserStore()
</script>

<template>
  <a-layout class="bg-white">
    <a-layout-header
      class="flex items-center justify-between z-1"
      :style="headerStyle"
    >
      <router-link to="/">
        <div class="font-bold text-white">wf 乐高</div>
      </router-link>

      <!-- 登录 -->
      <a-button type="primary" size="small">登录</a-button>
    </a-layout-header>

    <a-layout-content>
      <router-view />
    </a-layout-content>

    <a-layout-footer>@ wf 乐高 版权所有 2022</a-layout-footer>
  </a-layout>
</template>
