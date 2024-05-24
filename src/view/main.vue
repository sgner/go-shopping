<script setup>
  import {ref} from 'vue'
  const imageSrc = ref("/src/assets/1200100.jpg")
  const isLogin = ref(true)
  import { CaretTop,ArrowDown ,ShoppingCart,ShoppingCartFull,User,ChatDotRound,Discount,AddLocation,Comment,SwitchButton} from '@element-plus/icons-vue'
  import router from "@/router/index.js";
  const user = ref({
       id:'',
       username:'',
       avatar:'',
  })
  const default_avatar = ref('/src/assets/avatar.png')
  const shopping_cart = ref([
    {
      image:'/src/assets/vue.svg',
      description:'当我们学习前端的过程中往往需要大量的实战，这些实战可以从我们的常见的比较简单的网站模仿开始，这是检验前端学习最有效的方法。\n' +
          '\n' +
          '🍟🍟那么当我们要完成一个更大型的项目时开发效率往往也很重要，这里不得不提颜色提取器，刚开始学习时大家可能会使用截图->绘图->吸取器->复制粘贴16进制RGB值完成，这里为大家分享两个可以直接在任意网页上提取颜色的小工具。\n' +
          '————————————————\n' +
          '\n' +
          '                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。\n' +
          '                        \n' +
          '原文链接：https://blog.csdn.net/sylvia133/article/details/130775834',
      price:'123453',
      number:'7',
      total:'123456789'
    },
    {
      image:'/src/assets/vue.svg',
      description:'当我们学习前端的过程中往往需要大量的实战，这些实战可以从我们的常见的比较简单的网站模仿开始，这是检验前端学习最有效的方法。\n' +
          '\n' +
          '🍟🍟那么当我们要完成一个更大型的项目时开发效率往往也很重要，这里不得不提颜色提取器，刚开始学习时大家可能会使用截图->绘图->吸取器->复制粘贴16进制RGB值完成，这里为大家分享两个可以直接在任意网页上提取颜色的小工具。\n' +
          '————————————————\n' +
          '\n' +
          '                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。\n' +
          '                        \n' +
          '原文链接：https://blog.csdn.net/sylvia133/article/details/130775834',
      price:'123453',
      number:'7',
      total:'123456789'
    },
    {
      image:'/src/assets/vue.svg',
      description:'当我们学习前端的过程中往往需要大量的实战，这些实战可以从我们的常见的比较简单的网站模仿开始，这是检验前端学习最有效的方法。\n' +
          '\n' +
          '🍟🍟那么当我们要完成一个更大型的项目时开发效率往往也很重要，这里不得不提颜色提取器，刚开始学习时大家可能会使用截图->绘图->吸取器->复制粘贴16进制RGB值完成，这里为大家分享两个可以直接在任意网页上提取颜色的小工具。\n' +
          '————————————————\n' +
          '\n' +
          '                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。\n' +
          '                        \n' +
          '原文链接：https://blog.csdn.net/sylvia133/article/details/130775834',
      price:'123453',
      number:'7',
      total:'123456789'
    },
    {
      image:'/src/assets/vue.svg',
      description:'当我们学习前端的过程中往往需要大量的实战，这些实战可以从我们的常见的比较简单的网站模仿开始，这是检验前端学习最有效的方法。\n' +
          '\n' +
          '🍟🍟那么当我们要完成一个更大型的项目时开发效率往往也很重要，这里不得不提颜色提取器，刚开始学习时大家可能会使用截图->绘图->吸取器->复制粘贴16进制RGB值完成，这里为大家分享两个可以直接在任意网页上提取颜色的小工具。\n' +
          '————————————————\n' +
          '\n' +
          '                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。\n' +
          '                        \n' +
          '原文链接：https://blog.csdn.net/sylvia133/article/details/130775834',
      price:'123453',
      number:'7',
      total:'123456789'
    },
    {
      image:'/src/assets/vue.svg',
      description:'当我们学习前端的过程中往往需要大量的实战，这些实战可以从我们的常见的比较简单的网站模仿开始，这是检验前端学习最有效的方法。\n' +
          '\n' +
          '🍟🍟那么当我们要完成一个更大型的项目时开发效率往往也很重要，这里不得不提颜色提取器，刚开始学习时大家可能会使用截图->绘图->吸取器->复制粘贴16进制RGB值完成，这里为大家分享两个可以直接在任意网页上提取颜色的小工具。\n' +
          '————————————————\n' +
          '\n' +
          '                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。\n' +
          '                        \n' +
          '原文链接：https://blog.csdn.net/sylvia133/article/details/130775834',
      price:'123453',
      number:'7',
      total:'123456789'
    },
    {
      image:'/src/assets/vue.svg',
      description:'当我们学习前端的过程中往往需要大量的实战，这些实战可以从我们的常见的比较简单的网站模仿开始，这是检验前端学习最有效的方法。\n' +
          '\n' +
          '🍟🍟那么当我们要完成一个更大型的项目时开发效率往往也很重要，这里不得不提颜色提取器，刚开始学习时大家可能会使用截图->绘图->吸取器->复制粘贴16进制RGB值完成，这里为大家分享两个可以直接在任意网页上提取颜色的小工具。\n' +
          '————————————————\n' +
          '\n' +
          '                            版权声明：本文为博主原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接和本声明。\n' +
          '                        \n' +
          '原文链接：https://blog.csdn.net/sylvia133/article/details/130775834',
      price:'123453',
      number:'7',
      total:'123456789'
    }
  ])
  const deleteBook = ()=>{}
  const TopPromotions = ()=>{

  }
  router.push('/book/book-detail')

  const search = ref('')
  const select = ref('搜索书名')
