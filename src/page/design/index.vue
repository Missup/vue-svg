<template>
  <div id="design">
    <div class="sidebar">
      <el-menu
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#1E3555"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
          <span slot="title">导航一</span>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-submenu>
        <el-menu-item index="2">
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span slot="title">导航三</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="main">
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
            <div class="table-actions table-item fl">
              <el-button type="primary" size="small" @click="centerDialogVisible = true">新建工作流</el-button>
              <el-button type="primary" size="small">导入工作流</el-button>
            </div>
          </div>
        </div>
        <template>
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'name', order: 'descending'}"
            >
            <el-table-column
              prop="name"
              label="工作流名称"
              sortable>
              <template slot-scope="scope">
                <i class="el-icon-star-off"></i>
                <span style="margin-left: 10px">{{ scope.row.name }}</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="user"
              label="创建人"
              sortable>
            </el-table-column>
            <el-table-column
              prop="num"
              label="任务数"
              sortable>
            </el-table-column>
            <el-table-column
              prop="status"
              label="发布状态"
              sortable>
            </el-table-column>
            <el-table-column
              label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">
                  <i class="iconfont icon-sheji"></i>
                </el-button>
                <el-button
                  size="mini"
                  @click="handleAction(scope.$index, scope.row)">
                  <i class="iconfont icon-xiaxian"></i>
                  <!-- <i class="iconfont icon-fabu"></i> -->
                </el-button>
                <el-button
                  size="mini"
                  @click="handleAction(scope.$index, scope.row)">
                  <i class="iconfont icon-shanchu"></i>
                </el-button>
                <el-button
                  size="mini"
                  @click="handleCopy(scope.$index, scope.row)">
                  <i class="iconfont icon-yilaibanben"></i>
                </el-button>
                <el-button
                  size="mini"
                  @click="handleWatch(scope.$index, scope.row)">
                  <i class="iconfont icon-18shengmingzhouqi"></i>
                </el-button>
              </template>
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

      <!-- 新建工作流弹窗 -->
      <el-dialog
        title="新建工作流"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="名称" prop="name">
            <el-input type="text" v-model="ruleForm.name" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item label="描述" prop="desc">
            <el-input type="text" v-model="ruleForm.desc" auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="success" @click="saveForm('ruleForm')">保存</el-button>
          </el-form-item>
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tableData: [{
        name: 'etl',
        user: 'admin',
        num: '1',
        status: '已发布'
      }, {
        name: 'daily job',
        user: 'admin',
        num: '3',
        status: '已发布'
      }, {
        name: 'a',
        user: 'admin',
        num: '2',
        status: '已发布'
      }, {
        name: 'My Workflow',
        user: 'admin',
        num: '7',
        status: '已下线'
      }, {
        name: 'test',
        user: 'admin',
        num: '1',
        status: '已发布'
      }, {
        name: 'add1',
        user: 'admin',
        num: '0',
        status: '未发布'
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
      currentPage: 4,
      centerDialogVisible: false,
      ruleForm: {
        name: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入工作流名称', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请输入工作流描述', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
  },
  mounted () {
  },
  computed: {
  },
  methods: {
    // formatter (row, column) {
    //   return row.address + 'hahaha'
    // },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    // 跳转至工作流设计页面进行编辑
    handleEdit (index, row) {
      console.log(index, row)
    },
    // 下线或发布或删除，弹出弹窗
    handleAction (index, row) {
      console.log('弹窗操作')
    },
    // 复制当前工作流，弹窗弹窗
    handleCopy (index, row) {
      console.log('复制-弹窗操作')
    },
    // 查看当前工作流生命周期，弹窗
    handleWatch (index, row) {
      console.log('查看-弹窗操作')
    },
    // 新建工作流-保存
    saveForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('通过校验，跳转到设计页面')
          this.$router.push({ path: '/design/edit' })
          this.centerDialogVisible = false
        } else {
          console.log('未通过校验')
          return false
        }
      })
    }
  }
}
</script>
<style scoped>
  #design {
    padding: 28px 30px;
    position: relative;
  }
  .sidebar {
    width: 170px;
    position: absolute;
  }
  .sidebar .el-menu {
    border-right: none;
  }
  .sidebar .el-submenu .el-menu-item {
    min-width: auto;
  }

  .main {
    margin-left: 194px;
  }
  .table {
    background-color: #1E3555;
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
  .table-actions .el-button+.el-button {
    margin-left: 0;
  }
  .table .el-table .el-button {
    padding: 0;
    border: none;
    background: transparent;
  }
 .table .el-table .el-button .iconfont {
  font-size: 20px;
 }
</style>
