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
      <div class="sidebar">
        <i class="iconfont icon-renwu"></i>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="任务类型" name="1">
            <div class="sidebar-item" name="sideCode">
              <i class="iconfont icon-jiaoben"></i>
              <span>脚本</span>
            </div>
            <div class="sidebar-item" name="sideSql">
              <i class="iconfont icon-sql"></i>
              <span>SQL</span>
            </div>
            <div class="sidebar-item" name="sideTime">
              <i class="iconfont icon-jishiqi"></i>
              <span>延时器</span>
            </div>
            <div class="sidebar-item" name="sideTrigger">
              <i class="iconfont icon-chufaqi"></i>
              <span>触发器</span>
            </div>
            <div class="sidebar-item" name="sideData">
              <i class="iconfont icon-zhuxingtu"></i>
              <span>数据流</span>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="sideZoom">
        <span>-</span>
        <span>100%</span>
        <span>+</span>
      </div>
      <!-- 画布 -->
      <div class="container">
        <div class="paint"></div>
      </div>
    </div>
  </div>
</template>
<script>
import d3 from 'd3'
import GraphCreator from '../../assets/js/graphCreator.js'
export default {
  data () {
    return {
      activeNames: ['1'],
      initialDate: {
        nodes: [],
        edges: [],
        participants: []
      },
      containerId: 'tab_main',
      container: null
      // svg: null
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  },
  mounted () {
    this.container = d3.select('.paint').node()

    d3.select('.paint').append('svg')
      .attr('width', '100%')
      .attr('height', this.container.clientHeight)

    window.graphMain = new GraphCreator(this.containerId, d3.select('svg'), this.initialDate.nodes, this.initialDate.edges, this.initialDate.participants)
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
  .sidebar .el-collapse, .sidebar .el-collapse-item__wrap, .sidebar .el-collapse-item__header {
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
    padding-top: 20px;
  }
  .sidebar .el-collapse-item__header {
    padding: 0 10px 0 38px;
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
  }
  .sidebar {
    width: 130px;
    position: absolute;
    left: 0;
    top: 4px;
  }
  .sidebar .icon-renwu {
    position: absolute;
    top: 14px;
    left: 16px;
  }
  .container {
    height: 100%;
    background: url('../../../static/images/bg01.gif')
  }
  .paint {
    height: 100%;
    overflow-y: hidden;
  }
  .sidebar-item {
    width: 100px;
    height: 100px;
    background-color: #152740;
    border-radius: 4px;
    margin: 16px auto 0;
    cursor: pointer;
    text-align: center;
    padding-top: 20px;
  }
  .sidebar-item:first-child {
    margin-top: 0;
  }
  .sidebar-item .iconfont {
    font-size: 20px;
  }
  .sidebar-item span {
    display: block;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .sideZoom {
    /* width: 108px; */
    height: 30px;
    line-height: 30px;
    background-color: #132339;
    position: absolute;
    top: 10px;
    left: 150px;
  }
  .sideZoom span {
    display: block;
    float: left;
    height: 100%;
    text-align: center;
  }
  .sideZoom span:nth-child(2) {
    width: 48px;
  }
  .sideZoom span:nth-child(1), .sideZoom span:nth-child(3) {
    width: 30px;
    cursor: pointer;
  }
</style>
