<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import {ref} from "vue";
import {categories} from "@vueuse/metadata";
const imageList = ref(['/src/assets/s8570133.jpg'])
const book = ref(
    {
       name:'生而为奴',
       detail: '“文艺的桌子上怎么能没有猫呢？”猫奴、房奴、孩奴……豆瓣人气作者的“为奴”日常，独特水墨妙趣写意猫生百态，超150幅奇思喵想，绘遍铲屎官的喜怒哀乐！',
       author: '雨谷',
       publisher:'花山文艺出版社',
       publishedDate: '2020-10-01',
       price: '22.4',
       image:'/src/assets/s8570133.jpg',
       discount:'3.0',
       originalPrice:'68.0',
       pages:'156',
       format: '20开',
       rank: '42',
       id:'',
       category:'动漫/幽默>'
    }
)
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header style="height: auto">
          <el-row>
            <el-col :span="15" :offset="1">
              <el-breadcrumb :separator-icon="ArrowRight">
                <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
          </el-row>


          <el-row style="padding-top: 1.925em">
            <el-col :span="24">
              <el-row justify="center">
                <el-col  :xs="9" :sm="10" :md="10" :lg="8" :xl="5" :offset="2">
                  <el-image style="width: 16.75em; border: #DBDBDB 1px solid" :src="book.image" fit="scale-down" :preview-src-list="imageList" hide-on-click-modal></el-image>
                </el-col>
                <el-col :span="14" >

                  <el-row>
                    <el-col>
                      <span class="book-name">
                        {{book.name}}
                      </span>
                    </el-col>
                  </el-row>

                  <el-row style="padding-top: 0.675em">
                    <el-col :xs="9" :sm="9" :md="9" :lg="9" :xl="11" style="min-width: 38em">
                      <span class="book-detail">
                        {{book.detail}}
                      </span>
                    </el-col>
                  </el-row>
                  <div style="padding-top: 20px">
                    <span class="book-pu">作者：<el-link style="font-size: 0.875em">{{book.author}}</el-link></span>&nbsp;&nbsp;
                  </div>
                  <el-row>
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="9"><span class="book-pu">出版社：<el-link style="font-size: 0.875em">{{book.publisher}}</el-link>&nbsp;&nbsp;</span></el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="9"><span class="book-pu">出版时间：<span style="font-size: 0.875em">{{book.publishedDate}}</span></span></el-col>
                  </el-row>
                  <el-row style="padding-top: 0.925em">
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="11">
                      <span class="book-pu">开本：<span style="font-size: 0.875em">{{book.format}}</span></span>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="11">
                      <span class="book-pu">页数：<span style="font-size: 0.875em">{{book.pages}}</span></span>
                    </el-col>
                  </el-row>
                  <el-row style="padding-top: 20px">
                     <el-col>
                       <span class="book-pu"><el-link style="font-size: 0.875em">{{book.category}}销量排行榜</el-link> <span class="book-pu" style="padding-left: 20px"> 第 <span style="color: #E60000">{{book.rank}} </span>位</span></span>
                     </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
            </el-row>
        </el-header>
        <el-main>Main</el-main>
      </el-container>
    </div>
</template>

<style scoped>
:deep(.el-breadcrumb__item:hover .el-breadcrumb__inner,
.el-breadcrumb__item:hover .el-breadcrumb__inner a){
  color: #E60000; /* 将悬停时的颜色设置为蓝色 */
}
.book-name{
  font-size:1.25em;
  font-weight: bold;
}
.book-detail{
   color: #E60000;
   padding-top: 0.675em;
   font-size: 0.8125em;
   font-family:"SimSun", "宋体", serif;
}
.book-pu{
  font-size: 0.8125em;display: flex;align-items: center
}
</style>