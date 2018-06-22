<template>
  <div id="container">
    <nav>
      <div class="logo fl">
        <img src="../static/images/logo.png" alt="">
      </div>
      <div class="nav-links fl">
        <router-link to="/home"><i class="iconfont icon-shouye"></i>首页</router-link>
        <router-link to="/design"><i class="iconfont icon-sheji"></i>设计</router-link>
        <router-link to="/monitor"><i class="iconfont icon-jiankong"></i>监控</router-link>
        <router-link to="/analysis"><i class="iconfont icon-jikediancanicon45"></i>分析</router-link>
      </div>
      <div class="nav-actions fr">
        <span><i class="iconfont icon-sousuo"></i></span>
        <span><i class="iconfont icon-xiuli"></i></span>
        <span><i class="iconfont icon-btnMsg"></i></span>
        <div class="login fr">admin</div>
      </div>
    </nav>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>
<style scoped>
  #container {
    width: 100%;
    height: 100%;
    position: relative;
    padding-top: 70px;
  }
  nav {
    background-color: #1D3454;
    height: 70px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 50px;
    line-height: 70px;
    font-size: 14px;
  }
  .logo {
    width: 169px;
    height: 47px;
    margin-right: 50px;
  }
  .logo img {
    width: 100%;
    height: 100%;
  }
  .nav-links a {
    display: inline-block;
    width: 114px;
    text-align: center;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
  }
  .nav-links a.router-link-active {
    background-color: #1E3D64;
  }
  .nav-links a i {
    margin-right: 4px;
  }
  .nav-actions span {
    margin-right: 20px;
  }
  .nav-actions span .iconfont {
    font-size: 20px;
    color: #999;
    cursor: pointer;
  }
  .nav-actions .login {
    width: 130px;
    height: 100%;
    background-color: #1E2F46;
    text-align: center;
  }

  .main {
    width: 100%;
    height: 100%;
  }
</style>
