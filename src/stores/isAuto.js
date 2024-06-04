import {defineStore} from "pinia";
import {ref} from 'vue'

export const useAutoStore = defineStore('isAuto',()=>{
        const isAuto = ref('')
        const setIsAuto = (newStatus) =>{
            isAuto.value = newStatus
        }
        return {
            isAuto,
            setIsAuto
        }
    },
    {
        persist:true
    })