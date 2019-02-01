import axios from 'axios'
const config = require('../config.json');

export default {
    
    loginUserByEmailPassword(request){
        return axios.post( config.apiUrl + '/api/auth/loginUserByEmail', request);
    }
    
};