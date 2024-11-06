export interface PageData {
  props: { [key: string]: any }
  setting: { [key: string]: any }
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
