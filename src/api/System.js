import request from "@/utils/request.js"

export const recommendService = (pageNum) => {
    return request.get("/system/recommend/"+pageNum)
}
