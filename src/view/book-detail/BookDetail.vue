<script setup>
import { ArrowRight ,ShoppingCart,Star,CaretTop,CaretBottom} from '@element-plus/icons-vue'
import {ref} from "vue";
import {categories} from "@vueuse/metadata";
const pageNum = ref('')
const pageSize = ref('')
const onCurrentChange = (pageNum) => {

}
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
       comment:[
         {
           rate:'4',
           comment:'都是快绝版的书，很划算',
           commentTime:'2021-03-24 15:28',
           like: '12',
           dislike: '1'
         },
         {
           rate:'4',
           comment:'都是快绝版的书，很划算',
           commentTime:'2021-03-24 15:28',
           like: '12',
           dislike: '1'
         }
       ],
      commentCount: 1,
       category:'动漫/幽默>',
       extra: {
         copyright: {
            ISBN: '9787551151023',
            barcode: '9787551151023 ; 978-7-5511-5102-3',
            Binding:'简裝本',
            numberOfVolumes:'',
            weight:'',
            category:[1,1,1]
         },
         otherMessage:[
           {
              title:'本书特色',
              content: [
                {
                  image:'/src/assets/s6760572.jpg',
                  text:'从道出 “勿生孤寂念，道伴大狸奴”的陆游，到说出“逃离生命迷思的方法有二：音乐和猫”的艾伯特·史怀哲，总有智者告诉我们，养猫乃人生一大幸事！\n' +
                      '从拥有让人吸得欲罢不能魔力的黑猫“鸦片”，曾浪迹公园称霸江湖的女侠“十三”，到活力十足一刻都停不下来的豹猫“千寻”，每位主子都不好伺候：铲屎、陪玩、梳毛、当沙发……\n' +
                      '三只猫，各有各的脾气，只有铲屎官没脾气。三款猫，总有一款能驯服你！ ◎ 豆瓣、微博高人气漫画首次结集成册，当代水墨漫画勾勒蛮趣猫态，逗趣写意戏话喵言喵语\n' +
                      '从做自漫画编辑、公司创始人，到回归个人创作，漫画家雨谷在此期间坚持做着同一件事——画猫。当然，猫奴也是画奴。也是老婆奴、房奴，后来又成了娃奴，五奴俱全。其实，人人生而为奴，谁头上还没有三座大山呢？然而，正所谓“看热闹的不怕事大”，诸多看客催更不打赏，作者的哀号晒在网上，常常引来“哈哈哈太惨了”“哈哈哈哈现实”之类毫无人性、幸灾乐祸的评语。\n' +
                      '如今精选画作结集出版，恳请读者认真欣赏作者“由巧反拙”后的独特水墨画风、多种形式（单幅、条漫、分镜）的艺术尝试和“逸笔草草、漫然而画”的审美追求。\n' +
                      '◎ 精美双封装帧+定制书签，作者dujia生活及创作Q&A\n' +
                      '本书为20开独特开本，方便随时翻阅吸猫。\n' +
                      '外封采用米色云萱纸，打造质朴韵味之余，手感满分，内页柔软细腻，还原水墨质感的同时兼顾图书的阅读体验。\n' +
                      '书末更有dujiaQ&A，带你一窥画作背后的生活闲趣与创作历程。'
                }
              ]
           },
           {
             title:'作者简介',
             content: [
               {
                 image:'',
                 text:'雨谷，1981年出生于哈尔滨，现居北京。爱猫、喜画、供房、娇子，集猫奴、画奴、房奴、娃奴、老婆奴于一身。画插画也画漫画，当过漫画编辑也做过漫画制作公司。现任全职奶爸，偶尔画点儿小漫画，自娱娱人。'
               }
             ]
           }
         ]
       }
    }
)
const addlike = (index)=>{
   book.value.comment[index].like++;
}
const adddislike = (index)=>{
  book.value.comment[index].dislike++;
}
function hasHttpsPrefix(str) {
  const httpsRegex = /^https:\/\//;
  return httpsRegex.test(str);
}
const comment = ref('')
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
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="9">
                      <span class="book-pu">开本：<span style="font-size: 0.875em">{{book.format}}</span></span>
                    </el-col>
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="11">
                      <span class="book-pu">页数：<span style="font-size: 0.875em">{{book.pages}}</span></span>
                    </el-col>
                  </el-row>
                  <el-row style="padding-top: 20px">
                     <el-col>
                       <span class="book-pu"><el-link style="font-size: 0.875em">{{book.category}}销量排行榜</el-link> <span class="book-pu" style="padding-left: 20px"> 第 <span style="color: #E60000;font-size: 15px">{{book.rank}} </span>位</span></span>
                     </el-col>
                  </el-row>
                  <el-row style="padding-top: 20px;" v-if="book.discount!==''">
                      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="5">
                          <span  class="book-pu">优惠价: <span style="color: #E60000;font-size: 20px;padding-left: 10px" >{{book.price}}￥</span></span>
                      </el-col >
                    <el-col :xs="8" :sm="8" :md="8" :lg="9" :xl="11">
                      <span class="book-pu" style="padding-top: 5px">定价：<el-text tag="del" size="small">{{book.originalPrice}}￥</el-text></span>
                    </el-col>
                  </el-row>
                  <el-row v-else style="padding-top: 20px">
                    <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="5">
                      <span class="book-pu" style="padding-top: 5px">定价：<span  style="color: #E60000;font-size: 20px;padding-left: 10px">{{book.originalPrice}}￥</span></span>
                    </el-col>
                  </el-row>
                  <el-row style="padding-top: 20px">
                     <el-col :xs="11" :sm="11" :md="11" :lg="11" :xl="11">
                       <span><el-button type="danger"  size="large"><el-icon><ShoppingCart /></el-icon>加入购物车</el-button></span>
                     <span style="padding-left: 20px"><el-button type="danger" plain><el-icon><Star /></el-icon>收藏</el-button></span>
                     </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
            </el-row>
        </el-header>
        <el-main>
            <el-row>
              <el-col :xs="19" :sm="19" :md="22" :lg="21" :xl="18" :offset="2">
                <el-tabs type="border-card" class="demo-tabs">
                  <el-tab-pane label="图书信息">
                     <el-row style="margin-top: 20px">
                       <el-col>
                         <span style="font-size: 17px;background-color: #F5F5F5;border: #EBEBEB 1px solid">{{book.name}}&nbsp 版权信息</span>
                       </el-col>
                     </el-row>
                    <el-row style="padding-top: 20px">
                       <el-col>
                         <el-descriptions>
                           <el-descriptions-item label="ISBN:">{{book.extra.copyright.ISBN}}</el-descriptions-item>
                           <el-descriptions-item label="条形码：">{{book.extra.copyright.barcode}}</el-descriptions-item>
                           <el-descriptions-item label="装帧：">{{book.extra.copyright.Binding}}</el-descriptions-item>
                           <el-descriptions-item label="册数：">
                             <span v-if="book.extra.copyright.numberOfVolumes === ''">暂无</span>
                             <span v-else>{{book.extra.copyright.numberOfVolumes}}</span>
                           </el-descriptions-item>
                           <el-descriptions-item label="重量：">
                             <span v-if="book.extra.copyright.weight === ''">暂无</span>
                             <span v-else>{{book.extra.copyright.weight}}</span>
                           </el-descriptions-item>
                           <el-descriptions-item label="所属分类：">
                              <span v-for="category in book.extra.copyright.category">
                                <el-link>{{category}}</el-link>&nbsp
                              </span>
                           </el-descriptions-item>
                         </el-descriptions>
                       </el-col>
                    </el-row>
                    <el-row style="margin-top: 30px" v-for="otherMessage in book.extra.otherMessage">
                      <el-row style="margin-top: 20px">
                        <el-col>
                          <span style="font-size: 17px;background-color: #F5F5F5;border: #EBEBEB 1px solid">{{book.name}}&nbsp;{{otherMessage.title}}</span>
                        </el-col>
                      </el-row>
                      <el-row v-for="content in otherMessage.content" style="margin-top: 20px">
                          <el-col v-if="content.image!==''">
                              <el-image :src="content.image"></el-image>
                          </el-col>
                          <el-col v-if="content.text!==''">
                               <span>{{content.text}}</span>
                          </el-col>
                      </el-row>
                    </el-row>
                  </el-tab-pane>
                  <el-tab-pane label="评论">
                     <el-row>
                       <el-col :span="24" style="background-color: #F5F5F5;border: #EBEBEB 1px solid">
                         <span class="comment-a">商品评论({{book.commentCount}}条)</span>
                       </el-col>
                     </el-row>
                       <el-row style="margin-top: 10px">
                          <el-col :offset="4">
                            <el-input
                                v-model="comment"
                                style="width: 60%;margin-left: 10px"
                                autosize
                                type="textarea"
                                placeholder="输入你的评论"
                                maxlength="200"
                                show-word-limit
                            />
                          </el-col>
                       </el-row>
                      <el-row style="margin-top: 30px">
                          <el-col v-for="(comment,index) in book.comment" :span="24">
                            <el-row>
                              <span>
                                 <el-rate
                                     v-model="comment.rate"
                                     :texts="['差评', '有点失望', '普通', '很好的作品', '神作']"
                                     show-text
                                     show-score
                                     disabled
                                 ></el-rate>
                              </span>
                            </el-row>
                            <el-row style="margin-top: 10px;margin-left:20px">
                               {{comment.comment}}
                            </el-row>
                            <el-row style="margin-top: 10px;margin-left:20px">
                               <el-col :span="4">
                                   {{comment.commentTime}}
                               </el-col>
                              <el-col :offset="15" :span="5">
                                   <el-button type="danger" plain @click="addlike(index)"><el-icon><CaretTop /></el-icon> {{comment.like}}</el-button>
                                   <el-button type="danger" plain @click="adddislike(index)"><el-icon><CaretBottom /></el-icon>{{comment.dislike}}</el-button>
                              </el-col>
                            </el-row>
                            <el-row>
                              <el-col :span="24">
                                  <el-divider></el-divider>
                              </el-col>
                            </el-row>
                          </el-col>
                      </el-row>
                       <el-row justify="center">
                         <el-col :span="12">
                           <el-pagination background layout="total, prev, pager, next , jumper" :total="1000"  class="el-pagination"
                                          v-model:current-page="pageNum" v-model:page-size="pageSize"
                                          @current-change="onCurrentChange"/>
                         </el-col>
                       </el-row>
                  </el-tab-pane>
                </el-tabs>
              </el-col>
            </el-row>
        </el-main>
      </el-container>
    </div>
</template>

<style scoped>
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
.comment-a{
  font-family: 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', serif;
  font-style: italic;
  font-size: 24px;color: black;
  font-weight: bold;
}
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
.demo-tabs :deep(.el-tabs__item.is-active) {
  color: #E60000; /* 设置选中标签的文字颜色 */
  font-weight: bold; /* 设置选中标签的文字加粗 */
  font-size: 1.1em; /* 设置选中标签的文字大小 */
}

.demo-tabs :deep(.el-tabs__item:hover) {
  color: #E60000 !important; /* 设置鼠标悬停时标签的文字颜色 */
  font-weight: bold; /* 设置选中标签的文字加粗 */
  font-size: 1.1em; /* 设置选中标签的文字大小 */
}

.demo-tabs :deep(.el-tabs__active-bar) {
  background-color: #E60000; /* 设置选中标签的底部激活条颜色 */
}
.demo-tabs .my-tabs-label .el-icon {
  vertical-align: middle;
}
.demo-tabs .my-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>