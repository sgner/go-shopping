import request from "@/utils/request.js"
export const longTermEventService =(id)=>{
      return request.get('/events/long-term/'+id)
}