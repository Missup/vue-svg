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
        <el-button type="success" size="small" @click="goTest">保存</el-button>
        <el-button type="success" size="small">保存并发布</el-button>
        <el-button type="primary" size="small">导出</el-button>
      </div>
    </div>
    <div class="main">
      <div class="sidebar">
        <i class="iconfont icon-renwu"></i>
        <el-collapse v-model="activeNames" @change="handleChange">
          <el-collapse-item title="任务类型" name="1">
            <div class="sidebar-item" draggable v-for="(item, index) in sidebarArr" :key="index" :name="item.name" @dragstart="barDragstart(item, $event)" @dragend="barDragend">
              <i class="iconfont" :class="item.iconfont"></i>
              <span>{{ item.spanTxt }}</span>
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
        <div class="paint" @drop="paintDrop($event)" @dragover="paintDragover($event)">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" @mousedown="svgMouseDown" @mouseup="svgMouseUp" @mousemove="svgMouseMove">
            <defs>
              <marker id="tab_main-end-arrow" viewBox="0 -5 10 10" refX="42" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,-5L10,0L0,5"></path>
              </marker>
              <marker id="tab_main-mark-end-arrow" viewBox="0 -5 10 10" refX="7" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,-5L10,0L0,5"></path>
              </marker>
              <marker id="tab_main-selected-end-arrow" viewBox="0 -5 10 10" refX="30" markerWidth="5" markerHeight="5" orient="auto">
                <path d="M0,-5L10,0L0,5" fill="rgb(229, 172, 247)"></path>
              </marker>
            </defs>
            <text x="1107" y="15" fill="#E1784B" class="position"></text>
            <g class="graph">
              <path class="link dragline hidden" d="M0,0L0,0" style="marker-end: url('#tab_main-mark-end-arrow');"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint no-useless-call: "off" */
