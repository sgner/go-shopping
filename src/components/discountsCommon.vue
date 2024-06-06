<!-- DiscountTemplate.vue -->
<template>
  <el-row>
    <el-col :span="5">
      <el-badge :value="head.discount+'折'" class="item"></el-badge>
      <el-image :src="head.image" @click="toDetail(head.id)" style="cursor: pointer"></el-image>
    </el-col>
    <el-col :span="14">
      <div>
        <div class="head-describe" @click="toDetail(head.id)">{{ head.describe }}</div>
        <div class="head-price">
          <span style="color: red;font-size: 19px">{{ head.price }}￥</span>
          <span style="padding-left: 10px"><el-text tag="del" size="large" type="info">{{ head.originalPrice }}￥</el-text></span>
          <span style="padding-left: 15px"> <el-rate v-model="head.rate" :colors="colors" disabled :texts="['差评', '有点失望', '普通', '很好的作品', '神作']" show-text show-score score-template="{value}分" allow-half></el-rate> </span>
          <span style="padding-left: 5px;color: red;font-size: 10px">{{ head.comment }}条评论</span>
        </div>
        <div>
          <p>{{ head.detail }}</p>
        </div>
      </div>
    </el-col>
  </el-row>
  <el-divider />
  <el-row>
    <el-col :span="6" v-for="(book, index) in body" :key="index">
      <el-badge :value="book.discount+'折'" class="item">
        <el-image :src="book.image" @click="toDetail(book.id)"></el-image>
      </el-badge>
      <div style="font-size: 14px">{{ book.describe }}</div>
      <span>
        <span style="color: red">{{ book.price }}￥</span>
        <span style="padding-left: 10px"><el-text tag="del" type="info" size="small" @click="toDetail(book.id)">{{ book.originalPrice }}￥</el-text></span>
      </span>
    </el-col>
  </el-row>
</template>

<script setup>
import {ref} from "vue";
import {useBookDetailStore} from "@/stores/bookDetail.js";
import {bookDetailService} from "@/api/System.js";
import router from "@/router/index.js";

defineProps({
  head: {
    type: Object,
    required: true
  },
  body: {
    type: Array,
    required: true
  }}
)
const toDetail = async (id)=>{
  const bookDetailStore = useBookDetailStore()
  const result = await bookDetailService(id)
  bookDetailStore.setBookDetail(result.data)
  router.push("/book/book-detail")
}
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>
<style scoped>
.link{
  color: #0d1117;
}
.link:hover{
  color:#E60000;
}
.item {
  margin-top: 10px;
  margin-right: 70px;
}
.head-describe{
  font-size: 18px;
  font-weight: bold;
  padding-top: 60px;
  cursor: pointer;
}
.head-describe:hover{
  color:#E60000;
}
.head-price{
  padding-top: 10px;
}
</style>