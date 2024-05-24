import main from "@/view/main.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import home from "@/view/home/home.vue";
import book_detail from "@/view/book-detail/bookDetail.vue";
const routes = [
    {path:'/',component:main,
        children: [
            {path: '/home',component:home},
            {path: '/book/book-detail',component: book_detail}
        ]}
]
const router = createRouter({
    history:createWebHashHistory(),
    routes: routes
})

export default router;