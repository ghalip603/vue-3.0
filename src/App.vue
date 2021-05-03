<template>
  <div class="viewport-container" id="app">
    <div class="nav">
      <a
        href="/"
        aria-current="page"
        class="home-link router-link-exact-active router-link-active"
        id="LogoTextContainer"
      >
        <p class="LogoTitleText">探险家</p>
        <span class="site-name can-hide"
          ><img src="../src/assets/AwesomeVue.svg" alt="Powered By Vue.js"
        /></span>
      </a>
      <div class="Space-Bar"></div>
      <router-link to="/" class="item" active-class="active" exact>
        主页
      </router-link>
      <router-link to="/Blog" class="item" active-class="active">
        博客
      </router-link>
      <router-link to="/Service" class="item" active-class="active">
        服务
      </router-link>
      <router-link to="/About" class="item" active-class="active">
        关于
      </router-link>

      <div class="sidebar-button">
        <i @click="drawer = true" type="primary" class="el-icon-more"></i>

        <el-drawer
          v-model="drawer"
          :with-header="false"
          close-on-press-escape="true"
          custom-class="Aside-nav-can hide"
          show-close="true"
          size="45%"
        >
          <div class="aside-nav-title">Menu</div>
          <el-input
            class="Search-icon-container"
            placeholder="搜一搜，更明确"
            prefix-icon="el-icon-search"
            v-model="input2"
          >
          </el-input>
          <nav class="el-menu-item-gorzintal">
            <a href="/" class="Aside-menu-item">主页</a>
            <a href="/Blog" class="Aside-menu-item">博客</a>
            <a href="/Service" class="Aside-menu-item">服务</a>
            <a href="/About" class="Aside-menu-item">关于</a>
          </nav>
          <footer class="aboutInformation">
            <div class="footer-container">
              <div class="thanksForvVue">Powered By Vue.js</div>
              <div class="ICP-code">新ICP备19000710号-1</div>
            </div>
          </footer>
        </el-drawer>
        <!--        <i @click="drawer" type="primary" class="el-icon-more"></i>-->
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import { ElInput } from "element-plus";
import { ElDrawer } from "element-plus";
import axios from "axios";
export default {
  name: "App",
  components: {
    ElDrawer,
    ElInput,
  },
  data() {
    return {
      drawer: false,
    };
  },
  created() {
    axios.get("http://localhost:1337/blog-content").then((response) => {
      console.log(response);
    });
  },
};
</script>

<style>
#app {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

body {
  margin: 0;
}

.nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  line-height: 1.5rem;
  border-bottom: #e5e5e5 solid 1px;
  background-color: #ffffff;
  padding-right: 5%;
}

.nav a {
  text-decoration: none;
  padding: 10px 25px;
  margin: 5px;
  color: #000;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-weight: 400;
  font-size: 16px;

  &.router-link-exact-active {
    color: #409eff;
  }
}

.nav .item:hover {
  color: #409eff;
}

.nav .item:focus {
  color: #409eff;
}

 {
  color: red;
}
#LogoTextContainer {
  padding: 0;
  height: 50px;
  display: flex;
  margin-left: 30px;
}

.Space-Bar {
  justify-content: center;
  align-items: center;
  flex-grow: 1;
}

.sidebar-button {
  color: black;
  cursor: pointer;
  width: 2.5rem;
  position: absolute;
  font-size: 1.5rem;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
}

.LogoTitleText {
  font-family: "Noto Sans SC", sans-serif;
  font-size: 1.8rem;
  display: inline-block;
  color: black;
  line-height: 3.1rem;
  font-weight: bold;
  margin: 0;
}

.LogoTitleText p {
  cursor: pointer;
}

.site-name {
  color: black;
  font-size: 0.7rem;
}

.site-name img {
  width: 30px;
  height: 30px;
}

.el-input {
  width: 90%;
  margin-top: 10px;
  margin-bottom: 10px;
}

.el-input__inner {
  border-radius: 25px;
}

.aside-nav-title {
  display: flex;
  padding: 10px;
  padding-left: 20px;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  -webkit-font-smoothing: antialiased;
}

.el-drawer__body {
  padding-top: 20px;
  padding-bottom: 20px;
}

.el-overlay {
  background-color: rgba(0, 0, 0, 0.4);
}

.aboutInformation {
  padding-top: 20px;
  padding-bottom: 20px;
}

.footer-container {
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: "Helvetica Neue", serif;
  display: flex;
  flex-direction: column;
}

.thanksForvVue {
  font-size: 0.8rem;
  color: #585858;
}

.ICP-code {
  font-size: 0.5rem;
  color: #585858;
}

.el-menu-item-gorzintal {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.Aside-menu-item {
  border: 10px;
  border-bottom: 1px solid #dcdfe6;
}

.el-carousel__container {
  height: 1vh;
}

@media screen and (min-width: 0px) and (max-width: 547px) {
  .sidebar-button {
    display: block;
  }

  .item {
    display: none;
  }
}

@media screen and (min-width: 1200px) {
  .sidebar-button {
    display: none;
  }
}

@media screen and (min-width: 547px) and (max-width: 1200px) {
  .sidebar-button {
    display: none;
  }

  @media screen (max-witdh: 719px) {
    padding-left: 1.5rem;
  }
}
</style>
