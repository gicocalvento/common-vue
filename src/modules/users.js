import user from '@/api/user';

export default {
    state: {
        users: user.getUsers(),
        apiUrl: 'https://api.edamam.com/search',
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        },
        setUsers() {
            
        }
    },  
    actions: {
        fetchUsers(){
            return user.fetchUsersAPI();
        }
    },
    getters: {
        
    }
}