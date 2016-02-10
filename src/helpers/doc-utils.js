import axios from 'axios';

var docUtils = {
    getDocs(){
        return axios.get('/api/doc');
    },
    getDoc(id){
        return axios.get(`/api/doc/${id}`);
    }
};

export default docUtils;