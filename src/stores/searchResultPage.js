import {defineStore} from "pinia";
import {ref} from 'vue'

export const useSearchPageStore = defineStore('searchPage',()=>{
        const page = ref([{
            image:'',
            name:'',
            author:'',
            publishedDate:'',
            publisher:'',
            price:'',
            discount:'',
            originalPrice:'',
            detail:''
        }])
        const setPage = (newPage) =>{
            page.value = newPage
        }
        return {
            page,setPage
        }
    },
    {
        persist:true
    })