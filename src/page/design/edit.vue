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
        <div class="paint" @drop="paintDrop($event)" @dragover="paintDragover($event)"></div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint no-useless-call: "off" */
import d3 from 'd3'
import common from '../../assets/js/common.js'
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
      containerId: 'tab_main',
      container: null
      // elesObj: {
      //   svg: null,
      //   defs: null,
      //   showPosition: null,
      //   svgG: null,
      //   dragLine: null,
      //   paths: null,
      //   rects: null
      // }
    }
  },
  methods: {
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
    }
  },
  mounted () {
    console.log('1212', common.seqerNodeID())

    // window.graphMain = new GraphCreator(this.containerId, this.elesObj, this.initialDate)
    window.graphMain = new GraphCreator(this.containerId, this.initialDate)

    this.container = d3.select('.paint').node()

    let svg = d3.select('.paint').append('svg')
      .attr('width', '100%')
      .attr('height', this.container.clientHeight)
      .attr('id', 'svg')

    // this.elesObj.svg = svg
    window.graphMain.svg = svg

    // console.log('graphMain', window.graphMain)

    // define arrow markers for graph links
    let defs = svg.append('defs')
    defs.append('svg:marker')
      .attr('id', this.containerId + '-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 42)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')

    // define arrow markers for leading arrow
    defs.append('marker')
      .attr('id', this.containerId + '-mark-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 7)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')

    // 定义选中样式的箭头
    defs.append('marker')
      .attr('id', this.containerId + '-selected-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 30)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', 'rgb(229, 172, 247)')

    // this.elesObj.defs = defs
    window.graphMain.defs = defs

    let showPosition = svg.append('text')
      .attr({
        'x': 1107,
        'y': 15,
        'fill': '#E1784B'
      })

    // this.elesObj.showPosition = showPosition
    window.graphMain.showPosition = showPosition

    let svgG = svg.append('g')
      .classed(window.graphMain.consts.graphClass, true)

    // this.elesObj.svgG = svgG
    window.graphMain.svgG = svgG

    // displayed when dragging between nodes
    let dragLine = svgG.append('path')
      .attr('class', 'link dragline hidden')
      .attr('d', 'M0,0L0,0')
      .style('marker-end', 'url(#' + this.containerId + '-mark-end-arrow)')

    window.graphMain.dragLine = dragLine

    // svg nodes and edges
    let paths = svgG.append('g').selectAll('g')

    window.graphMain.paths = paths

    let rects = svgG.append('g').selectAll('g')

    window.graphMain.rects = rects

    let drag = d3.behavior.drag()
      .origin(function (d) {
        console.log('d', d)
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

    svg.on('mousedown', function (d) {
      window.graphMain.svgMouseDown.call(window.graphMain, d)
    })

    svg.on('mouseup', function (d) {
      window.graphMain.svgMouseUp.call(window.graphMain, d)
    })

    svg.on('mousemove', function (d) {
      window.graphMain.showPosition.text('pos: ' + d3.mouse(window.graphMain.svgG.node())[0].toFixed(0) + ', ' + d3.mouse(window.graphMain.svgG.node())[1].toFixed(0))
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
