<script setup>
import {ref} from "vue";
import {ArrowRight, DCaret,CaretTop,CaretBottom} from "@element-plus/icons-vue";
const activeName = ref('1');
import searchResult from "@/components/SearchResultComponent.vue"
import {usePageNumStore} from "@/stores/searchResultPageNum.js";
import {searchService, searchSortService} from "@/api/User.js";
import {useSearchMessageStore} from "@/stores/searchMessage.js";
import {useSearchPageStore} from "@/stores/searchResultPage.js";
import router from "@/router/index.js";
const changer = (times)=>{
    if(times===3){
        return 1
    }
    return times;
}
const time = ref([0,0,0,0,0])
const defu= ref([true,true,true,true,true])
const click = (tab) => {
    if(tab.index == 0){
      onCurrentChange(1)
    }else if(tab.index==1){
      defu.value[1] = false;
      time.value[1]++
      time.value[1]= changer(time.value[1])
      tabChange(1,1,time.value[1])
    }else if(tab.index==2){
      defu.value[2] = false;
      time.value[2]++
      time.value[2]= changer(time.value[2])
      tabChange(1,2,time.value[2])
    }else if(tab.index==3){
      defu.value[3] = false;
      time.value[3]++
      time.value[3]= changer(time.value[3])
      tabChange(1,3,time.value[3])
    }else if(tab.index==4){
      defu.value[4] = false;
      time.value[4]++
      time.value[4]= changer(time.value[4])
      tabChange(1,4,time.value[4])
    }
}
const change = (tab) => {
   time.value[tab-1] = 1;
   defu.value = [true,true,true,true,true];
   defu.value[tab-1] = false;
}
const books = ref([
  {
    image:'/src/assets/s8084988.jpg',
    name:'世界尽头的咖啡馆',
    author:'[美] 约翰·史崔勒基 著，万洁 译',
    publishTime:'2018-07-01',
    publisher:'天津人民出版社',
    price:'22.3',
    discount:'4',
    originalPrice:'43',
    detail:'世界上大多数人都没活明白！ 　　到底要不要辞职？要挣钱还是要做喜欢的事？做了喜欢的事又怎么养家？…… 　　你也许正在纠结这些问题，也许已经做出了选择。这本书围绕着三个关于人生的重大问题，带你看清迷茫的本质，做出积极的选择。不管你正在经历迷茫，还是已经重整旗鼓继续前进，这本书都将指引你走向更优质的生活...',
  },
  {
    image:'/src/assets/s8084988.jpg',
    name:'世界尽头的咖啡馆',
    author:'[美] 约翰·史崔勒基 著，万洁 译',
    publishTime:'2018-07-01',
    publisher:'天津人民出版社',
    price:'22.3',
    discount:'4',
    originalPrice:'43',
    detail:'世界上大多数人都没活明白！ 　　到底要不要辞职？要挣钱还是要做喜欢的事？做了喜欢的事又怎么养家？…… 　　你也许正在纠结这些问题，也许已经做出了选择。这本书围绕着三个关于人生的重大问题，带你看清迷茫的本质，做出积极的选择。不管你正在经历迷茫，还是已经重整旗鼓继续前进，这本书都将指引你走向更优质的生活...',
  },

  {
    image:'/src/assets/s8084988.jpg',
    name:'世界尽头的咖啡馆',
    author:'[美] 约翰·史崔勒基 著，万洁 译',
    publishTime:'2018-07-01',
    publisher:'天津人民出版社',
    price:'22.3',
    discount:'4',
    originalPrice:'43',
    detail:'世界上大多数人都没活明白！ 　　到底要不要辞职？要挣钱还是要做喜欢的事？做了喜欢的事又怎么养家？…… 　　你也许正在纠结这些问题，也许已经做出了选择。这本书围绕着三个关于人生的重大问题，带你看清迷茫的本质，做出积极的选择。不管你正在经历迷茫，还是已经重整旗鼓继续前进，这本书都将指引你走向更优质的生活...',
  }
])

const onCurrentChange = async (number) => {
     const messageStore =  useSearchMessageStore()
     const pageNumStore = usePageNumStore()
     const pageStore = useSearchPageStore()
        pageNumStore.setPageNum({
              cPageNum:number,
              total:pageNumStore.pageNum.total
        })
     const result  = await searchService(messageStore.message.message,messageStore.message.mode,number)
      pageStore.setPage(result.data.books)
      pageNumStore.setPageNum({
           total:result.data.total,
           cPageNum:number
      })
}
const tabChange = async(pageNum,index,sort)=>{
  loading.value = true;
  const messageStore =  useSearchMessageStore()
  const pageNumStore = usePageNumStore()
  const pageStore = useSearchPageStore()
  pageNumStore.setPageNum({
    cPageNum:pageNum,
    total:pageNumStore.pageNum.total
  })
  const result  = await searchSortService(messageStore.message.message,messageStore.message.mode,pageNum,index,sort)
  pageStore.setPage(result.data.books)
  pageNumStore.setPageNum({
    total:result.data.total,
    cPageNum:pageNum
  })
  loading.value = false;
}

