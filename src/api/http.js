import axios from 'axios'
import qs from 'qs'
// import {Message} from 'iview'
import router from '../router'

// axios配置
axios.defaults.timeout = 1000 * 30
axios.defaults.baseURL = process.env.API_HOST // 开发时 http://192.168.0.139:8080/，打包： '/'
axios.defaults.withCredentials = true
axios.defaults.crossDomain = true

// 请求时拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.reject(error)
})

// 成功处理
function handleResponse (response) {
  let res = response.data
  if (res) {
    switch (res.code) {
      case 1000: // 错误
        // Message.error(res.message)
        console.log(res.message)
        break
      case 2000: // 用户没有权限
        // Message.warning(res.message)
        console.log(res.message)
        router.push('/401')
        break
    }
  }
}

// 错误处理
function handleError (error) {
  let message = '请求错误'
  if (error.response) {
    switch (error.response.status) {
      case 404:
        let responseURL = error.request.responseURL
        if (responseURL && responseURL.indexOf('/logPage') >= 0) {
          message = '您的会话已过期！！'
          router.push('/logPage')
        } else {
          message = '网络异常'
        }
        break
      case 504:
        message = '充当网关或代理的服务器，未及时从远端服务器获取请求'
        break
      default:
        message = error.response.data
    }
  } else {
    message = error.message
  }
  // Message.error(message)
  console.log(message)
}

// 封装
export default {
  get (url, params = {}) {
    let paramsStr = ''
    Object.keys(params).forEach(key => {
      paramsStr += key + '=' + params[key] + '&'
    })
    // 2.2 过滤最后的&
    if (paramsStr !== '') {
      paramsStr = paramsStr.substr(0, paramsStr.lastIndexOf('&'))
    }
    // 2.3 完整路径
    url += '?' + paramsStr
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then(response => {
          // console.log('===  url: ' + url + ' , code: ' + response.data.code + ' , message: ' + response.data.message + ' , post: ' + qs.stringify(data))
          handleResponse(response)
          resolve(response.data)
        })
        .catch(error => {
          handleError(error)
          reject(error)
        })
    })
  },
  post (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data), {headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}})
        .then(response => {
          // console.log('===  url: ' + url + ' , code: ' + response.data.code + ' , message: ' + response.data.message + ' , post: ' + qs.stringify(data))
          handleResponse(response)
          resolve(response.data)
        })
        .catch(error => {
          handleError(error)
          reject(error)
        })
    })
  },
  postJson (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, {headers: {'Content-Type': 'application/json; charset=UTF-8'}})
        .then(response => {
          console.log('===  url: ' + url + ' , code: ' + response.data.code + ' , message: ' + response.data.message + ' , post: ' + qs.stringify(data))
          handleResponse(response)
          resolve(response.data)
        })
        .catch(error => {
          handleError(error)
          reject(error)
        })
    })
  },
  postFile (url, data) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, {headers: {'Content-Type': 'multipart/form-data; boundary=ABCD'}})
        .then(response => {
          // console.log('===  url: ' + url + ' , code: ' + response.data.code + ' , message: ' + response.data.message + ' , post: ' + qs.stringify(data))
          handleResponse(response)
          resolve(response.data)
        })
        .catch(error => {
          handleError(error)
          reject(error)
        })
    })
  }
}
