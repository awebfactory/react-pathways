import axios from 'axios';

var docUtils = {
    getDocs(){
        return axios.get('/api/docs');
    }
};

export default docUtils;
