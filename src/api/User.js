import request from "@/utils/request.js"

export const loginService = (loginData)=>{
    return request.post("user/login",loginData,{
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const recoverService = ()=>{
    return request.get("user/recover")
}
export const registerService = (registerData)=>{
    return request.post("user/register",registerData)
}

export const autoLoginService = ()=>{
    return request.get("user/autoLogin")
}

export const logoutService = ()=>{
    return request.get("user/logout")
}

export const searchService = (message,mode,pageNum)=>{
    return request.get("user/search/"+mode+"/"+pageNum,{params:{"message":message}})
}
