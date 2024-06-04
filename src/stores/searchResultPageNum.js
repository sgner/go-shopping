import {defineStore} from "pinia";
import {ref} from 'vue'

export const usePageNumStore = defineStore('pageNum',()=>{
        const pageNum = ref({
            cPageNum:'',
            total:''
        })
        const setPageNum = (num) =>{
              pageNum.value = num
        }
        return {
            pageNum,setPageNum
        }
    },
    {
        persist:true
    })