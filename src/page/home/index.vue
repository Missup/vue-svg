<template>
  <div id="home">
    <div class="clearfix">
      <div class="whole fl">
        <div class="header"><i class="iconfont icon-shouye"></i>今日工作流整体状态</div>
        <div class="whole-main">
          <div class="whole-left fl">
            <ve-ring height="100%" :data="chartData" :settings="chartSettings" :extend="chartExtend">
              <div class="chart-container">
                <span>{{ chartNum }}</span>
                <span>总工作流</span>
              </div>
            </ve-ring>
          </div>
          <div class="whole-right fr">
            <div>00:00:00</div>
            <div>平均工作时长</div>
            <div>13</div>
            <div>总任务数</div>
          </div>
        </div>
      </div>
      <div class="realtime fr">
        <div class="header"><i class="iconfont icon-shouye"></i>工作流实时信息</div>
        <div class="realtime-main">11111</div>
      </div>
    </div>
    <div class="table">
      <div class="table-header">
        <div class="table-title fl"><i class="iconfont icon-gongzuoliu"></i>今日工作流整体状态</div>
        <div class="table-actions fr">
          <div class="table-btns table-item fl">
            <el-button-group>
              <el-button type="primary" size="small">全部</el-button>
              <el-button type="primary" icon="el-icon-star-off" size="small">收藏</el-button>
            </el-button-group>
          </div>
          <div class="table-drop table-item fl">
            <template>
              <el-select v-model="selectVal" size="small" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </template>
          </div>
          <div class="table-search table-item fl">
            <el-input
              placeholder="请输入内容"
              suffix-icon="el-icon-search"
              size="small"
              v-model="searchVal">
            </el-input>
          </div>
        </div>
      </div>
      <template>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort = "{prop: 'date', order: 'descending'}"
          >
          <el-table-column
            prop="date"
            label="日期"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            sortable
            width="180">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            :formatter="formatter">
          </el-table-column>
        </el-table>
      </template>
    </div>
    <div class="page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import VeRing from 'v-charts/lib/ring.common'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/graphic'
// import d3 from 'd3'
let rows = [
  { 'name': '已完成工作流', 'num': 1 },
  { 'name': '运行中工作流', 'num': 1 },
  { 'name': '故障中工作流', 'num': 2 },
  { 'name': '已取消工作流', 'num': 0 },
  { 'name': '未开始工作流', 'num': 0 }
]
export default {
  data () {
    return {
      chartData: {
        columns: ['name', 'num'],
        rows: []
      },
      chartSettings: {
        label: {
          show: false
        }
      },
      chartExtend: {
        // 设置图例的位置和样式
        legend: {
          right: 20,
          top: '25%',
          icon: 'pin',
          width: 400,
          itemGap: 20,
          formatter (name) {
            let num = 0
            rows.map(v => {
              if (v.name === name) {
                num = v.num
              }
            })
            let arr = [
              '{a|' + num + '}',
              '{b|' + name + '}'
            ]
            return arr.join('\n')
          },
          textStyle: {
            color: '#fff',
            rich: {
              a: {
                fontSize: 40,
                padding: [10, 0, -20, -27]
              },
              b: {
                padding: [30, 0, 0, 0],
                lineHeight: 40,
                color: '#ccc'
              }
            }
          }
        },
        // 设置环图的位置
        series: {
          center: ['30%', '50%']
        }
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      searchVal: '',
      options: [{
        value: '选项1',
        label: '全部状态'
      }, {
        value: '选项2',
        label: '运行中'
      }, {
        value: '选项3',
        label: '未开始'
      }, {
        value: '选项4',
        label: '已取消'
      }, {
        value: '选项5',
        label: '已完成'
      }, {
        value: '选项6',
        label: '已失败'
      }],
      selectVal: '',
      currentPage: 4
    }
  },
  components: {
    VeRing
  },
  mounted () {
    this.chartData.rows = rows
    // console.log(d3)
  },
  computed: {
    chartNum () {
      let result = 0
      this.chartData.rows.map(v => {
        result += v.num
      })
      return result
    }
  },
  methods: {
    formatter (row, column) {
      return row.address
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>
<style scoped>
  #home {
    padding: 10px 30px 0;
  }
  .header {
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-size: 16px;
  }
  .header i {
    margin-right: 6px;
  }
  .whole-main {
    height: 280px;
    border: 1px solid #4960DC;
    border-radius: 4px;
    padding: 20px 0;
  }
  .whole {
    width: 64%;
  }
  .whole-left {
    width: 66%;
    height: 100%;
    border-right: 1px solid #2B365D;
  }
  .whole-right {
    width: 33%;
    height: 100%;
    text-align: center;
  }
  .realtime {
    width: 34%;
  }
  .realtime-main {
    height: 280px;
    border: 1px solid #2B365D;
  }
  .chart-container {
    font-size: 22px;
    text-align: center;
    position: absolute;
    left: 30%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
  .chart-container span {
    display: block;
  }
  .chart-container span:first-child {
    font-size: 40px;
    margin-bottom: 16px;
  }
  .chart-container span:last-child {
    color: #ccc;
  }
  .whole-right div:nth-child(1), .whole-right div:nth-child(3) {
    font-size: 30px;
    margin-top: 56px;
    margin-bottom: 12px;
  }
  .whole-right div:nth-child(2), .whole-right div:nth-child(4) {
    color: #ccc;
  }
  .table {
    background-color: #1E3555;
    margin-top: 30px;
  }
  .table-header {
    height: 50px;
    line-height: 50px;
    padding: 0 20px 0 10px;
    font-size: 14px;
  }
  .table-title i {
    margin-right: 6px;
  }
  .table-item {
    margin-left: 20px;
  }
  .table-btns {
    width: 146px;
  }
  .table-btns .el-button-group {
    width: 100%;
  }
  .table-btns .el-button {
    width: 50% !important;
  }
  .table-drop {
    width: 130px;
  }
  .table-search {
    width: 144px;
  }
</style>
