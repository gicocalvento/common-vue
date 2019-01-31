import axios from 'axios'
const config = require('../config.json');

var _users = [
    {"name": "Gico","surname": "Calvento"}
]

export default {
    getUsers() {
        return _users;
    },
    fetchUsersAPI(){
        return axios.get( config.apiUrl+ '/api/users').then((response) => {
            return response.data;
        });
    }
};