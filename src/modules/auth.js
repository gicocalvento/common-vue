import user from '@/api/user';
import auth from '@/api/auth';
import router from '../router'

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
        loginUserByEmailPassword(context, request){
            console.log("MUTATE!");
            auth.loginUserByEmailPassword(request).then((response) => {
                console.log(response);
                if(response.data.status == "success"){
                    localStorage.setItem('token', JSON.stringify(response.data.data.user.stsTokenManager.accessToken));
                    router.push("/");
                }
            })
            
        }   
    },  
    actions: {
        fetchUsers(){
            return user.fetchUsersAPI();
        },
        loginUserByEmailPassword(context, request){
            context.commit('loginUserByEmailPassword',request);
        }   
    },
    getters: {
        
    }
}