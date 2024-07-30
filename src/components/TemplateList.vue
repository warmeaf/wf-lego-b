<script setup lang="ts">
import { ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'

const list = ref([
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' },
  { id: 4, name: '4' },
  { id: 5, name: '5' },
  { id: 6, name: '6' }
])
</script>

<template>
  <div>
    <a-row class="mx-neg-8">
      <a-col
        class="relative px-2 mb-5"
        :span="6"
        v-for="item in list"
        :key="item.id"
      >
        <a class="card-wrapper">
          <a-card hoverable class="rounded-xl">
            <template #cover>
              <div class="relative overflow-hidden rounded-t-xl h-96">
                <img
                  class="w-full"
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
                <div
                  class="absolute inset-0 flex items-center justify-center transition duration-200 ease-in-out opacity-0 tip bg-black-80"
                >
                  <a-button size="large" type="primary">
                    使用该模板创建
                  </a-button>
                </div>
              </div>
            </template>
            <a-card-meta title="Europe Street beat">
              <template #description>
                <div class="flex items-center justify-between">
                  <span>作者：test</span>
                  <span class="flex items-center">
                    <UserOutlined />
                    <span class="pl-1">23423</span>
                  </span>
                </div>
              </template>
            </a-card-meta>
          </a-card>
          <div class="absolute left-1.5 top-neg-4">
            <a-tag color="red">HOT</a-tag>
          </div>
        </a>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.card-wrapper:hover .tip {
  opacity: 1;
}
</style>
