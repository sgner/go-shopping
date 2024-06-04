import {defineStore} from "pinia";
import {ref} from 'vue'

export const useSearchMessageStore = defineStore('searchMessage',()=>{
        const message = ref({
            message:'',
            mode:''
        })
        const setMessage = (newMessage) =>{
            message.value = newMessage
        }
        return {
            message,
            setMessage
        }
    },
)