import axios from 'axios'
import store from '@/store/index'

const service=axios.create({
  baseURL:process.env.BASE_API,
  timeout: 50000,
  withCredentials: true
})

//http request 拦截器
service.interceptors.request.use(
  config => {
    if (store.state.token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.authorization = store.state.token  //请求头加上token
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)

service.interceptors.response.use(
  response => response,
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
