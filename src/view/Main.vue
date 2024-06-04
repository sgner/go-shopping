<script setup>
  import {ref} from 'vue'
  const imageSrc = ref("/src/assets/1200100.jpg")
  const isLogin = ref(false)
  import { CaretTop,ArrowDown ,ShoppingCart,ShoppingCartFull,User,ChatDotRound,Discount,AddLocation,Comment,SwitchButton,Lock} from '@element-plus/icons-vue'
  import router from "@/router/index.js";
  import loginComponent from "@/components/login.vue";
  const user = ref({
       id:'',
       username:'',
       avatar:'',
  })
  import {verifyService} from "@/api/Verify.js";

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
  router.push('/home')
 const loginVisible = ref(false)
  const search = ref('')
  const select = ref('1')
  const login = ref({
        status: false
  })
  const registerData = ref({
       username:'',
       password:'',
       rePassword:'',
       // code:'',
  })
  const toRegister = ()=>{

  }
  const clear = ()=>{
      registerData.value = {
        username:'',
        password:'',
        rePassword:'',
      }
  }
  const loginData = ref({
    username:'',
    password:'',
    rePassword:'',
    isRemember:'',
    isAuto:'',
    temporaryId:'',
    code:'',
  })
  const img = ref('');
  import {useTemporaryIdStore} from "@/stores/TemporaryId.js";
  const temId = useTemporaryIdStore()
  const code = ref('')


  const imageVerify = async ()=>{
    const temporaryIdStore = useTemporaryIdStore()
    let result
    try{
       result = await verifyService(temporaryIdStore.temporaryId)
    }catch(err){
        await verifyService(temporaryIdStore.temporaryId)
    }
    const codeResult = result.data
    img.value = codeResult.image;
    code.value = codeResult.code
    img.value = `data:image/jpeg;base64,${img.value}`
    if(temporaryIdStore.temporaryId === ''){
      temporaryIdStore.setTemporaryId(codeResult.temporaryId)
    }
  }
  const clearLogin = ()=>{
    if(!rememberStore.isRemember){
      loginData.value.username = ''
      loginData.value.password = ''
      loginData.value.rePassword= ''
    }
    loginData.value.code= ''
  }
  const checkRePassword = (rule, value, callback) => {
    if (value === '') {
      callback(new Error('请再次确认密码'))
    } else if (value !== registerData.value.password) {
      callback(new Error('请确保两次输入的密码一样'))
    } else {
      callback()
    }
  }
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!%*?&@])[A-Za-z\d@!%*?&]{8,}$/
const thePassword = (rule,value,callback)=>{
      if(!regex.test(value)){
        callback(new Error("至少要有一个大小写字母一个特殊字符"))
      }
}
  const checkCode = (rule,value,callback)=>{
    if(value === ''){
      callback(new Error("请输入验证码"))
    }else if (value !== code.value){
      callback(new Error("验证码错误!"))
      imageVerify()
    }else {
      callback()
    }
  }

  //定义表单校验规则
  const rules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
      { min: 5, max: 16, message: '长度为5~16位非空字符', trigger: 'blur' }
    ],
    password: [
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 8, max: 16, message: '长度为8~16位非空字符', trigger: 'blur' },
      {validator: thePassword,trigger: "blur"}
    ],
    rePassword: [
      { validator: checkRePassword, trigger: 'blur' }
    ]
  }
  const loginRule = {
    username:[
      {required:true,message:'请输入用户名',trigger:'blur'},
    ],
    password:[
      {required:true,message:'请输入密码',trigger:'blur'}
    ]
    ,
    code:[
      {validator: checkCode,trigger:'blur'}
    ]
  }
  import {
    autoLoginService,
    loginService,
    logoutService,
    recoverService,
    registerService,
    searchService
  } from "@/api/User.js";
  import {ElMessage} from "element-plus";
  import {useTokenStore} from "@/stores/token.js";
  import {useRememberStore} from "@/stores/isRemember.js";
  import {useAutoStore} from "@/stores/isAuto.js";
  const rememberStore = useRememberStore()
  const tokenStore = useTokenStore()
  const autoStore = useAutoStore()
  const userLogin = async ()=>{

        loginData.value.temporaryId = temId.temporaryId
        const result = await loginService(loginData.value)
        success("登录成功")
        rememberStore.setIsRemember(loginData.value.isRemember)
        autoStore.setIsAuto(loginData.value.isAuto)
        tokenStore.setToken(result.data)
        isLogin.value = true
        loginVisible.value = false
        clearLogin()
  }
  const success = (msg)=>{
        ElMessage.success(msg)
  }
  const Register = async ()=>{
       await registerService(registerData.value)
       success("注册成功")
       login.value.status = true
       clear()
  }
  const recover = async ()=>{
    const rememberStore = useRememberStore()
    if(rememberStore.isRemember){
      const result =  await recoverService()
      loginData.value.username = result.data.username;
      loginData.value.password = result.data.password;
      loginData.value.isRemember = true;
    }
  }
