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
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="任务类型" name="1">
            <div class="box" id="flowComponents">
              <div class="components-btn noComponent clearfix" name="selectBtn">
                <i class="tools select-icon"></i><span>选择</span>
              </div>
              <div class="components-btn noComponent" name="addStartEndBtn" draggable="false">
                <i class="tools addStartEnd-icon"></i><span>自动插入</span>
              </div>
              <div class="components-btn" name="startComponent" type="start" draggable="true" data-show="S">
                <i class="tools start-icon"></i><span>开始</span>
              </div>
              <div class="components-btn clearfix" name="endComponent" type="end" draggable="true" data-show="E">
                <i class="tools end-icon"></i><span>结束</span>
              </div>
              <div class="components-btn clearfix" name="ordinaryActivity" type="activity" draggable="true" data-show="普通活动">
                <i class="tools ordinary-icon"></i><span>普通活动</span>
              </div>
              <div class="components-btn clearfix" name="blockActivity" type="activity" draggable="true" data-show="块活动">
                <i class="tools block-icon"></i><span>块活动</span>
              </div>
              <div class="components-btn clearfix" name="subFlowActivity" type="activity" draggable="true" data-show="子活动">
                <i class="tools subFlow-icon"></i><span>子活动</span>
              </div>
              <div class="components-btn clearfix" name="routeActivity" type="activity" draggable="true" data-show="路径活动">
                <i class="tools route-icon"></i><span>路径活动</span>
              </div>
              <div class="components-btn noComponent clearfix" name="NOROUTING">
                <i class="tools line-icon"></i><span>转移</span>
              </div>
              <div class="components-btn noComponent clearfix" name="SIMPLEROUTING">
                <i class="tools polyline-icon"></i><span>自转移</span>
              </div>
              <div class="components-btn noComponent clearfix" name="000ROUTING">
                <i class="tools loop-icon"></i><span>循环</span>
              </div>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div class="container" data-tab="tab_main">
        <div class="paint svg-container">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import d3 from 'd3'
export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  },
  mounted () {}
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
    width: 150px;
    position: absolute;
    left: 0;
    top: 4px;
  }
</style>
