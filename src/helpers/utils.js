import axios from 'axios';

var utils = {
    getSteps(){
        return axios.get('/api/step');
    },
    getStep(id){
        return axios.get(`/api/step/${id}`);
    }
};

export default utils;