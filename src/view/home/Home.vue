<script setup>
  import {Discount,Star,DocumentAdd,Comment,Pointer} from '@element-plus/icons-vue';
  import {ref} from "vue";
  import discountsCommon from "@/components/discountsCommon.vue";
  import {longTermEventService} from "@/api/Event.js";
  import {bookDetailService, recommendService} from "@/api/System.js";
  import {useBookDetailStore} from "@/stores/bookDetail.js";
  import router from "@/router/index.js";
  const screenWidth = ref(window.innerWidth*0.65)
  const screenHeight = ref(screenWidth.value*0.2)
  window.onresize = () => {
      screenWidth.value = window.innerWidth*0.65
      screenHeight.value = screenWidth.value*0.2
  };
  const new_discounts = ref({
     head: {
       id:'',
       image: '/src/assets/s5920153.jpg',
       describe: '从来如此便对么鲁迅锦言录/豆瓣8.0分，比语录完整，比文章简明',
       price: '13.5',
       originalPrice: '49.8',
       detail: '所谓锦言录，借一斑略知全豹，以一目尽传精神。鲁迅先生系列作品菁华摘选，当代著名学者、鲁迅研究专家陈漱渝积半个世纪研究之功，精心勾稽而成，一本书带你深读鲁迅。',
       discount: '9',
       rete:'4.5',
       commentCount:'100'
     },
     body: [
       {
         id:'',
         image:'/src/assets/s6760572.jpg',
         describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
         originalPrice: '32.0',
         price: '8.0',
         discount: '9',
       },
       {
         id:'',
         image:'/src/assets/s6760572.jpg',
         describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
         originalPrice: '32.0',
         price: '8.0',
         discount: '9',
       },
       {
         id:'',
         image:'/src/assets/s6760572.jpg',
         describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
         originalPrice: '32.0',
         price: '8.0',
         discount: '9',
       },
       {
         id:'',
         image:'/src/assets/s6760572.jpg',
         describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
         originalPrice: '32.0',
         price: '8.0',
         discount: '9',
       }
     ]
  })
  const this_week = ref({
    head: {
      id:'',
      image: '/src/assets/s8570133.jpg',
      describe: '生而为奴/“猫奴”日常，当代水墨漫画勾勒逗趣猫态',
      price: '22.4',
      originalPrice: '68.0',
      detail: '“文艺的桌子上怎么能没有猫呢？”猫奴、房奴、孩奴……豆瓣人气作者的“为奴”日常。独特水墨漫画，写意猫生百态，超150幅奇思喵想，绘遍铲屎官的喜怒哀乐！',
      discount: '9',
      rete:'4.5',
      commentCount:'100'
    },
    body: [
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      }
    ]
  })
  const new_book = ref({
    head: {
      id:'',
      image: '/src/assets/s9065294.jpg',
      describe: '牛 初版四十周年纪念版/豆瓣8.1分，初版四十周年首次引进',
      price: '13.9',
      originalPrice: '42.0',
      detail: '后浪华语文学系列，香港作家吴煦斌的作品既有超越性别的形而上高度，而落笔又有女性的细腻，处处召唤着对生命的热爱与信仰。全书收录11篇小说，多以自然与人的关系为主题，充满灵性。',
      discount: '9',
      rete:'4.5',
      commentCount:'100'
    },
    body: [
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      }
    ]
  })
  const reader_hot = ref({
    head: {
      id:'',
      image: '/src/assets/s8240024.jpg',
      describe: '我的心曾悲伤七次/豆瓣8.6分，纪伯伦诗集，冰心翻译',
      price: '5.3',
      originalPrice: '25.0',
      detail: '收录了黎巴嫩诗人纪伯伦关于生命、艺术、爱情、人生的诗集。这是世间最纯澄美好的文字，每一字，每一句，对生命的透彻感悟，跃然纸上，直视诗人的灵魂，他阅尽世事，仍像孩子般天真。',
      discount: '9',
      rete:'4.5',
      commentCount:'100'
    },
    body: [
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
        id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
          id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      },
      {
          id:'',
        image:'/src/assets/s6760572.jpg',
        describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
        originalPrice: '32.0',
        price: '8.0',
        discount: '9',
      }
    ]
  })
  const recommends = ref( [
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
    {
      id:'',
      image:'/src/assets/s6760572.jpg',
      describe: '我是一只骆驼/豆瓣8.4分，王小波杂文精选集',
      originalPrice: '32.0',
      price: '8.0',
      discount: '9',
    },
  ])
  const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
  const  tab_pane= {
  }
  function convert1dTo2d(arr, colCount) {
    const result = [];
    for (let i = 0; i < Math.ceil(arr.length / colCount); i++) {
      result[i] = arr.slice(i * colCount, (i + 1) * colCount);
    }
    return result;
  }
recommends.value = convert1dTo2d(recommends.value, 5)

  const pageSize=ref(15)
  const pageNum = ref(1)
  const onCurrentChange = async ()=>{
          await recommendBook(pageNum.value)
  }
  const longTermEvent = async (id)=>{
       const result = await longTermEventService(id)
        if(id===1){
          new_discounts.value = result.data
        }else if(id===2){
          this_week.value = result.data
        }else if(id===3){
          new_book.value = result.data
        }else{
          reader_hot.value = result.data
        }
  }
  longTermEvent(1)
