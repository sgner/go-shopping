import main from "@/view/Main.vue";
import {createRouter, createWebHashHistory} from "vue-router";
import home from "@/view/home/Home.vue";
import book_detail from "@/view/book-detail/BookDetail.vue";
import search from "@/view/searchResult/SearchResult.vue";
import shoppingcar from "@/view/shoopingcar/shoppingcar.vue";
const routes = [
    {path:'/',component:main,
        children: [
            {path: '/home',component:home},
            {path: '/book/book-detail',component: book_detail},
            {path: '/search',component: search},
            {path:'/shoppingCar',component: shoppingcar}
        ]}
]
const router = createRouter({
    history:createWebHashHistory(),
    routes: routes
})

export default router;