import { ref, computed } from 'vue'
import type { ComputedRef } from 'vue'
interface LoadPrams {
  pageIndex?: number
  pageSize?: number
  [key: string]: any
}
const useLoadMore = (
  actionName: string,
  total: ComputedRef<number>,
  params: LoadPrams = {},
  pageSize = 8
) => {
  // current page should equals 1, start from the second page
  const pageIndex = ref((params && params.pageIndex) || 0)
  console.log(actionName)
  // const requestParams = computed(() => {
  //   return {
  //     ...params,
  //     pageIndex: pageIndex.value + 1
  //   }
  // })
  // function to trigger load more
  const loadMorePage = () => {}
  const isLastPage = computed(() => {
    return Math.ceil((total.value || 1) / pageSize) === pageIndex.value + 1
  })
  return {
    pageIndex,
    loadMorePage,
    isLastPage
  }
}

export default useLoadMore
