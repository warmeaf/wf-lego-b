import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

import type { TextComponentProps } from '@/defaultProps'

export interface ComponentData {
  props: { [key: string]: string }
  id: string
  name: string
  layerName?: string
  isHidden?: boolean
  isLocked?: boolean
}
export interface PageData {
  props: { [key: string]: string }
  setting: { [key: string]: string }
  id?: number
  title?: string
  desc?: string
  coverImg?: string
  uuid?: string
  latestPublishAt?: string
  updatedAt?: string
  isTemplate?: boolean
  isHot?: boolean
  isNew?: boolean
  author?: string
  copiedCount?: number
  status?: string
  user?: {
    gender: string
    nickName: string
    picture: string
    userName: string
  }
}
export interface ChannelProps {
  id: number
  name: string
  workId: number
}
// export interface HistoryProps {
//   id: string
//   componentId?: string
//   type: 'add' | 'delete' | 'modify'
//   data: any
//   index?: number
// }
export interface EditProps {
  // 页面所有组件
  components: ComponentData[]
  // 当前被选中的组件 id
  currentElement: string
  // 当前正在 inline editing 的组件
  currentEditing: string
  // 当前数据已经被修改
  isDirty: boolean
  // 当前模版是否修改但未发布
  isChangedNotPublished: boolean
  // 当前被复制的组件
  copiedComponent?: ComponentData
  // 当前 work 的数据
  page: PageData
  // 当前 work 的 channels
  channels: ChannelProps[]
  // 当前操作的历史记录
  // histories: HistoryProps[]
  // 当前历史记录的操作位置
  historyIndex: number
}

const testComponents: ComponentData[] = [
  {
    props: { text: 'Hello World', fontSize: '24px', tag: 'h1' },
    id: uuidv4(),
    name: 'LText'
  },
  {
    props: {
      text: 'Hello World',
      fontSize: '14px',
      tag: 'h4'
    },
    id: uuidv4(),
    name: 'LText'
  }
]

export const useEditorStore = defineStore('editor', {
  state: () => ({
    components: testComponents,
    currentElement: ''
  }),
  actions: {
    addComponent(props: Partial<TextComponentProps>) {
      const component: ComponentData = {
        props,
        id: uuidv4(),
        name: 'LText'
      }
      this.components.push(component)
    }
  }
})