</script>

<template>
    <div class="common-layout" style="min-width: 2200px;">
      <el-container>
        <el-header class="header">
          <el-row style="background-color: #85DDAE">
            <el-col :span="24">
              <div style="width: 100%; height: 100px; position: relative;">
                <el-image :src="imageSrc" @click="TopPromotions" fit="none" class="top-promotions"></el-image>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div style="background-color: #F2F2F2;display: flex;justify-content: space-between" >
                <div class="welcome-section">
                   欢迎光临购书网！
                <span v-if="!isLogin" class="login-prompt">
                    请<el-link type="danger" class="login-link">注册</el-link><el-divider direction="vertical" /> <el-link type="danger" class="login-link">登录</el-link>
                </span>
                </div>
                <div class="right-position">
                  <el-dropdown v-if="isLogin">
                    <el-badge :value="shopping_cart.length" class="item">
                    <el-button color="#85DDAE">
                        <el-icon v-if="shopping_cart.length===0"><ShoppingCart /></el-icon>
                        <el-icon v-else><ShoppingCartFull /></el-icon>
                        我的购物车<el-icon class="el-icon--right"><arrow-down /></el-icon>
                    </el-button>
                    </el-badge>
                    <template #dropdown>
                      <el-dropdown-menu>
                          <el-card style="max-width: 480px">
                            <template #header>
                              <div class="card-header">
                                <span>最近加入的商品</span>
                              </div>
                            </template>
                            <el-table :data="shopping_cart" style="padding-top: 0;" tooltip-effect="light" height="300px" .is-light>
                                <el-table-column label="商品参考">
                                  <template #default="{row}">
                                    <el-image :src="row.image" fit="contain"></el-image>
                                  </template>
                                </el-table-column>
                                <el-table-column prop="description" label="描述" show-overflow-tooltip></el-table-column>
                                <el-table-column prop="price" label="单价" show-overflow-tooltip>
                                  <template #default="{row}">
                                     {{row.price}}￥
                                  </template>
                                </el-table-column>
                                <el-table-column prop="number" label="数量"></el-table-column>
                                <el-table-column label="总价" show-overflow-tooltip>
                                    <template #default="{row}">
                                      {{row.total}}￥
                                  </template>
                                </el-table-column>
                                <el-table-column label="操作" width="40">
                                  <template #default="{row}">
                                      <el-link type="danger" @click="deleteBook">移除</el-link>
                                  </template>
                                </el-table-column>
                              <template #empty>
                                <el-empty description="空空如也" />
                              </template>
                            </el-table>
                            <template #footer>
                              <div class="shoppingCard">
                                <span class="shoppingCard-bookNum">共{{shopping_cart.length}}件商品</span>
                                <span><el-button type="danger" size="small">去购物车<el-icon><shopping-cart/></el-icon></el-button></span>
                              </div>
                            </template>
                          </el-card>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                  <el-dropdown style="padding-left: 30px" .el-dropdown-menu v-if="isLogin">
                    <el-avatar :size="35" :src="user.avatar===''? default_avatar:user.avatar"/>
                    <template #dropdown>
                      <el-dropdown-menu class="header-new-drop">
                        <el-dropdown-item><el-icon><el-icon><User /></el-icon></el-icon>个人中心</el-dropdown-item>
                        <el-dropdown-item><el-icon><el-icon><ChatDotRound /></el-icon></el-icon> 我的消息</el-dropdown-item>
                        <el-dropdown-item><el-icon><el-icon><Discount /></el-icon></el-icon> 我的优惠券</el-dropdown-item>
                        <el-dropdown-item><el-icon><AddLocation /></el-icon>收货地址</el-dropdown-item>
                        <el-dropdown-item><el-icon><Comment /></el-icon>我的书评</el-dropdown-item>
                        <el-divider  style="margin-top: 0"/>
                        <el-dropdown-item><span style="color:red;"><el-icon><el-icon><SwitchButton /></el-icon></el-icon>退出登录</span></el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="3" :offset="7">
              <span><el-image src="/src/assets/bbs.svg" style="width: 200px"></el-image></span>
            </el-col>
            <el-col :span="10" style="padding-top: 40px">
               <span>
                 <el-input
                   v-model="search"
                   placeholder="Please input"
                   class="input-border-style"
                   style="width: 700px"
               >
                <template #append>
                  <el-select v-model="select" :placeholder="select" style="width: 115px" class="select_box">
                  <el-option label="搜索作者" value="搜索作者" />
                  <el-option label="搜索书名" value="搜索书名" />
                  <el-option label="搜索出版社" value="搜索出版社" />
                  </el-select>
                </template>
              </el-input>
              <el-button type="danger">搜索</el-button>
              </span>
            </el-col>

          </el-row>
          <el-divider style="border-color: #E60000;border-width: 6px"></el-divider>
        </el-header>
        <el-container>
          <el-aside width="300px" style="height: 80vh;background-color:  #F2F2F2">
            <el-tabs tab-position="right" style="height: 200px" class="demo-tabs">
            <el-tab-pane label="User">User</el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
          </el-tabs></el-aside>
          <el-main>
            <div style="width: 100% ; height: 100%">
                <router-view></router-view>
              <el-backtop :bottom="100">
                <div
                    style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: #E60000;
        font-size: 40px;
      "
                >
                  <el-icon><CaretTop /></el-icon>
                </div>
              </el-backtop>
          </div>
          </el-main>
        </el-container>
        <el-footer style="height: 20px">
        <el-row>
          <el-col :span="12" :offset="12">
            © 0223799李天赐
          </el-col>
        </el-row>
      </el-footer>
      </el-container>
    </div>
