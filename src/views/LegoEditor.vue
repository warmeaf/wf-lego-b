<template>
  <div class="editor" id="editor-layout-main">
    <a-layout>
      <a-layout-header class="header">
        <div class="page-title"></div>
        <a-menu
          :selectable="false"
          theme="dark"
          mode="horizontal"
          :style="{ lineHeight: '64px' }"
        ></a-menu>
      </a-layout-header>
    </a-layout>
    <a-layout>
      <a-layout-sider width="300" style="background: #fff">
        <components-list :list="list" @item-click="addItem" />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <editor-wrapper
          v-for="item in components"
          :key="item.id"
          :id="item.id"
          :active="item.id === currentComponent?.id"
          @set-active="setActive"
        >
          <component :key="item.id" :is="item.name" v-bind="item.props" />
        </editor-wrapper>
      </a-layout>
      <a-layout-sider
        width="300"
        style="background: #fff"
        class="settings-panel"
      >
        <props-table
          v-if="currentComponent && currentComponent.props"
          :props="currentComponent.props"
        />
        <pre>
          {{ currentComponent?.props }}
        </pre>
      </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import ComponentsList from '@/components/ComponentsList.vue'
import EditorWrapper from '@/components/EditorWrapper.vue'
import PropsTable from '@/components/PropsTable.vue'
import { defaultTextTemplates } from '@/defaultTemplates'
import { useEditorStore } from '@/store/editor'
import type { TextComponentProps } from '@/defaultProps'
import type { ComponentData } from '@/store/editor'

const editorStore = useEditorStore()

const components = computed(() => editorStore.components)
const currentComponent = computed<ComponentData | undefined>(
  () => editorStore.currentComponent
)

const list = ref<
  Partial<
    TextComponentProps & {
      tag: string
    }
  >[]
>(defaultTextTemplates)

const addItem = (
  props: Partial<
    TextComponentProps & {
      tag: string
    }
  >
) => {
  editorStore.addComponent(props)
}
const setActive = (id: string) => {
  editorStore.setActive(id)
  setTimeout(() => {
    console.log(currentComponent.value)
  }, 0)
}
</script>

<style>
.header {
  display: flex;
  justify-content: space-between;
}
.header .logo-img {
  margin-right: 20px;
  height: 40px;
}
.page-title {
  display: flex;
}
.header h4 {
  color: #ffffff;
}
.editor-spinner {
  position: fixed;
  right: 50%;
  top: 10px;
}
.preview-container {
  padding: 24px;
  margin: 0;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}
.preview-list.active {
  border: 1px solid #1890ff;
}
.preview-list.canvas-fix .l-text-component,
.preview-list.canvas-fix .l-image-component,
.preview-list.canvas-fix .l-shape-component {
  box-shadow: none !important;
}
.preview-list.canvas-fix {
  position: absolute;
  max-height: none;
}
.sidebar-container {
  padding: 20px;
}
.body-container {
  width: 100%;
  height: 100%;
  background-size: cover;
}
.page-settings {
  padding: 16px;
}
.settings-panel .ant-tabs-top-content {
  max-height: calc(100vh - 68px - 56px);
  overflow-y: auto;
}
.final-preview {
  position: absolute;
  width: calc(100% - 400px);
  height: 100%;
  background: transparent;
  top: 0;
  left: 0;
  z-index: 1500;
  display: flex;
  align-items: center;
  justify-content: center;
}
.final-preview-inner {
  width: 430px;
  height: 870px;
  padding: 60px 28px;
  position: relative;
  background: url('~@/assets/phone-back.png') no-repeat;
  background-size: cover;
}
.final-preview-inner .preview-title {
  height: 44px;
  line-height: 44px;
  text-align: center;
  font-weight: bold;
}
.iframe-container {
  width: 100%;
  height: 706px;
  overflow-y: auto;
  overflow-x: hidden;
}
.iframe-placeholder {
  background: url('~@/assets/loading.svg') 50% 50% no-repeat;
  background-size: 50px;
}
.settings-panel .ant-list-bordered {
  border-radius: 0;
}
.settings-panel .ant-collapse {
  border-radius: 0;
}
.ant-collapse-header,
.ant-collapse-item {
  border-radius: 0 !important;
}
.settings-panel .ant-tabs-tab {
  border-radius: 0 !important;
}
</style>
