<template>
  <div id="edit">
    <div class="header">
      <div class="header-breadcrumb fl">
        <i class="iconfont icon-18shengmingzhouqi"></i>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">default</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/design' }">default</el-breadcrumb-item>
          <el-breadcrumb-item>test</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="header-btns">
        <el-button-group>
          <el-button type="primary" size="small">设计模式</el-button>
          <el-button type="primary" size="small">调试模式</el-button>
        </el-button-group>
      </div>
      <div class="header-actions fr">
        <el-button type="success" size="small">保存</el-button>
        <el-button type="success" size="small">保存并发布</el-button>
        <el-button type="primary" size="small">导出</el-button>
      </div>
    </div>
    <div class="main">
      <iframe src="../../../static/workflow.html" width="100%" height="100%" frameborder="0" scrolling="auto"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style>
  .header-breadcrumb .el-breadcrumb__inner a, .header-breadcrumb .el-breadcrumb__inner.is-link, .header-breadcrumb .el-breadcrumb__inner {
    color: #a5b6c6;
  }
  .header-breadcrumb .el-breadcrumb__inner a:hover, .header-breadcrumb .el-breadcrumb__inner.is-link:hover {
    color: #409EFF;
  }
  .header-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner, .header-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .header-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .header-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #fff;
  }
  .header-breadcrumb .el-breadcrumb {
    padding-top: 18px;
  }
  /* .sidebar .el-collapse, .sidebar .el-collapse-item__wrap, .sidebar .el-collapse-item__header {
    border: none;
  }
  .sidebar .el-carousel__mask, .sidebar .el-cascader-menu, .sidebar .el-cascader-menu__item.is-disabled:hover, .sidebar .el-collapse-item__header, .sidebar .el-collapse-item__wrap {
    background-color: #22345a;
  }
  .sidebar .el-collapse-item__header, .sidebar .el-collapse-item__content {
    color: #fff;
  }
  .sidebar .el-collapse-item__content {
    background-color: #1b2f47;
  } */
  .main body {
    background: #141c27;
  }
</style>
<style scoped>
  #edit {
    height: 100%;
    position: relative;
    padding-top: 50px;
  }
  .header {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: #15253f;
    padding: 0 20px 0 10px;
  }
  .header-breadcrumb {
    height: 100%;
    position: relative;
    padding-left: 20px;
  }
  .header-breadcrumb .iconfont {
    position: absolute;
    left: 0;
  }
  .header-btns {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .main {
    height: 100%;
    position: relative;
    overflow-y: hidden;
  }
  .main body {
    background: #141c27;
  }
  /* .sidebar {
    width: 150px;
    position: absolute;
    left: 0;
    top: 4px;
  } */
</style>
