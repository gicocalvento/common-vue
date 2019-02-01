import user from '@/api/user';
import auth from '@/api/auth';
import router from '../router'

export default {
    state: {
        users: user.getUsers(),
        apiUrl: 'https://api.edamam.com/search',
        count: 0,
        loginErrors: false,
        errorMessage: ""
    },
    mutations: {
        increment (state) {
            state.count++
        },
        loginUserByEmailPassword(context, request){
            console.log("MUTATE!");
            return auth.loginUserByEmailPassword(request).then((response) => {
                console.log(response);
                if(response.data.status == "success"){
                    localStorage.setItem('token', JSON.stringify(response.data.data.user.stsTokenManager.accessToken));
                    router.push("/");
                }else{
                    this.state.loginErrors = true;
                    this.state.errorMessage = response.data.message;
                }
                return response.data
            }).catch((error)=>{
                console.log(error);
            });
            
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