import d3 from 'd3'
// import common from '../../assets/js/common.js'
import GraphCreator from '../../assets/js/graphCreator.js'
export default {
  data () {
    return {
      sidebarArr: [
        {
          name: 'sideCode',
          iconfont: 'icon-jiaoben',
          spanTxt: '脚本'
        },
        {
          name: 'sideSql',
          iconfont: 'icon-sql',
          spanTxt: 'SQL'
        },
        {
          name: 'sideTime',
          iconfont: 'icon-jishiqi',
          spanTxt: '延时器'
        },
        {
          name: 'sideTrigger',
          iconfont: 'icon-chufaqi',
          spanTxt: '触发器'
        },
        {
          name: 'sideData',
          iconfont: 'icon-zhuxingtu',
          spanTxt: '数据流'
        }
      ],
      activeNames: ['1'],
      initialDate: {
        nodes: [],
        edges: [],
        participants: []
      },
      containerId: 'tab_main'
    }
  },
  methods: {
    goTest () {
      this.$router.push({ path: '/design/test' })
    },
    handleChange (val) {
      console.log(val)
    },
    barDragstart (val, ev) {
      let jsonObj = {
        name: val.name,
        icon: val.iconfont
      }
      ev.dataTransfer.setData('tr_data', JSON.stringify(jsonObj))
    },
    barDragend () {
    },
    paintDrop (ev) {
      ev.stopPropagation()
      ev.preventDefault()
      let position = {
        x: parseFloat(ev.offsetX - window.graphMain.consts.nodeWidth / 2),
        y: parseFloat(ev.offsetY - window.graphMain.consts.nodeHeight / 2)
      }
      let data = JSON.parse(ev.dataTransfer.getData('tr_data'))
      data = Object.assign(data, position)

      let node = window.graphMain.createNode(data)
      window.graphMain.nodes.push(node)

      console.log('window.graphMain.nodes', window.graphMain.nodes)

      window.graphMain.updateGraph()
    },
    paintDragover (ev) {
      ev.preventDefault()
    },
    svgMouseDown () {
      window.graphMain.svgMouseDown.call(window.graphMain, undefined)
    },
    svgMouseUp () {
      window.graphMain.svgMouseUp.call(window.graphMain, undefined)
    },
    svgMouseMove () {
      
      console.log(111111, d3.mouse(d3.select('g.graph').node()))
      // window.graphMain.showPosition.text('pos: ' + d3.mouse(window.graphMain.svgG.node())[0].toFixed(0) + ', ' + d3.mouse(window.graphMain.svgG.node())[1].toFixed(0))
    }
  },
  mounted () {
    window.graphMain = new GraphCreator(this.containerId, this.initialDate)

    window.graphMain.svg = d3.select('svg')
    window.graphMain.defs = d3.select('defs')
    window.graphMain.showPosition = d3.select('text.position')
    window.graphMain.svgG = d3.select('g.graph')
    window.graphMain.dragLine = d3.select('path')
    window.graphMain.paths = d3.select('g.graph').append('g').selectAll('g')
    window.graphMain.rects = d3.select('g.graph').append('g').selectAll('g')

    let drag = d3.behavior.drag()
      .origin(function (d) {
        // d = selected rect. The drag origin is the origin of the rect
        return {
          x: d.x,
          y: d.y
        }
      })
      .on('dragstart', function () {
        d3.select(this)
          .select('rect')
          .attr('width', String(window.graphMain.consts.nodeWidth))
          .attr('height', String(window.graphMain.consts.nodeHeight))
          .attr('rx', String(window.graphMain.consts.nodeRadius))
          .attr('ry', String(window.graphMain.consts.nodeRadius))
      })
      .on('drag', function (args) {
        window.graphMain.state.justDragged = true
        window.graphMain.dragmove.call(window.graphMain, args)
      })
      .on('dragend', function (args) {
        // args = rect that was dragged
        d3.select(this)
          .select('rect')
          .attr('width', String(window.graphMain.consts.nodeWidth))
          .attr('height', String(window.graphMain.consts.nodeHeight))
          .attr('rx', String(window.graphMain.consts.nodeRadius))
          .attr('ry', String(window.graphMain.consts.nodeRadius))
      })

    // listen for key events
    d3.select(window).on('keydown', function () {
      window.graphMain.svgKeyDown.call(window.graphMain)
    })
      .on('keyup', function () {
        window.graphMain.svgKeyUp.call(window.graphMain)
      })

    window.graphMain.drag = drag

    // listen for dragging
    let dragSvg = d3.behavior.zoom()
      .scaleExtent([0.3, 2])
      .on('zoom', function () {
        // console.log('zoom triggered');
        if (d3.event.sourceEvent.shiftKey) {
          // the internal d3 state is still changing
          return false
        } else {
          window.graphMain.zoomed.call(window.graphMain)
        }
        return true
      })
      .on('zoomstart', function () {
        // console.log('zoomstart triggered');
        var ael = d3.select('#' + window.graphMain.consts.activeEditId).node()
        if (ael) {
          ael.blur()
        }
        if (!d3.event.sourceEvent.shiftKey) d3.select('body').style('cursor', 'move')
      })
      .on('zoomend', function () {
        // console.log('zoomend triggered');
        d3.select('body').style('cursor', 'auto')
      })

    window.graphMain.dragSvg = dragSvg

    window.graphMain.svg.call(window.graphMain.dragSvg).on('dblclick.zoom', null)

    // $('svg').on('click', function () {
    //   $('#rMenu').hide()
    // })
    // $('svg').on('contextmenu', function () {
    //   $('#flowComponents div[name=selectBtn]').trigger('click')
    //   return false
    // })
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

  g.conceptG rect {
    fill: #15253f;
    stroke: #2e619e;
    stroke-width: 1px;
    fill-opacity: 0.5;
    stroke-opacity: 0.9;
  }
  g.conceptG text {
    fill: #ffffff;
    /* text-anchor: middle; */
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
