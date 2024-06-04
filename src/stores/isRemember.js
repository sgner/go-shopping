import {defineStore} from "pinia";
import {ref} from 'vue'

export const useRememberStore = defineStore('isRemember',()=>{
        const isRemember = ref('')
        const setIsRemember = (newStatus) =>{
            isRemember.value = newStatus
        }
        return {
            isRemember,
            setIsRemember
        }
    },
    {
        persist:true
    })