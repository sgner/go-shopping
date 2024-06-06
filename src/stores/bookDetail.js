import {defineStore} from "pinia";
import {ref} from 'vue'

export const useBookDetailStore = defineStore('bookDetail',()=>{
        const bookDetail = ref({

        })
        const setBookDetail = (detail) =>{
            bookDetail.value = detail
        }
        return {
            bookDetail,
            setBookDetail
        }
    },
    {
        persist:true
    })