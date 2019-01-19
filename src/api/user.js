import axios from 'axios'

var _users = [
    {"name": "Gico","surname": "Calvento"}
]

export default {
    getUsers() {
        return _users;
    },
    fetchUsersAPI(){
        return axios.get('http://localhost:3000/users').then((response) => {
            return response.data;
        });
    }
};