const pageNumStore = usePageNumStore()
const pageStore = useSearchPageStore()
const loading = ref(false)
router.push("/search")
</script>


<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-breadcrumb :separator-icon="ArrowRight">
          <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
          <el-breadcrumb-item>promotion management</el-breadcrumb-item>
          <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <el-tabs
            v-model="activeName"
            type="card"
            class="demo-tabs"
            @tab-click="click"
            @tab-change="change"
        >
          <el-tab-pane label="销量" name="1"
                       v-loading.fullscreen.lock="loading" element-loading-text="加载中... 遇到错误请刷新" element-loading-background="rgba(122, 122, 122, 0.8)"
                       element-loading-spinner="<i class='el-icon-loading' style='color: #fff;'></i>">
              <searchResult :books="pageStore.page" :onCurrentChange="onCurrentChange" :page-num="pageNumStore.pageNum"/>
          </el-tab-pane>
          <el-tab-pane name="2"
                       v-loading.fullscreen.lock="loading" element-loading-text="加载中... 遇到错误请刷新" element-loading-background="rgba(122, 122, 122, 0.8)"
                       element-loading-spinner="<i class='el-icon-loading' style='color: #fff;'></i>">
            <template #label>
                 <span>定价</span>
                 <span style="margin-top: 5px"><el-icon>
                   <DCaret v-if="defu[1]" />
                 <CaretTop v-else-if="time[1]===1"/>
                   <CaretBottom v-else-if="time[1]===2"/>
                 </el-icon></span>
            </template>
            <searchResult :books="pageStore.page" :onCurrentChange="onCurrentChange" :page-num="pageNumStore.pageNum"/>
          </el-tab-pane>
          <el-tab-pane name="3"
                       v-loading.fullscreen.lock="loading" element-loading-text="加载中... 遇到错误请刷新" element-loading-background="rgba(122, 122, 122, 0.8)"
                       element-loading-spinner="<i class='el-icon-loading' style='color: #fff;'></i>">
            <template #label>
                <span>折扣</span>
                <span style="margin-top: 5px"><el-icon> <DCaret v-if="defu[2]" />
                 <CaretTop v-else-if="time[2]===1"/>
                   <CaretBottom v-else-if="time[2]===2"/></el-icon></span>
            </template>
            <searchResult :books="pageStore.page" :onCurrentChange="onCurrentChange" :page-num="pageNumStore.pageNum"/>
          </el-tab-pane>
          <el-tab-pane name="4"
                       v-loading.fullscreen.lock="loading" element-loading-text="加载中... 遇到错误请刷新" element-loading-background="rgba(122, 122, 122, 0.8)"
                       element-loading-spinner="<i class='el-icon-loading' style='color: #fff;'></i>">
            <template #label>
               <span>售价</span>
              <span style="margin-top: 5px"><el-icon> <DCaret v-if="defu[3]" />
                 <CaretTop v-else-if="time[3]===1"/>
                   <CaretBottom v-else-if="time[3]===2"/></el-icon></span>
            </template>
            <searchResult :books="pageStore.page" :onCurrentChange="onCurrentChange" :page-num="pageNumStore.pageNum"/>
          </el-tab-pane>
          <el-tab-pane name="5"
                       v-loading.fullscreen.lock="loading" element-loading-text="加载中... 遇到错误请刷新" element-loading-background="rgba(122, 122, 122, 0.8)"
                       element-loading-spinner="<i class='el-icon-loading' style='color: #fff;'></i>">
            <template #label>
                <span>上架时间</span>
               <span style="margin-top: 5px"><el-icon> <DCaret v-if="defu[4]" />
                 <CaretTop v-else-if="time[4]===1"/>
                   <CaretBottom v-else-if="time[4]===2"/></el-icon></span>
            </template>
              <searchResult :books="pageStore.page" :onCurrentChange="onCurrentChange" :page-num="pageNumStore.pageNum"/>
          </el-tab-pane>
        </el-tabs>
</el-main>
    </el-container>
  </div>
</template>

<style scoped>
.demo-tabs :deep(.el-tabs__item.is-active) {
  color: white; /* 设置选中标签的文字颜色 */
  font-weight: bold; /* 设置选中标签的文字加粗 */
  font-size: 1.05em; /* 设置选中标签的文字大小 */
  background: #E60000;
}
.demo-tabs :deep(.el-tabs__item:hover) {
  color: #E60000 !important; /* 设置鼠标悬停时标签的文字颜色 */
  font-weight: bold; /* 设置选中标签的文字加粗 */
  font-size: 1.05em; /* 设置选中标签的文字大小 */
}
.demo-tabs :deep(.el-tabs__item.is-active:hover) {
  color: white !important; /* 设置选中时悬停的标签的文字颜色为白色 */
  font-weight: bold;
  font-size: 1.05em;
}

</style>