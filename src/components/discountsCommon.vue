<!-- DiscountTemplate.vue -->
<template>
  <el-row>
    <el-col :span="5">
      <el-badge :value="head.dis_count+'折'" class="item"></el-badge>
      <el-image :src="head.image"></el-image>
    </el-col>
    <el-col :span="14">
      <div>
        <div class="head-describe">{{ head.describe }}</div>
        <div class="head-price">
          <span style="color: red;font-size: 19px">{{ head.price }}￥</span>
          <span style="padding-left: 10px"><el-text tag="del" size="large" type="info">{{ head.original_price }}￥</el-text></span>
          <span style="padding-left: 15px"> <el-rate v-model="head.rete" :colors="colors" disabled :texts="['暂无评价', '有点失望', '普通', '很好的作品', '神作']" show-text show-score score-template="{value}分" allow-half></el-rate> </span>
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
      <el-badge :value="book.dis_count+'折'" class="item">
        <el-image :src="book.image"></el-image>
      </el-badge>
      <div style="font-size: 14px">{{ book.describe }}</div>
      <span>
        <span style="color: red">{{ book.price }}￥</span>
        <span style="padding-left: 10px"><el-text tag="del" type="info" size="small">{{ book.original_price }}￥</el-text></span>
      </span>
    </el-col>
  </el-row>
</template>

<script setup>
import {ref} from "vue";

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
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900'])
</script>
<style scoped>
.item {
  margin-top: 10px;
  margin-right: 70px;
}
.head-describe{
  font-size: 18px;
  font-weight: bold;
  padding-top: 60px;
}
.head-price{
  padding-top: 10px;
}
</style>