<script setup>

import {ShoppingCart, Star} from "@element-plus/icons-vue";
import {bookDetailService} from "@/api/System.js";
import {useBookDetailStore} from "@/stores/bookDetail.js";
import router from "@/router/index.js";
import {searchService} from "@/api/User.js";
import {useSearchPageStore} from "@/stores/searchResultPage.js";
import {useSearchMessageStore} from "@/stores/searchMessage.js";
import {usePageNumStore} from "@/stores/searchResultPageNum.js";
defineProps({
  books: {
    type: Object,
    required: true
  },
      onCurrentChange:{
       type: Function,
        required: true
      },
  pageNum: {
    type:  Object,
    required: true
  }
}
)
const toDetail = async (id)=>{
     const bookDetailStore = useBookDetailStore()
     const result = await bookDetailService(id)
     bookDetailStore.setBookDetail(result.data)
     router.push("/book/book-detail")
}
const search = async (message,mode)=>{
  const pageNumStore = usePageNumStore()
  const pageStore = useSearchPageStore()
  pageNumStore.setPageNum({
    cPageNum:1,
    total:pageNumStore.pageNum.total
  })
  const result  = await searchService(message,mode,1)
  pageStore.setPage(result.data.books)
  pageNumStore.setPageNum({
    total:result.data.total,
    cPageNum:1
  })
  router.push("/search")
}
</script>

<template>
  <el-row v-for="book in books" v-if="books.length>0">
    <el-col>
      <el-row>
        <el-col :xs="7" :sm="7" :md="8" :lg="6" :xl="5" :offset="2">
          <el-image :src="book.image" style="min-width: 200px;cursor: pointer" @click="toDetail(book.id)"></el-image>
        </el-col>
        <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
          <el-row>
            <el-col><span class="link" style="cursor:pointer" @click="toDetail(book.id)">{{book.name}}</span></el-col>
          </el-row>
          <el-row style="margin-top: 10px">
            <el-col><span style="color: #9BA6B2"><el-link type="info" @click="search(book.author,1)">{{book.author}}</el-link>&nbsp;/{{book.publishedDate}}&nbsp;/<el-link type="info" @click="search(book.publisher,3)">{{book.publisher}}</el-link></span></el-col>
          </el-row>
          <el-row style="margin-top: 10px">
            <el-col :span="8">
              <span style="color: #E60000 ;font-size: 20px">{{book.price}} ￥<span style="color: gray;font-size: 15px">&nbsp;({{book.discount}}折) </span> </span>
            </el-col>
            <el-col :span="5" style="margin-top: 4px">
              <span >定价: <el-text tag="del" size="large">{{book.originalPrice}}</el-text></span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px">
            <el-col>
              <span style="min-width: 90%"> {{book.detail}}</span>
            </el-col>
          </el-row>
          <el-row style="margin-top: 10px">
            <el-col>
              <span><el-button type="danger" ><el-icon><ShoppingCart /></el-icon>加入购物车</el-button></span>
              <span style="padding-left: 20px"><el-button type="danger" plain><el-icon><Star /></el-icon>收藏</el-button></span>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <el-divider/>
    </el-col>
  </el-row>
  <el-row v-else>
    <el-col>
      <el-empty description="没有搜索到相关书籍"/>
    </el-col>
      <el-divider/>
</el-row>
  <el-row justify="center">
    <el-col :span="10">
      <el-pagination background layout="total, prev, pager, next , jumper" :total="pageNum.total"  class="el-pagination"
                     v-model:current-page="pageNum.cPageNum"
                     @current-change="onCurrentChange"/>
    </el-col>
  </el-row>

</template>

<style scoped>
.link{
  color: #0080cc;
}
.link:hover{
  color:#E60000;
}
/* 修改未点击时的数字方块背景颜色 */
:deep .el-pagination .el-pager li:not(.active):not(.disabled):hover {
  background-color:  #E60000 !important;
  color:  white !important;
}
/* 未点击时的数字方块背景颜色 */
:deep .el-pagination .el-pager li:not(.active):not(.disabled) {
  background-color:  white !important;
  color:  #E60000;
}
</style>