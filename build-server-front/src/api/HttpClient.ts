import axios from 'axios'
import { TBuildServerEndpoints } from './Endpoints';
import configData from "../config.json";

axios.interceptors.request.use(function (config) {
    const token = `Bearer ${localStorage.getItem('accessToken')}`;
    config.headers.Authorization =  token;
    return config;
});

const getAsync = async (endppoint : TBuildServerEndpoints, query : string = '') => {
    const url = configData.SERVER_URL + endppoint;
    try{
        const response = await axios.get(url, );
        return response.data;
    }
    catch (err){
        console.error(err);
    }
}

const postAsync = async (endppoint : TBuildServerEndpoints, body : object = {}) => {
    const url = configData.SERVER_URL + endppoint;
    try{
        const response = await axios.post(url, body);
        return response.data;
    }
    catch (err){
        // check if 401 and remove token from local storage
        console.log('ERROR HAPPENED')
        console.log(JSON.stringify(err));
    }
}

export default {
    getAsync,
    postAsync
}