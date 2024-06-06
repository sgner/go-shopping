import request from "@/utils/request.js"

export const recommendService = (pageNum) => {
    return request.get("/system/recommend/"+pageNum)
}
export const bookDetailService= (bookId) => {
    return request.get("/system/book/detail/"+bookId)
}