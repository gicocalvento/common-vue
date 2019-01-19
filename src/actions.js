import user from '@/api/user/'

export default {
    increment (context) {
        context.commit('increment')
    }
}