</template>

<style scoped>
.header-new-drop li {
  width: 200px;
  color: black;
}
::v-deep(.header-new-drop .el-dropdown-menu__item:focus),
::v-deep(.el-dropdown-menu__item:not(.is-disabled):hover) {
  background-color: gray;
  color: #F2F2F2;
}
::v-deep(.is-light){
  max-width: 300px;}
.header{
  padding: 0;
  height: auto;
}
.shoppingCard{
  display: flex;
  justify-content: space-between;
}
.top-promotions{
  width: 100%;
  height: 100%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
}
.welcome-section{
  padding-left: 60px;
  padding-top: 10px;
  font-family: "Microsoft Himalaya", sans-serif;
  font-size: 18px;
  font-weight: 220;
  display: flex;
  justify-content: flex-start;
  color: #333
}
.login-prompt{
  font-size:15px;
  font-weight: 220;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.login-link{
  font-size:15px;
  font-weight: 220;
  vertical-align: middle;
  justify-content: flex-start;
}
.right-position{
   display: flex;
   padding-right: 60px;
   padding-top: 10px;
   justify-content: flex-end;

}
.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
.demo-tabs :deep(.el-tabs__item.is-active) {
  color: #E60000; /* 设置选中标签的文字颜色 */
  font-weight: bold; /* 设置选中标签的文字粗细 */
  font-size: 17px; /* 设置选中标签的文字大小 */
}

.demo-tabs :deep(.el-tabs__item:hover) {
  color: #E60000; /* 设置鼠标悬停时标签的文字颜色 */
  font-weight: bold; /* 设置选中标签的文字粗细 */
}

.demo-tabs :deep(.el-tabs__active-bar) {
  background-color: #E60000; /* 设置选中标签的底部激活条颜色 */
}


:deep(.el-input__wrapper) {
  background-color: rgba(0,0,0,0)!important;
  box-shadow: 0 0 0 1px #E60000 inset!important;
  --el-select-focus-border-color:#5AC087!important;
  --el-select-hover-border-color: #5AC087!important;
}

:deep(.el-select__caret) {
  color:#E60000!important;
}
:deep(.el-input__inner) {
  color: #E60000!important;
}

:deep(.el-popper){
  background-color: #121f1b!important;
  border: 1px solid #498f6c!important;
}
:deep(.el-popper .el-popper__arrow::before){
  border-top: 1px solid #498f6c!important;
  background-color: #121f1b!important;
}

:deep(.el-dropdown-menu__item:not(.is-disabled)) {
}
.el-select-dropdown__item {
  color: #E60000 !important;
}
.select_box{
  :deep(.el-input__inner::placeholder) {
    font-size: 14px;
    font-weight: 500;
    color: #3E534F;
  }
}
</style>