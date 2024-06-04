<script setup>
import {User,Lock} from "@element-plus/icons-vue"
import {computed, ref, watch} from "vue";
import {recoverService} from "@/api/User.js";
const props= defineProps({
      registerData: {
        type: Object,
        required: true
      },
     isLogin:{
        type: Object,
        required: true
      },
    clear:{
         type: Function,
         required: true
    },
    loginData:{
        type: Object,
         required: true
    },
    login:{
      type: Function,
       required: true
    },
    img:{
        type: String,
        required: true
    },
  imageVerify:{
        type: Function,
        required: true
  },
  clearLogin:{
        type: Function,
        required: true
  },
  loginRule:{
        type: Object,
        required: true
  },
  toRegister:{
        type: Function,
        required: true
  },
rules:{
         type: Object,
          required: true
}
    }
)

</script>

<template>
  <el-row class="login-page">
    <el-col :span="10" >预留二维码登录，手机号登录等方式</el-col>
    <el-col :span="9" :offset="3" class="form">
      <!-- 注册表单 -->
      <el-form ref="form" size="large" autocomplete="off" v-if="!isLogin.status" :model="registerData" :rules="rules">
        <el-form-item>
          <h1>注册</h1>
        </el-form-item>
        <el-form-item prop= "username">
          <el-input :prefix-icon="User" placeholder="请输入用户名" v-model="registerData.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input :prefix-icon="Lock" type="password" placeholder="请输入密码" v-model="registerData.password"></el-input>
        </el-form-item>
        <el-form-item prop="rePassword">
          <el-input :prefix-icon="Lock" type="password" placeholder="请再次输入密码" v-model="registerData.rePassword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type="danger" auto-insert-space @click="toRegister()">
            注册
          </el-button>
        </el-form-item>
        <el-form-item class="flex">
          <el-link type="info" :underline="false" @click="isLogin.status=true;clear()"><-已有账号？</el-link>
        </el-form-item>
      </el-form>


      <el-form ref="form" size="large" autocomplete="off" v-else :model="loginData" :rules="loginRule">
        <el-form-item>
          <h1>登录</h1>
        </el-form-item>
        <el-form-item prop="username">
          <el-input :prefix-icon="User" placeholder = "请输入用户名" v-model="loginData.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password" :prefix-icon="Lock" type="password" placeholder="请输入密码" v-model="loginData.password"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <div class = "container">
            <el-input name="code" :prefix-icon="Lock" placeholder="请输入验证码" v-model="loginData.code"></el-input>
            <el-image :src='img' @click="imageVerify()" class="verifyImg"></el-image>
          </div>

        </el-form-item>
        <el-form-item class="flex">
          <div class="flex">
            <el-checkbox v-model="loginData.isRemember">
              记住我
            </el-checkbox>
            <el-checkbox v-model="loginData.isAuto">自动登录</el-checkbox>
            <el-link type="primary" :underline="false">忘记密码?</el-link>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button class="button" type = "danger" auto-insert-space @click="login()" :plain="true">登录</el-button>
        </el-form-item>
        <el-form-item>
          <el-link type="info" :underline="false" @click="isLogin.status=false;clearLogin();">没有账号?->注册</el-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<style scoped>
.login-page {
  background-color: #fff;
  .container {
    display: flex; /* 使用flex布局 */
    align-items: center; /* 垂直居中对齐 */
  }
  .verifyImg{
    width: 200px;
    height: 40px;
  }
  .el-input {
    margin-right: 10px; /* 设置组件间的间距 */
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
}
</style>