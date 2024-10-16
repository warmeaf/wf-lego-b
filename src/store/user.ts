import { defineStore } from 'pinia'

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