const total = ref(1)
  const recommendBook = async ()=>{
      const result = await recommendService(pageNum.value)
        recommends.value = convert1dTo2d(result.data.recommendBookVO, 5)
        total.value = result.data.total
  }

  recommendBook()
  const toDetail = async (id)=>{
    const bookDetailStore = useBookDetailStore()
    const result = await bookDetailService(id)
    bookDetailStore.setBookDetail(result.data)
    router.push("/book/book-detail")
  }
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header style="height: auto;">
          <el-row> <el-col :offset="3" :xs="20" :sm="20" :md="20" :lg="19" :xl="16">
            <el-carousel :interval="4000" type="card" :height="screenHeight" :style="{ width: `${screenWidth}px`}" class="el-carousel">
            <el-carousel-item>
              <el-image src="/src/assets/acitvit (1).jpg"></el-image>
            </el-carousel-item>
            <el-carousel-item>
              <el-image src="/src/assets/acitvit (2).jpg"></el-image>
            </el-carousel-item>
            <el-carousel-item>
              <el-image src="/src/assets/acitvit (3).jpg"></el-image>
            </el-carousel-item>
          </el-carousel>
            </el-col>
          </el-row>
        </el-header>
        <el-main style="height: auto ; min-width: 80em">
           <el-row>
             <el-col class="Value-added-services" :offset="4" :xs="19" :sm="18" :md="18" :lg="17" :xl="16">
               <el-tabs type="border-card" class="demo-tabs" style="border: #E60000 solid 1px;">
                   <el-tab-pane>
                     <template #label>
                       <span class="my-tabs-label"  @click="longTermEvent(1)">
                         <el-icon><el-icon><Discount /></el-icon></el-icon>
                         <span>新品特惠</span>
                       </span>
                     </template>
                     <discountsCommon :body="new_discounts.body" :head="new_discounts.head"></discountsCommon>
                   </el-tab-pane>
                   <el-tab-pane >
                     <template #label>
                       <span class="my-tabs-label" @click="longTermEvent(2)">
                         <el-icon><el-icon><el-icon><Star /></el-icon></el-icon></el-icon>
                         <span>本周精选</span>
                       </span>
                     </template>
                      <discountsCommon :body="this_week.body" :head="this_week.head"></discountsCommon>
                   </el-tab-pane>
                   <el-tab-pane>
                     <template #label>
                       <span class="my-tabs-label" @click="longTermEvent(3)">
                         <el-icon><el-icon><el-icon><el-icon><DocumentAdd /></el-icon></el-icon></el-icon></el-icon>
                         <span>新书速递</span>
                       </span>
                     </template>
                     <discountsCommon :body="new_book.body" :head="new_book.head"></discountsCommon>
                   </el-tab-pane>
                   <el-tab-pane>
                     <template #label>
                       <span class="my-tabs-label" @click="longTermEvent(4)">
                         <el-icon><el-icon><el-icon><el-icon><el-icon><Comment /></el-icon></el-icon></el-icon></el-icon></el-icon>
                         <span>读者热评</span>
                       </span>
                     </template>
                     <discountsCommon :body="reader_hot.body" :head="reader_hot.head"></discountsCommon>
                   </el-tab-pane>
                 </el-tabs>
             </el-col>
           </el-row>
          <el-row style="padding-top: 2em">
              <el-row>
                <el-col :span="24">
                  <span class="recommend"><el-icon><Pointer /></el-icon> 为您推荐</span>
                </el-col>
              </el-row>
          </el-row>
          <el-divider style="border-color: #E60000;border-width: 10px;width: 100%"/>
          <el-row>
             <el-col :span="21" :offset="3">
               <el-row v-for="books in recommends">
                 <el-col :span="3" v-for="book in books" :offset="1">
                   <el-badge :value="book.discount+'折'" class="item">
                     <el-image :src="book.image" style="cursor: pointer" @click="toDetail(book.id)"></el-image>
                   </el-badge>
                   <div style="font-size: 0.9em;" @click="toDetail(book.id)"><el-link type="info" :underline="false" style="font-size: 0.9em" class="el-link">{{ book.describe }}</el-link></div>
                   <span>
                <span style="color: red">{{ book.price }}￥</span>
                <span style="padding-left: 0.8em"><el-text tag="del" type="info" size="small">{{ book.originalPrice }}￥</el-text></span>
                </span>
                 </el-col>
               </el-row>
             </el-col>
          </el-row>
          <el-row justify="center">
            <el-col :span="10" :offset="5">
              <el-pagination background layout="total, prev, pager, next , jumper" :total="total"  class="el-pagination"
                             v-model:current-page="pageNum" v-model:page-size="pageSize"
                             @current-change="onCurrentChange"/>
            </el-col>
          </el-row>
        </el-main>

      </el-container>
    </div>
</template>

<style scoped>
.el-link{
  color: #0d1117;
}
.el-link:hover{
  color: #E60000;
}
.recommend{
  color: #ff9675;
  font-size: 1.4em ;
  font-family: 'Palatino', 'Palatino Linotype', 'Palatino LT STD', 'Book Antiqua', serif;
  font-style: italic;
  font-weight: bold
}
.el-carousel__item h3 {
  color: white;
  opacity: 0.75;
  margin: 0;
  text-align: center;
}
.Value-added-services{
   background-color: #F2F2F2;
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
  border-color: #E60000; /* 设置选中标签的底部激活条颜色 */
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

:deep .el-pagination .btn-prev,
:deep .el-pagination .btn-next {
  background-color:  white !important;
  color: #E60000 !important;
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
.el-carousel :deep(.el-carousel__indicators li button){
  height: 4px;
  width: 4.25em;
  color:white;
  background-color: #E60000;
}
.el-carousel{
  min-width: 70em;
}
</style>