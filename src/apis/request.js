import axios from "axios"

const ins = axios.create({
    timeout: 1000,
    baseURL: "/api"
})

// 响应拦截
ins.interceptors.response.use(config => {
    if(config.data.code !== 0) {
        console.log('err')
    }
    return config.data.data;
}, err => {
    return Promise.reject(err);
})

export default ins;