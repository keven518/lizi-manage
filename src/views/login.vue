<template>
  <div class="home">
    <vue-particles color="#dedede"></vue-particles>
    <div class="login">
      <div class="logo">
        <img src="../assets/logo.png" />
        <h4>智慧空间{{ id }}</h4>
      </div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        label-position="left"
        label-width="0px"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            auto-complete="new-password"
            placeholder="用户名"
          >
            <svg-icon
              slot="prefix"
              icon-class="user"
              class="el-input__icon input-icon"
            />
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginForm.passwode"
            auto-complete="new-password"
            placeholder="密码"
            show-password
          >
            <svg-icon
              slot="prefix"
              icon-class="password"
              class="el-input__icon input-icon"
            />
          </el-input>
        </el-form-item>
        <el-button type="primary">登录</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SvgIcon from "../components/SvgIcon";
import { mapState } from "vuex";

export default {
  name: "home",
  components: { SvgIcon },
  computed: {
    ...mapState(["todos", "id"])
  },
  data() {
    return {
      login: {},
      loginForm: {
        username: "admin",
        password: "123456"
      },
      form: ""
    };
  },
  methods: {
    loginRules() {}
  }
};
</script>

<style lang="scss">
.home {
  background-image: url(../assets/login-bg.0899ffa6.jpg);
  background-size: cover;
  background-position: 50%;
  position: relative;
  .login {
    width: 300px;
    height: 400px;
    background: #fff;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .logo {
      width: 200px;
      height: 150px;
      margin: 20px auto;
      img {
        margin: 0 auto;
        text-align: center;
        display: table-cell;
      }
      h4 {
        text-align: center;
        color: #5653fc;
        letter-spacing: 20px;
        padding: 0 0 0 20px;
      }
    }
    .el-form-item {
      margin-bottom: 0;
    }
    .el-input,
    .el-button {
      width: 84%;
      margin: 0 auto 20px;
      display: block;
    }
  }
}
</style>
