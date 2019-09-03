import axios from '@/axios/axios'

export function getTableData(obj){
  return axios({
    method:'post',
    url:'/common/getTableData',
    data:obj
  })
}
