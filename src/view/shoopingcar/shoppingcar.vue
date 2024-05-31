<script setup>
import {computed, ref} from "vue";
import router from "@/router/index.js";
const buys = ref([
  {
    image:'/src/assets/s8084988.jpg',
    name:'世界尽头的咖啡馆',
    price:'25',
    id:2,
    num:'4',
    originalPrice: '69',
    totalPrice:''
  },
  {
    image:'/src/assets/s8084988.jpg',
    name:'世界尽头的咖啡馆',
    price:'35',
    id:6,
    num:'5',
    originalPrice: '59',
    totalPrice:''
  }
])
const handleChange = (row) =>{
   console.log(row)
  totalPrice.value = 0
  for (let i = 0;i<selected.value.length;i++){
    totalPrice.value += selected.value[i].price*selected.value[i].num
  }
}
const num = ref(1)
router.push('/shoppingcar')
const selected = ref([])
const totalPrice = ref(0)
const handleSelectionChange = (val) => {
        selected.value = val
        totalPrice.value = 0
        for (let i = 0;i<selected.value.length;i++){
              totalPrice.value += selected.value[i].price*selected.value[i].num
        }
        console.log(totalPrice.value)
}
const handleSelectAll = (val) => {
  console.log(val)
}
</script>

<template>
    <div class="common-layout">
      <el-container>
        <el-header style="height: auto">
          <el-steps style="max-width: 600px" :active="0" finish-status="success" simple>
            <el-step title="我的购物车" />
            <el-step title="填写核对订单信息" />
            <el-step title="成功提交订单" />
          </el-steps>
        </el-header>
        <el-main>
          <el-table
              ref="multipleTableRef"
              style="width: 100%"
              @selection-change="handleSelectionChange"
              @select-all="handleSelectAll"
              height="80vh"
              :data="buys"
          >
            <el-table-column type="selection" width="55"/>
            <el-table-column label="图书参考图" >
              <template #default="{row}"><el-image :src="row.image"></el-image></template>
            </el-table-column>
            <el-table-column prop="name" label="图书名称"/>
            <el-table-column label="定价">
              <template #default="{row}">
                   {{row.originalPrice}}￥
              </template>
            </el-table-column>
            <el-table-column label="折扣价">
              <template #default="{row}">
                <span style="font-size: 20px;color: #E60000">{{row.price}}￥</span>
              </template>
            </el-table-column>
            <el-table-column label="数量">
              <template #default="{row}">
                <el-input-number v-model="row.num" :min="1" @change="handleChange(row)" />
              </template>
            </el-table-column>
            <el-table-column label="小计">
              <template #default="{row}">
                  <span style="color: #E60000 ;font-size: 22px">{{row.num*row.price}}￥</span>
              </template>
            </el-table-column>
            <el-table-column label="操作">
              <template #default="{row}">
                 <el-row>
                    <el-col :span="5"><el-link type="danger">删除</el-link> </el-col>
                 </el-row>
                <el-row>
                  <el-col :span="10"><el-link type="info">移入收藏</el-link></el-col>
                </el-row>
              </template>
            </el-table-column>
            <template #empty>
              <el-empty description="空空如也" />
            </template>
          </el-table>
           <el-row justify="start">
              <el-col :span="9">
                <el-pagination background layout="total, prev, pager, next , jumper" :total="1000"  class="el-pagination"
                               v-model:current-page="pageNum" v-model:page-size="pageSize"
                               @current-change="onCurrentChange"/>
              </el-col>
           </el-row>
        </el-main>
        <el-footer>
           <el-row style="background-color: #e5e5e5" justify="space-between">
              <el-col :span="3">
                 <span>
                    <el-link type="danger">删除选中的商品</el-link>
                 </span>
              </el-col>
               <el-col :span="7">
                  <span>
                   已选择{{selected.length}}件商品, 共计<span style="color: #E60000">￥{{totalPrice}}</span>
                </span>
                   <span style="margin-left: 8px">
                      <el-button type="danger">立即结算</el-button>
                   </span>
               </el-col>
           </el-row>
        </el-footer>
      </el-container>
    </div>
</template>

<style scoped>
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