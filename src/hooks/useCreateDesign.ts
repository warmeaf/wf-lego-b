// import { computed } from 'vue'
import { useRouter } from 'vue-router'

function useCreateDesign() {
  const router = useRouter()
  const createDesign = () => {
    router.push('/login')
  }
  return createDesign
}

export default useCreateDesign