const AutoLogin = async() =>{
       const autoStore = useAutoStore()
      if(autoStore.isAuto){
        await autoLoginService()
        isLogin.value = true
      }
}
AutoLogin()
const logout= async ()=>{
  await logoutService()
  isLogin.value = false
  autoStore.setIsAuto(false)
}
  import {usePageNumStore} from "@/stores/searchResultPageNum.js";
  import {useSearchPageStore} from "@/stores/searchResultPage.js";
  import {useSearchMessageStore} from "@/stores/searchMessage.js";
const logoutDialogVisible = ref(false)
   const pageStore = useSearchPageStore()
   const pageNumStore = usePageNumStore()
   const messageStore =useSearchMessageStore()
  const clickSearch = async ()=>{
          loading.value = true
          const result = await searchService(search.value,select.value,1)
             pageStore.setPage(result.data.books)
           pageNumStore.setPageNum({
                 cPageNum:1,
                 total:result.data.total
           })
          messageStore.setMessage({
                  message:search.value,
                  mode:select.value
          })
           router.push("/search")
          loading.value = false
 }
  const loading = ref(false)
</script>

<template>
  <el-dialog
      v-model="logoutDialogVisible"
      title="您确定要退出吗"
      width="500"
      align-center
  >
    <span>点击确定立即退出登录状态，自动登录将取消</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="logoutDialogVisible = false" type="danger" plain>取消</el-button>
        <el-button type="danger" @click="logoutDialogVisible = false;logout()">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
    <el-dialog v-model="loginVisible" title="注册/登录" width="600" draggable>
        <loginComponent :clear="clear" :clear-login="clearLogin"
                        :image-verify="imageVerify" :img="img"
                        :login="userLogin" :login-data="loginData"
                        :login-rule="loginRule" :isLogin="login" :register-data="registerData" :toRegister="Register" :rules="rules"/>
    </el-dialog>
    <div class="common-layout" style="min-width: 75em;">
      <el-container>
        <el-header class="header">
          <el-row style="background-color: #85DDAE">
            <el-col :span="24">
              <div style="width: 100%; height: 6em; position: relative;">
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
                    请<el-link type="danger" class="login-link" @click="loginVisible=true;login.status=false;imageVerify()">注册</el-link><el-divider direction="vertical" /> <el-link type="danger" class="login-link" @click="loginVisible=true;login.status=true;imageVerify();recover()">登录</el-link>
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
                            <el-table :data="shopping_cart" style="padding-top: 0;" tooltip-effect="light" height="18.75em" .is-light>
                                <el-table-column label="商品参考">
                                  <template #default="{row}">
                                    <el-image :src="row.image" fit="contain"></el-image>
                                  </template>
                                </el-table-column>
                                <el-table-column prop="description" label="描述" show-overflow-tooltip></el-table-column>
                                <el-table-column label="单价" show-overflow-tooltip>
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
                  <el-dropdown style="padding-left: 2em" .el-dropdown-menu v-if="isLogin">
                    <el-avatar :size="35" :src="user.avatar===''? default_avatar:user.avatar"/>
                    <template #dropdown>
                      <el-dropdown-menu class="header-new-drop">
                        <el-dropdown-item><el-icon><el-icon><User /></el-icon></el-icon>个人中心</el-dropdown-item>
                        <el-dropdown-item><el-icon><el-icon><ChatDotRound /></el-icon></el-icon> 我的消息</el-dropdown-item>
                        <el-dropdown-item><el-icon><el-icon><Discount /></el-icon></el-icon> 我的优惠券</el-dropdown-item>
                        <el-dropdown-item><el-icon><AddLocation /></el-icon>收货地址</el-dropdown-item>
                        <el-dropdown-item><el-icon><Comment /></el-icon>我的书评</el-dropdown-item>
                        <el-divider  style="margin-top: 0"/>
                        <el-dropdown-item><span style="color:red;" @click="logoutDialogVisible=true"><el-icon><el-icon><SwitchButton /></el-icon></el-icon>退出登录</span></el-dropdown-item>
                      </el-dropdown-menu>
                    </template>
                  </el-dropdown>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row justify="center">
            <el-col :span="3" :offset="5">
              <span><el-image src="/src/assets/bbs.svg" style="width: 12em"></el-image></span>
            </el-col>
            <el-col :span="14" style="padding-top: 2.4em" :offset="2">
               <span>
                 <el-input
                   v-model="search"
                   placeholder="请输入"
                   class="input-border-style"
                   style="width: 43em"
               >
                <template #append>
                  <el-select v-model="select" :placeholder="select" style="width: 7em" class="select_box">
                  <el-option label="搜索作者" value="1" />
                  <el-option label="搜索书名" value="2" />
                  <el-option label="搜索出版社" value="3" />
                  </el-select>
                </template>
              </el-input>
              <el-button type="danger" @click="clickSearch()" v-loading.fullscreen.lock="loading" element-loading-text="加载中... 遇到错误请刷新" element-loading-background="rgba(122, 122, 122, 0.8)"
                         element-loading-spinner="<i class='el-icon-loading' style='color: #fff;'></i>">搜索</el-button>
              </span>
            </el-col>

          </el-row>
          <el-divider style="border-color: #E60000;border-width: 6px"></el-divider>
        </el-header>
        <el-container>
          <el-aside width="15em" style="height: 100vh;background-color:  #F2F2F2">
            <el-tabs tab-position="right" style="height: 12em" class="demo-tabs">
            <el-tab-pane label="User">User</el-tab-pane>
            <el-tab-pane label="Config">Config</el-tab-pane>
            <el-tab-pane label="Role">Role</el-tab-pane>
            <el-tab-pane label="Task">Task</el-tab-pane>
          </el-tabs></el-aside>
          <el-main>
            <div style="width: 100% ; height: 100%">
              <el-scrollbar height="100vh">
                <router-view></router-view>
              </el-scrollbar>
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
        <el-footer style="height: 1.2em">
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
  width: 12.5em;
  color: black;
}
::v-deep(.header-new-drop .el-dropdown-menu__item:focus),
::v-deep(.el-dropdown-menu__item:not(.is-disabled):hover) {
  background-color: gray;
  color: #F2F2F2;
}
::v-deep(.is-light){
  max-width: 19em;}
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
  padding-left: 3.75em;
  padding-top: 0.625em;
  font-family: "Microsoft Himalaya", sans-serif;
  font-size: 1.1em;
  font-weight: 220;
  display: flex;
  justify-content: flex-start;
  color: #333
}
.login-prompt{
  font-size:1em;
  font-weight: 220;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.login-link{
  font-size:1em;
  font-weight: 220;
  vertical-align: middle;
  justify-content: flex-start;
}
.right-position{
   display: flex;
   padding-right: 3.75em;
   padding-top: 0.625em;
   justify-content: flex-end;

}
.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
  height: 100%;
}
.demo-tabs > .el-tabs__content {
  padding: 2em;
  color: #6b778c;
  font-size: 2em;
  font-weight: 600;
}
.demo-tabs :deep(.el-tabs__item.is-active) {
  color: #E60000; /* 设置选中标签的文字颜色 */
  font-weight: bold; /* 设置选中标签的文字粗细 */
  font-size: 1em; /* 设置选中标签的文字大小 */
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
    font-size: 0.9em;
    font-weight: 500;
    color: #3E534F;
  }
}
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;

  .title {
    margin: 0 auto;
  }

  .button {
    width: 100%;
  }

  .flex {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>