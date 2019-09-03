import {getTableData} from '@/api/index'

const table = {
  namespaced:true,

  actions:{
    getTableData({commit},obj){
      return new Promise((resolve, reject) => {
        getTableData(obj).then(response => {
          resolve(response)
        }).catch(err => {
          reject(err)
          console.log(err)
        })
      })
    }
  }
}
export default table
