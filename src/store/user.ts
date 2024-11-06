import { defineStore } from 'pinia'
export interface UserDataProps {
  username?: string
  id?: string
  phoneNumber?: string
  nickName?: string
  description?: string
  updatedAt?: string
  createdAt?: string
  iat?: number
  exp?: number
  picture?: string
  gender?: string
}

export interface UserProps {
  isLogin: boolean
  token: string
  data: UserDataProps
}

export const useUserStore = defineStore('user', {
  state: () => ({
    name: 'test name'
  }),
  actions: {
    updateName(newName: string) {
      this.name = newName
    },
    resetName() {
      this.name = ''
    }
  }
})
