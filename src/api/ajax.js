/* 向外暴露ajax--AXIOS模块
* 返回值为promise（异步返回数据是response.data）
* 这里解析出response中的数据，简化了外部调用
* */
import axios from 'axios'
export default function  ajax(url,data={ },type='GET') {

  return new Promise(function (resolve,reject) {
   //执行一步ajax请求
    let promise
    if(type ==='GET') {
      //准备url query 参数数据
      let dataStr = ''
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if(dataStr !== '') {
        dataStr = dataStr.substring(0,dataStr.lastIndexOf('&'))
        url = url + '?' +dataStr
        //发送get请求
        promise = axios.get(url)
      } else {
        //发送post请求
        promise = axios.post(url)
      }
      return promise
    }
   promise.then(function (response) {
     //成功调用resolve()
     resolve(response.data)
   })
     .catch(function (error) {
       //失败调用rejiect()
      reject(error)
     })

  })
  }
