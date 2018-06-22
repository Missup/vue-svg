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
        <el-button type="success" size="small" @click="test">保存</el-button>
        <el-button type="success" size="small">保存并发布</el-button>
        <el-button type="primary" size="small">导出</el-button>
      </div>
    </div>
    <!-- <div class="main">
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
    </div> -->
    <div class="main">
      <!-- 顶部菜单 -->
      <div class="subheader editor-toolbar">
        <div class="column pop-btn" data-content="保存" data-position="bottom center" data-variation="mini"><i class="save icon"></i></div>
        <div class="divider"></div>
        <div class="column pop-btn" data-content="剪切" data-position="bottom center" data-variation="mini"><i class="cut icon"></i></div>
        <div class="column pop-btn" data-content="复制" data-position="bottom center" data-variation="mini"><i class="copy icon"></i></div>
        <div class="column pop-btn" id="test-loadXML" data-content="粘贴" data-position="bottom center" data-variation="mini"><i class="paste icon"></i></div>
        <div class="column pop-btn" id="delete-graph" data-content="清空" data-position="bottom center" data-variation="mini"><i class="trash icon"></i></div>
        <div class="column pop-btn" id="delete-ele" data-content="删除" data-position="bottom center" data-variation="mini"><i class="remove icon"></i></div>
        <div class="divider"></div>
        <div class="column pop-btn" data-content="撤销" data-position="bottom center" data-variation="mini"><i class="repeat icon"></i></div>
        <div class="column pop-btn" data-content="恢复" data-position="bottom center" data-variation="mini"><i class="undo icon"></i></div>
        <div class="divider"></div>
        <div class="column pop-btn" id="zoom-enlarge" data-content="放大" data-position="bottom center" data-variation="mini"><i class="zoom icon"></i></div>
        <div class="column pop-btn" id="zoom-narrow" data-content="缩小" data-position="bottom center" data-variation="mini"><i class="zoom out icon"></i></div>
        <div class="column pop-btn" id="reset-zoom" data-content="归位" data-position="bottom center" data-variation="mini"><i class="maximize icon"></i></div>
        <div class="divider"></div>
        <div class="column pop-btn" data-content="导入json" data-position="bottom center" data-variation="mini"><i class="sign in icon"></i></div>
        <div class="column pop-btn small popup" data-content="导出json" data-position="bottom center" data-variation="mini"><i class="sign out icon"></i></div>
        <div class="divider"></div>
        <div class="column pop-btn" id="helper" data-content="将左侧活动拖至编辑区" data-position="bottom center" data-variation="mini"><i class="help circle outline icon"></i></div>
      </div>
      <div class="full clearfix">
        <!-- 左侧控件 -->
        <div id="flowComponents" class="full-left">
          <div class="components-btn noComponent clearfix" name="selectBtn">
            <div><i class="tools select-icon"></i><span>选择</span></div>
          </div>
          <div class="components-btn noComponent" name="addStartEndBtn" draggable="false">
            <div><i class="tools addStartEnd-icon"></i><span>自动插入</span></div>
          </div>
          <div class="components-btn" name="startComponent" type="start" draggable="true" data-show="S">
            <div><i class="tools start-icon"></i><span>开始</span></div>
          </div>
          <div class="components-btn clearfix" name="endComponent" type="end" draggable="true" data-show="E">
            <div><i class="tools end-icon"></i><span>结束</span></div>
          </div>
          <div class="components-btn clearfix" name="ordinaryActivity" type="activity" draggable="true" data-show="普通活动">
            <div><i class="tools ordinary-icon"></i><span>普通活动</span></div>
          </div>
          <div class="components-btn clearfix" name="blockActivity" type="activity" draggable="true" data-show="块活动">
            <div><i class="tools block-icon"></i><span>块活动</span></div>
          </div>
          <div class="components-btn clearfix" name="subFlowActivity" type="activity" draggable="true" data-show="子活动">
            <div><i class="tools subFlow-icon"></i><span>子活动</span></div>
          </div>
          <div class="components-btn clearfix" name="routeActivity" type="activity" draggable="true" data-show="路径活动">
            <div><i class="tools route-icon"></i><span>路径活动</span></div>
          </div>
          <div class="components-btn noComponent clearfix" name="NOROUTING">
            <div><i class="tools line-icon"></i><span>转移</span></div>
          </div>
          <div class="components-btn noComponent clearfix" name="SIMPLEROUTING">
            <div><i class="tools polyline-icon"></i><span>自转移</span></div>
          </div>
          <div class="components-btn noComponent clearfix" name="000ROUTING">
            <div><i class="tools loop-icon"></i><span>循环</span></div>
          </div>
        </div>
        <!-- 工作区等 -->
        <div class="full-right tab clearfix">
          <div class="ui top attached tabular mini menu">
              <a class="item active" data-tab="tab_main">
                <i class="remove red icon"></i>过程
              </a>
          </div>
          <div class="ui bottom attached tab active" data-tab="tab_main">
              <form id="containerForm" method="post" action="">
              <div id="container" class="ui top attached tab active full-right-top view svg-container" data-tab="first">
                <!-- svg -->
              </div>
              <div id="xpdlContainer" class="ui top attached tab view content-div" data-tab="second">
                <xmp>
                  <!-- xpdl -->
                </xmp>
              </div>
              <div id="xmlContainer" class="ui top attached tab view content-div" data-tab="third">
                <xmp>
                  <!-- xml -->
                </xmp>
              </div>
              <div class="full-right-btn ui bottom attached tabular mini menu">
                <a class="item active" data-tab="first">图标视图</a>
                <a class="item" data-tab="second">xpdl视图</a>
                <a class="item" data-tab="third">xml视图</a>
              </div>
              <div id="propertiesWrapper" class="full-right-bottom">
                <div class="component-name"><i class="angle double down icon"></i><span></span></div>
                <div class="component-prop content-div">
                  <!-- activity属性 -->
                </div>
              </div>

              <input name="xpdlcontent" type="hidden" value="">
              <input name="xmlcontent" type="hidden" value="">

              <input type="hidden" id="wFID" name="wFID" value="">
              <input type="hidden" id="wFType" name="wFType" value="money">
              <input type="hidden" id="subType" name="subType" value="">
              <input type="hidden" id="depart" name="depart" value="">
              <input type="hidden" id="departID" name="departID" value="">
              <input type="hidden" id="formName" name="formName" value="">
              <input type="hidden" id="formId" name="formId" value="">
              <input type="hidden" id="formType" name="formType" value="wfd_form">
              <input type="hidden" id="mode" name="mode" value="">
              <input type="hidden" id="dt" name="dt" onFocus="WdatePicker({dateFmt:'dd HH:mm',skin:'blue'});" value="">
              <input type="hidden" id="dataObjectID" name="dataObjectID" value="">
              <input type="hidden" id="securityID" name="securityID" value="">
              <input type="hidden" id="securityName" name="securityName" value="">
              <input type="hidden" id="orderNo" name="orderNo" value="">
            </form>
          </div>
        </div>
      </div>
      
      <!-- 弹出层和其他 -->

      <!-- 导入导出弹出层 -->
      <div class="ui segment small modal json_data">
          <i class="close icon"></i>
          <div class="header">
            导入数据
          </div>
          <div class="content">
            <textarea></textarea>
          </div>
          <div class="actions">
              <div class="ui negative button">No </div>
              <div class="ui positive right labeled icon button">Yes <i class="checkmark icon"></i> </div>
          </div>
      </div>
      <!-- 右键菜单 -->
      <div id="rMenu" class="ui vertical mini menu">
        <a class="item" name="removeMenu">删除<i class="remove icon"></i></a>
        <a class="item" name="propMenu">属性<i class="book icon"></i></a>
        <a class="item" name="editMenu">编辑<i class="edit icon"></i></a>
        <a class="item" name="toFront">置前<i class="object ungroup icon"></i></a>
      </div>
      <!-- 属性弹出层 start -->
      <div class="ui coupled modal prop_node">
        <i class="close cancel icon"></i>
          <div class="ui pointing secondary menu">
          <a class="item active" data-tab="one">常规</a>
          <a class="item" data-tab="two_1">工具</a>
          <a class="item hideitem" data-tab="two_2">块活动</a>
          <a class="item hideitem" data-tab="two_3">子工作流</a>
          <a class="item" data-tab="three">前置条件</a>
          <a class="item" data-tab="four">后置条件</a>
          <a class="item" data-tab="five">扩展属性集</a>
          <a class="item" data-tab="six">超时限制</a>
          <a class="item" data-tab="seven">高级</a>
          <a class="item" data-tab="eight">监控信息</a>
        </div>
        <!-- 常规item start -->
        <div class="ui tab segment active" data-tab="one">
          <div class="ui mini form conventional">
            <div class="fields">
                <div class="five wide field">
                  <label>ID:</label>
                  <input name="ID" type="text" placeholder="ID">
                </div>
                <div class="five wide field">
                  <label>名称:</label>
                  <input name="name" type="text" placeholder="名称">
                </div>
                <div class="five wide field">
                  <label>类型:</label>
                  <input name="type" type="text" placeholder="类型" readonly>
              </div>
            </div>
            <div class="ui divider hidden"></div>
            <div class="field">
                <label>参与者集:</label>
              <div class="two fields">
                <div class="five wide field definition_field">
                            <select class="ui search dropdown" name="definition_role">
                        <option value="">请选择</option>
                        <option value="0">(空)</option>
                  </select>               
                        </div>
                        <div class="five wide field">
                  <button class="ui facebook mini button definitionBtn"><i class="write icon"></i>定义</button>
                        </div>
                      </div>
                    </div>
                    <div class="fields">
                      <div class="inline field">
                    <div class="ui checkbox isTracking">
                        <input type="checkbox" tabindex="0" class="hidden">
                        <label>是否全程跟踪</label>
                        <input type="hidden" name="isResponsible" value="">
                    </div>
                </div>
                <div class="inline field">
                    <div class="ui checkbox isReceiveTask">
                        <input type="checkbox" tabindex="0" class="hidden">
                        <label>是否自动接收任务委派</label>
                        <input type="hidden" name="autoAcceptAllAssignments" value="">
                    </div>
                </div>
            </div>
            <div class="ui divider hidden"></div>
            <div class="fields">
              <div class="five wide field">
                  <label>开始模式:</label>
                  <select name="startMode" class="ui search dropdown">
                    <option value="">开始模式</option>
                      <option value="manual">手动</option>
                      <option value="automatic">自动</option>
                  </select>
              </div>
              <div class="five wide field">
                  <label>完成模式:</label>
                  <select name="finishMode" class="ui search dropdown">
                    <option value="">完成模式</option>
                      <option value="manual">手动</option>
                      <option value="automatic">自动</option>
                  </select>
              </div>
                <div class="five wide field">
                    <label>优先级:</label>
                    <input name="priority" type="text" placeholder="名称">
                </div>
            </div>
            <div class="fields">
                      <div class="inline field">
                    <div class="ui checkbox completeAllAssignmentsDiv">
                        <input type="checkbox" tabindex="0" class="hidden">
                        <label>是否多人处理</label>
                        <input type="hidden" name="completeAllAssignments" value="">
                    </div>
                </div>
                <div class="inline field">
                    <div class="ui checkbox assignmentsOrderDiv">
                        <input type="checkbox" tabindex="0" class="hidden">
                        <label>多人处理是否顺序执行</label>
                        <input type="hidden" name="assignmentsOrder" value="">
                    </div>
                </div>
                <div class="inline field">
                    <div class="ui checkbox">
                        <input type="checkbox" tabindex="0" class="hidden">
                        <label>按参与者生成环节实例</label>
                        <input type="hidden" name="isMulInstance" value="">
                    </div>
                </div>
            </div>
            <div class="field">
                  <label>描述：</label>
                  <textarea name="description" rows="2"></textarea>
              </div>
              <div class="fields">
              <div class="five wide field taskAssign">
                  <label>任务委派规则:</label>
                  
              </div>
              <div class="five wide field MustActivity">
                  <label>必须结束环节:</label>
                  <!-- select_tpl -->
              </div>
            </div>
          </div>
        </div><!-- 常规item end -->
        <!-- 活动属性-工具item start -->
        <div class="ui tab segment" data-tab="two_1">
          <div class="ui mini form grid toolgrid">
              <div class="computer only row">
                <div class="twelve wide tablet computer column">
                  <table class="ui blue sortable selectable celled striped compact table">
                  <thead>
                    <tr>
                      <th class="one wide">选择</th>
                      <th class="two wide">应用</th>
                      <th class="two wide">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="ui radio checkbox">
                          <input type="radio" name="s" tabindex="0" class="hidden">
                        </div>
                      </td>
                      <td>1111111</td>
                      <td>Aell</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="ui radio checkbox">
                          <input type="radio" name="s" tabindex="0" class="hidden">
                        </div>
                      </td>
                      <td>2222222</td>
                      <td>Bell</td>
                    </tr>
                    <tr>
                      <td>
                        <div class="ui radio checkbox">
                          <input type="radio" name="s" tabindex="0" class="hidden">
                        </div>
                      </td>
                      <td>3333333</td>
                      <td>Cell</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="three wide column">
                  <div class="ui vertical">
                    <button class="ui positive basic mini button toolAddBtn"><i class="icon plus"></i> 添 加</button>
                  <button class="ui primary basic mini button showDialog"><i class="icon write"></i> 编 辑</button>
                  <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                  </div>
                </div>
              </div>
              <div class="toolgrid-empty"></div><!--兼容IE11-->
          </div>
        </div><!-- 活动属性-工具item end -->
        <!-- 活动属性-块活动item start -->
        <div class="ui tab segment" data-tab="two_2">
          <div class="ui mini form">
            <div class="five wide field">
                <label>块标识:</label>
                <input type="text" placeholder="块标识">
            </div>
          </div>
        </div><!-- 活动属性-块活动item end -->
        <!-- 活动属性-子活动item start -->
        <div class="ui tab segment" data-tab="two_3">
          <div class="ui mini form">
            <div class="fields">
              <div class="five wide field">
                  <label>工作流过程:</label>
                  <select class="ui search dropdown">
                      <option value="">选择</option>
                      <option value="1">过程</option>
                  </select>
              </div>
              <div class="five wide field">
                  <label>执行:</label>
                  <select class="ui search dropdown">
                      <option value="">选择</option>
                      <option value="0">(空)</option>
                      <option value="1">同步</option>
                      <option value="2">异步</option>
                  </select>
              </div>
            </div>
            <div class="ui divider hidden"></div>
            <div class="ui grid toolgrid">
                <div class="computer only row">
                  <div class="twelve wide tablet computer column">
                    <table class="ui blue sortable selectable celled striped compact table">
                    <thead>
                      <tr>
                        <th class="one wide">选择</th>
                        <th class="two wide">应用</th>
                        <th class="two wide">类型</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <div class="ui radio checkbox">
                            <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                          </div>
                        </td>
                        <td>1111111</td>
                        <td>Aell</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="ui radio checkbox">
                            <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                          </div>
                        </td>
                        <td>2222222</td>
                        <td>Bell</td>
                      </tr>
                      <tr>
                        <td>
                          <div class="ui radio checkbox">
                            <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                          </div>
                        </td>
                        <td>3333333</td>
                        <td>Cell</td>
                      </tr>
                    </tbody>
                  </table>
                  </div>
                  <div class="three wide column">
                    <div class="ui vertical">
                      <button class="ui positive basic mini button"><i class="icon plus"></i> 添 加</button>
                    <button class="ui primary basic mini button"><i class="icon write"></i> 编 辑</button>
                    <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div><!-- 活动属性-子活动item end -->
        <!-- 前置条件 start -->
        <div class="ui tab segment" data-tab="three">
          <div class="ui mini form front_condition">
            <div class="five wide field">
                <label>汇聚类型:</label>
                <select name="convergeType" class="ui search dropdown convergeType">
                    <option value="">选择</option>
                    <option value="0">(空)</option>
                    <option value="AND">And</option>
                    <option value="XOR">Xor</option>
                </select>
            </div>
            <div class="otherOpt">
              <div class="hideDiv">
                <div class="fourteen wide two fields">
                  <div class="four wide field syncType">
                              <!-- select_tpl -->
                          </div>
                          <div class="five wide field">
                      <input type="text" name="voteText" placeholder="">
                  </div>
                </div>
              </div>
              <div class="hideDiv">
                <div class="inline fields">
                          <label for="isCreateNew_radio">多次进入:</label>
                          <div class="field">
                              <div class="ui radio checkbox">
                                  <input type="radio" name="isCreateNew_radio" tabindex="true" class="hidden">
                                  <label>是</label>
                              </div>
                          </div>
                          <div class="field">
                              <div class="ui radio checkbox">
                                  <input type="radio" name="isCreateNew_radio" tabindex="false" class="hidden">
                                  <label>否</label>
                              </div>
                          </div>
                          <input type="hidden" name="isCreateNew" value="">
                      </div>
                    </div>
              
            </div>
          </div>
          <div class="frontCond-empty"></div>
        </div><!-- 前置条件 end -->
        <!-- 后置条件 start -->
        <div class="ui tab segment" data-tab="four">
          <div class="ui mini form post_condition">
            <div class="inline five wide field">
                <label>转出类型:</label>
                <select name="splitType" class="ui search dropdown">
                    <option value="">选择</option>
                    <option value="AND">And</option>
                    <option value="XOR">Xor</option>
                </select>
            </div>
            <div class="ui horizontal divider">选择目标活动</div>
            <div class="targetActivityShow content-div">
              <div class="ui middle aligned list">
                
              </div>
            </div>
            <div class="targetActivity invisible">
              
            </div>
            
          </div>
        </div><!-- 后置条件 end -->
        <!-- 扩展属性集 start -->
        <div class="ui tab segment" data-tab="five">
          <div class="ui mini form grid extended_attr">
              <div class="computer only row">
                <div class="twelve wide tablet computer column">
                  <table class="ui blue sortable selectable celled striped compact table">
                  <thead>
                    <tr>
                      <th class="one wide">选择</th>
                      <th class="two wide">名</th>
                      <th class="two wide">值</th>
                    </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </table>
                </div>
                <div class="three wide column">
                  <div class="ui vertical">
                    <button class="ui positive basic mini button extendAttrAddBtn"><i class="icon plus"></i> 添 加</button>
                  <button class="ui primary basic mini button extendAttrEditBtn"><i class="icon write"></i> 编 辑</button>
                  <button class="ui negative basic mini button extendAttrDelBtn"><i class="icon remove"></i> 删 除</button>
                  </div>
                </div>
              </div>
          </div>
          <div class="extAttr-empty"></div>
        </div><!-- 扩展属性集 end -->
        <!-- 超时限制 start-->
        <div class="ui tab segment" data-tab="six">
          <div class="ui mini form timeout_limit">
            <div class="five wide field">
                <label>限制时间:</label>
                <input type="text" name="limitTime" placeholder="限制时间">
            </div>
            <div class="five wide field">
                <label>到达限制时间执行代理:</label>
                      <select name="limitAgentClassName" class="ui search dropdown">
                    <option value="">请选择</option>
                    <option value="">(空)</option>
                    <option value="workflow.sendNext">自动提交</option>
                    <option value="workflow.mailParty">邮件通知参与者</option>
                    <option value="workflow.mailPartyLeader">邮件通知参与者领导</option>
              </select>               
                    </div>
                    <div class="five wide field">
                <label>警告时间:</label>
                <input type="text" name="warnTime" placeholder="警告时间">
            </div>
            <div class="five wide field">
                <label>到达警告时间执行代理:</label>
                      <select name="warnAgentClassName" class="ui search dropdown">
                    <option value="">请选择</option>
                    <option value="">(空)</option>
                    <option value="workflow.sendNext">自动提交</option>
                    <option value="workflow.mailParty">邮件通知参与者</option>
                    <option value="workflow.mailPartyLeader">邮件通知参与者领导</option>
              </select>               
                    </div>
                    <div class="ui horizontal divider">最终期限集</div>
                    <div class="ui grid timeout_limit_grid">
                <div class="computer only row">
                  <div class="twelve wide tablet computer column content-div">
                    <table class="ui blue sortable selectable celled striped compact table">
                    <thead>
                      <tr>
                        <th>持续时间</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                  </div>
                  <div class="three wide column">
                    <div class="ui vertical">
                      <button class="ui positive basic mini button timeoutLimitAddBtn"><i class="icon plus"></i> 增 加</button>
                    <button class="ui primary basic mini button timeoutLimitEditBtn"><i class="icon write"></i> 编 辑</button>
                    <button class="ui negative basic mini button timeoutLimitRemoveBtn"><i class="icon remove"></i> 移 走</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div><!-- 超时限制 end-->
        <!-- 高级 start-->
        <div class="ui tab segment" data-tab="seven">
          <div class="ui mini form highLevel">
            <div class="five wide field">
                <label>结束规则:</label>
                <input type="text" name="finishRule" placeholder="结束规则">
            </div>
            <div class="five wide field">
                <label>建立事件:</label>
                <input type="text" name="activityCreateEvent" placeholder="建立事件">
            </div>
            <div class="five wide field">
                <label>结束事件:</label>
                <input type="text" name="activityEndEvent" placeholder="结束事件">
            </div>
          </div>
          <div class="highLevel-empty"></div>
        </div><!-- 高级 end-->
        <!-- 监控信息 start -->
        <div class="ui tab segment" data-tab="eight">
          <div class="ui mini form monitorinf">
            <div class="five wide field isResponsibleTem">
                <label>是否为临时监控:</label>
                      <!-- select_tpl -->           
                    </div>
                    <div class="ui grid monitorinf_grid">
                <div class="computer only row">
                  <div class="twelve wide tablet computer column content-div">
                    <table class="ui blue sortable selectable celled striped compact table">
                      <thead>
                        <tr>
                          <th>监控者</th>
                        </tr>
                      </thead>
                    <tbody>
                      
                    </tbody>
                  </table>
                  </div>
                  <div class="three wide column">
                    <div class="ui vertical">
                      <button class="ui positive basic mini button monitorinfAddBtn"><i class="icon plus"></i> 增 加</button>
                    <button class="ui primary basic mini button monitorinfEditBtn"><i class="icon write"></i> 编 辑</button>
                    <button class="ui negative basic mini button monitorinfRemoveBtn"><i class="icon remove"></i> 删 除</button>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div><!-- 监控信息 end -->
          <div class="actions inverted clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>
      </div>
      <!-- 属性弹出层 end -->

      <!-- 活动属性-常规-定义 -->
      <div class="ui coupled small modal tab conventional_definition def_common"></div>

      <!-- 活动属性-工具-添加 -->
      <div class="ui coupled small modal tab segment tool_add">
            <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                      <label>类型:</label>
                      <select class="ui search dropdown">
                    <option value="">请选择</option>
                    <option value="1">应用</option>
                    <option value="2">程序</option>
              </select>               
                  </div>
                  <div class="ten wide field">
                <label>应用:</label>
              <div class="two fields">
                <div class="field">
                            <select class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="1">修改数据</option>
                        <option value="2">发送邮件</option>
                        <option value="3">执行其它toolagent</option>
                        <option value="4">获取数据</option>
                  </select>               
                        </div>
                        <div class="five wide field">
                  <button class="ui facebook mini button definitionBtn"><i class="write icon"></i>定义</button>
                        </div>
                      </div>
                  </div>
              </div>
                <div class="ui horizontal divider">实际参数集</div>
                <div class="ui grid">
                <div class="row">
                <div class="ten wide tablet column">
                  <table class="ui blue sortable selectable celled striped compact table">
                  <thead>
                    <tr>
                      <th class="one wide">选择</th>
                      <th class="two wide">应用</th>
                      <th class="two wide">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="tr1">
                      <td>
                        <div class="ui radio checkbox">
                          <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                        </div>
                      </td>
                      <td>1111111</td>
                      <td>Aell</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="three wide column">
                  <div class="ui vertical">
                    <button class="ui positive basic mini button actualParametersAdd1"><i class="icon plus"></i> 添 加</button>
                  <button class="ui primary basic mini button"><i class="icon write"></i> 编 辑</button>
                  <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                  </div>
                </div>
              </div>
            </div>
                <div class="ui divider hidden"></div>
        <div class="field">
            <label>描述：</label>
            <textarea rows="2"></textarea>
        </div>
        <div class="ui horizontal divider">扩展属性集</div>
        <div class="ui grid">
              <div class="row">
              <div class="ten wide tablet computer column">
                <table class="ui blue sortable selectable celled striped compact table">
                <thead>
                  <tr>
                    <th class="one wide">选择</th>
                    <th class="two wide">应用</th>
                    <th class="two wide">类型</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="tr1">
                    <td>
                      <div class="ui radio checkbox">
                        <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                      </div>
                    </td>
                    <td>1111111</td>
                    <td>Aell</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="three wide column">
                <div class="ui vertical">
                  <button class="ui positive basic mini button actualParametersAdd2"><i class="icon plus"></i> 添 加</button>
                <button class="ui primary basic mini button"><i class="icon write"></i> 编 辑</button>
                <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                </div>
              </div>
            </div>
          </div>
        <div class="ui divider hidden"></div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
        </div>
      </div>
      <!-- 工具-添加-添加 -->
      <div class="ui coupled small modal tab segment actualParametersDiv">
            <div class="ui mini form">
              <div class="field">
              <label>实际参数:</label>
            <div class="two fields">
              <div class="five wide field">
                        <select class="ui search dropdown">
                      <option value="">请选择</option>
                      <option value="1">sourceReferenceld</option>
                      <option value="2">formId</option>
                      <option value="2">nextActivityInfo</option>
                      <option value="2">nextActivityName</option>
                      <option value="2">formType</option>
                </select>               
                      </div>
                      <div class="five wide field">
                <button class="ui facebook mini button definitionBtn"><i class="write icon"></i>定义</button>
                      </div>
                  </div>
                </div>
            </div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
        </div>
        <!-- 工具-添加-添加-定义 -->
      <div class="ui coupled small modal tab segment toolAddDefinition">
          <div class="header">工作流相关数据集</div>
          <div class="ui mini form grid">
            <div class="computer only row">
              <div class="twelve wide tablet computer column">
                <table class="ui blue sortable selectable celled striped compact table">
                <thead>
                  <tr>
                    <th class="one wide">选择</th>
                    <th class="two wide">ID</th>
                    <th class="two wide">名称</th>
                    <th class="two wide">数据类型</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="tr1">
                    <td>
                      <div class="ui radio checkbox">
                        <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                      </div>
                    </td>
                    <td>1111111</td>
                    <td>Aell</td>
                    <td>Aell</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="ui radio checkbox">
                        <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                      </div>
                    </td>
                    <td>3333333</td>
                    <td>Cell</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="three wide column">
                <div class="ui vertical">
                  <button class="ui positive basic mini button toolAddDefinitionAddBtn"><i class="icon plus"></i> 添 加</button>
                <button class="ui primary basic mini button"><i class="icon write"></i> 编 辑</button>
                <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                </div>
              </div>
            </div>
        </div>
        <div class="ui divider hidden"></div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
      </div>
      <!-- 工具-添加-添加-定义-添加 -->
      <div class="ui coupled large modal tab segment toolAddDefinitionAdd">
        <i class="close icon"></i>
        <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                <label>ID:</label>
                <input type="text" placeholder="ID">
            </div>
                  <div class="five wide field">
                <label>名称:</label>
                <input type="text" placeholder="名称">
            </div>
             <div class="five wide field">
                <label>初始值:</label>
                <input type="text" placeholder="初始值">
            </div>
             <div class="five wide field">
                <label>长度:</label>
                <input type="text" placeholder="长度">
            </div>
              </div>
              <div class="five wide inline field">
                  <label>是排列:</label>
                  <select class="ui search dropdown">
                  <option value="">请选择</option>
                  <option value="0">(空)</option>
                  <option value="1">是</option>
                  <option value="2">否</option>
            </select>               
              </div>
                <div class="ui horizontal divider">类型</div>
                <div class="five wide inline field">
                  <label>类型:</label>
                  <select class="ui search dropdown">
                  <option value="">请选择</option>
                <option value="1">Declared type</option>
                <option value="2">Enumeration type</option>
                <option value="3">List type</option>
                <option value="4">Record type</option>
                <option value="5">Schema type</option>
                <option value="6">Union type</option>
                <option value="7">基本类型</option>
                <option value="8">外部参考</option>
                <option value="9">数组类型</option>
            </select>               
              </div>

            <div class="field">
                <label>描述：</label>
                <textarea rows="1"></textarea>
            </div>
          <div class="ui horizontal divider">扩展属性集</div>
          <div class="ui grid">
                <div class="row">
                <div class="ten wide tablet computer column">
                  <table class="ui blue sortable selectable celled striped compact table">
                  <thead>
                    <tr>
                      <th class="one wide">选择</th>
                      <th class="two wide">应用</th>
                      <th class="two wide">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="tr1">
                      <td>
                        <div class="ui radio checkbox">
                          <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                        </div>
                      </td>
                      <td>1111111</td>
                      <td>Aell</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="three wide column">
                  <div class="ui vertical">
                    <button class="ui positive basic mini button"><i class="icon plus"></i> 添 加</button>
                  <button class="ui primary basic mini button showDialog"><i class="icon write"></i> 编 辑</button>
                  <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                  </div>
                </div>
              </div>
            </div>

          <div class="ui divider hidden"></div>
            <div class="actions inverted segment clearfix">
            <button class="ui right floated green inverted ok button">
              <i class="checkmark icon"></i>确定
            </button>
            <button class="ui right floated red inverted cancel button">
              <i class="remove icon"></i>取消
            </button>
          </div>    
        </div>
      </div>

        <!-- 工具-添加-定义 -->
        <div class="ui coupled small modal tab segment tooldefinition">
          <div class="header">应用集-定义</div>
          <div class="ui horizontal divider"></div>
          <div class="ui mini form grid">
            <div class="computer only row">
              <div class="twelve wide tablet computer column">
                <table class="ui blue sortable selectable celled striped compact table">
                <thead>
                  <tr>
                    <th class="one wide">选择</th>
                    <th class="two wide">ID</th>
                    <th class="two wide">名称</th>
                  </tr>
                </thead>
                <tbody>
                  <tr id="tr1">
                    <td>
                      <div class="ui radio checkbox">
                        <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                      </div>
                    </td>
                    <td>1111111</td>
                    <td>Aell</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="ui radio checkbox">
                        <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                      </div>
                    </td>
                    <td>2222222</td>
                    <td>Bell</td>
                  </tr>
                  <tr>
                    <td>
                      <div class="ui radio checkbox">
                        <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                      </div>
                    </td>
                    <td>3333333</td>
                    <td>Cell</td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div class="three wide column">
                <div class="ui vertical">
                  <button class="ui positive basic mini button tooldefinitionAddBtn"><i class="icon plus"></i> 添 加</button>
                <button class="ui primary basic mini button"><i class="icon write"></i> 编 辑</button>
                <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                </div>
              </div>
            </div>
        </div>
        <div class="ui horizontal divider"></div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
      </div>
      <!-- 工具-添加-定义-添加 -->
      <div class="ui coupled large modal tab segment tooldefinition_add">
        <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                <label>ID:</label>
                <input type="text" placeholder="ID">
            </div>
                  <div class="five wide field">
                <label>名称:</label>
                <input type="text" placeholder="名称">
            </div>
              </div>
              <div class="field">
                <label>描述：</label>
                <textarea rows="1"></textarea>
            </div>
                <div class="ui horizontal divider">选择</div>
                <div class="five wide inline field">
                  <label>类型:</label>
                  <select class="ui search dropdown">
                  <option value="">请选择</option>
                  <option value="1">外部参考</option>
                  <option value="2">形势参数集</option>
            </select>               
              </div>
                <div class="ui grid">
                <div class="row">
                <div class="ten wide tablet column">
                  <table class="ui blue sortable selectable celled striped compact table">
                  <thead>
                    <tr>
                      <th class="one wide">ID</th>
                      <th class="two wide">索引</th>
                      <th class="two wide">方式</th>
                      <th class="two wide">数据类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="tr1">
                      <td>1111111</td>
                      <td>2222222</td>
                      <td>3333333</td>
                      <td>4444444</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="three wide column">
                  <div class="ui vertical">
                    <button class="ui positive basic mini button tooldefinitionAddAddBtn"><i class="icon plus"></i> 添 加</button>
                  <button class="ui primary basic mini button showDialog"><i class="icon write"></i> 编 辑</button>
                  <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                  </div>
                </div>
              </div>
            </div>
                <div class="ui divider hidden"></div>
          <div class="ui horizontal divider">扩展属性集</div>
          <div class="ui grid">
                <div class="row">
                <div class="ten wide tablet computer column">
                  <table class="ui blue sortable selectable celled striped compact table">
                  <thead>
                    <tr>
                      <th class="one wide">选择</th>
                      <th class="two wide">应用</th>
                      <th class="two wide">类型</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr id="tr1">
                      <td>
                        <div class="ui radio checkbox">
                          <input type="radio" name="selectAnswer" tabindex="0" class="hidden">
                        </div>
                      </td>
                      <td>1111111</td>
                      <td>Aell</td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <div class="three wide column">
                  <div class="ui vertical">
                    <button class="ui positive basic mini button"><i class="icon plus"></i> 添 加</button>
                  <button class="ui primary basic mini button showDialog"><i class="icon write"></i> 编 辑</button>
                  <button class="ui negative basic mini button"><i class="icon remove"></i> 删 除</button>
                  </div>
                </div>
              </div>
            </div>
          <div class="ui divider hidden"></div>
            <div class="actions inverted segment clearfix">
            <button class="ui right floated green inverted ok button">
              <i class="checkmark icon"></i>确定
            </button>
            <button class="ui right floated red inverted cancel button">
              <i class="remove icon"></i>取消
            </button>
          </div>    
        </div>
      </div>
      <!-- 工具-添加-定义-添加-添加 -->
      <div class="ui coupled small modal tab segment tooldefinition_add_add">
        <div class="ui mini form">
          <div class="five wide field">
                <label>ID:</label>
                <input type="text" placeholder="ID">
            </div>
            <div class="five wide field">
                <label>索引:</label>
                <input type="text" placeholder="索引">
            </div>
            <div class="five wide field">
                  <label>方式:</label>
                  <select class="ui search dropdown">
                <option value="">请选择</option>
                <option value="1">In</option>
                <option value="2">In and Out</option>
                <option value="3">Out</option>
            </select>               
              </div>
              <div class="ui horizontal divider">类型</div>
              <div class="five wide field">
                  <label>类型:</label>
                  <select class="ui search dropdown">
                <option value="">请选择</option>
                <option value="1">Declared type</option>
                <option value="2">Enumeration type</option>
                <option value="3">List type</option>
                <option value="4">Record type</option>
                <option value="5">Schema type</option>
                <option value="6">Union type</option>
                <option value="7">基本类型</option>
                <option value="8">外部参考</option>
                <option value="9">数组类型</option>
            </select>               
              </div>
        </div>
        <div class="ui divider hidden"></div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
      </div>
        <!-- 工具-添加-扩展属性添加 -->
      <div class="ui coupled small modal tab segment tool_extendAttr_add">
            <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                  <label>名称:</label>
                  <input name="extendAttr_add_name" type="text" placeholder="名称">
              </div>
              <div class="five wide field">
                  <label>值:</label>
                  <input name="extendAttr_add_value" type="text" placeholder="值">
              </div>
              </div>
          <div class="ui divider hidden"></div>
            <div class="actions inverted segment clearfix">
            <button class="ui right floated green inverted ok button">
              <i class="checkmark icon"></i>确定
            </button>
            <button class="ui right floated red inverted cancel button">
              <i class="remove icon"></i>取消
            </button>
          </div>
          <input type="hidden" name="extendAttr_add_operate" value="">    
        </div>
        </div>
        <!-- 后置条件-扩展属性-添加 -->
      <div class="ui coupled small modal tab segment postCondition_extendAttr_add">
            <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                  <label>名称:</label>
                  <input name="extendAttr_add_name" type="text" placeholder="名称">
              </div>
              <div class="five wide field">
                  <label>值:</label>
                  <input name="extendAttr_add_value" type="text" placeholder="值">
              </div>
              </div>
          <div class="ui divider hidden"></div>
            <div class="actions inverted segment clearfix">
            <button class="ui right floated green inverted ok button">
              <i class="checkmark icon"></i>确定
            </button>
            <button class="ui right floated red inverted cancel button">
              <i class="remove icon"></i>取消
            </button>
          </div>
          <input type="hidden" name="extendAttr_add_operate" value="">    
        </div>
        </div>
        <!-- 后置条件-条件设置-关系设置 -->
        <div class="ui coupled small modal tab segment relationshipPlacement">
          <i class="close icon"></i>
          <div class="header">关系设置</div>
          <div class="ui mini form">
            <div class="ui horizontal divider">选择条件代号</div>
              <div class="fields condition_no">
                    
          </div>
          <div class="ui horizontal divider">选择关系</div>
          <div class="fields">
            <div class="inline field">
              <div class="ui radio checkbox">
                <input type="radio" name="relationship" tabindex="&&" class="hidden" value="">
                <label>并且</label>
              </div>
            </div>
            <div class="inline field">
              <div class="ui radio checkbox">
                <input type="radio" name="relationship" tabindex="||" class="hidden" value="">
                <label>或者</label>
              </div>
            </div>
          </div>
          <div class="ui horizontal divider">设置</div>
          <div class="two inline fields">
            <div class="five wide field">
              <button class="ui primary mini button relationshipGroup">
                <i class="cubes icon"></i>分组
              </button>
              <button class="ui mini button relationshipReset">
                <i class="reply all icon"></i>重置
              </button>
            </div>
            <div class="seven wide field delivery">
              <label>预览:</label>
              <input name="beanConditions_type" type="text" placeholder="" readonly value="">
            </div>
          </div>
                        
          <div class="ui divider hidden"></div>
            <div class="actions inverted segment clearfix">
            <button class="ui right floated green inverted ok button">
              <i class="checkmark icon"></i>确定
            </button>
            <button class="ui right floated red inverted cancel button">
              <i class="remove icon"></i>取消
            </button>
          </div>
        </div>
        </div>
        <!-- 活动属性-扩展属性-添加 -->
      <div class="ui coupled small modal tab segment extendAttr_add">
            <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                  <label>名称:</label>
                  <input name="extendAttr_add_name" type="text" placeholder="名称">
              </div>
              <div class="five wide field">
                  <label>值:</label>
                  <input name="extendAttr_add_value" type="text" placeholder="值">
              </div>
              </div>
          <div class="ui divider hidden"></div>
            <div class="actions inverted segment clearfix">
            <button class="ui right floated green inverted ok button">
              <i class="checkmark icon"></i>确定
            </button>
            <button class="ui right floated red inverted cancel button">
              <i class="remove icon"></i>取消
            </button>
          </div>
          <input type="hidden" name="extendAttr_add_operate" value="">    
        </div>
        </div>
        <!-- 超时限制-增加 -->
      <div class="ui coupled small modal tab segment timeoutLimit_add">
            <div class="ui mini form">
              <div class="five wide field">
                  <label>执行:</label>
                  <select name="execution" class="ui search dropdown">
                <option value="">请选择</option>
                <option value="">(空)</option>
                <option value="SYNCHR">同步</option>
                <option value="ASYNCHR">异步</option>
            </select>               
              </div>
              <div class="five wide field">
                <label>持续时间:</label>
                <input type="text" name="deadlineCondition" placeholder="持续时间">
            </div>
            <div class="five wide field">
                <label>异常名称:</label>
                <input type="text" name="exceptionName" placeholder="异常名称">
            </div>
            <input type="hidden" name="timeoutLimit_add_operate" value="">
            </div>
        <div class="ui divider hidden"></div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
        </div>
        <!-- 监控信息-增加 -->
      <div class="ui coupled small modal tab segment monitorinf_add" parentsModal="prop_node">
            <div class="ui mini form">
              <div class="field">
              <label>参与者集:</label>
            <div class="two fields">
              <div class="seven wide field">
                        <select name="definition_role" class="ui search disabled dropdown">
                      
                </select>   
                <input type="hidden" name="monitorinf_add_operate" value="">        
                      </div>
                      <div class="five wide field">
                <button class="ui facebook mini button definitionBtn"><i class="write icon"></i>定义</button>
                      </div>
                  </div>
                </div>
            </div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
        </div>
        <!-- 监控信息-增加-定义 -->
        <div class="ui coupled small modal tab monitorinfAddDefinition def_common">
            <div class="ui pointing secondary menu">
            <a class="item active" data-tab="definition_one">常规</a>
            <a class="item" data-tab="definition_two">高级</a>
        </div>
        <div class="ui tab segment active" data-tab="definition_one">
          <div class="ui mini form">
              <div class="five wide field">
                  <label>ID:</label>
                  <input type="text" name="conventional_definition_id" placeholder="ID">
              </div>
              <div class="five wide field">
                  <label>名称:</label>
                  <input type="text" name="conventional_definition_name" placeholder="名称">
              </div>
            <div class="field">
                  <label>描述：</label>
                  <textarea name="conventional_definition_description" rows="2"></textarea>
              </div>
              <div class="five wide field">
                <label>自定义参与者:</label>
                <input type="text" name="conventional_definition_participant" placeholder="自定义参与者">
            </div>
            <div class="five wide field role">
                <label>自定义角色:</label>
                    <!-- select_tpl -->           
                </div> 
                <input type="hidden" class="hidden" name="monitorinf_add_operate" value="">
          </div>
        </div>
        <div class="ui tab segment" data-tab="definition_two">
          <div class="ui top attached tabular mini menu">
                <a class="active item" data-tab="definition_two/a" value="commonly|一般">一般</a>
                <a class="item" data-tab="definition_two/b" value="processer|当前处理人">当前处理人</a>
                <a class="item" data-tab="definition_two/c" value="sender|发送人">发送人</a>
                <a class="item" data-tab="definition_two/d" value="preActCreater|前一环节创建人">前一环节创建人</a>
            </div>
            <div class="ui bottom attached active tab segment" data-tab="definition_two/a">
            <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                    <label>类型:</label>
                          <select name="definition_type" class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="human|人">人</option>
                        <option value="orgOrg|部门【部门】">部门【部门】</option>
                        <option value="orgHuman|部门【人】">部门【人】</option>
                        <option value="orgDefault|部门【默认】">部门【默认】</option>
                        <option value="orgLeader|部门【领导】">部门【领导】</option>
                        <option value="roleHuman|角色【人】">角色【人】</option>
                        <option value="roleRole|角色【角色】">角色【角色】</option>
                        <option value="allParty|所有人【人】">所有人【人】</option>
                  </select>               
                        </div>
                        <div class="eight wide field">
                      <label>名称:</label>
                      <input type="text" name="def_name_show" placeholder="名称" readonly>
                      <input type="hidden" name="definition_name" placeholder="名称" value="|">
                  </div>
                  <div class="five wide field">
                    <label>角色:</label>
                        <select name="definition_role" class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="history">历史参与者</option>
                        <option value="responsible">监控者</option>
                        <option value="share">共享</option>
                  </select>               
                    </div>
                  <div class="five wide field">
                      <label>附加参数1:</label>
                      <input type="text" name="definition_param1" placeholder="附加参数">
                  </div>
                  <div class="five wide field">
                    <label>附加参数2:</label>
                    <input type="text" name="definition_param2" placeholder="附加参数">
                </div>  
                    </div>
            </div>
            </div>
            <div class="ui bottom attached tab segment" data-tab="definition_two/b">
              <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                    <label>类型:</label>
                          <select name="definition_type" class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="directleader|当前处理人领导">当前处理人领导</option>
                        <option value="DepartUpperLeading|当前处理人部门领导">当前处理人部门领导</option>
                  </select>               
                        </div>
                        <div class="five wide field">
                    <label>角色:</label>
                        <select name="definition_role" class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="history">历史参与者</option>
                        <option value="responsible">监控者</option>
                        <option value="share">共享</option>
                  </select>               
                    </div>
                  <div class="five wide field">
                      <label>附加参数1:</label>
                      <input type="text" name="definition_param1" placeholder="附加参数">
                  </div>
                  <div class="five wide field">
                    <label>附加参数2:</label>
                    <input type="text" name="definition_param2" placeholder="附加参数">
                </div>  
                    </div>
            </div>
            </div>
            <div class="ui bottom attached tab segment" data-tab="definition_two/c">
              <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                    <label>类别:</label>
                          <select name="definition_type" class="ui search dropdown">
                          <option value="">请选择</option>
                        <option value="self|发送人本人">发送人本人</option>
                        <option value="directleader|发送人领导">发送人领导</option>
                        <option value="directundering|发送人下属">发送人下属</option>
                        <option value="org|发送人部门人员">发送人部门人员</option>
                        <option value="departUpperLeading|发送人部门领导">发送人部门领导</option>
                  </select>               
                        </div>
                        <div class="five wide field">
                    <label>角色:</label>
                        <select name="definition_role" class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="history">历史参与者</option>
                        <option value="responsible">监控者</option>
                        <option value="share">共享</option>
                  </select>               
                    </div>
                  <div class="five wide field">
                      <label>附加参数1:</label>
                      <input type="text" name="definition_param1" placeholder="附加参数">
                  </div>
                  <div class="five wide field">
                    <label>附加参数2:</label>
                    <input type="text" name="definition_param2" placeholder="附加参数">
                </div>  
                    </div>
            </div>
            </div>
            <div class="ui bottom attached tab segment" data-tab="definition_two/d">
              <div class="ui mini form">
              <div class="fields">
                <div class="five wide field">
                    <label>类别:</label>
                          <select name="definition_type" class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="preActCreSelf|前一环节创建人本人">前一环节创建人本人</option>
                        <option value="preActCreLeader|前一环节创建人上级">前一环节创建人上级</option>
                  </select>               
                        </div>
                        <div class="five wide field">
                    <label>角色:</label>
                        <select name="definition_role" class="ui search dropdown">
                        <option value="">请选择</option>
                        <option value="history">历史参与者</option>
                        <option value="responsible">监控者</option>
                        <option value="share">共享</option>
                  </select>               
                    </div>
                  <div class="five wide field">
                      <label>附加参数1:</label>
                      <input type="text" name="definition_param1" placeholder="附加参数">
                  </div>
                  <div class="five wide field">
                    <label>附加参数2:</label>
                    <input type="text" name="definition_param2" placeholder="附加参数">
                </div>  
                    </div>
            </div>
            </div>
            <button class="ui positive basic mini button monitorinfDefintionAddBtn"><i class="icon plus"></i> 增 加 条 件</button>
          <button class="ui negative basic mini button monitorinfDefintionRemoveBtn"><i class="icon remove"></i> 删 除 条 件</button>
          <div class="ui divider hidden"></div>
              <div class="ui grid definition_condition content-div">
              <div class="computer only row">
                <div class="tablet computer column">
                  <table class="ui blue sortable selectable celled striped compact table">
                    <thead>
                    <tr>
                      <th class="four wide">类别</th>
                      <th class="four wide">类型</th>
                      <th class="three wide">名称</th>
                      <th class="three wide">参数1</th>
                      <th class="three wide">参数2</th>
                      <th class="three wide">角色</th>
                    </tr>
                  </thead>
                  <tbody>

                  </tbody>
                </table>
                </div>
              </div>
          </div>
        </div>
        <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>
        </div>

        <!-- 连线属性弹出层 -->
      <div class="ui coupled modal tab segment prop_edge">
        <div class="header">转移属性</div>
            <div class="ui mini form">
              <div class="targetActivity">
            
          </div>
            </div>
        <div class="ui divider hidden"></div>
          <div class="actions inverted segment clearfix">
          <button class="ui right floated green inverted ok button">
            <i class="checkmark icon"></i>确定
          </button>
          <button class="ui right floated red inverted cancel button">
            <i class="remove icon"></i>取消
          </button>
        </div>    
        </div>
        <!-- 选择角色弹出层 -->
        <div class="ui coupled modal tab role_manage">
          <i class="close icon"></i>
          <div id="role-top" class="topfont addborder popup">
          <i class="add user icon"></i>角色管理
        </div>
        <div id="role-center">
          <form id="searchForm">
            <div>
              <div class="ui icon mini input role-search">
                        <label>角色名称：</label>
                  <input type="text" name="roleName" placeholder="搜索...">
                  <i class="search link icon"></i>
              </div>
              <button type="button" class="ui google plus mini button resetBtn">
                  <i class="reply all plus icon"></i>
                  重置
              </button>
              <button type="button" class="ui facebook mini button okBtn">
                  <i class="checkmark icon"></i>
                  确定
              </button>
            </div>
          </form>
          <input type="hidden" name="offset" id="offset" />
          <input type="hidden" name="size" id="size" />
          <div class="content-tab">
            
          </div>
        </div>
        <div id="pageDiv"></div>
      </div>
    </div>
  </div>
</template>

<script>
    juicer.set({  
      'tag::operationOpen': '{@',  
      'tag::operationClose': '}',  
      'tag::interpolateOpen': '{{=',  
      'tag::interpolateClose': '}}'  
    });
    // 通过`juicer.register`创建模板内引用方法
    juicer.register('juicer_stringify', function(jsonObj) {
        return JSON.stringify(jsonObj);
    });
</script>

<script id="tpl" type="text/template"><!-- 可以通过模板生成activity，暂时没用 -->
    <activity Id="{{=activity.id}}" Name="{{=activity.title}}" form-id="" formdisplayschema="" hisformdisplayschema="">
        <operations/>
        <text-limit/>
    </activity>
</script>

<!-- blockActivity 编辑 标签页tpl -->
<script id="blockActiEdi_item_tpl" type="text/template">
  <a class="item" data-tab="tab_{{=id}}" activitysetid="{{=activitySetId}}">
    <i class="remove red icon"></i>块活动
  </a>
</script>
<script id="blockActiEdi_tab_tpl" type="text/template">
  <div class="ui bottom attached tab segment blockDiv" data-tab="tab_{{=id}}">
      <div class="ui top attached tab active full-right-top view svg-container" data-tab="{{=id}}_first">
      <!-- svg -->
    </div>
    <div class="ui top attached tab view content-div" data-tab="{{=id}}_second">
      <xmp>
        <!-- xpdl -->
      </xmp>
    </div>
    <div class="full-right-btn ui bottom attached tabular mini menu">
      <a class="item active" data-tab="{{=id}}_first">图标视图</a>
      <a class="item" data-tab="{{=id}}_second">xpdl视图</a>
    </div>
    <div class="full-right-bottom">
      <div class="component-name"><i class="angle double down icon"></i><span></span></div>
      <div class="component-prop content-div">
        <!-- activity属性 -->
      </div>
    </div>
  </div>
</script>

<!-- 扩展属性集tpl -->
<script id="extended_attr_tpl" type="text/template">
  <tr jsonstr="{{=jsonstr}}">
    <td>
      <div class="ui radio checkbox">
        <input type="radio" name="selectItem" tabindex="0" class="hidden">
      </div>
    </td>
    <td>{{=data.name}}</td>
    <td>{{=data.value}}</td>
  </tr>
</script>
<!-- 角色管理tpl -->
<script id="role_manage_tpl" type="text/template">
  <div class="row">
    <div class="column">
      <table class="ui blue sortable selectable celled striped compact table">
        <thead>
          <tr>
            <th class="one wide">选择</th>
            <th class="one wide">角色名称</th>
            <th class="three wide">所属组织</th>
            <th class="three wide">描述</th>
          </tr>
        </thead>
        <tbody>
        {@each list as it,index}
          <tr jsonstr="{{=it|juicer_stringify}}">
            <td>
              <div class="ui radio checkbox">
                <input type="radio" name="selectItem" tabindex="0" class="hidden">
              </div>
            </td>
            <td>{{=it.ROLENAME}}</td>
            <td>{{=it.ROLEID}}</td>
            <td>{{=it.DESCRIPTION}}</td>
          </tr>
            {@/each}
        </tbody>
      </table>
    </div>
  </div>
</script>
<!-- select tpl -->
<script id="select_tpl" type="text/template">
  <select name="{{=selectId}}" class="ui dropdown">
      <option value="">请选择...</option>
    {@each options as option,index}
      <option value="{{=option.value}}">{{=option.show}}</option>
    {@/each}
  </select>
</script>
<!-- 定义参与者tpl -->
<script id="participant_tpl" type="text/templ">
  <div class="ui pointing secondary menu">
      <a class="item active" data-tab="definition_1">常规</a>
      <a class="item" data-tab="definition_2">高级</a>
  </div>
  <div class="ui tab segment active" data-tab="definition_1">
    <div class="ui mini form">
        <div class="five wide field">
            <label>ID:</label>
            <input name="conventional_definition_id" type="text" placeholder="ID">
        </div>
        <div class="five wide field">
            <label>名称:</label>
            <input name="conventional_definition_name" type="text" placeholder="名称">
        </div>
      <div class="field">
            <label>描述：</label>
            <textarea name="conventional_definition_description" rows="2"></textarea>
        </div>
        <div class="five wide field">
          <label>自定义参与者:</label>
          <input name="conventional_definition_participant" type="text" placeholder="自定义参与者">
      </div>
      <input type="hidden" class="hidden" name="conventional_def_operate" value="">
    </div>
  </div>
  <div class="ui tab segment" data-tab="definition_2">
    <div class="ui top attached tabular mini menu">
      {@each selectItems as item}
        {@if item.key == 'commonly'}
          <a class="active item" data-tab="definition_2/{{=item.key}}" value="{{=item.key}}|{{=item.displayName}}">{{=item.displayName}}</a>
        {@else}
          <a class="item" data-tab="definition_2/{{=item.key}}" value="{{=item.key}}|{{=item.displayName}}">{{=item.displayName}}</a>
        {@/if}
      {@/each}
      </div>
    {@each selectItems as item}
      {@if item.key == 'commonly'}
        <div class="ui bottom attached active tab segment" data-tab="definition_2/{{=item.key}}">
      {@else}
        <div class="ui bottom attached tab segment" data-tab="definition_2/{{=item.key}}">
      {@/if}
        <div class="ui mini form">
          <div class="fields">
            <div class="five wide field">
                <label>类型:</label>
                      <select name="definition_type" class="ui search dropdown">
                    <option value="">请选择</option>
                    {@each item.selectTypes as selectType}
                  <option value="{{=selectType.key}}|{{=selectType.name}}">{{=selectType.name}}</option>
                    {@/each}
              </select>               
                    </div>
                    {@if item.key == 'commonly'}
                      <div class="five wide field">
                    <label>名称:</label>
                    <input type="text" name="def_name_show" placeholder="名称" readonly>
                    <input type="hidden" name="definition_name" placeholder="名称" value="|">
                </div>
            {@else if item.key == 'historyactselect'}
              <div class="five wide field definition_name">
                  <label>名称:</label>
                <!-- select_tpl -->
                  </div>
            {@/if}
              <div class="five wide field">
                  <label>附加参数1:</label>
                  <input type="text" name="definition_param1" placeholder="附加参数">
              </div>
              <div class="five wide field">
                <label>附加参数2:</label>
                <input type="text" name="definition_param2" placeholder="附加参数">
            </div>  
                </div>
        </div>
        </div>
    {@/each}
    <button class="ui positive basic mini button definition_addBtn"><i class="icon plus"></i> 增 加 条 件</button>
    <button class="ui negative basic mini button definition_removeBtn"><i class="icon remove"></i> 删 除 条 件</button>
    <div class="ui divider hidden"></div>
        <div class="ui grid definition_condition content-div">
        <div class="computer only row">
          <div class="tablet computer column">
            <table class="ui blue sortable selectable celled striped compact table">
              <thead>
              <tr>
                <th class="four wide">类别</th>
                <th class="four wide">类型</th>
                <th class="three wide">名称</th>
                <th class="three wide">参数1</th>
                <th class="three wide">参数2</th>
                <th class="three wide">条件</th>
              </tr>
            </thead>
            <tbody>
              
            </tbody>
          </table>
          </div>
        </div>
    </div>
  </div>
  <div class="actions inverted segment clearfix">
    <button class="ui right floated green inverted ok button">
      <i class="checkmark icon"></i>确定
    </button>
    <button class="ui right floated red inverted cancel button">
      <i class="remove icon"></i>取消
    </button>
  </div>
</script>
<!-- Transition转移属性tpl -->
<script id="transition_tpl" type="text/template">
  <div class="ui top attached tabular mini menu">
        <a class="active item" data-tab="four/a">转移信息</a>
        <a class="item" data-tab="four/b">条件设置</a>
        <a class="item" data-tab="four/c">事件</a>
    </div>
    <div class="ui bottom attached active tab segment" data-tab="four/a">
    <div class="ui mini form">
      <div class="fields">
          <div class="five wide field">
            <label>ID:</label>
            <input type="text" name="edgeId" placeholder="ID">
          </div>
          <div class="four wide field">
            <label>名称:</label>
            <input type="text" name="edgeName" placeholder="名称">
          </div>
          <div class="four wide field">
            <label>来自:</label>
            <input type="text" name="sourceTitle" placeholder="来自" disabled="disabled">
        </div>
        <div class="four wide field">
            <label>到:</label>
            <input type="text" name="targetTitle" placeholder="到" disabled="disabled">
        </div>
      </div>
      <div class="field">
            <label>描述：</label>
            <textarea name="description" rows="2"></textarea>
        </div>
      <div class="ui horizontal divider">扩展属性集</div>
        <div class="ui mini form grid transferInf_extended_attr">
          <div class="computer only row">
            <div class="twelve wide tablet computer column postCondi_extendedAttr">
              <table class="ui blue sortable selectable celled striped compact table">
              <thead>
                <tr>
                  <th class="one wide">选择</th>
                  <th class="two wide">名</th>
                  <th class="two wide">值</th>
                </tr>
              </thead>
              <tbody>
                
              </tbody>
            </table>
            </div>
            <div class="three wide column">
              <div class="ui vertical">
                <button class="ui positive basic mini button extendAttrAddBtn"><i class="icon plus"></i> 添 加</button>
              <button class="ui primary basic mini button extendAttrEditBtn"><i class="icon write"></i> 编 辑</button>
              <button class="ui negative basic mini button extendAttrDelBtn"><i class="icon remove"></i> 删 除</button>
              </div>
            </div>
          </div>
      </div>
        
    </div>
    </div>
    <div class="ui bottom attached tab segment" data-tab="four/b">
      <div class="ui mini form">
        <div class="inline fields">
        <div class="five wide field">
            <label>类型:</label>
            <select name="conditype" class="ui search dropdown">
                <option value="">选择</option>
                <option value="0">(空)</option>
                <option value="OTHERWISE">其它</option>
                <option value="EXCEPTION">异常</option>
                <option value="WORKFLOWBEAN">按业务对象转移</option>
                <option value="CONDITION">条件</option>
                <option value="TACHE">环节名称转移</option>
                <option value="USERDEFINE">用户自定义</option>
                <option value="DEFAULTEXCEPTION">缺省异常</option>
                <option value="CUSTOM">自定义转移</option>
            </select>
        </div>
        </div>
        <!-- 条件设置-类型-异常 -->
      <div class="myitem hideDiv exceptionDiv">
        <div class="five wide field">
            <label>请选择异常:</label>
            <select name="condiException" class="ui search dropdown">
                <option value="请选择异常">请选择异常</option>
            </select>
        </div>
            </div>
            <!-- 条件设置-类型-按业务对象转移 -->
            <div class="myitem hideDiv workflowbeanDiv">
              <div class="inline fields">
          <div class="five wide field">
              <label>业务对象:</label>
              <select name="bean" class="ui search dropdown">
                  <option value="">请选择业务对象</option>
                  <option value="0">(空)</option>
                  {@each bean.opts as option, index}
                <option value="{{=option.value}}">{{=option.name}}</option>
              {@/each}
              </select>
          </div>
          <div class="five wide field">
              <label>参数字段:</label>
              <select name="paramField" class="ui search dropdown">
                  <option value="0">默认</option>
              </select>
          </div>
        </div>
        <!-- 业务对象-发送人 -->
        <div class="myitem hideDiv detailDiv">
                <div class="inline three fields">
            <div class="five wide field">
                <label>方法:</label>
                <select name="key" class="ui search dropdown wide">
                    <option value="">请选择</option>
                    <option value="0">(空)</option>
                    <option value="CorpName">获取组织名称</option>
                    <option value="Extattr">获取人员扩展属性1</option>
                    <option value="MObilephone">获取人员移动电话号码</option>
                    <option value="Firstname">获取人员姓氏</option>
                    <option value="Gender">获取人员性别</option>
                    <option value="Birthday">获取人员出生日期</option>
                    <option value="Securitylevel">获取人员安全级别</option>
                    <option value="Mainemail">获取人员常用EMAI</option>
                    <option value="Lastname">获取人员名字</option>
                    <option value="Duty">获取人员职务</option>
                    <option value="Homeaddress">获取人员家庭住址</option>
                    <option value="AdminLevel">获取人员级别</option>
                    <option value="Workno">获取人员工号</option>
                    <option value="Callname">获取人员称呼</option>
                    <option value="Otheremail">获取人员备用EMAIL</option>
                    <option value="Instantmessage">获取人员即时消息号</option>
                    <option value="Name">获取人员姓名</option>
                    <option value="Officeaddress">获取人员工作地点ID</option>
                    <option value="Fixedphone">获取人员固定电话号码</option>
                </select>
            </div>
                  <div class="field">
                <label>条件1:</label>
                <select name="sign_one" class="ui search dropdown condition_sel">
                    <option value="">请选择</option>
                </select>
            </div>
            <div class="field">
                <label>参考值1:</label>
                <input type="text" name="displayValue_one" placeholder="参考值">
            </div>
                </div>
                <div class="inline three fields">
            <div class="five wide field">
                <label>关系:</label>
                <select name="fieldCondition_type" class="ui search dropdown">
                    <option value="AND">并且</option>
                    <option value="||">或者</option>
                </select>
            </div>
                  <div class="field">
                <label>条件2:</label>
                <select name="sign_two" class="ui search dropdown condition_sel">
                    <option value="">请选择</option>
                </select>
            </div>
            <div class="field">
                <label>参考值2:</label>
                <input type="text" name="displayValue_two" placeholder="参考值">
            </div>
                </div>
              </div>

        <div class="fields">
          <div class="five wide field">
            <button class="ui positive basic mini button condition_addBtn"><i class="icon plus"></i> 增 加 条 件</button>
            <button class="ui negative basic mini button condition_removeBtn"><i class="icon remove"></i> 删 除 条 件</button>
            
          </div>
          <div class="ten wide field">
            <div class="two fields">
              <div class="seven wide field">
                        <input type="text" name="beanConditions_type" placeholder="整体关系" readonly>      
                      </div>
                      <div class="field">
                <button class="ui facebook mini button relationshipPlaBtn"><i class="write icon"></i>关系设置</button>
                      </div>
                  </div>
          </div>
              </div>
        <div class="ui divider hidden"></div>
            <div class="ui grid conditionList2">
            <div class="computer only row">
              <div class="tablet computer column">
                <table class="ui blue sortable selectable fixed single line celled striped compact table">
                  <thead>
                  <tr>
                    <th class="two wide">编号</th>
                    <th class="two wide">业务对象</th>
                    <th class="two wide">参数字段</th>
                    <th class="two wide">方法</th>
                    <th class="two wide">运算符1</th>
                    <th class="two wide">参考值1</th>
                    <th class="two wide">关系</th>
                    <th class="two wide">运算符2</th>
                    <th class="two wide">参考值2</th>
                    <th class="two wide">返回类型</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
              </div>
            </div>
        </div>  
        
            </div>
            <!-- 条件设置-类型-条件 -->
            <div class="myitem hideDiv conditionDiv">
              <div class="ui horizontal divider">字段条件</div>
              <div class="inline fields">
          <div class="five wide field">
              <label>字段:</label>
              <select name="key" class="ui search dropdown">
                  <option value="">请选择</option>
                  <option value="0">(空)</option>
                  <option value="sourceReferenceId">sourceReferenceId</option>
                  <option value="formId">formId</option>
                  <option value="nextActivityName">nextActivityName</option>
                  <option value="formType">formType</option>
              </select>
          </div>
                <div class="five wide field">
              <label>条件1:</label>
              <select name="sign_one" class="ui search dropdown condition_sel">
                  <option value="">请选择</option>
              </select>
          </div>
          <div class="five wide field">
              <label>参考值1:</label>
              <input type="text" name="displayValue_one" placeholder="参考值">
          </div>
              </div>
              <div class="inline fields">
          <div class="five wide field">
              <label>关系:</label>
              <select name="fieldCondition_type" class="ui search dropdown">
                  <option value="AND">并且</option>
                  <option value="||">或者</option>
              </select>
          </div>
                <div class="five wide field">
              <label>条件2:</label>
              <select name="sign_two" class="ui search dropdown condition_sel">
                  <option value="">请选择</option>
                  <option value="0">(空)</option>
              </select>
          </div>
          <div class="five wide field">
              <label>参考值2:</label>
              <input type="text" name="displayValue_two" placeholder="参考值">
          </div>
              </div>
        <div class="inline fields">
          <div class="five wide field">
                  <button class="ui positive basic mini button condition_addBtn"><i class="icon plus"></i> 增 加 条 件</button>
            <button class="ui negative basic mini button condition_removeBtn"><i class="icon remove"></i> 删 除 条 件</button>
          </div>
          <div class="five wide field">
              <label>整体关系:</label>
              <select name="fieldConditions_type" class="ui search dropdown">
                  <option value="AND">并且</option>
                  <option value="||">或者</option>
              </select>
          </div>
        </div>
        <div class="ui divider hidden"></div>
            <div class="ui grid conditionList">
            <div class="computer only row">
              <div class="tablet computer column">
                <table class="ui blue sortable selectable celled striped compact table">
                  <thead>
                  <tr>
                    <th class="three wide">字段</th>
                    <th class="three wide">条件1</th>
                    <th class="three wide">参考值1</th>
                    <th class="two wide">关系</th>
                    <th class="three wide">条件2</th>
                    <th class="three wide">参考值2</th>
                    <th class="three wide">类型</th>
                  </tr>
                </thead>
                <tbody>
                  
                </tbody>
              </table>
              </div>
            </div>
        </div>
            </div>
            <!-- 条件设置-类型-用户自定义 -->
      <div class="myitem hideDiv userdefineDiv">
        <div class="inline fields"> 
          <div class="five wide field">
              <label>条件:</label>
              <input name="condition_data" type="text" placeholder="条件">
          </div>
        </div>
            </div>
            <!-- 条件设置-类型-自定义转移 -->
      <div class="myitem hideDiv customDiv">
        <div class="ui form">
            <div class="field">
                <label>表达式：</label>
                <textarea></textarea>
            </div>
        </div>
            </div>
    </div>
    </div>
    <div class="ui bottom attached tab segment" data-tab="four/c">
      <div class="ui mini form">
      <div class="five wide field transitionEventType">
          <label>任务委派规则:</label>
          <select name="{{=selectId}}" class="ui dropdown">
            <option value="">请选择...</option>
          {@each options as option,index}
            <option value="{{=option.value}}">{{=option.show}}</option>
          {@/each}
        </select>
      </div>
      <div class="five wide field">
          <label>转移事件:</label>
          <input type="text" name="transitionEvent" placeholder="转移事件">
      </div>
    </div>
    </div>
</script><!-- Transition转移属性tpl-end -->

<script>
import $ from 'jquery'
import d3 from 'd3'
import vkbeautify from 'vkbeautify'
import juicer from 'juicer'
import layer from '../../../static/js/layer/layer.js'
import semantic from 'semantic'
import '../../../node_modules/semantic-ui-css/semantic.min.css'
import ztree from 'ztree'
import '../../../static/js/jquery.mCustomScrollbar.concat.min.js'
import '../../../static/js/base64.js'
import '../../../static/js/jquery-form.min.js'
import laypage from 'laypage'

import {cc, ccMoney, json_obj, getRandom, randomWord, generateUUID, serial_marker, getNodeById, maxArr, minArr, is_array, is_number, graphPool, changeCase} from '../../../static/js/common.js'
import {handleImportOrExport, clearGraph, handleDeleteNode, handleClickZoom, resetZoom, handleHelp, handleComponentsBtn, handleAddStartEnd, handleViews, handleSave, handleMenuEdit, handleNodeMenuProp, handleEdgeMenuProp, handleRightMenu} from '../../../static/js/graphCommonEvent.js'

export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    },
    test() {
      console.log(1111, layer)
      layer.alert('内容')
    }
  },
  mounted () {
    // flowchart.js
    /* 与 node edge 无关的js */
    var package_id = '${param.processid}';
    package_id = package_id.indexOf('Package_') !== -1 ? package_id : 'Package_'+randomWord(false, 8);
    var workflow_name = '过程';
    var workflow_id = package_id+'_Wor1';
    var create_time = new Date().pattern('yyyy-MM-dd HH:mm:ss');// 需要从xpdl读取
    var create_type = '${param.kind}';
    create_type = create_type.indexOf('param.kind') !== -1 ? create_type : 'create';// html防止报错

    // 定义生成 node id 序列
    var seqer_nodeID = serial_marker();
    seqer_nodeID.set_prefix(workflow_id + '_Act');

    // 定义生成 edge id 序列
    var seqer_edgeID = serial_marker();
    seqer_edgeID.set_prefix(workflow_id + '_Tra');

    // 定义生成 参与者id 序列
    var seqer_participantID = serial_marker();
    seqer_participantID.set_prefix(workflow_id + '_Par');

    // 定义生成 块活动blockId 序列
    var seqer_blockId = serial_marker();
    seqer_blockId.set_prefix(workflow_id + '_Ase');

    $('.full-right>.menu').on('click', '.item', function() {
      var activitysetid = $(this).attr('activitysetid'); // 编辑快活动id
      if (activitysetid) {
        seqer_nodeID.set_prefix(activitysetid + '_Act');
      } else {
        seqer_nodeID.set_prefix(workflow_id + '_Act');
      }

      var containerId = $(this).attr('data-tab'); // graph.containerId
      graphPool.updateGraphActiveById(containerId);
    });

    $(function() {
      // 数据表格添加点击选中行
      $('.toolgrid,.extended_attr,.post_condition,.prop_edge,.role_manage').on('click', 'tbody tr', function() {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).find('input:radio').prop('checked','checked');
      }); 
      
      $('.monitorinf,.conventional_definition,.timeout_limit,.monitorinfAddDefinition tbody').on('click', 'tr', function() {
        $(this).addClass('active').siblings().removeClass('active');
      }); 
      
      $('.front_condition .dropdown.convergeType').on('change', function(e) {
        var convergeType = $(this).val();
        if (convergeType == 0) { // 空
          $('.otherOpt>div').addClass('hideDiv');
        }
        if (convergeType == 'AND') { // And
          $('.otherOpt>div').eq(0).removeClass('hideDiv');
          $('.otherOpt>div').eq(1).addClass('hideDiv');
        }
        if (convergeType == 'XOR') { // Xor
          $('.otherOpt>div').eq(0).addClass('hideDiv');
          $('.otherOpt>div').eq(1).removeClass('hideDiv');
        }
      });
    /*
      // 编辑工具(保存)
      $('.editor-toolbar .icon.save').on('click', function() {
        var dataTab = $('.full-right-btn .item.active').attr('data-tab');
        $('.tab[data-tab="tab_main"] .item').not($('.full-right-btn .item.active')).trigger('click');//触发点击事件获取xpdl和xml
        $('.full-right-btn .item[data-tab="'+dataTab+'"]').trigger('click');
        var xpdl = $('#xpdlContainer xmp').text();
        var xml = $('#xmlContainer xmp').text();
        var xpdl_top =
          '<?xml version="1.0" encoding="UTF-8" standalone="no"?>'+
            '<Package xmlns="http://www.wfmc.org/2002/XPDL1.0" xmlns:xpdl="http://www.wfmc.org/2002/XPDL1.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Id="'+package_id+'" Name="新包" xsi:schemaLocation="http://www.wfmc.org/2002/XPDL1.0 http://wfmc.org/standards/dtd/TC-1025_schema_10_xpdl.xsd">'+
            '    <PackageHeader>'+
            '        <XPDLVersion>1.0</XPDLVersion>'+
            '        <Vendor>GENTLESOFT</Vendor>'+
            '        <Created>'+create_time+'</Created>'+
            '    </PackageHeader>'+
            '    <RedefinableHeader PublicationStatus="UNDER_TEST">'+
            '        <Author>管理员</Author>'+
            '        <Version>1.0</Version>'+
            '    </RedefinableHeader>'+
            '    <ConformanceClass GraphConformance="NON_BLOCKED"/>'+
            '    <Script Type="text/javascript"/>'+
            '    <DataFields>'+
            '        <DataField Id="sourceReferenceId" IsArray="FALSE" Name="sourceReferenceId">'+
            '            <DataType>'+
            '                <BasicType Type="STRING"/>'+
            '            </DataType>'+
            '            <InitialValue>null</InitialValue>'+
            '        </DataField>'+
            '        <DataField Id="formId" IsArray="FALSE" Name="formId">'+
            '            <DataType>'+
            '                <BasicType Type="STRING"/>'+
            '            </DataType>'+
            '            <InitialValue>null</InitialValue>'+
            '        </DataField>'+
            '        <DataField Id="nextActivityInfo" IsArray="FALSE" Name="nextActivityInfo">'+
            '            <DataType>'+
            '                <ExternalReference location="org.gentlesoft.wf.NextActivitiesParty"/>'+
            '            </DataType>'+
            '            <InitialValue>null</InitialValue>'+
            '        </DataField>'+
            '        <DataField Id="nextActivityName" IsArray="FALSE" Name="nextActivityName">'+
            '            <DataType>'+
            '                <ExternalReference location="java.util.ArrayList"/>'+
            '            </DataType>'+
            '            <InitialValue>null</InitialValue>'+
            '        </DataField>'+
            '        <DataField Id="formType" IsArray="FALSE" Name="formType">'+
            '            <DataType>'+
            '                <BasicType Type="STRING"/>'+
            '            </DataType>'+
            '            <InitialValue>null</InitialValue>'+
            '        </DataField>'+
            '    </DataFields>';
        var xpdl_end = 
          '    <ExtendedAttributes>'+
            '        <ExtendedAttribute Name="MadeBy" Value="com.gentlesoft.tools.wfd"/>'+
            '        <ExtendedAttribute Name="Version" Value="1.4.2"/>'+
            '    </ExtendedAttributes>'+
            '</Package>';
        var xml_top = '<?xml version="1.0" encoding="UTF-8"?><pkg-config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" Id="'+package_id+'" Name="新包" Version="" xsi:noNamespaceSchemaLocation="../dtd/flowactconfig.xsd">';
        var xml_end = '</pkg-config>';
        xpdl = vkbeautify.xml(xpdl_top + xpdl + xpdl_end);
        xml = vkbeautify.xml(xml_top + xml + xml_end);
        $('input[name="xpdlcontent"]').val(xpdl);
        $('input[name="xmlcontent"]').val(xpdl);
        $('#containerForm').submit();
      });*/
    });
          
    /*  */
    $(function() {
      var initProp = '<div>'+
               '  <div name="id" class="prop-value"><span>id:</span><span>'+workflow_id+'</span></div>'+
               '  <div name="name" class="prop-value"><span>名称:</span><span>'+workflow_name+'</span></div>'+
               '</div>'+
               '<div class="clearfix"></div>';
      $('.component-prop').append(initProp);
      $('.component-name span').text(workflow_name);
      $('.menu .item').tab();// 标签显示必须放updateScrollbar之前

      $('.menu .item').on('click', updateScrollbar);

      // 控制属性显示
      $('.full-right').on('click', '.component-name', function() {
        var parent = $(this).parents('div[data-tab]');
        var ishidden = parent.find('.component-prop').is(':hidden');
        if (ishidden) {
          parent.find('.full-right-bottom ').css({height: '26%'});
          parent.find('.component-name').css({height: '28%'});
          parent.find('.view').css({height: '68%'});
          parent.find('.component-name .icon').removeClass('up').addClass('down');
          parent.find('.component-prop').toggle('slow');
        } else {
          parent.find('.full-right-bottom ').css({height: '8%'});
          parent.find('.component-name').css({height: '100%'});
          parent.find('.view').css({height: '86%'});
          parent.find('.component-name .icon').removeClass('down').addClass('up');
          parent.find('.component-prop').toggle();
        }
      });
    });
        
    $(function() {
      $('#rMenu').on('mouseleave', function() {
        $('#rMenu').hide();
        // $('#rMenu .item').off('click');
      });
      // semantic初始化
      $('.pop-btn').popup();
      // jquery插件滚动条
      $(".content-div, .postCondi_extendedAttr, .conditionList, .conditionList2").mCustomScrollbar();

      // 活动属性semantic初始化
      $('.prop_node .menu .item').tab();
      /* IE11下 Semantic UI 存在问题
      $('.prop_node>.menu .item').on('click', function() {
        var item = $(this).attr('data-tab');
        $('.prop_node [data-tab="'+item+'"]').find('.content-div').mCustomScrollbar("update");
        if (item == 'four') {
          $('.post_condition .postCondi_extendedAttr').mCustomScrollbar("update");
          $('.prop_node.modal').css({
            height: '745px'
          });
          $('.prop_node>.tab').css({
            height: '608px'
          });
        } else {
          $('.prop_node.modal').css({
            height: '577px'
          });
          $('.prop_node>.tab').css({
            height: '447px'
          });
        }
      });*/

      // 后置条件下的tab
      $('.targetActivity .menu .item').on('click', function() {// 防止切换切换标签时滚动条消失
        var item = $(this).attr('data-tab');
        if (item == 'four/b') {
          $('.conditionDiv .conditionList').mCustomScrollbar("update");
        }
        if (item == 'four/a') {
          $('.targetActivity .postCondi_extendedAttr').mCustomScrollbar("update");
        }
      });

      $('select.dropdown').dropdown();

      $('.ui.checkbox').checkbox({
        onChecked: function() {
          $(this).parents('.checkbox').find('input[name]').val(true);
        },
        onUnchecked: function() {
          $(this).parents('.checkbox').find('input[name]').val(false);
        }
      });

      // checkbox 多人处理是否顺序执行 
      $('.checkbox.assignmentsOrderDiv').checkbox({
          onChecked: function() {
            $(this).parents('.checkbox').find('input[name]').val(true);
          $('.checkbox.completeAllAssignmentsDiv').checkbox('check');
        },
        onUnchecked: function() {
          $(this).parents('.checkbox').find('input[name]').val(false);
        }
      });

      // checkbox 是否多人处理
      $('.checkbox.completeAllAssignmentsDiv').checkbox({
          onChecked: function() {
            $(this).parents('.checkbox').find('input[name]').val(true);
        },
        onUnchecked: function() {
          $('.checkbox.assignmentsOrderDiv').checkbox('uncheck');
          $(this).parents('.checkbox').find('input[name]').val(false);
        }
      });

      $('.front_condition .radio.checkbox').checkbox({
        onChecked: function() {
          $('.front_condition').find('input[name=isCreateNew]').val($(this).attr('tabindex'));
          }
      });

      /* 活动属性-常规-定义 */
      $(document).on('click', '.conventional .definitionBtn', function() {
        $('.conventional_definition.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.prop_node').dimmer('hide');
                clearModal(this);
                $(this).find('tbody').empty();
                $('.conventional_definition .menu .item[data-tab="definition_1"]').trigger('click');
                $('.conventional_definition').find('.menu .item[data-tab="definition_2/processer"]').show();
                $('.conventional_definition').find('.menu .item[data-tab="definition_2/historyactselect"]').hide();
              },
          onShow: function() {
                $('.modal.prop_node').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 活动属性-工具-添加 */
      $(document).on('click', '.modal.prop_node .toolAddBtn', function() {
        $('.tool_add.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.prop_node').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.prop_node').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 活动属性-工具-添加-扩展属性添加 */
      $(document).on('click', '.modal.tool_add .actualParametersAdd2', function() {
        $('.tool_extendAttr_add.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.tool_add').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.tool_add').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 活动属性-后置条件-扩展属性-添加 */
      $(document).on('click', '.post_condition .extendAttrAddBtn', function() {
        $('.postCondition_extendAttr_add.modal').modal({
          allowMultiple: true,
          autofocus: true,
          duration: {},
          onHidden: function() {
            $('.modal.prop_node').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.prop_node').dimmer({closable: false}).dimmer('show');
                $('.postCondition_extendAttr_add .green.button').data('event_source', '.post_condition');
              }
        }).modal('show');
      });

      /* 连线属性-扩展属性-添加 */
      $(document).on('click', '.prop_edge .extendAttrAddBtn', function() {
        $('.postCondition_extendAttr_add.modal').modal({
          allowMultiple: true,
          autofocus: true,
          duration: {},
          onHidden: function() {
            $('.modal.prop_edge').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.prop_edge').dimmer({closable: false}).dimmer('show');
                $('.postCondition_extendAttr_add .green.button').data('event_source', '.prop_edge');
              }
        }).modal('show');
      });

      /* 活动属性-后置条件-条件设置-关系设置 */
      $(document).on('click', '.relationshipPlaBtn', function() {
        var num = $('.workflowbeanDiv tbody tr').length;
        if (num) {
          $('.relationshipPlacement.modal').modal({
            allowMultiple: true,
            autofocus: false,
            duration: {},
            onHidden: function() {
              $('.modal.prop_node, .modal.prop_edge').dimmer('hide');
                  clearModal(this);
                },
            onShow: function() {
                  $('.modal.prop_node, .modal.prop_edge').dimmer({closable: false}).dimmer('show');
                  $('.relationshipPlacement .condition_no').empty();
                  for (var i = 0; i < num; i++) {
                    $('.relationshipPlacement .condition_no').append(
                      '<div class="inline field">'+
                    '   <div class="ui checkbox">'+
                    '       <input type="checkbox" tabindex="0" class="hidden">'+
                    '       <label>${'+(i+1)+'}</label>'+
                    '       <input type="hidden" name="${'+(i+1)+'}" value="">'+
                    '   </div>'+
                    '</div>');
                  }
                  $('.relationshipPlacement .condition_no').find('.ui.checkbox').checkbox({
                onChecked: function() {
                  $(this).parents('.checkbox').find('input[name]').val(true);
                },
                onUnchecked: function() {
                  $(this).parents('.checkbox').find('input[name]').val(false);
                }
              });
                }
          }).modal('show');
        } else {
          layer.msg('请添加条件!', {time: 2000, icon:2});
        }
      });

      /* 活动属性-扩展属性-添加 */
      $(document).on('click', '.extended_attr .extendAttrAddBtn', function() {
        $('.extendAttr_add.modal').modal({
          allowMultiple: true,
          autofocus: true,
          duration: {},
          onHidden: function() {
                $('.modal.prop_node').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.prop_node').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 超时限制-增加 */
      $(document).on('click', '.modal.prop_node .timeoutLimitAddBtn', function() {
        $('.timeoutLimit_add.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.prop_node').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.prop_node').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 监控信息-增加 */
      /*$('.monitorinf_add.modal').modal({
        allowMultiple: true,
        autofocus: false, 
        duration: {},
        onHidden: function() {
              $('.modal.prop_node').dimmer('hide');
              clearModal(this);
            },
        onShow: function() {
              $('.modal.prop_node').dimmer({closable: false}).dimmer('show');
            }
      }).modal('attach events', '.modal.prop_node .monitorinfAddBtn'); //attach events 在firefox下存在问题*/

      $(document).on('click', '.modal.prop_node .monitorinfAddBtn', function() {
        $('.monitorinf_add.modal').modal({
          allowMultiple: true,
          autofocus: false, 
          duration: {},
          onHidden: function() {
                $('.modal.prop_node').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.prop_node').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 监控信息-增加-定义 */
      $(document).on('click', '.modal.monitorinf_add .definitionBtn', function() {
        $('.monitorinfAddDefinition.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.monitorinf_add').dimmer('hide');
                clearModal(this);
                $(this).find('tbody').empty();
              },
          onShow: function() {
                $('.modal.monitorinf_add').dimmer({closable: false}).dimmer('show');
                $('.monitorinfAddDefinition select[name="definition_role"]').dropdown('set selected', 'responsible');
              }
        }).modal('show');
      });

      /* 工具-添加-定义 */
      $(document).on('click', '.modal.tool_add .definitionBtn', function() {
        $('.tooldefinition.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.tool_add').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.tool_add').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 工具-添加-定义-添加 */
      $(document).on('click', '.modal.tooldefinition .tooldefinitionAddBtn', function() {
        $('.tooldefinition_add.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.tooldefinition').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.tooldefinition').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 工具-添加-定义-添加-添加 */
      $(document).on('click', '.modal.tooldefinition_add .tooldefinitionAddAddBtn', function() {
        $('.tooldefinition_add_add.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.tooldefinition_add').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.tooldefinition_add').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 工具-添加-添加 */
      $(document).on('click', '.modal.tool_add .actualParametersAdd1', function() {
        $('.actualParametersDiv.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.tool_add').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.tool_add').dimmer({closable: false}).dimmer('show');
                //ajax请求角色数据
              }
        }).modal('show');
      });

      /* 工具-添加-添加-定义 */
      $(document).on('click', '.modal.actualParametersDiv .definitionBtn', function() {
        $('.toolAddDefinition.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.actualParametersDiv').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.actualParametersDiv').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 工具-添加-添加-定义-添加 */
      $(document).on('click', '.modal.toolAddDefinition .toolAddDefinitionAddBtn', function() {
        $('.toolAddDefinitionAdd.modal').modal({
          allowMultiple: true,
          autofocus: false,
          duration: {},
          onHidden: function() {
                $('.modal.toolAddDefinition').dimmer('hide');
                clearModal(this);
              },
          onShow: function() {
                $('.modal.toolAddDefinition').dimmer({closable: false}).dimmer('show');
              }
        }).modal('show');
      });

      /* 常规-定义-高级-一般 类型 onChange 事件 */
      $('.def_common [data-tab$="/commonly"] select[name=definition_type]').on('change', function() {
        $(this).parents('[data-tab$="/commonly"]').find('input').val('');
      });

        /* 点击显示树形结构div */
      $('input[name="def_name_show"]').on('click', function() {
        var def_type = $(this).parents('.modal').find('.tab[data-tab$="/commonly"] select[name=definition_type]').val();
        if (!def_type) {
          layer.msg('先选择类型！', {time: 2000, icon:0, offset: '180px'});
          return;
        }
        if (def_type.indexOf('role') != -1) {// 类型-角色
          $('.role_manage.modal').modal({
            allowMultiple: true,
            autofocus: false,
            duration: {},
            onHidden: function() {
                  $('.modal.conventional_definition,.modal.monitorinfAddDefinition').dimmer('hide');
                  clearModal(this);
                },
            onShow: function() {
                  $('.modal.conventional_definition,.modal.monitorinfAddDefinition').dimmer({closable: false}).dimmer('show');
                  selectInfo(1, 15);
                }
          }).modal('show');
          return;
        }
        // 根据类型 定义url
        var url = '';
        if (def_type == 'human|人') {
          url = 'platform/person/userTree.do?state=';
        } else if (def_type.indexOf('org') != -1) {
          url = 'platform/organise/organiseTree.do?state=';
        } else if (def_type == 'allParty|所有人【人】') {
          layer.msg('不需要填写！', {time: 2000, icon:4});
          return;
        }

        var setting = {
          view: {
            dblClickExpand: false
          },
          check: {
            enable: true,
            chkStyle: "radio",
            radioType: "all"
          },
          callback: {
            onClick: OnClick,
            onAsyncSuccess: onsuccess 
          },
          async: {  
            autoParam: ["id=node", "value=parentId"], 
            otherParam: {}, 
            contentType: "application/x-www-form-urlencoded;charset=UTF-8",  
            enable: true,  
            type: "post",  
            url: url,
            dataFilter: ajaxDataFilter
          },
          data:{  
            simpleData: {
              enable: true,
              rootPId: "xnode-40"
            } 
          } 
        };

        treelayer = layer.open({
            type: 1,
            title: 'PersonTree',
            skin: 'layui-layer-rim', // 边框
            area: ['300px', '350px'], // 宽高
            offset: ['167px', '587px'],
            content: '<div id="treeDemo_div" style="height:98%">'+
                  '<ul id="treeDemo" class="ztree">'+
                  '</ul>'+
                  '<div class="buttons_bottom">'+
                    '<div class="ui horizontal divider">'+
                      '<button class="ui primary mini button">确定</button>'+
                    '<button class="ui cancel mini button">取消</button>'+
                  '</div>'+
                '</div>'+
               '</div>'
        });
        /* ztree */
        $.fn.zTree.init($("#treeDemo"), setting);
        zTree = $.fn.zTree.getZTreeObj("treeDemo");
      });
      // 树形结构下 取消
      $(document).on('click', '#treeDemo_div .cancel', function() {
        layer.close(treelayer);
      });
      // 树形结构下 确定
      $(document).on('click', '#treeDemo_div .primary', function() {
        var nodes = zTree.getCheckedNodes(true);
        if (nodes.length) {
          if ($('.conventional_definition').is(':visible')) {
            $('.conventional_definition input[name=def_name_show]').val(nodes[0].name);
            $('.conventional_definition input[name=definition_name]').val(nodes[0].value + '|' + nodes[0].name);
          } else {
            $('.monitorinfAddDefinition input[name=def_name_show]').val(nodes[0].name);
            $('.monitorinfAddDefinition input[name=definition_name]').val(nodes[0].value + '|' + nodes[0].name);
          }
        } else {
          layer.msg('请选中元素！', {time: 2000, icon: 0, offset: ['270px','650px']});
          return;
        }
        layer.close(treelayer);
      });
      // 角色管理-搜索
      $('.role_manage .search.icon').on('click', function() {
        selectInfo(1, 15);
      });
      // 角色管理-重置
      $('.role_manage .resetBtn').on('click', function() {
        $(this).siblings('.role-search').find('input').val('');
        $('.role_manage .search.icon').trigger('click');
      });
      // 角色管理-确定
      $('.role_manage .okBtn').on('click', function() {
        var jsonstr = $(this).parents('#role-center').find('tr.active').attr('jsonstr');
        if (jsonstr) {
          var jsonobj = JSON.parse(jsonstr);
          if ($('.conventional_definition').is(':visible')) {
            $('.conventional_definition input[name=def_name_show]').val(jsonobj.ROLENAME);
            $('.conventional_definition input[name=definition_name]').val(jsonobj.ROLEID + '|' + jsonobj.ROLENAME);
          } else {
            $('.monitorinfAddDefinition input[name=def_name_show]').val(jsonobj.ROLENAME);
            $('.monitorinfAddDefinition input[name=definition_name]').val(jsonobj.ROLEID + '|' + jsonobj.ROLENAME);
          }
          $(this).parents('.modal').modal('hide');
        } else {
          layer.msg('请选中元素！', {time: 2000, icon: 0, offset: '180px'});
          return;
        }
      });

      
    });

    // 清空表单
    function clearModal(selector) {
      $(selector).find('input, textarea').val('');
        $(selector).find('.ui.dropdown').dropdown('clear');
    }

    // 刷新显示滚动条
    function updateScrollbar() {
      var dataTab = $(this).attr('data-tab');
      if (dataTab == 'third') { //xml视图
        $("#xmlContainer").mCustomScrollbar("update");
      }
      if (dataTab == 'second') { //xpdl视图
        $("#xpdlContainer").mCustomScrollbar("update");
      }
    }

    // zTree 数据过滤
    function ajaxDataFilter(treeId, parentNode, responseData) {
        if (responseData) {
          for (var i = 0; i < responseData.length; i++) {
            responseData[i].name = responseData[i].text;
            responseData[i].open = responseData[i].expanded;
            responseData[i].isParent = !responseData[i].leaf;
            responseData[i].nocheck = responseData[i].checked == false ? false : true;
          }
        }
        return responseData;
    }

    // zTree 点击节点
    function OnClick(event, treeId, treeNode) {
      zTree.checkNode(treeNode, true, false);
    }

    // zTree onsuccess
    function onsuccess(event, treeId, treeNode, msg) {
      try {
          var dataJson = JSON.parse(msg);
        if (!dataJson.length) return;
        if (dataJson[0].id == 'root-root' && dataJson[0].expanded) {
          var node = zTree.getNodeByParam("id", dataJson[0].id);
          zTree.expandNode(node, true);
        }
      } catch (e) {
        layer.msg('platform 未登录！', {time: 2000, icon:2});
        console.error('platform 未登录！');
          //window.location.href = "https://segmentfault.com/search?q=[js]+" + e.message;
      }
    }

    // 角色管理分页
    function selectInfo(offset, size) {
      if (offset) {
        $(".role_manage #offset").val(offset);
      }
      if (size) {
        $(".role_manage #size").val(size);
      }
      $("#searchForm").trimForm().ajaxSubmit({
          url: "platform/role/query.do?hyper=false",
        type: "post",
        data: {
          "start": (offset-1)*size,
              "limit": size //后台用的默认参数15，传值无效
            },
            dataType: "json",
          success: function(result) {
              $('.role_manage .content-tab').empty();
              if (result.totalCount) {
                  $.pages({
                      count: result.totalCount, //总数量
                      curr: offset, //初始化当前页
                  }, selectInfo, size);
                  //显示数据
            $('.role_manage .content-tab').html(juicer($('#role_manage_tpl').html(), result));
            $('.role_manage .content-tab').find('.ui.checkbox').checkbox();
              } else {
            $('.role_manage .content-tab').html('<div class="no-info">暂无信息...</div>');
          }
          },
        error: function(data) {
          alert("服务器繁忙,请稍后再试...");
        }
      });
    }

    /*-------------初始化 tab select start-------------*/
    initSelect();
        
    function initSelect() {
      $.ajax({
          url: 'wfConf/WfDSystemConfig.xml',
          dataType: 'xml',
          success: function(data) {
              //console.log(data);
              window.wfdConfig = data;
              //下拉列表
              $(data).find('selects select').each(function() {
                  var selectId = $(this).attr('id');
                  var select = {selectId: selectId, options: []};
                  $(this).find('selectOption').each(function() {
                    var option = {
                        value: $(this).attr('value'),
                        show: $(this).text()
                      };
                    select.options.push(option);
                });
                  $('.'+selectId).append(juicer($('#select_tpl').html(), select))
                           .find('.ui.dropdown').dropdown();
                  if (selectId == 'transitionEventType') {
                    // 后置条件-条件设置-业务对象
                    select.bean = { opts: [] };
                  $(data).find('beanconditionsdefs beanconditionsdef').each(function() {
                    var option = {
                      name: $(this).attr('name'),
                      value: $(this).attr('id')
                    };
                    select.bean.opts.push(option);
                  });
                    $('#transition_tpl').html(juicer($('#transition_tpl').html(), select));
                  }
            });
              var participant = {
                    selectItems: []
                };
              $(data).find('participant-option select-item').each(function() {
                  var selectItem = {
                      key: $(this).attr('key'),
                      displayName: $(this).attr('display-name'),
                      selectTypes: []
                  };
                  $(this).find('select-type').each(function() {
                      var selectType = {
                        key: $(this).attr('key'),
                        name: $(this).attr('name')
                      };
                      selectItem.selectTypes.push(selectType);
                  });
                  participant.selectItems.push(selectItem);
              });
              $('.conventional_definition').append(juicer($('#participant_tpl').html(), participant));
              $('.conventional_definition').find('.menu .item').tab();
              $('.conventional_definition').find('select.dropdown').dropdown();

          }
      });
    }
    /*-------------初始化 tab select end-------------*/


    // graphCreator.js
    /*jshint esversion: 6 */
document.onload = (function(d3, saveAs, Blob, vkbeautify) {
  "use strict";

  // define graphcreator object
  var GraphCreator = function(containerId, svg, nodes, edges, participants) {
    var thisGraph = this;
    console.log('thisGraph:');
    console.log(thisGraph);

    thisGraph.nodes = nodes || [];
    thisGraph.edges = edges || [];
    thisGraph.participants = participants || [];
    thisGraph.containerId = containerId;

    thisGraph.state = {
      activeEdit: true,
      selectedNode: null,
      selectedEdge: null,
      mouseDownNode: null,
      mouseDownLink: null,
      justDragged: false,
      justScaleTransGraph: false,
      lastKeyDown: -1,
      shiftNodeDrag: false,
      selectedText: null,
      drawLine: ''
    };

    // define arrow markers for graph links
    var defs = svg.append('defs');
    defs.append('svg:marker')
      .attr('id', thisGraph.containerId + '-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 42)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5');

    //define arrow markers for leading arrow
    defs.append('marker')
      .attr('id', thisGraph.containerId + '-mark-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 7)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5');

    //定义选中样式的箭头
    defs.append('marker')
      .attr('id', thisGraph.containerId + '-selected-end-arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 30)
      .attr('markerWidth', 5)
      .attr('markerHeight', 5)
      .attr('orient', 'auto')
      .append('svg:path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', 'rgb(229, 172, 247)');

    thisGraph.svg = svg;
    thisGraph.show_position = svg.append("text")
      .attr({
        'x': 1107,
        'y': 15,
        'fill': '#E1784B'
      });
    thisGraph.svgG = svg.append("g")
      .classed(thisGraph.consts.graphClass, true);
    var svgG = thisGraph.svgG;

    // displayed when dragging between nodes
    thisGraph.dragLine = svgG.append('path')
      .attr('class', 'link dragline hidden')
      .attr('d', 'M0,0L0,0')
      .style('marker-end', 'url(#'+thisGraph.containerId+'-mark-end-arrow)');

    // svg nodes and edges
    thisGraph.paths = svgG.append("g").selectAll("g");
    thisGraph.circles = svgG.append("g").selectAll("g");

    thisGraph.drag = d3.behavior.drag()
      .origin(function(d) {
        // d = selected circle. The drag origin is the origin of the circle
        return {
          x: d.x,
          y: d.y
        };
      })
      .on("dragstart", function() {d3.select(this).select("circle").attr("r", thisGraph.consts.nodeRadius + thisGraph.consts.nodeRadiusVary);})
      .on("drag", function(args) {
        thisGraph.state.justDragged = true;
        thisGraph.dragmove.call(thisGraph, args);
      })
      .on("dragend", function(args) {
        // args = circle that was dragged
        d3.select(this).select("circle").attr("r", thisGraph.consts.nodeRadius - thisGraph.consts.nodeRadiusVary);
      });

    // listen for key events
    d3.select(window).on("keydown", function() {
        thisGraph.svgKeyDown.call(thisGraph);
      })
      .on("keyup", function() {
        thisGraph.svgKeyUp.call(thisGraph);
      });
    svg.on("mousedown", function(d) {
      thisGraph.svgMouseDown.call(thisGraph, d);
    });
    svg.on("mouseup", function(d) {
      thisGraph.svgMouseUp.call(thisGraph, d);
    });
    svg.on("mousemove", function(d) {
      thisGraph.show_position.text('pos: '+d3.mouse(svgG.node())[0].toFixed(0)+', '+d3.mouse(svgG.node())[1].toFixed(0));
    });

    // listen for dragging
    var dragSvg = d3.behavior.zoom()
      .scaleExtent([0.3, 2])
      .on("zoom", function() {
        // console.log('zoom triggered');
        if (d3.event.sourceEvent.shiftKey) {
          // the internal d3 state is still changing
          return false;
        } else {
          thisGraph.zoomed.call(thisGraph);
        }
        return true;
      })
      .on("zoomstart", function() {
        // console.log('zoomstart triggered');
        var ael = d3.select("#" + thisGraph.consts.activeEditId).node();
        if (ael) {
          ael.blur();
        }
        if (!d3.event.sourceEvent.shiftKey) d3.select('body').style("cursor", "move");
      })
      .on("zoomend", function() {
        // console.log('zoomend triggered');
        d3.select('body').style("cursor", "auto");
      });
    thisGraph.dragSvg = dragSvg;
    svg.call(dragSvg).on("dblclick.zoom", null);

    // listen for resize
    window.onresize = function() {
      thisGraph.updateWindow(svg);
    };

    // handle download data
    d3.select("#download-input").on("click", function() {
      var saveEdges = [];
      thisGraph.edges.forEach(function(val, i) {
        saveEdges.push({
          source: val.source.id,
          target: val.target.id
        });
      });
      var blob = new Blob([window.JSON.stringify({
        "nodes": thisGraph.nodes,
        "edges": saveEdges
      })], {
        type: "text/plain;charset=utf-8"
      });
      saveAs(blob, "mydag.json");
    });


    // handle uploaded data
    d3.select("#upload-input").on("click", function() {
      document.getElementById("hidden-file-upload").click();
    });
    d3.select("#hidden-file-upload").on("change", function() {
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        var uploadFile = this.files[0];
        var filereader = new window.FileReader();
        
        filereader.onload = function() {
          var txtRes = filereader.result;
          // better error handling
          try {
            var jsonObj = JSON.parse(txtRes);
            thisGraph.deleteGraph();
            thisGraph.nodes = jsonObj.nodes;
            var newEdges = jsonObj.edges;
            newEdges.forEach(function(e, i) {
              newEdges[i] = {
                source: thisGraph.nodes.filter(function(n) {
                  return n.id == e.source;
                })[0],
                target: thisGraph.nodes.filter(function(n) {
                  return n.id == e.target;
                })[0]
              };
            });
            thisGraph.edges = newEdges;
            thisGraph.updateGraph();
          } catch (err) {
            window.alert("Error parsing uploaded file\nerror message: " + err.message);
            return;
          }
        };
        filereader.readAsText(uploadFile);

      } else {
        alert("Your browser won't let you save this graph -- try upgrading your browser to IE 10+ or Chrome or Firefox.");
      }

    });

    $('#flowComponents .components-btn[type]').not('.noComponent').attr('draggable', 'true')
      .on('dragstart', function(ev) {
        // $('.full-left').css({cursor: 'no-drop'});
        $(this).siblings().removeClass('active').end().addClass('active');
        $('.full-right>.tab.active .full-right-top').addClass('activate');
        /* 设置拖动过程显示图片
        var icon = document.createElement('img');
        icon.src = $(this).find('img').attr('src');
        ev.originalEvent.dataTransfer.setDragImage(icon,10,10);*/
        var json_obj = {
          text: $(this).attr('data-show'),
          component: $(this).attr('name'),
          type: $(this).attr('type')
        };
        ev.originalEvent.dataTransfer.setData('tr_data', JSON.stringify(json_obj));
      })
      .on('dragend', function(ev) {
        $('.full-right>.tab.active .full-right-top').removeClass('activate');
      }); 
    $('.full-right .tab.active').on('drop', '.svg-container', function(ev) {
      ev.stopPropagation(); 
      ev.preventDefault(); 
      var position = {
        x: parseFloat(ev.originalEvent.offsetX),
        y: parseFloat(ev.originalEvent.offsetY)
      };

      position = thisGraph.parsePosition(this, position);

      var data = JSON.parse(ev.originalEvent.dataTransfer.getData('tr_data'));
      data = $.extend(data, position);
      var node = thisGraph.createNode(data);

      thisGraph.nodes.push(node);
      thisGraph.updateGraph();

    })
    .on('dragover', function(ev) { 
      ev.preventDefault();
    });

    $('svg').on('click', function() {
      $('#rMenu').hide();
    });
    $('svg').on('contextmenu', function() {
      $('#flowComponents div[name=selectBtn]').trigger('click');
      return false;
    });

    //后置条件-扩展属性集-添加
    $('.postCondition_extendAttr_add .green.button').on('click', function() {
      var element_add = $('.postCondition_extendAttr_add.modal');
      var name = element_add.find('input[name="extendAttr_add_name"]').val();
      var value = element_add.find('input[name="extendAttr_add_value"]').val();
      if (!name) {
        layer.msg('请输入名称！', {time: 2000, icon:2});
        return false;
      }
      if (!value) {
        layer.msg('请输入值！', {time: 2000, icon:2});
        return false;
      }
      var data = {name: name, value: value};
      data = {data: data, jsonstr: JSON.stringify(data)};
      var html = juicer($('#extended_attr_tpl').html(), data);
      var operate = element_add.find('input[name="extendAttr_add_operate"]').val();
      if (operate) {
        var event_source = $(this).data('event_source');
        var selectedTr = $(event_source).find('.transferInf_extended_attr tbody tr.active');
        selectedTr.attr('jsonstr', data.jsonstr);
        selectedTr.find('td').eq(1).text(data.data.name);
        selectedTr.find('td').eq(2).text(data.data.value);
      } else {
        var element_attr = $('.targetActivity .transferInf_extended_attr');
        element_attr.find('tbody').append(html).find('.ui.checkbox').checkbox();
        element_attr.find('.postCondi_extendedAttr').mCustomScrollbar("update");
        element_attr.find('.postCondi_extendedAttr').mCustomScrollbar("scrollTo", "bottom", {scrollInertia: 1500});
      }
      element_add.find('input').val("");
    });

    //后置条件-扩展属性集-编辑
    $('.targetActivity').on('click', '.transferInf_extended_attr .extendAttrEditBtn', function() {
      var selectedTr = $(this).parents('.grid').find('tbody tr.active');
      if (selectedTr.length < 1) {layer.msg('请选择一行!', {time: 2000, icon: 0}); return false;}
      var jsonstr = $(this).parents('.grid').find('tbody tr.active').attr('jsonstr');
      var json = JSON.parse(jsonstr);
      var element = $('.postCondition_extendAttr_add.modal');
      element.find('input[name="extendAttr_add_name"]').val(json.name);
      element.find('input[name="extendAttr_add_value"]').val(json.value);
      element.find('input[name="extendAttr_add_operate"]').val("1");
      $('.transferInf_extended_attr .extendAttrAddBtn').trigger('click');
    });
    //后置条件-扩展属性集-删除
    $('.targetActivity').on('click', '.transferInf_extended_attr .extendAttrDelBtn', function() {
      var tr = $(this).parents('.grid').find('tbody tr.active');
      if (tr.length > 0) {
        tr.remove();
        $('.transferInf_extended_attr .postCondi_extendedAttr').mCustomScrollbar('update');
      } else {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
      }
    });

    //扩展属性集-添加
    $('.extendAttr_add .green.button').on('click', function() {
      var name = $('.extendAttr_add.modal input[name="extendAttr_add_name"]').val();
      var value = $('.extendAttr_add.modal input[name="extendAttr_add_value"]').val();
      if (!name) {
        layer.msg('请输入名称！', {time: 2000, icon:2});
        return false;
      }
      if (!value) {
        layer.msg('请输入值！', {time: 2000, icon:2});
        return false;
      }
      var data = {name: name, value: value};
      data = {data: data, jsonstr: JSON.stringify(data)};
      var html = juicer($('#extended_attr_tpl').html(), data);
      var operate = $('.extendAttr_add.modal input[name="extendAttr_add_operate"]').val();
      if (operate) {
        var selectedTr = $('.extended_attr tbody tr.active');
        selectedTr.attr('jsonstr', data.jsonstr);
        selectedTr.find('td').eq(1).text(data.data.name);
        selectedTr.find('td').eq(2).text(data.data.value);
      } else {
        $('.extended_attr tbody').append(html).find('.ui.checkbox').checkbox();
      }
      $('.extendAttr_add.modal input').val("");
    });

    //扩展属性集-编辑
    $('.extended_attr .extendAttrEditBtn').on('click', function() {
      var selectedTr = $(this).parents('.grid').find('tbody tr.active');
      if (selectedTr.length<1) {layer.msg('请选择一行!', {time: 2000, icon: 0}); return false;}
      var jsonstr = $(this).parents('.grid').find('tbody tr.active').attr('jsonstr');
      var json = JSON.parse(jsonstr);
      $('.extendAttr_add.modal input[name="extendAttr_add_name"]').val(json.name);
      $('.extendAttr_add.modal input[name="extendAttr_add_value"]').val(json.value);
      $('.extendAttr_add.modal input[name="extendAttr_add_operate"]').val("1");
      $('.extended_attr .extendAttrAddBtn').trigger('click');
      // $('.extendAttr_add.modal').modal('show'); //会关闭一级弹窗
    });

    //扩展属性集-删除
    $('.extended_attr .extendAttrDelBtn').on('click', function() {
      var tr = $(this).parents('.grid').find('tbody tr.active');
      if (tr.length > 0) {
        tr.remove();
      } else {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
      }
    });

    //超时限制-增加-确定
    $('.timeoutLimit_add .green.button').on('click', function() {
      var deadline = {};
      $('.timeoutLimit_add').find('input[name], select').each(function() {
        deadline[$(this).attr('name')] = $(this).val();
      });
      if (!deadline.deadlineCondition) {
        layer.msg('请输入持续时间！', {time: 2000, icon:2});
        return false;
      }
      if (!deadline.exceptionName) {
        layer.msg('请输入异常名称！', {time: 2000, icon: 2});
        return false;
      }
      var operate = $('.timeoutLimit_add.modal input[name="timeoutLimit_add_operate"]').val();
      if (operate) {//编辑操作
        var selectedTr = $('.timeout_limit tbody tr.active');
        selectedTr.attr('jsonstr', JSON.stringify(deadline));
        selectedTr.find('td').text(deadline.deadlineCondition);
      } else {
        $('.timeout_limit tbody').append('<tr jsonstr= '+JSON.stringify(deadline)+'><td>'+deadline.deadlineCondition+'</td></tr>');
        $(".timeout_limit_grid .content-div").mCustomScrollbar("update");
        $(".timeout_limit_grid .content-div").mCustomScrollbar("scrollTo", "bottom", {scrollInertia: 1500});
      }
    });

    //超时限制-删除
    $('.timeoutLimitRemoveBtn').on('click', function() {
      var tr = $(this).parents('.grid').find('tbody tr.active');
      if (tr.length > 0) {
        tr.remove();
        $(".timeout_limit_grid .content-div").mCustomScrollbar("update");
      } else {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
      }
    });

    //超时限制-编辑
    $('.timeoutLimitEditBtn').on('click', function(){
      var tr = $(this).parents('.grid').find('tbody tr.active');
      if (tr.length == 0) {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
        return false;
      }
      var data = JSON.parse(tr.attr('jsonstr'));
      for (var key in data) {
        $('.timeoutLimit_add').find('input[name="'+key+'"]').val(data[key]);
      }
      $('.timeoutLimit_add').find('select').dropdown('set selected', data.execution);
      $('.timeoutLimit_add.modal input[name="timeoutLimit_add_operate"]').val("1");
      $('.timeoutLimitAddBtn').trigger('click');
    });

    //常规-定义
    $('.conventional').on('click', '.definitionBtn', function(event) {
      var selectedNode = thisGraph.state.selectedNode;
      var rol_id = $('.conventional select[name="definition_role"]').siblings('.text').attr('definition_id');
      $('.conventional_definition').find('.menu .item[data-tab="definition_2/processer"]').hide();
      $('.conventional_definition').find('.menu .item[data-tab="definition_2/historyactselect"]').hide();
      var hasLinked = thisGraph.hasLinked(selectedNode, true, -1);
      if (hasLinked) {
        var select = {
          selectId: 'definition_name', 
          options: [{
            value: selectedNode.id+'|'+selectedNode.title, 
            show: selectedNode.title 
          }]
        };
        var edges = thisGraph.getLinkedEdges(selectedNode, -1);
        var options = edges.filter(function(edge) {
          return edge.source.type == 'activity';
        }).map(function(edge) {
          return {
            value: edge.source.id+'|'+edge.source.title,
            show: edge.source.title
          };
        });
        select.options = select.options.concat(options);
        $('.conventional_definition div.definition_name label').siblings().remove();
        $('.conventional_definition div.definition_name').append(juicer($('#select_tpl').html(), select))
                                                          .find('.ui.dropdown').dropdown();
        $('.conventional_definition').find('.menu .item[data-tab="definition_2/historyactselect"]').show();// 其它activity指向本，显示
      }
      if (rol_id) {// 编辑
        $('.conventional_definition input[name="conventional_def_operate"]').val(1);// 页面标记 1：代表编辑
        var participants = thisGraph.participants;
        thisGraph.participants.forEach(function(participant) {
          if (participant.conventional_definition_id == rol_id) {
            $('.conventional_definition div[data-tab="definition_1"]').find('input[name]:not(".hidden"), textarea').each(function() {
              $(this).val(participant[$(this).attr('name')]);
            });
            if (participant.typeName) {
              participant.typeName.forEach(function(item, i) {
                var itemValue_show = participant.itemValue[i].split('|')[1]? participant.itemValue[i].split('|')[1]:'',
                  itemValue = participant.itemValue[i]? participant.itemValue[i]:'',
                  itemName = participant.itemName[i].split('|')[1];
                $('.conventional_definition .definition_condition tbody').append(
                    '<tr>'+
                    '  <td name="typeName" value="'+item+'">'+item.split('|')[1]+'</td>'+
                    '  <td name="itemName" value="'+participant.itemName[i]+'">'+itemName+'</td>'+
                    '  <td name="itemValue" value="'+itemValue+'">'+itemValue_show+'</td>'+
                    '  <td name="secLevelS" value="'+participant.secLevelS[i]+'">'+participant.secLevelS[i]+'</td>'+
                    '  <td name="secLevelE" value="'+participant.secLevelE[i]+'">'+participant.secLevelE[i]+'</td>'+
                    '  <td name="roleName" value="'+participant.roleName[i]+'">'+participant.roleName[i]+'</td>'+
                    '</tr>');
              });
            }
          }
        });
      } else { //增加
        $('.conventional_definition input[name="conventional_definition_id"]').val(seqer_participantID.gensym());
      }
    });

    //常规-定义-高级-增加条件
    $('.conventional_definition').on('click', '.definition_addBtn', function() {
      var typeName = $('.conventional_definition [data-tab="definition_2"]>.menu>.item.active').attr('value'),
        data_tab = $('.conventional_definition [data-tab="definition_2"] .tab.active').attr('data-tab'),
        type = $('.conventional_definition div[data-tab="'+data_tab+'"] select[name="definition_type"]').val(),
        name = $('.conventional_definition div[data-tab="'+data_tab+'"] [name="definition_name"]').val() || '';
      var params = {};
      $('.conventional_definition div[data-tab="'+data_tab+'"]').find('input[name],select').each(function() {
        params[$(this).attr('name')] = $(this).val();
      });
      if (data_tab == 'definition_2/commonly' || data_tab == 'definition_2/historyactselect') {//类型--一般
        if (!type) {
          layer.msg('请选择类型!', {time: 2000, icon: 0});
          return;
        }
        if (type != 'allParty|所有人【人】' && !name) {
          layer.msg('请选择名称!', {time: 2000, icon: 0});
          return;
        }
      } else {
        if (!type) {
          layer.msg('请选择类型!', {time: 2000, icon: 0});
          return false;
        }
      }
      $('.conventional_definition [name="conventional_definition_participant"]').val("");//清除-自定义参数者
      $('.conventional_definition .definition_condition tbody').append(
                '<tr>'+
                '  <td name="typeName" value="'+typeName+'">'+(typeName.split('|')[1])+'</td>'+
                '  <td name="itemName" value="'+type+'">'+(type.split('|')[1])+'</td>'+
                '  <td name="itemValue" value="'+name+'">'+(name?name.split('|')[1]?name.split('|')[1]:name:'')+'</td>'+
                '  <td name="secLevelS" value="'+params.definition_param1+'">'+params.definition_param1+'</td>'+
                '  <td name="secLevelE" value="'+params.definition_param2+'">'+params.definition_param2+'</td>'+
                '  <td name="condition" value="fw=="></td>'+
                '</tr>');
      $(".conventional_definition .definition_condition").mCustomScrollbar("update");
      $(".conventional_definition .definition_condition").mCustomScrollbar("scrollTo", "bottom", {
        scrollInertia: 1500
      });
    });

    //常规-定义-高级-删除条件
    $('.conventional_definition').on('click', '.definition_removeBtn', function() {
      var select = $('.conventional_definition .definition_condition tbody tr.active');
      if (select.length > 0) {
        select.remove();
        $(".definition_condition").mCustomScrollbar("update");
      } else {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
      }
    });

    //常规-定义-确定
    $('.conventional_definition').on('click', '.green.button', function() {
      var operate = $('.conventional_definition input[name="conventional_def_operate"]').val(),
        currentId = $('.conventional_definition input[name="conventional_definition_id"]').val(),
        participant = {};
      $('.conventional_definition div[data-tab="definition_1"]').find('input[name]:not(".hidden"), textarea').each(function() {
        participant[$(this).attr('name')] = $(this).val();
      });
      if (participant.conventional_definition_participant) {// 自定义参与者
        
      } else {
        $('.conventional_definition div[data-tab="definition_2"] tbody').find('tr').each(function() {
          $(this).find('td').each(function(){
            participant[$(this).attr('name')] = participant[$(this).attr('name')] || [];
            participant[$(this).attr('name')].push($(this).attr('value'));
          });
          participant.roleName = participant.roleName || [];
          participant.roleName.push('party');// 常规定义参与者 角色默认是party
          // 以下几个属性不知道从哪里获取...???
          participant.isAppData = participant.isAppData || [];
          participant.isAppData.push('false');
          participant.condition = participant.condition || [];
          participant.condition.push('');
          participant.conditionXml = participant.conditionXml || [];
          participant.conditionXml.push('');
        });
      }

      if (operate) {// 1：编辑
        thisGraph.participants.forEach(function(item, i) {
          if (item.conventional_definition_id == currentId) {
            thisGraph.participants[i] = participant;
          }
        });
      } else {// '':保存
        thisGraph.participants.push(participant);
      }
      var rol = participant.conventional_definition_name?participant.conventional_definition_name + "-rol":participant.conventional_definition_id + "-rol";
      $('.conventional select[name="definition_role"]').dropdown('set text', rol);
      $('.conventional .dropdown .text').attr('definition_id', participant.conventional_definition_id);

    });
    
    //监控信息-删除
    $('.monitorinf .monitorinfRemoveBtn').on('click', function() {
      var selected = $('.monitorinf').find('tbody tr.active');
      if (selected.length) {
        var definition_id = selected.attr('definition_id');
        var responsible = thisGraph.state.selectedNode.monitorinf.responsible;
        responsible.forEach(function(resp, i) {
          if (resp == definition_id) responsible.splice(i, 1);
        });
        selected.remove();
        $(".monitorinf_grid .content-div").mCustomScrollbar("update");
      } else {
        layer.msg('请选择一行', {time: 2000, icon: 0});
      }
    });

    //监控信息-编辑
    $('.monitorinf .monitorinfEditBtn').on('click', function() {
      var selected = $('.monitorinf').find('tbody tr.active');
      if (selected.length) {
        var rol = selected.find('td').text(),
          rol_id = selected.attr('definition_id');
        $('.monitorinf_add input[name="monitorinf_add_operate"]').val(1);
        $('.monitorinf_add select[name="definition_role"]').dropdown('set text', rol);
        $('.monitorinf_add select[name="definition_role"]').siblings('.text').attr('definition_id', rol_id);
        $(this).siblings('.monitorinfAddBtn').trigger('click');
      } else {
        layer.msg('请选择一行', {time: 2000, icon: 0});
      }
    });

    //监控信息-增加-定义
    $('.monitorinf_add .definitionBtn').on('click', function() {
      var operate = $('.monitorinf_add input[name="monitorinf_add_operate"]').val();
      if (operate) { // 编辑
        var rol = $('.monitorinf_add .dropdown .text').attr('definition_id').replace('-rol', '');
        $('.monitorinfAddDefinition input[name="monitorinf_add_operate"]').val(operate);//隐藏域：1代表编辑 空代表增加
        var monitorinf = thisGraph.state.selectedNode.monitorinf;
        var participants = thisGraph.participants;
        participants.forEach(function(p) {
          if (p.conventional_definition_id == rol) {
            $('.monitorinfAddDefinition div[data-tab="definition_one"]').find('input[name]:not(".hidden"), textarea').each(function() {
              $(this).val(p[$(this).attr('name')]);
            });
            $('.monitorinfAddDefinition div[data-tab="definition_one"]').find('select').each(function() {
              $(this).dropdown('set selected', p[$(this).attr('name')]);
            });
            if (p.typeName) {
              p.typeName.forEach(function(tn, j) {
                var itemValue = p.itemValue[j]?p.itemValue[j].split('|')[1]?
                                  p.itemValue[j].split('|')[1]:p.itemValue[j]:'';
                $('.monitorinfAddDefinition .definition_condition tbody').append(
                    '<tr>'+
                    '  <td name="typeName" value="'+tn+'">'+tn.split('|')[1]+'</td>'+
                    '  <td name="itemName" value="'+p.itemName[j]+'">'+p.itemName[j].split('|')[1]+'</td>'+
                    '  <td name="itemValue" value="'+itemValue+'">'+itemValue+'</td>'+
                    '  <td name="secLevelS" value="'+p.secLevelS[j]+'">'+p.secLevelS[j]+'</td>'+
                    '  <td name="secLevelE" value="'+p.secLevelE[j]+'">'+p.secLevelE[j]+'</td>'+
                    '  <td name="roleName" value="'+p.roleName[j]+'">'+p.roleName[j]+'</td>'+
                    '</tr>');
              });
            }
          }
        });
      } else { //增加
        $('.monitorinfAddDefinition input[name="conventional_definition_id"]').val(seqer_participantID.gensym());
      }
    });

    //监控信息-增加-定义-高级-增加条件
    $('.monitorinfAddDefinition .monitorinfDefintionAddBtn').on('click', function() {
      var typeName = $('.monitorinfAddDefinition [data-tab="definition_two"]>.menu>.item.active').attr('value'),
        data_tab = $('.monitorinfAddDefinition [data-tab="definition_two"] .tab.active').attr('data-tab'),
        type = $('.monitorinfAddDefinition div[data-tab="'+data_tab+'"] select[name="definition_type"]').val(),
        name = $('.monitorinfAddDefinition div[data-tab="'+data_tab+'"] [name="definition_name"]').val() || '';
      var params = {};
      $('.monitorinfAddDefinition div[data-tab="'+data_tab+'"]').find('input[name],select').each(function() {
        params[$(this).attr('name')] = $(this).val();
      });
      if (data_tab == 'definition_two/a') {//类型--一般
        if (!type) {
          layer.msg('请选择类型!', {time: 2000, icon: 0});
          return;
        }
        if (type != 'allParty|所有人【人】' && !name) {
          layer.msg('请选择名称!', {time: 2000, icon: 0});
          return;
        }
      } else {
        if (!type) {
          layer.msg('请选择类型!', {time: 2000, icon: 0});
          return false;
        }
      }
      $('.monitorinfAddDefinition [name="conventional_definition_participant"]').val("");//清除-自定义参数者
      $('.monitorinfAddDefinition .definition_condition tbody').append(
                '<tr>'+
                '  <td name="typeName" value="'+typeName+'">'+typeName.split('|')[1]+'</td>'+
                '  <td name="itemName" value="'+type+'">'+(type.split('|')[1])+'</td>'+
                '  <td name="itemValue" value="'+name+'">'+(name?name.split('|')[1]?name.split('|')[1]:name:'')+'</td>'+
                '  <td name="secLevelS" value="'+params.definition_param1+'">'+params.definition_param1+'</td>'+
                '  <td name="secLevelE" value="'+params.definition_param2+'">'+params.definition_param2+'</td>'+
                '  <td name="roleName" value="'+params.definition_role+'">'+params.definition_role+'</td>'+
                '</tr>');
      $(".monitorinfAddDefinition .definition_condition").mCustomScrollbar("update");
      $(".monitorinfAddDefinition .definition_condition").mCustomScrollbar("scrollTo", "bottom", {
        scrollInertia: 1500
      });
    });

    //监控信息-增加-定义-高级-删除条件
    $('.monitorinfAddDefinition .monitorinfDefintionRemoveBtn').on('click', function() {
      var select = $('.monitorinfAddDefinition .definition_condition tbody tr.active');
      if (select.length > 0) {
        select.remove();
        $(".monitorinfAddDefinition  .definition_condition").mCustomScrollbar("update");
      } else {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
      }
    });

    //监控信息-增加-定义-确定
    $('.monitorinfAddDefinition .green.button').on('click', function() {
      var operate = $('.monitorinfAddDefinition input[name="monitorinf_add_operate"]').val(),
        currentId = $('.monitorinfAddDefinition input[name="conventional_definition_id"]').val(),
        participant = {};
      $('.monitorinfAddDefinition div[data-tab="definition_one"]').find('input[name],textarea,select').each(function() {
        participant[$(this).attr('name')] = $(this).val();
      });
      $('.monitorinfAddDefinition div[data-tab="definition_two"] tbody').find('tr').each(function() {
        $(this).find('td').each(function(){
          participant[$(this).attr('name')] = participant[$(this).attr('name')] || [];
          participant[$(this).attr('name')].push($(this).attr('value'));
        });
        //以下几个属性不知道从哪里获取...???
        participant.isAppData = participant.isAppData || [];
        participant.isAppData.push('false');
        participant.condition = participant.condition || [];
        participant.condition.push('');
        participant.conditionXml = participant.conditionXml || [];
        participant.conditionXml.push('');
      });
      
      if (operate) {// 1：编辑
        thisGraph.participants.forEach(function(item, i) {
          if (item.conventional_definition_id == currentId) {
            thisGraph.participants[i] = participant;
          }
        });
      } else {// '': 保存
        thisGraph.participants.push(participant);
      }

      var rol = participant.conventional_definition_name?participant.conventional_definition_name + "-rol":participant.conventional_definition_id + "-rol";
      $('.monitorinf_add select[name="definition_role"]').dropdown('set text', rol);
      $('.monitorinf_add .dropdown .text').attr('definition_id', participant.conventional_definition_id);
    });

    //监控信息-增加/编辑-确定
    $('.monitorinf_add .green.button').on('click', function() {
      var operate = $('.monitorinf_add input[name="monitorinf_add_operate"]').val();//operate: 1为编辑
      var definition_rol = $('.monitorinf_add .dropdown .text').text(),
          definition_id = $('.monitorinf_add .dropdown .text').attr('definition_id');
      if (operate) {//编辑
        $('.monitorinf').find('tbody').find('tr.active td').text(definition_rol);
      } else {//增加
        if (!definition_rol) return;
        $('.monitorinf').find('tbody').append('<tr definition_id="'+definition_id+'"><td>'+definition_rol+'</td></tr>');
        $(".monitorinf_grid .content-div").mCustomScrollbar("update");
        var node = thisGraph.state.selectedNode;
        node.monitorinf.responsible = node.monitorinf.responsible || [];
        node.monitorinf.responsible.push(definition_id);
      }
    });

    //后置条件-条件设置-类型
    $('.targetActivity').on('change', 'select[name=conditype]', function() {
      var show_cls = '.' + $(this).val().toLowerCase() + 'Div';
      var show_div = $(this).parents('.fields').siblings(show_cls);
      var targetActivity$ = $(this).parents('.targetActivity');//为了公用模板
      if (show_div.length) {
        show_div.removeClass('hideDiv').siblings('.myitem').addClass('hideDiv');
        if (show_cls == '.conditionDiv') {//显示-条件-默认选定
          var fieldConditions_type = targetActivity$.find('.conditionDiv tbody').data('fieldConditions_type');
          if (fieldConditions_type) {
            targetActivity$.find('.conditionDiv select[name=fieldConditions_type]').parent().dropdown('set selected', fieldConditions_type);
          } else {
            targetActivity$.find('.conditionDiv select[name=fieldConditions_type]').parent().dropdown('set selected', 'AND');
          }
          targetActivity$.find('.conditionDiv select[name=fieldCondition_type]').parent().dropdown('set selected', 'AND');
          targetActivity$.find(".conditionDiv .conditionList").mCustomScrollbar("update");
        }
        if (show_cls == '.exceptionDiv') {//显示-异常-默认选定
          targetActivity$.find('.exceptionDiv select[name=condiException]:parent').dropdown('set selected', '请选择异常');
        }
        if (show_cls == '.workflowbeanDiv') {//显示-按业务对象转移-默认选定
          var fieldConditions_type2 = targetActivity$.find('.workflowbeanDiv tbody').data('fieldConditions_type');
          if (fieldConditions_type2) {
            targetActivity$.find('.workflowbeanDiv input[name=beanConditions_type]').val(fieldConditions_type2);
          } else {
            targetActivity$.find('.workflowbeanDiv input[name=beanConditions_type]').val('AND');
          }
          targetActivity$.find('.workflowbeanDiv select[name=paramField]').parent().dropdown('set selected', '0');
          targetActivity$.find('.workflowbeanDiv select[name=fieldCondition_type]').parent().dropdown('set selected', 'AND');
        }
        if (show_cls == '.userdefineDiv') {//显示-用户自定义-默认选定
          
        }
        if (show_cls == '.customDiv') {//显示-自定义转移-默认选定
          
        }
      } else {
        $(this).parents('.fields').siblings('.myitem').addClass('hideDiv');
      }
    });

    //后置条件-条件设置-类型(条件)-字段
    $('.targetActivity').on('change', '.conditionDiv select[name=key]', function() {
      var field = $(this).val(),
        conditionDiv$ = $(this).parents('.conditionDiv');
      conditionDiv$.find('input[name]').val('');
      if (field != '0') {
        var condition_sel = conditionDiv$.find('.condition_sel');
        if (field == 'nextActivityName') {
          condition_sel.dropdown('setup menu', {
              values: [
                {value: 'IN', text: '包含', name: '包含' },
                {value: 'NOT', text: '不包含', name: '不包含' }
              ]
            }).dropdown('set selected', 'IN');
        } else {
          condition_sel.dropdown('setup menu', {
              values: [
                {value: '==',  text: '=', name: '=' },
                {value: '!=', text: '!=', name: '!=' },
                {value: 'IN', text: '包含', name: '包含' },
                {value: 'NOT', text: '不包含', name: '不包含' },
                {value: 'PREFIX', text: '前缀', name: '前缀' },
                {value: 'SUFFIX', text: '后缀', name: '后缀' }
              ]
            }).dropdown('set selected', '=');
        }
      }
    });

    //后置条件-条件设置-类型(条件)-增加条件
    $('.targetActivity').on('click', '.conditionDiv .condition_addBtn', function() {
      var condition = {};
      var conditionDiv$ = $(this).parents('.conditionDiv');
      conditionDiv$.find('input[name]').each(function() {
        condition[$(this).attr('name')] = $(this).val();
      });//:not(".condition_sel")
      conditionDiv$.find('.selection').each(function() {
        var value = $(this).find('.menu .item.selected').attr('data-value');//semantic-UI setmenu 存在bug, 无法取到值
        condition[$(this).children('select').attr('name')] = value;
      });

      if (!condition.key || condition.key == '0') {
        layer.msg('请选择字段！', {time: 2000, icon: 0});
        return false;
      }
      if (!condition.displayValue_one && !condition.displayValue_two) {//存在一个参考值即可
        layer.msg('条件参数不全！', {time: 2000, icon: 0});
        return false;
      }

      var tr = thisGraph.getConditionList(condition);
      conditionDiv$.find('tbody').append(tr);
      conditionDiv$.find('input[name]').val('');
      conditionDiv$.find('.conditionList').mCustomScrollbar('update');
      conditionDiv$.find('.conditionList').mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 1500
      });
    });

    //后置条件-条件设置-类型-删除条件
    $('.targetActivity').on('click', '.conditionDiv .condition_removeBtn', function() {
      var conditionDiv$ = $(this).parents('.conditionDiv');
      var tr = conditionDiv$.find('tbody tr.active');
      if (tr.length) {
        tr.remove();
        conditionDiv$.find('.conditionList').mCustomScrollbar('update');
      } else {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
      }
    });

    //后置条件-条件设置-类型(按业务对象转移)-业务对象
    $('.targetActivity').on('change', '.workflowbeanDiv select[name=bean]', function() {
      var workflowbeanDiv$ = $(this).parents('.workflowbeanDiv');
      if (this.value != '0') {
        workflowbeanDiv$.find('.detailDiv').show('slow');
      } else {
        workflowbeanDiv$.find('.detailDiv').hide(1000);
      }
    });

    //后置条件-条件设置-类型(按业务对象转移)-业务对象(发送人)-方法
    $('.targetActivity').on('change', '.detailDiv select[name=key]', function() {
      var detailDiv$ = $(this).parents('.detailDiv');
      detailDiv$.find('input[name]').val('');
      if (this.value != '0') {
        var condition_sel = detailDiv$.find('.condition_sel');
        condition_sel.dropdown('setup menu', {
            values: [
              {value: '==',  text: '=', name: '=' },
              {value: '!=', text: '!=', name: '!=' },
              {value: 'IN', text: '包含', name: '包含' },
              {value: 'NOT', text: '不包含', name: '不包含' },
              {value: 'PREFIX', text: '前缀', name: '前缀' },
              {value: 'SUFFIX', text: '后缀', name: '后缀' }
            ]
          }).dropdown('set selected', '=');
      }
    });

    //后置条件-条件设置-类型(按业务对象转移)-增加条件
    $('.targetActivity').on('click', '.workflowbeanDiv .condition_addBtn', function() {
      var workflowbeanDiv$ = $(this).parents('.workflowbeanDiv');
      var bean = workflowbeanDiv$.find('select[name=bean]').val();
      if (!bean || bean == '0') {
        layer.msg('请选择业务对象！', {time: 2000, icon: 0});
        return false;
      }
      var condition = {};
      workflowbeanDiv$.find('input[name]').each(function() {
        condition[$(this).attr('name')] = $(this).val();
      });//:not(".condition_sel")
      workflowbeanDiv$.find('.selection').each(function() {
        var value = $(this).find('.menu .item.selected').attr('data-value'); //semantic-UI setmenu 存在bug, 无法取到值
        condition[$(this).children('select').attr('name')] = value;
      });

      if (!condition.key || condition.key == '0') {
        layer.msg('请选择方法！', {time: 2000, icon: 0});
        return false;
      }
      if (!condition.displayValue_one && !condition.displayValue_two) { //存在一个参考值即可
        layer.msg('条件参数不全！', {time: 2000, icon: 0});
        return false;
      }
      var num = workflowbeanDiv$.find('tbody tr').length==0? 1:parseInt($('.workflowbeanDiv tbody tr:last').find('td:first').text())+1;
      var tr = thisGraph.getConditionList(condition, num);
      workflowbeanDiv$.find('tbody').append(tr);
      workflowbeanDiv$.find('input[name^=displayValue]').val('');
      workflowbeanDiv$.find('.conditionList2').mCustomScrollbar('update');
      workflowbeanDiv$.find('.conditionList2').mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 1500
      });
    });

    //后置条件-条件设置-类型(按业务对象转移)-删除条件
    $('.targetActivity').on('click', '.workflowbeanDiv .condition_removeBtn', function() {
      var workflowbeanDiv$ = $(this).parents('.workflowbeanDiv');
      var tr = workflowbeanDiv$.find('tbody tr.active');
      if (tr.length) {
        tr.remove();
        workflowbeanDiv$.find('.conditionList2').mCustomScrollbar('update');
      } else {
        layer.msg('请选择一行!', {time: 2000, icon: 0});
      }
    });

    //后置条件-条件设置-类型(按业务对象转移)-关系设置-分组
    $('.relationshipPlacement .relationshipGroup').on('click', function() {
      var names = [];
      var condition_no = $('.relationshipPlacement .condition_no').find('input[name][value=true]');
      var relationship = $('.relationshipPlacement .radio.checkbox.checked').children('input').attr('tabindex');
      if (!condition_no.length || !relationship) {
        layer.msg('请选择条件代号或关系!', {time: 2000, icon: 0});
        return false;
      }
      condition_no.each(function() {
        names.push($(this).attr('name'));
        $(this).parent('.checkbox').remove();
      });
      var beanConditions_type = '';
      names.reverse().forEach(function(item) {
        beanConditions_type += item + relationship;
      });
      beanConditions_type = '(' + beanConditions_type.replace(/(\&\&$)|(\|\|$)/, '') + ')';

      $('.relationshipPlacement input[name=beanConditions_type]').val(beanConditions_type);
      $('.relationshipPlacement .condition_no').prepend(
        '<div class="inline field">'+
        '   <div class="ui checkbox">'+
        '       <input type="checkbox" tabindex="0" class="hidden">'+
        '       <label>'+beanConditions_type+'</label>'+
        '       <input type="hidden" name="'+beanConditions_type+'" value="">'+
        '   </div>'+
        '</div>');
      $('.relationshipPlacement .condition_no .checkbox').filter(':first').checkbox({
          onChecked: function() {
            $(this).parents('.checkbox').find('input[name]').val(true);
          },
          onUnchecked: function() {
            $(this).parents('.checkbox').find('input[name]').val(false);
          }
        });

    });

    //后置条件-条件设置-类型(按业务对象转移)-关系设置-重置
    $('.relationshipPlacement .relationshipReset').on('click', function() {
      $('.relationshipPlacement input[name=beanConditions_type]').val('');

      var num = $('.workflowbeanDiv tbody tr').length;
      $('.relationshipPlacement .condition_no').empty();
      for (var i = 0; i < num; i++) {
        $('.relationshipPlacement .condition_no').append(
          '<div class="inline field">'+
          '   <div class="ui checkbox">'+
          '       <input type="checkbox" tabindex="0" class="hidden">'+
          '       <label>${'+(i+1)+'}</label>'+
          '       <input type="hidden" name="${'+(i+1)+'}" value="">'+
          '   </div>'+
          '</div>');
      }
      $('.relationshipPlacement .condition_no').find('.ui.checkbox').checkbox({
        onChecked: function() {
          $(this).parents('.checkbox').find('input[name]').val(true);
        },
        onUnchecked: function() {
          $(this).parents('.checkbox').find('input[name]').val(false);
        }
      });
    });

    // 后置条件-条件设置-类型(按业务对象转移)-关系设置-确定
    $('.relationshipPlacement .green.button').on('click', function() {
      var beanConditions_type = $('.relationshipPlacement input[name=beanConditions_type]').val();
      $('.workflowbeanDiv  input[name=beanConditions_type]').val(beanConditions_type);
    });

    $('.full-right').on('click', '.remove.icon', function() {
      var tab_id = $(this).parent('a').attr('data-tab');
      if (tab_id == 'tab_main') {
        layer.msg('主界面不能关闭！', {time: 2000, icon: 0, offset: '180px'});
      } else {
        $('.full-right').find('[data-tab="'+tab_id+'"]').hide();
        $('.full-right>.menu [data-tab="tab_main"]').trigger('click');
      }
    });
    

  };

  /**
   * 根据缩放比例和偏移量转换坐标
   * @param  {DOM}    svgContainer .svgContainer元素
   * @param  {Object} position     位置坐标
   * @return {Object} position     转换后的坐标
   */
  GraphCreator.prototype.parsePosition = function(svgContainer, position) {
    var transform = $(svgContainer).find('.graph').attr('transform'); // transform="translate(20,11) scale(1)"
      if (transform) {
        var result = []; // ['20,11', '1']
        var regExp_ = /\(([^)]*)\)/g;
        var ele;
        while ((ele=regExp_.exec(transform)) != null) {
           result.push(ele[1]);
        }
        var translate = result[0] && result[0].split(/,|\s/) || [0, 0]; // IE11 result[0] 为 '23.45 22.87'
        var scale = result[1] && result[1].split(',')[0] || 1;
        if (translate.length == 1 && translate[0] == 0) { // 兼容IE11
          translate.push(0);
        }
        position.x = (position.x - translate[0])/scale;
        position.y = (position.y - translate[1])/scale;
      }
      return position;
  };
/*
  GraphCreator.prototype.handleClickZoom = function() {
    var thisGraph = this;
    //放大、缩小按钮 scale(0.3-2)
    d3.selectAll('.editor-toolbar #zoom-enlarge,#zoom-narrow').on('click.zoom', function() {
      var translate = thisGraph.dragSvg.translate(),
        scale = thisGraph.dragSvg.scale(),
        extent = thisGraph.dragSvg.scaleExtent(),
        direction = 1,
        factor = 0.1;

      direction = (this.id === 'zoom-enlarge') ? 1 : -1;
      if ((scale <= extent[0] && direction < 0) || (scale >= extent[1] && direction > 0)) {
        return;
      } else {
        scale = parseFloat(scale) + factor * direction;
      }
      thisGraph.dragSvg.scale(scale)
          .translate(translate);
      thisGraph.zoomed.call(thisGraph);
    });


  };*/

  // 展示-后置条件或转移属性
  GraphCreator.prototype.showTransition = function(selector, transition) {
    var thisGraph = this;
    var postCond = transition.postCondition;
    //清空 转移信息/条件设置/事件
    $(selector).find('.tab').find('input, textarea').val('');
    $(selector).find('.tab').find('select').dropdown('clear');
    $(selector).find('tbody').empty();
    $(selector).find('.postCondi_extendedAttr').mCustomScrollbar("update");
    //转移信息
    $(selector).find('input[name=edgeId]').val(transition.edgeId);
    $(selector).find('input[name=edgeName]').val(postCond && postCond.edgeName || '');
    $(selector).find('input[name=sourceTitle]').val(transition.source.title);
    $(selector).find('input[name=targetTitle]').val(transition.target.title);
    $(selector).find('textarea[name=description]').val(postCond && postCond.description || '');
    //遍历扩展属性
    if (postCond.extendedAttrs) {
      postCond.extendedAttrs.forEach(function(item) {
        var extendedAttr = JSON.parse(item);
        var data = {name: extendedAttr.name, value: extendedAttr.value};
        data = {data: data, jsonstr: JSON.stringify(data)};
        var html = juicer($('#extended_attr_tpl').html(), data);
        $('.transferInf_extended_attr tbody').append(html).find('.ui.checkbox').checkbox();
        $(".transferInf_extended_attr .postCondi_extendedAttr").mCustomScrollbar("update");
      });
    }
    //遍历条件设置-类型（条件）下列表
    if (postCond && postCond.conditype == 'CONDITION') {
      if (postCond.condixml) {//condixml base64
        var fieldConditions_obj = {fieldCondition:[]};
        var fieldConditions_str = Base64.decode(postCond.condixml);
        fieldConditions_obj.fieldConditions_type = $(fieldConditions_str).attr('type');
        $(fieldConditions_str).find('fieldCondition').each(function(fc) {
          var fieldCondition = {};
          fieldCondition.fieldCondition_type = $(this).attr('type');
          fieldCondition.key = $(this).find('expression').eq(0).attr('key');
          fieldCondition.sign_one = $(this).find('expression').eq(0).attr('sign');
          fieldCondition.type = $(this).find('expression').eq(0).attr('type');
          fieldCondition.displayValue_one = $(this).find('expression').eq(0).attr('displayValue');
          fieldCondition.sign_two = $(this).find('expression').eq(1).attr('sign');
          fieldCondition.displayValue_two = $(this).find('expression').eq(1).attr('displayValue');
          var tr = thisGraph.getConditionList(fieldCondition);
          $(selector).find('.conditionDiv tbody').append(tr);
        });
        $(selector).find('.conditionDiv tbody').data('fieldConditions_type', fieldConditions_obj.fieldConditions_type);
      }
    } else {
      $(selector).find('.conditionDiv tbody').removeData('fieldConditions_type');
    }
    //遍历条件设置-类型（按业务对象转移）下列表
    if (postCond && postCond.conditype == 'WORKFLOWBEAN') {
      if (postCond.condixml) {
        var beanConditions_obj = {beanCondition:[]};
        var beanConditions_str = Base64.decode(postCond.condixml);
        beanConditions_obj.fieldConditions_type = $(beanConditions_str).attr('type');
        $(beanConditions_str).find('beanCondition').each(function(fc) {
          var beanCondition = {};
          beanCondition.fieldCondition_type = $(this).attr('type');
          beanCondition.key = $(this).find('expression').eq(0).attr('key').split('.get')[1].replace('()', '');
          beanCondition.sign_one = $(this).find('expression').eq(0).attr('sign');
          beanCondition.type = $(this).find('expression').eq(0).attr('type');
          beanCondition.displayValue_one = $(this).find('expression').eq(0).attr('displayValue');
          beanCondition.sign_two = $(this).find('expression').eq(1).attr('sign');
          beanCondition.displayValue_two = $(this).find('expression').eq(1).attr('displayValue');
          beanCondition.bean = $(this).attr('bean').split(',')[0];
          beanCondition.paramField = $(this).attr('paramField');
          var num = $(this).attr('code');
          var tr = thisGraph.getConditionList(beanCondition, num);
          $(selector).find('.workflowbeanDiv tbody').append(tr);
        });
        $(selector).find('.workflowbeanDiv tbody').data('fieldConditions_type', beanConditions_obj.fieldConditions_type);
      }
    } else {
      $(selector).find('.workflowbeanDiv tbody').removeData('fieldConditions_type');
    }
    //条件设置 事件（标签）
    if (postCond) {
      $(selector).find('select[name=conditype]').parent().dropdown('set selected', postCond.conditype || '');
      
      $(selector).find('select[name=transitionEventType]').parent().dropdown('set selected', postCond.transitionEventType || '');
      $(selector).find('input[name=transitionEvent]').val(postCond.transitionEvent);
    }
  };

  // 更新-后置条件或转移属性
  GraphCreator.prototype.updatePostCondi = function(selector) {
    var thisGraph = this;
    var item_act = $(selector).find('.list .item.active');
    if (item_act.length || selector == '.prop_edge') {
      var edge;
      if (item_act.length) {
        var jsonObj = JSON.parse(item_act.attr('jsonStr'));
        thisGraph.edges.forEach(function(item, i) {
          if (item.edgeId == jsonObj.edgeId) {
            edge = item;
          }
        });
      } else {
        edge = thisGraph.state.selectedEdge;
      }
      var postCondition = {transitionRuleType: 'Script_Rule'};
      var $transferInf = $(selector).find('div[data-tab="four/a"]'); // 转移信息
      $transferInf.find("input:not(.hidden), select, textarea").each(function() {
        postCondition[$(this).attr('name')] = $(this).val();
      });
      postCondition.extendedAttrs = [];
      $transferInf.find('tbody tr').each(function() {
        var jsonstr = $(this).attr('jsonstr');
        postCondition.extendedAttrs.push(jsonstr);
      });
      var $conditionSet = $(selector).find('div[data-tab="four/b"]');//条件设置
      var conditype = $conditionSet.find('select[name=conditype]').val();
      postCondition.conditype = conditype;
      if (conditype == 'CONDITION') {//类型选择条件
        var tr = $(selector).find('.conditionDiv tbody').find('tr');
        var fieldCondition = '',
          condixml = '',
          fieldConditions_type = '';
        if (tr.length) {
          tr.each(function() {
            var json_obj = JSON.parse($(this).attr('jsonstr'));
            fieldCondition += 
              ' <fieldCondition type="'+json_obj.fieldCondition_type+'">'+
              '   <expression key="'+json_obj.key+'" sign="'+json_obj.sign_one+'" type="'+json_obj.type+'" displayValue="'+json_obj.displayValue_one+'"><![CDATA['+json_obj.displayValue_two+']]></expression>'+
              '   <expression key="'+json_obj.key+'" sign="'+json_obj.sign_two+'" type="'+json_obj.type+'" displayValue="'+json_obj.displayValue_two+'"><![CDATA['+json_obj.displayValue_two+']]></expression>'+
              ' </fieldCondition>';
          });
          fieldConditions_type = $(selector).find('.conditionDiv select[name=fieldConditions_type]').parent().dropdown('get value');
        }
        condixml = '<FieldConditions type="'+fieldConditions_type+'">'+ fieldCondition +'</FieldConditions>';
        condixml = Base64.encode(condixml);
        postCondition.condixml = condixml;
      }
      if (conditype == 'EXCEPTION') {//类型选择异常
        postCondition.condiException = $(selector).find('.exceptionDiv select[name=condiException]').parent().dropdown('get value');
      }
      if (conditype == 'WORKFLOWBEAN') { //类型选择业务对象转移
        var w_tr = $(selector).find('.workflowbeanDiv tbody').find('tr');
        var beanCondition = '',
          w_condixml = '',
          beanConditions_type = '';
        if (w_tr.length) {
          w_tr.each(function() {
            var json_obj = JSON.parse($(this).attr('jsonstr'));
            beanCondition += 
              '<beanCondition code="'+json_obj.code+'" type="'+json_obj.beanConditions_type+'" bean="'+json_obj.bean+'" paramField="'+json_obj.paramField+'">'+
              '  <expression key="'+json_obj.key+'" sign="'+json_obj.sign_one+'" type="'+json_obj.type+'" displayValue="'+json_obj.displayValue_one+'"><![CDATA['+json_obj.displayValue_one+']]></expression>'+
              '  <expression key="'+json_obj.key+'" sign="'+json_obj.sign_two+'" type="'+json_obj.type+'" displayValue="'+json_obj.displayValue_two+'"><![CDATA['+json_obj.displayValue_two+']]></expression>'+
              '</beanCondition>';
          });
          beanConditions_type = $(selector).find('.workflowbeanDiv input[name=beanConditions_type]').val();
        }
        w_condixml = '<beanConditions type="'+beanConditions_type+'">'+ beanCondition +'</beanConditions>';
        w_condixml = Base64.encode(w_condixml);
        postCondition.condixml = w_condixml;
      }
      if (conditype == 'USERDEFINE') {//类型选择用户自定义
        postCondition.condition_data = $(selector).find('.userdefineDiv input').val();
      }
      if (conditype == 'CUSTOM') {//类型选择自定义转移
        postCondition.condition_data = $(selector).find('.customDiv textarea').val();
      }
      var $event = $(selector).find('div[data-tab="four/c"]'); //事件（标签）
      $event.find("input[name], select").each(function() { 
        postCondition[$(this).attr('name')] = $(this).val(); 
      }); 
      edge.edgeId = postCondition.edgeId; 
      edge.postCondition = postCondition; 
      if (selector == '.post_condition') { 
        var splitType = $(selector).find('select[name=splitType]').val();
        thisGraph.state.selectedNode.postCondition = {splitType: splitType};
      }
    }
  };
  
  // 获取 后置条件-条件设置-类型(条件)下的列表
  GraphCreator.prototype.getConditionList = function(condition, num) {
    var displayCondi = {};
    var sign = condition.sign_one;
    displayCondi.sign_one = sign=='!='? '!=':sign=='=='? '=':sign=='IN'? '包含':sign=='NOT'? '不包含':sign=='PREFIX'? '前缀':sign=='SUFFIX'?'后缀':'';
    sign = condition.sign_two;
    displayCondi.sign_two = sign=='!='? '!=':sign=='=='? '=':sign=='IN'? '包含':sign=='NOT'? '不包含':sign=='PREFIX'? '前缀':sign=='SUFFIX'?'后缀':'';
    displayCondi.fieldCondition_type = condition.fieldCondition_type=='AND'? '并且':condition.fieldCondition_type=='||'? '或者':'';
    displayCondi.type = condition.key=='nextActivityName'?'External_java.util.ArrayList':'String';
    displayCondi.key = condition.key;
    displayCondi.displayValue_one = condition.displayValue_one;
    displayCondi.displayValue_two = condition.displayValue_two;
    condition.type = displayCondi.type;

    var tr = '<tr jsonstr='+JSON.stringify(condition)+'>'+
             '  <td>'+displayCondi.key+'</td>'+
             '  <td>'+displayCondi.sign_one+'</td>'+
             '  <td>'+displayCondi.displayValue_one+'</td>'+
             '  <td>'+displayCondi.fieldCondition_type+'</td>'+
             '  <td>'+displayCondi.sign_two+'</td>'+
             '  <td>'+displayCondi.displayValue_two+'</td>'+
             '  <td>'+displayCondi.type+'</td>'+
             '</tr>';
    if (condition.bean) {//类型：按业务对象转移
      displayCondi.bean = condition.bean=='System_Wf_Source_Party'? '发送人':condition.bean=='System_cre_id'?'创建人':'';
      displayCondi.paramField = condition.paramField!='0'? condition.paramField:'默认';
      displayCondi.key = condition.key=='CorpName'?'获取组织名称':condition.key=='Extattr'?'获取人员扩展属性1':condition.key=='MObilephone'?
        '获取人员移动电话号码':condition.key=='Firstname'?'获取人员姓氏':condition.key=='Gender'?'获取人员性别':condition.key=='Birthday'?
        '获取人员出生日期':condition.key=='Securitylevel'?'获取人员安全级别':condition.key=='Mainemail'?'获取人员常用EMAI':condition.key=='Lastname'?
        '获取人员名字':condition.key=='Duty'?'获取人员职务':condition.key=='Homeaddress'?'获取人员家庭住址':condition.key=='AdminLevel'?
        '获取人员级别':condition.key=='Workno'?'获取人员工号':condition.key=='Callname'?'获取人员称呼':condition.key=='Otheremail'?
        '获取人员备用EMAIL':condition.key=='Instantmessage'?'获取人员即时消息号':condition.key=='Name'?'获取人员姓名':
        condition.key=='Officeaddress'?'获取人员工作地点ID':condition.key=='Fixedphone'?'获取人员固定电话号码':'';

      // condition.bean = condition.bean + ',personInfo';
      condition.paramField = condition.paramField!='0'? condition.paramField:'';
      condition.key = 'getMetaBeanById(&apos;personInfo&apos;,'+condition.bean+').get'+condition.key+'()';
      condition.code = num;
      tr = '<tr jsonstr='+JSON.stringify(condition)+'>'+
           '  <td class="two wide">'+num+'</td>'+
           '  <td class="two wide" title='+displayCondi.bean+'>'+displayCondi.bean+'</td>'+
           '  <td class="two wide">'+displayCondi.paramField+'</td>'+
           '  <td class="two wide" title='+displayCondi.key+'>'+displayCondi.key+'</td>'+
           '  <td class="two wide">'+displayCondi.sign_one+'</td>'+
           '  <td class="two wide">'+displayCondi.displayValue_one+'</td>'+
           '  <td class="two wide">'+displayCondi.fieldCondition_type+'</td>'+
           '  <td class="two wide">'+displayCondi.sign_two+'</td>'+
           '  <td class="two wide">'+displayCondi.displayValue_two+'</td>'+
           '  <td class="two wide">'+displayCondi.type+'</td>'+
           '</tr>';
    }
    return tr;
  };

  // 获取activity的ExtendedAttributes
  GraphCreator.prototype.getExtendedAttributes = function(node, deadlineXpdl, conventionalXpdl) {
    var thisGraph = this;
    var extendAttr = node.extendAttr;
    var highLevel = node.highLevel;
    var highLevelXpdl, isCreateNew, syncType, responsible;
    if (highLevel) {
      highLevelXpdl += highLevel.activityEndEvent?'<ExtendedAttribute Name="ActivityEndEvent" Value="'+highLevel.activityEndEvent+'"/>':'';
      highLevelXpdl += highLevel.activityCreateEvent?'<ExtendedAttribute Name="ActivityCreateEvent" Value="'+highLevel.activityCreateEvent+'"/>':'';
      highLevelXpdl += highLevel.finishRule?'<ExtendedAttribute Name="FinishRule" Value="'+highLevel.finishRule+'"/>':'<ExtendedAttribute Name="FinishRule"/>';
    } else {
      highLevelXpdl = '<ExtendedAttribute Name="deadline" />';
    }
    isCreateNew = node.frontCondition.isCreateNew?'<ExtendedAttribute Name="isCreateNew" Value="'+node.frontCondition.isCreateNew+'"/>':'';
    syncType = node.frontCondition.syncType!="" && node.frontCondition.voteText?'<ExtendedAttribute Name="syncType" Value="'+node.frontCondition.syncType+'|'+node.frontCondition.voteText+'"/>':'';
    responsible = node.monitorinf.responsible?'<ExtendedAttribute Name="responsible" Value="'+
                    node.monitorinf.responsible.join(',')+'"/>':'<ExtendedAttribute Name="responsible"/>';
    var startAndEndXpdl = '';
    if (node.component == 'blockActivity' && node.activitySet.graphCreator) {
      var sub_graph = node.activitySet.graphCreator;
      var startAndEnd = thisGraph.filterStartAndEnd.call(sub_graph);
      startAndEnd.forEach(function(node) {
        switch (node.type) {
          case 'start':
            var outEdge = thisGraph.getLinkedEdges.call(sub_graph, node, 1);
            if (outEdge.length) {
              startAndEndXpdl += '<ExtendedAttribute Name="StartOfBlock" Value="none;'+outEdge[0].target.id+';'+node.x+';'+node.y+';'+outEdge[0].drawLine+'"/>';
            }
            break;
          case 'end':
            var inToEdge = thisGraph.getLinkedEdges.call(sub_graph, node, -1);
            if (inToEdge.length) {
              startAndEndXpdl += '<ExtendedAttribute Name="EndOfBlock" Value="none;'+inToEdge[0].source.id+';'+node.x+';'+node.y+';'+inToEdge[0].drawLine+'"/>';
            }
            break;
        }
      });
    }

    var ExtendedAttributes = 
            '<ExtendedAttributes>'+
                startAndEndXpdl+
                conventionalXpdl.isMulInstance+
            '   <ExtendedAttribute Name="isResponsibleTem" Value="'+node.monitorinf.isResponsibleTem+'"/>'+
                responsible+
                syncType+
                conventionalXpdl.MustActivity+
                isCreateNew+
                conventionalXpdl.taskAssignMode+
                conventionalXpdl.assignmentsOrder+
                conventionalXpdl.completeAllAssignments+
                conventionalXpdl.autoAcceptAllAssignments+
                conventionalXpdl.isResponsible+
                deadlineXpdl.deadline+
                highLevelXpdl+
            '   <ExtendedAttribute Name="warnTimeiFrequency"/>'+
                deadlineXpdl.warnTime+
                deadlineXpdl.warnAgentClassName+
                deadlineXpdl.limitAgentClassName+
                conventionalXpdl.participantID+
            '   <ExtendedAttribute Name="XOffset" Value="'+node.x+'"/>'+
            '   <ExtendedAttribute Name="YOffset" Value="'+node.y+'"/>';
    if (extendAttr) {
      extendAttr.forEach(function(ext) {
        ExtendedAttributes +=
            '   <ExtendedAttribute Name="'+JSON.parse(ext).name+'" Value="'+JSON.parse(ext).value+'"/>';
      });
    }
    ExtendedAttributes +=
            '</ExtendedAttributes>';
    return ExtendedAttributes;
  };

  //获取常规相应的xpdl
  GraphCreator.prototype.conventionalXpdl = function(node) {
    var thisGraph = this,
      conventional = node.conventional,
      conventionalXpdl = {};
    conventionalXpdl.startMode = conventional.startMode=='automatic'?'<StartMode><Automatic/></StartMode>':'<StartMode><Manual/></StartMode>';
    conventionalXpdl.finishMode = conventional.finishMode=='automatic'?'<FinishMode><Automatic/></FinishMode>':'<FinishMode><Manual/></FinishMode>';
    conventionalXpdl.isMulInstance = conventional.isMulInstance?'<ExtendedAttribute Name="isMulInstance" Value="true"/>':'<ExtendedAttribute Name="isMulInstance" Value="false"/>';
    conventionalXpdl.isResponsible = '<ExtendedAttribute Name="isResponsible" Value="'+conventional.isResponsible+'"/>';
    conventionalXpdl.autoAcceptAllAssignments = '<ExtendedAttribute Name="autoAcceptAllAssignments" Value="'+conventional.autoAcceptAllAssignments+'"/>';   
    conventionalXpdl.completeAllAssignments = conventional.completeAllAssignments?'<ExtendedAttribute Name="completeAllAssignments" Value="true"/>':'<ExtendedAttribute Name="completeAllAssignments" Value="false"/>';
    conventionalXpdl.assignmentsOrder = conventional.assignmentsOrder?'<ExtendedAttribute Name="assignmentsOrder" Value="true"/>':'<ExtendedAttribute Name="assignmentsOrder" Value="false"/>';
    conventionalXpdl.description = conventional.description?'<Description>'+conventional.description+'</Description>':'';
    conventionalXpdl.taskAssignMode = '<ExtendedAttribute Name="taskAssignMode" Value="'+conventional.taskAssign+'"/>';
    conventionalXpdl.MustActivity = '<ExtendedAttribute Name="MustActivity" Value="'+conventional.MustActivity+'"/>';
    conventionalXpdl.participantID = conventional.participantID?'<ExtendedAttribute Name="ParticipantID" Value="'+conventional.participantID+'"/>':'<ExtendedAttribute Name="ParticipantID"/>';
    conventionalXpdl.performer = conventional.performer?'<Performer>'+conventional.performer+'</Performer>':'';
    return conventionalXpdl;
  };

  //获取超时限制相应的xpdl 
  GraphCreator.prototype.deadlineXpdl = function(node) {
    var thisGraph = this,
      timeoutLimit = node.timeoutLimit,
      deadlineXpdl = {};
    deadlineXpdl.limit = timeoutLimit.limitTime?'<Limit>'+timeoutLimit.limitTime+'</Limit>':'';
    deadlineXpdl.warnTime = timeoutLimit.warnTime?'<ExtendedAttribute Name="warnTime" Value="'+timeoutLimit.warnTime+'"/>':'<ExtendedAttribute Name="warnTime"/>';
    deadlineXpdl.warnAgentClassName = timeoutLimit.warnAgentClassName?'<ExtendedAttribute Name="warnAgentClassName" Value="'+timeoutLimit.warnAgentClassName+'"/>':'<ExtendedAttribute Name="warnAgentClassName"/>';
    deadlineXpdl.limitAgentClassName = timeoutLimit.limitAgentClassName?'<ExtendedAttribute Name="LimitAgentClassName" Value="'+timeoutLimit.limitAgentClassName+'"/>':'<ExtendedAttribute Name="LimitAgentClassName"/>';
    var Deadlines = '',
      deadlines_arr = [];
    if (timeoutLimit.deadline) {
      timeoutLimit.deadline.forEach(function(dl, i) {
        var deadline = JSON.parse(dl);
        deadlines_arr.push(deadline.exceptionName+','+deadline.deadlineCondition);
        if (deadline.execution == '') {
          Deadlines += '<Deadline>' +
                       '    <DeadlineCondition>'+deadline.deadlineCondition+'</DeadlineCondition>' +
                       '    <ExceptionName>'+deadline.exceptionName+'</ExceptionName>' +
                       '</Deadline>';
        }
        if (deadline.execution == 'SYNCHR') {
          Deadlines += '<Deadline Execution="SYNCHR">' +
                       '    <DeadlineCondition>'+deadline.deadlineCondition+'</DeadlineCondition>' +
                       '    <ExceptionName>'+deadline.exceptionName+'</ExceptionName>' +
                       '</Deadline>';
        }
        if (deadline.execution == 'ASYNCHR') {
          Deadlines += '<Deadline Execution="ASYNCHR">' +
                       '    <DeadlineCondition>'+deadline.deadlineCondition+'</DeadlineCondition>' +
                       '    <ExceptionName>'+deadline.exceptionName+'</ExceptionName>' +
                       '</Deadline>';
        }
      });
    }
    deadlineXpdl.deadlines = Deadlines;
    deadlineXpdl.deadline = deadlines_arr.length>0? '<ExtendedAttribute Name="deadline" Value="'+deadlines_arr.join('|')+'"/>':'<ExtendedAttribute Name="deadline"/>';
    return deadlineXpdl;
  };

  //获取activity进出线的数量
  GraphCreator.prototype.activityInOutNum = function(node) {
    var thisGraph = this;
    var numIn = 0,
      numOut = 0,
      transitionRefs = '',
      activity_inOut = {};
    
    thisGraph.edges.forEach(function(edge) {
      var source = edge.source.component;
      var target = edge.target.component;
      if ( source != "startComponent" && target != "endComponent") {
        if (edge.source == node) {
          numOut++;
          transitionRefs += '<TransitionRef Id="'+edge.edgeId+'"/>';
        } else if (edge.target == node) {
          numIn++;
        }
      }
    });
    activity_inOut.numIn = numIn;
    activity_inOut.numOut = numOut;
    activity_inOut.transitionRefs = transitionRefs;
    return activity_inOut;
  };

  //获取TransitionRestrictions相应的xpdl
  GraphCreator.prototype.getTransitionRestrictions = function(node, activity_inOut) {
    var join = node.frontCondition.convergeType?'<Join Type="'+node.frontCondition.convergeType+'"/>':'<Join Type="XOR"/>';
    var TransitionRestrictions = '';
    if (activity_inOut.numIn > 1 || activity_inOut.numOut > 1 || node.frontCondition.convergeType) {
      TransitionRestrictions += '<TransitionRestrictions>'+
                                '    <TransitionRestriction>';
      if (activity_inOut.numIn > 1 || node.frontCondition.convergeType) {  
        TransitionRestrictions +=      join;
      }
      if (activity_inOut.numOut > 1) {
        TransitionRestrictions += '    <Split Type="XOR">' +
                                  '        <TransitionRefs>' +
                                               activity_inOut.transitionRefs +
                                  '        </TransitionRefs>' +
                                  '    </Split>';
      }
      TransitionRestrictions += '    </TransitionRestriction>'+
                                '</TransitionRestrictions>';
    }
    return TransitionRestrictions;
  };

  //生成参与者相应的xpdl
  GraphCreator.prototype.getParticipants = function() { //??细节还有问题：1.isAppData; 2.condition,conditionXml;
    var thisGraph = this;
    if (thisGraph.participants.length == 0) return '';

    var xpdl = '',
      participantsXpdl = '';

    thisGraph.participants.forEach(function(p) {
      var extendedAttr = '',
        description = p.conventional_definition_description? '<Description>'+p.conventional_definition_description+'</Description>':'',
        p_name = p.conventional_definition_name?' Name="'+p.conventional_definition_name+'"':'';
      if (p && p.conventional_definition_participant) {
        extendedAttr  = '<ExtendedAttribute Name="PartyBeanId" Value="'+p.conventional_definition_participant+'"/>';
      } else {
        extendedAttr += '<ExtendedAttribute Name="typeName" Value="'+(p.typeName?p.typeName.join(','):"")+'"/>'+
                        '<ExtendedAttribute Name="isAppData" Value="'+(p.isAppData?p.isAppData.join(','):"")+'"/>'+
                        '<ExtendedAttribute Name="itemName" Value="'+(p.itemName?p.itemName.join(','):"")+'"/>'+
                        '<ExtendedAttribute Name="itemValue" Value="'+(p.itemValue?p.itemValue.join(','):"")+'"/>'+
                        '<ExtendedAttribute Name="secLevelS" Value="'+(p.secLevelS?p.secLevelS.join(','):"")+'"/>'+
                        '<ExtendedAttribute Name="secLevelE" Value="'+(p.secLevelE?p.secLevelE.join(','):"")+'"/>'+
                        '<ExtendedAttribute Name="condition"><![CDATA['+p.condition.join(',')+']]></ExtendedAttribute>'+
                        '<ExtendedAttribute Name="conditionXml"><![CDATA['+p.conditionXml.join(',')+']]></ExtendedAttribute>'+
                        '<ExtendedAttribute Name="roleName" Value="'+(p.roleName?p.roleName.join(','):"")+'"/>';
      }
      participantsXpdl += '<Participant Id="'+p.conventional_definition_id+'"'+p_name+'>'+
                          '    <ParticipantType Type="ROLE"/>'+
                               description+
                          '    <ExtendedAttributes>'+
                                  extendedAttr+
                          '    </ExtendedAttributes>'+
                          '</Participant>';
    });
    xpdl += '<Participants>'+
               participantsXpdl+
           '</Participants>';
    return xpdl;
  };

  //生成所有activity xml添加至xmlContainer
  GraphCreator.prototype.emergeAllXmlContent = function() {
    var thisGraph = this;
    var start = '<WorkflowProcess Id="'+workflow_id+'" Name="'+workflow_name+'" endform-id="" endformschema="">',
          end = '  <text-limit/>'+
                '</WorkflowProcess>';

    var curText = start,
      activity = '';
    thisGraph.nodes.forEach(function(node) {
      if (node.type == 'activity') {
        activity = '<activity Id="'+node.id+'" Name="'+node.title+'" form-id="" formdisplayschema="" hisformdisplayschema="">'+
                   '  <operations/>'+
                   '  <text-limit/>'+
                   '</activity>';
        curText += activity;
      }
    });
    curText += end;
    curText = vkbeautify.xml(curText);
    return curText;
  };

  GraphCreator.prototype.startAndEndOfWorkflow = function() {
    var thisGraph = this;
    var edges = thisGraph.edges;
    var nodes_start = '',
      nodes_end = '';
    thisGraph.nodes.forEach(function(node) {
        switch (node.type) {
          case 'start':
            edges.forEach(function(edge) {
              if (edge.source == node) {
                nodes_start += '<ExtendedAttribute Name="StartOfWorkflow" Value="none;'+edge.target.id+';'+node.x+';'+node.y+';'+edge.drawLine+'"/>';
              }
            });
            break;
          case 'end':
            edges.forEach(function(edge) {
              if (edge.target == node) {
                nodes_end += '<ExtendedAttribute Name="EndOfWorkflow" Value="none;'+edge.source.id+';'+node.x+';'+node.y+';'+edge.drawLine +'"/>';
              }
            });
            break;
        }
    });
    return  {
              start: nodes_start,
              end: nodes_end
            };

  };

  GraphCreator.prototype.emergeActivities = function() {
    var thisGraph = this;
    var activitiesXpdl = '';

    var activities = thisGraph.filterActivities();
    if (!activities.length) return activitiesXpdl;
    
    activities.forEach(function(node) {
      var activity_inOut = thisGraph.activityInOutNum(node);
      var deadlineXpdl = thisGraph.deadlineXpdl(node);
      var conventionalXpdl = thisGraph.conventionalXpdl(node);
      switch (node.component) {
        case "ordinaryActivity": //普通活动
          activitiesXpdl += '<Activity Id="'+node.id+'" Name="'+node.title+'">'+
                                 deadlineXpdl.limit+
                                 conventionalXpdl.description+
                            '    <Implementation>'+
                            '        <No/>'+
                            '    </Implementation>'+
                                 conventionalXpdl.performer+
                                 conventionalXpdl.startMode+
                                 conventionalXpdl.finishMode+
                            '    <Priority/>'+
                                 deadlineXpdl.deadlines+
                                 thisGraph.getTransitionRestrictions(node, activity_inOut)+
                                 thisGraph.getExtendedAttributes(node, deadlineXpdl, conventionalXpdl)+
                            '</Activity>';
          break;
        case "blockActivity": //块活动
          activitiesXpdl += '<Activity Id="'+node.id+'" Name="'+node.title+'">' +
                                 deadlineXpdl.limit +
                                 conventionalXpdl.description +
                            '    <BlockActivity BlockId="Package_H00387DJ_Wor1_Ase2"/>' +
                                 conventionalXpdl.performer +
                                 conventionalXpdl.startMode +
                                 conventionalXpdl.finishMode +
                            '    <Priority/>' +
                                 deadlineXpdl.deadlines +
                                 thisGraph.getTransitionRestrictions(node, activity_inOut) +
                                 thisGraph.getExtendedAttributes(node, deadlineXpdl, conventionalXpdl) +
                            '</Activity>';   
          break;
        case "subFlowActivity": //子活动
          activitiesXpdl += '<Activity Id="'+node.id+'" Name="'+node.title+'">' +
                                 deadlineXpdl.limit +
                                 conventionalXpdl.description +
                            '    <Implementation>' +
                            '        <SubFlow Execution="SYNCHR" Id="Package_6MT7F8C0_Wor4"/>' + //subFlowId是什么东西?? 
                            '    </Implementation>' +
                                 conventionalXpdl.performer +
                                 conventionalXpdl.startMode +
                                 conventionalXpdl.finishMode +
                            '    <Priority/>' +
                                 deadlineXpdl.deadlines +
                                 thisGraph.getTransitionRestrictions(node, activity_inOut) +
                                 thisGraph.getExtendedAttributes(node, deadlineXpdl, conventionalXpdl) +
                            '</Activity>';
          break;
        case "routeActivity": //路径活动
          activitiesXpdl += '<Activity Id="'+node.id+'" Name="'+node.title+'">' +
                                 deadlineXpdl.limit +
                                 conventionalXpdl.description +
                            '    <Route/>' +
                                 conventionalXpdl.performer +
                                 conventionalXpdl.startMode +
                                 conventionalXpdl.finishMode +
                            '    <Priority/>' +
                                 deadlineXpdl.deadlines +
                                 thisGraph.getTransitionRestrictions(node, activity_inOut) +
                                 thisGraph.getExtendedAttributes(node, deadlineXpdl, conventionalXpdl) +
                            '</Activity>';
          break;
        }
    });
    return '<Activities>' + activitiesXpdl + '</Activities>';
  };

  GraphCreator.prototype.emergeTransitions = function() {
    var thisGraph = this;
    var transitions = '';
    var edges_act = thisGraph.edgesLinkAcivity();
    if (!edges_act.length) return transitions;

    edges_act.forEach(function(edge) {
      var p = edge.postCondition;
      var description = p.description? '<Description>'+p.description+'</Description>':'';
      var extendedAttrsXpdl = '';
      if (p.extendedAttrs) {
        p.extendedAttrs.forEach(function(item) {
          var extendedAttr = JSON.parse(item);
          extendedAttrsXpdl += '<ExtendedAttribute Name="'+extendedAttr.name+'" Value="'+extendedAttr.value+'"/>';
        });
      }
      var transitionRuleType = p.transitionRuleType? '<ExtendedAttribute Name="TransitionRuleType" Value="'+p.transitionRuleType+'"/>':'<ExtendedAttribute Name="TransitionRuleType"/>';
      var transitionEventXpdl = p.transitionEvent? '<ExtendedAttribute Name="TransitionEvent"><![CDATA['+p.transitionEvent+']]></ExtendedAttribute>':'';
      var conditype = p.conditype || '';
      var conditypeXpdl = conditype? '<ExtendedAttribute Name="conditype" Value="'+conditype+'"/>':'<ExtendedAttribute Name="conditype"/>';
      var condixml = p.condixml || '';
      var condixmlXpdl = condixml? '<ExtendedAttribute Name="condixml" Value="'+condixml+'"/>':'';
      var condition = '',
        condiException = '',
        content = '';
      if (conditype == 'WORKFLOWBEAN' || conditype == 'CONDITION') { // 条件、按业务对象转移
        var selector;
        if (conditype == 'WORKFLOWBEAN') {
          selector = 'beanCondition';
        } else { 
          selector = 'fieldCondition';
        }
        var beanConditions = Base64.decode(p.condixml);
        var beanCons_type = $(beanConditions).attr('type') == 'AND'? '&&': $(beanConditions).attr('type'); // ((${1}&&${2})||${3}) 
        var beans = '';
        $(beanConditions).find(selector).each(function() {
          var beanCon_type = $(this).attr('type') == 'AND'? '&&': '||';
          var exps = '';
          $(this).find('expression').each(function() { 
            // 业务对象：发送人；            参数字段：默认；| 方法：获得组织名称；    |  条件：=；   |  参考值：1
            // bean: System_Wf_Source_Party  paramField: 0   | key: CorpName           |  sign_one: = |  displayValue_one: 1
            //                                               | 关系：并且；            |  条件：！=； |  参考值：2
            //                                               | fieldCondition_type: AND|  sign_two: !=|  displayValue_two: 2
            /* ==> 
            (( 
              typeof(getMetaBeanById('personInfo',System_Wf_Source_Party).getCorpName())!='undefined' && 
              getMetaBeanById('personInfo',System_Wf_Source_Party).getCorpName()!=null && 
              getMetaBeanById('personInfo',System_Wf_Source_Party).getCorpName()=='1' 
            )) && (( 
              typeof(getMetaBeanById('personInfo',System_Wf_Source_Party).getCorpName())!='undefined' && 
              getMetaBeanById('personInfo',System_Wf_Source_Party).getCorpName()!=null && 
              getMetaBeanById('personInfo',System_Wf_Source_Party).getCorpName()!='2' 
            ))*/ 
            var exp_cdata = $(wfdConfig).find('expression[key="'+$(this).attr('sign')+'"] exp[type="'+$(this).attr('type')+'"]').eq(0).html();// <![CDATA[(typeof(${b})!='undefined' && ${b}!=null && ${b}=='${a}')]]>
            exp_cdata = exp_cdata.replace(/<!\[CDATA\[(.+)\]\]>/, function(match, p1) { 
              return p1;
            });
            var exp = exp_cdata.replace(/\$\{a\}/g, $(this).attr('displayValue'));
            exp = exp.replace(/\$\{b\}/g, $(this).attr('key'));
            exps += '('+exp+')'+beanCon_type;
          });
          exps = exps.replace(/(&&|\|\|)$/, '');
          // beans += '(' + exps + ')' + beanCons_type;
          if (beanCons_type == '&&' || beanCons_type == '||') {
            beans += '(' + exps + ')' + beanCons_type;
          } else {
            var reg = new RegExp('\\$\\{'+$(this).attr('code')+'\\}');
            beans = beans? beans.replace(reg, '(' + exps + ')') : beanCons_type.replace(reg, '(' + exps + ')');
          }
        });
        beans =  beans.replace(/(&&|\|\|)$/, '');

        condition = '<Condition Type="CONDITION"><![CDATA[('+beans+')]]></Condition>';
      } else if (conditype == 'TACHE') { // 环节名称转移
        var exp = $(wfdConfig).find('exp[type=nextActivityName]').html();
        content = exp.replace(/\$\{a\}/, edge.target.id);
        condition = '<Condition Type="CONDITION">'+content+'</Condition>';
      } else if (conditype == 'USERDEFINE' || conditype == 'CUSTOM') { // 用户自定义、自定义转移
        condition = p.condition_data? '<Condition Type="CONDITION"><![CDATA[('+p.condition_data+')]]></Condition>':'';
      } else if (conditype) { // 缺省异常
        condition = '<Condition Type="'+conditype+'"/>';
      } else { // 其他、异常
        condition = '<Condition/>';
      }
      if (conditype == 'EXCEPTION') {
        condiException = p.condiException? '<ExtendedAttribute Name="condiException" Value="'+p.condiException+'"/>':'';
      }
      transitions +=  '<Transition From="'+edge.source.id+'" Id="'+edge.edgeId+'" '+(p.edgeName? 'Name="'+p.edgeName+'"':'')+' To="'+edge.target.id+'">' +
                          condition +
                          description +
                      '   <ExtendedAttributes>' +
                              condiException +
                              condixmlXpdl +
                              transitionRuleType +
                              transitionEventXpdl +
                      '       <ExtendedAttribute Name="TransitionEventType" Value="'+p.transitionEventType+'"/>' +
                              conditypeXpdl +
                      '       <ExtendedAttribute Name="RoutingType" Value="'+edge.drawLine+'"/>' +
                              extendedAttrsXpdl +
                      '    </ExtendedAttributes>' +
                      '</Transition>';
    });

    return '<Transitions>' + transitions + '</Transitions>';
  };

  //生成所有activity xml添加至xpdlContainer
  GraphCreator.prototype.emergeAllxpdlContent = function() {
    var thisGraph = this;
    var blockActivities = thisGraph.filterBlockActivities();
    var activitySets = '';
    if (blockActivities.length) {
      blockActivities.forEach(function(blockActivity) {
        var activitySetId = blockActivity.activitySet.activitySetId;
        var graph = blockActivity.activitySet.graphCreator;
        if (graph) {
          activitySets += graph.emergeActivitySet(activitySetId);
        } else {
          activitySets += '<ActivitySet Id="'+activitySetId+'"></ActivitySet>';
        }

      });
      activitySets = '<ActivitySets>' + activitySets + '</ActivitySets>';
    }
    
    var xpdl = '<WorkflowProcesses>' +
              '   <WorkflowProcess AccessLevel="PUBLIC" Id="'+workflow_id+'" Name="'+workflow_name+'">' +
              '       <ProcessHeader DurationUnit="D">' +
              '           <Created>'+create_time+'</Created>' +
              '           <Priority/>' +
              '       </ProcessHeader>' +
              '       <RedefinableHeader PublicationStatus="UNDER_TEST">' +
              '           <Author>管理员</Author>' +
              '           <Version>1.0</Version>' +
              '       </RedefinableHeader>' +
                      thisGraph.getParticipants() +
              '       <Applications>' +
              '           <Application Id="workflow_DefaultToolAgent" Name="执行其他的toolagent">' +
              '               <Description>执行其他的toolagent</Description>' +
              '               <FormalParameters>' +
              '                   <FormalParameter Id="ToolAgentClass" Index="0" Mode="IN">' +
              '                       <DataType>' +
              '                           <ExternalReference location="java.lang.String"/>' +
              '                       </DataType>' +
              '                       <Description>其他组件名称</Description>' +
              '                   </FormalParameter>' +
              '               </FormalParameters>' +
              '               <ExtendedAttributes>' +
              '                   <ExtendedAttribute Name="ToolAgentClassName" Value="workflow.DefaultToolAgent"/>' +
              '                   <ExtendedAttribute Name="ToolAgentClass"/>' +
              '               </ExtendedAttributes>' +
              '           </Application>' +
              '           <Application Id="workflow_sendMailToolAgent" Name="发送邮件">' +
              '               <Description>发送电子邮件</Description>' +
              '               <FormalParameters>' +
              '                   <FormalParameter Id="body" Index="body" Mode="IN">' +
              '                       <DataType>' +
              '                           <BasicType Type="STRING"/>' +
              '                       </DataType>' +
              '                       <Description>邮件正文</Description>' +
              '                   </FormalParameter>' +
              '                   <FormalParameter Id="subject" Index="subject" Mode="IN">' +
              '                       <DataType>' +
              '                           <BasicType Type="STRING"/>' +
              '                       </DataType>' +
              '                       <Description>邮件标题</Description>' +
              '                   </FormalParameter>' +
              '                   <FormalParameter Id="to" Index="to" Mode="IN">' +
              '                       <DataType>' +
              '                           <BasicType Type="STRING"/>' +
              '                       </DataType>' +
              '                       <Description>邮件地址,多个使用 , 分割</Description>' +
              '                   </FormalParameter>' +
              '               </FormalParameters>' +
              '               <ExtendedAttributes>' +
              '                   <ExtendedAttribute Name="ToolAgentClassName" Value="workflow.sendMailToolAgent"/>' +
              '               </ExtendedAttributes>' +
              '           </Application>' +
              '           <Application Id="workflow_dbToolAgent" Name="修改数据">' +
              '               <Description>修改数据库数据</Description>' +
              '               <FormalParameters>' +
              '                   <FormalParameter Id="tableName" Index="0" Mode="IN">' +
              '                       <DataType>' +
              '                           <ExternalReference location="java.lang.String"/>' +
              '                       </DataType>' +
              '                       <Description>数据表名称</Description>' +
              '                   </FormalParameter>' +
              '                   <FormalParameter Id="dbdata" Index="1" Mode="IN">' +
              '                       <DataType>' +
              '                           <ExternalReference location="java.lang.Object"/>' +
              '                       </DataType>' +
              '                       <Description>需要操作的数据可以是一个String,pojo或者Map</Description>' +
              '                   </FormalParameter>' +
              '                   <FormalParameter Id="DbActionType" Index="2" Mode="IN">' +
              '                       <DataType>' +
              '                           <BasicType Type="INTEGER"/>' +
              '                       </DataType>' +
              '                       <Description>对数据库的操作类型，取值：1 增加 2 修改 3 删除</Description>' +
              '                   </FormalParameter>' +
              '                   <FormalParameter Id="Condition" Index="3" Mode="IN">' +
              '                       <DataType>' +
              '                           <ExternalReference location="java.lang.Object"/>' +
              '                       </DataType>' +
              '                       <Description>数据操作条件，可以为pojo或者Map,为数据的操作条件</Description>' +
              '                   </FormalParameter>' +
              '               </FormalParameters>' +
              '               <ExtendedAttributes>' +
              '                   <ExtendedAttribute Name="ToolAgentClassName" Value="workflow.dbToolAgent"/>' +
              '                   <ExtendedAttribute Name="DataTableName"/>' +
              '               </ExtendedAttributes>' +
              '           </Application>' +
              '           <Application Id="workflow_fetchDataAgent" Name="获取数据">' +
              '               <Description>获取数据库数据</Description>' +
              '               <FormalParameters>' +
              '                   <FormalParameter Id="Condition" Index="1" Mode="IN">' +
              '                       <DataType>' +
              '                           <ExternalReference location="java.lang.Object"/>' +
              '                       </DataType>' +
              '                       <Description>数据操作条件，可以为pojo或者Map,为数据的操作条件</Description>' +
              '                   </FormalParameter>' +
              '               </FormalParameters>' +
              '               <ExtendedAttributes>' +
              '                   <ExtendedAttribute Name="ToolAgentClassName" Value="workflow.fetchDataAgent"/>' +
              '                   <ExtendedAttribute Name="DataTableName"/>' +
              '               </ExtendedAttributes>' +
              '           </Application>' +
              '       </Applications>';
    
    xpdl +=  activitySets +
             thisGraph.emergeActivities() +
             thisGraph.emergeTransitions() +
             '       <ExtendedAttributes>' +
             '           <ExtendedAttribute Name="IsMain" Value="true"/>' +
             '           <ExtendedAttribute Name="warnTimeiFrequency"/>' +
             '           <ExtendedAttribute Name="warnTime"/>' +
             '           <ExtendedAttribute Name="warnAgentClassName"/>' +
             '           <ExtendedAttribute Name="LimitAgentClassName"/>' +
             '           <ExtendedAttribute Name="initFormPlugin" Value="wfd_self.xml"/>' +
             '           <ExtendedAttribute Name="initReserve"/>' +
             '           <ExtendedAttribute Name="initType" Value="money"/>' +
             '           <ExtendedAttribute Name="initAuthor" Value="管理员"/>' +
                         thisGraph.startAndEndOfWorkflow().start +
                         thisGraph.startAndEndOfWorkflow().end +
             '       </ExtendedAttributes>' +
             '   </WorkflowProcess>' +
             '</WorkflowProcesses>';
    return vkbeautify.xml(xpdl);
  };

  GraphCreator.prototype.emergeActivitySet = function(activitySetId) {
    var thisGraph = this; 
    var activities = thisGraph.filterActivities();
    var activitySets = '<ActivitySet Id="'+activitySetId+'"></ActivitySet>';
    if (activities.length) {
      activitySets = '<ActivitySet Id="'+activitySetId+'">' + 
                         thisGraph.emergeActivities() + 
                         thisGraph.emergeTransitions() + 
                     '</ActivitySet>';
    }
    return activitySets;
  };

  GraphCreator.prototype.findActByActSetId = function(activitysetid) {
    var thisGraph = this;
    var blockActivity = thisGraph.nodes.find(function(node) {
      return node.component == 'blockActivity' && node.activitySet.activitySetId == activitysetid;
    });
    return blockActivity;
  };

  GraphCreator.prototype.filterActivities = function() {
    var thisGraph = this;
    var activities = thisGraph.nodes.filter(function(node) {
      return node.type == 'activity';
    });
    return activities;
  };

  GraphCreator.prototype.filterStartAndEnd = function() {
    var thisGraph = this;
    var activities = thisGraph.nodes.filter(function (node) {
      return node.type == 'start' || node.type == 'end';
    });
    return activities;
  };

  GraphCreator.prototype.filterBlockActivities = function() {
    var thisGraph = this;
    var blockActivities = thisGraph.nodes.filter(function(node) {
      return node.component == 'blockActivity';
    });
    return blockActivities;
  };

  GraphCreator.prototype.edgesLinkAcivity = function() {
    var thisGraph = this;
    var edges_act = thisGraph.edges.filter(function(edge) {
      return (edge.source.type != 'start' && edge.target.type != 'end');
    });
    return edges_act;
  };

  GraphCreator.prototype.consts = {
    selectedClass: "selected",
    connectClass: "connect-node",
    circleGClass: "conceptG",
    graphClass: "graph",
    activeEditId: "active-editing",
    BACKSPACE_KEY: 8,
    DELETE_KEY: 46,
    ENTER_KEY: 13,
    nodeRadius: 34,
    nodeRadiusVary: 1
  };

  /**
   * 获取link样式 [添加线样式 start:连线起点 des:连线终点]
   * 如果 |dif.x| > |dif.y| 左右连线，反之，上下连线
   * 如果 dif.x > 0 && dif.y < 0 第四象限
   * 如果 dif.x > 0 && dif.y > 0 第一象限
   * 如果 dif.x < 0 && dif.y > 0 第二象限
   * 如果 dif.x < 0 && dif.y < 0 第三象限
   */
  GraphCreator.prototype.getLink_d = function(start, des) {
    var d = start;
    var mid_x = (d.x + des.x)/2,
      mid_y = (d.y + des.y)/2;
    var dif_x = des.x - d.x,
      dif_y = des.y - d.y;
    var link;
    if (Math.abs(dif_x) > Math.abs(dif_y)) { // 左右连线
      if (dif_x > 0 && dif_y > 0) { //第一象限（200,200-300,300）
        // <path d="M 200,200 L 245,200 M 245,200 A 5,5,0,0,1 250,205 M 250,205 L 250,295 M 250,295 A 5,5,0,0,0 255,300 M 255,300 L 300,300" fill="none" stroke="#F18C16" stroke-width="1"></path>
        link = 'M' + d.x + ',' + d.y + 'L' + (mid_x-5) + ',' + d.y + 'M' + (mid_x-5) + ',' + d.y + 'A 5,5,0,0,1 ' + mid_x + ',' + (d.y+5) + 
          'M' + mid_x + ',' + (d.y+5) + 'L' + mid_x + ',' + (des.y-5) +'M' + mid_x + ',' + (des.y-5) + 'A 5,5,0,0,0' + (mid_x+5) + ',' + des.y + 
          'M' + (mid_x+5) + ',' + des.y + 'L' + des.x + ',' + des.y;
      }
      if (dif_x < 0 && dif_y > 0) { //第二象限（200,200-100,300）
        // <path d="M 200,200 L 155,200 M 155,200 A 5,5,0,0,0 150,205 M 150,205 L 150,295 M 150,295 A 5,5,0,0,1 145,300 M 145,300 L 100,300" fill="none" stroke="#F18C16" stroke-width="1"></path> 
        link = 'M' + d.x + ',' + d.y + 'L' + (mid_x+5) + ',' + d.y + 'M' + (mid_x+5) + ',' + d.y + 'A 5,5,0,0,0 ' + mid_x + ',' + (d.y+5) + 
          'M' + mid_x + ',' + (d.y+5) + 'L' + mid_x + ',' + (des.y-5) +'M' + mid_x + ',' + (des.y-5) + 'A 5,5,0,0,1' + (mid_x-5) + ',' + des.y + 
          'M' + (mid_x-5) + ',' + des.y + 'L' + des.x + ',' + des.y;
      }
      if (dif_x < 0 && dif_y < 0) { //第三象限（200,200-100,100）
        // <path d="M 200,200 L 155,200 M 155,200 A 5,5,0,0,1 150,195 M 150,195 L 150,105 M 150,105 A 5,5,0,0,0 145,100 M 145,100 L 100,100" fill="none" stroke="#F18C16" stroke-width="1"></path>
        link = 'M' + d.x + ',' + d.y + 'L' + (mid_x+5) + ',' + d.y + 'M' + (mid_x+5) + ',' + d.y + 'A 5,5,0,0,1 ' + mid_x + ',' + (d.y-5) + 
          'M' + mid_x + ',' + (d.y-5) + 'L' + mid_x + ',' + (des.y+5) +'M' + mid_x + ',' + (des.y+5) + 'A 5,5,0,0,0' + (mid_x-5) + ',' + des.y + 
          'M' + (mid_x-5) + ',' + des.y + 'L' + des.x + ',' + des.y;
      }
      if (dif_x > 0 && dif_y < 0) { //第四象限（200,200-300,100）
        // <path d="M 200,200 L 245,200 M 245,200 A 5,5,0,0,0 250,195 M 250,195 L 250,105 M 250,105 A 5,5,0,0,1 255,100 M 255,100 L 300,100" fill="none" stroke="#F18C16" stroke-width="1"></path>
        link = 'M' + d.x + ',' + d.y + 'L' + (mid_x-5) + ',' + d.y + 'M' + (mid_x-5) + ',' + d.y + 'A 5,5,0,0,0 ' + mid_x + ',' + (d.y-5) + 
          'M' + mid_x + ',' + (d.y-5) + 'L' + mid_x + ',' + (des.y+5) +'M' + mid_x + ',' + (des.y+5) + 'A 5,5,0,0,1' + (mid_x+5) + ',' + des.y + 
          'M' + (mid_x+5) + ',' + des.y + 'L' + des.x + ',' + des.y;
      }
    } else { // 上下连线
      if (dif_x > 0 && dif_y > 0) { //第一象限（200,200-300,300）
        // <path d="M 100,100 L 100,145 M 100,145 A 5,5,0,0,0 105,150 M 105,150 L 195,150 M 195,150 A 5,5,0,0,1 200,155 M 200,155 L 200,200" fill="none" stroke="#0096f2" stroke-width="1"></path>
        link = 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + (mid_y-5) + 'M' + d.x + ',' + (mid_y-5) + 'A 5,5,0,0,0 ' + (d.x+5) + ',' + mid_y + 
          'M' + (d.x+5) + ',' + mid_y + 'L' + (des.x-5) + ',' + mid_y +'M' + (des.x-5) + ',' + mid_y + 'A 5,5,0,0,1' + des.x + ',' + (mid_y+5) + 
          'M' + des.x + ',' + (mid_y+5) + 'L' + des.x + ',' + des.y;
      }
      if (dif_x < 0 && dif_y > 0) { //第二象限（200,200-100,300）
        // <path d="M 200,200 L 200,245 M 200,245 A 5,5,0,0,1 195,250 M 195,250 L 105,250 M 105,250 A 5,5,0,0,0 100,255 M 100,255 L 100,300" fill="none" stroke="#0096f2" stroke-width="1"></path>
        link = 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + (mid_y-5) + 'M' + d.x + ',' + (mid_y-5) + 'A 5,5,0,0,1 ' + (d.x-5) + ',' + mid_y + 
          'M' + (d.x-5) + ',' + mid_y + 'L' + (des.x+5) + ',' + mid_y +'M' + (des.x+5) + ',' + mid_y + 'A 5,5,0,0,0' + des.x + ',' + (mid_y+5) + 
          'M' + des.x + ',' + (mid_y+5) + 'L' + des.x + ',' + des.y;
      }
      if (dif_x < 0 && dif_y < 0) { //第三象限（200,200-100,100）
        // <path d="M 200,200 L 200,155 M 200,155 A 5,5,0,0,0 195,150 M 195,150 L 105,150 M 105,150 A 5,5,0,0,1 100,145 M 100,145 L 100,100" fill="none" stroke="#0096f2" stroke-width="1"></path>
        link = 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + (mid_y+5) + 'M' + d.x + ',' + (mid_y+5) + 'A 5,5,0,0,0 ' + (d.x-5) + ',' + mid_y + 
          'M' + (d.x-5) + ',' + mid_y + 'L' + (des.x+5) + ',' + mid_y +'M' + (des.x+5) + ',' + mid_y + 'A 5,5,0,0,1' + des.x + ',' + (mid_y-5) + 
          'M' + des.x + ',' + (mid_y-5) + 'L' + des.x + ',' + des.y;
      }
      if (dif_x > 0 && dif_y < 0) { //第四象限（200,200-300,100）
        // <path d="M 200,200 L 200,155 M 200,155 A 5,5,0,0,1 205,150 M 205,150 L 295,150 M 295,150 A 5,5,0,0,0 300,145 M 300,145 L 300,100" fill="none" stroke="#0096f2" stroke-width="1"></path>
        link = 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + (mid_y+5) + 'M' + d.x + ',' + (mid_y+5) + 'A 5,5,0,0,1 ' + (d.x+5) + ',' + mid_y + 
          'M' + (d.x+5) + ',' + mid_y + 'L' + (des.x-5) + ',' + mid_y +'M' + (des.x-5) + ',' + mid_y + 'A 5,5,0,0,0' + des.x + ',' + (mid_y-5) + 
          'M' + des.x + ',' + (mid_y-5) + 'L' + des.x + ',' + des.y;
      }
    }
    return link;
  };

  /**
   * 获取此节点的连线
   * @param  {Object} node        此节点
   * @param  {Number} type        -1 连线指向此节点 1 此节点连出 undefined 所有连线
   * @return {Array}  linkedEdges 连线集合
   */
  GraphCreator.prototype.getLinkedEdges = function(node, type) {
    var thisGraph = this;
    var edges = thisGraph.edges;
    var linkedEdges;
    if (type == -1) {
      linkedEdges = edges.filter(function(edge) {
        return edge.target == node;
      });
    }
    if (type == 1) {
      linkedEdges = edges.filter(function(edge) {
        return edge.source == node;
      });
    }
    linkedEdges = edges.filter(function(edge) {
      return edge.target == node || edge.source == node;
    });
    return linkedEdges;
  };

  /**
   * 判断node有无连线
   * @param  {object}  node       节点
   * @param  {Boolean} isActivity 是否是与activity的连线，true 不包括开始和结束节点
   * @param  {Boolean} type       连线类型：-1 指向node 0 所有连线 1 从node连出
   * @return {Boolean}            hasLinked
   */
  GraphCreator.prototype.hasLinked = function(node, isActivity, type) {
    var thisGraph = this;
    isActivity = isActivity || false;
    type = type || 0;
    var edges = [];
    if (isActivity) {
      edges = thisGraph.edges.filter(function(edge, index) {
        return edge.source.type == 'activity' && edge.target.type == 'activity';
      });
    } else {
      edges = thisGraph.edges;
    }
    var hasLinked = edges.some(function(edge, index) {
      if (type == 0) {
        return edge.source.id == node.id || edge.target.id == node.id;
      } else if (type == -1) {
        return edge.target.id == node.id;
      } else if (type == 1) {
        return edge.source.id == node.id;
      }
    });
    return hasLinked;
  };

  /* PROTOTYPE FUNCTIONS */
  GraphCreator.prototype.dragmove = function(d) {
    var thisGraph = this;
    var drawLine = thisGraph.state.drawLine;
    var link;
    if (thisGraph.state.shiftNodeDrag || drawLine) {
      var svgG = thisGraph.svgG,
        dragLine = thisGraph.dragLine;
      switch (drawLine) {
        case 'NOROUTING': // 直线
          link = dragLine.attr('d', 'M' + d.x + ',' + d.y + 'L' + d3.mouse(svgG.node())[0] + ',' + d3.mouse(svgG.node())[1]);
          break;
        case 'SIMPLEROUTING': // 折线
          var des = {
            x: d3.mouse(svgG.node())[0], 
            y: d3.mouse(svgG.node())[1] 
          };
          var link_d = thisGraph.getLink_d(d, des);
          link = dragLine.attr('d', link_d);
          break;
      }
      refresh(link); // 兼容IE11
    } else {
      d.x += d3.event.dx;
      d.y += d3.event.dy;
      thisGraph.updateGraph();
      /*
      // 防止circle脱出svg范围(放大缩小后还存在问题，待修改...)
      var radius = thisGraph.consts.nodeRadius + thisGraph.consts.nodeRadiusVary,
        svg_width = $('svg').width(),
        svg_heigh = $('svg').height();
      d.x = Math.max(Math.min(d3.event.x, svg_width-radius), radius);
      d.y = Math.max(Math.min(d3.event.y, svg_heigh-radius), radius);
      thisGraph.updateGraph();*/
    }
  };

  GraphCreator.prototype.deleteGraph = function() {
    var thisGraph = this;
    thisGraph.nodes = [];
    thisGraph.edges = [];
    thisGraph.updateGraph();
  };

  /* select all text in element: taken from http://stackoverflow.com/questions/6139107/programatically-select-text-in-a-contenteditable-html-element */
  GraphCreator.prototype.selectElementContents = function(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  };


  /* insert svg line breaks: taken from http://stackoverflow.com/questions/13241475/how-do-i-include-newlines-in-labels-in-d3-charts */
  GraphCreator.prototype.insertTitleLinebreaks = function(gEl, d) {
    var words = d.title.split(/\s+/g),
      nwords = words.length;
    var el = gEl.append("text")
      .attr("text-anchor", "middle")
      .attr("letter-spacing", "1");
    switch (d.type) {
      case 'start':
      case 'end':
        el.attr("dy", "13");
        break;
      default:
        el.attr("dy", "-" + (nwords - 1) * 7.5);
        break;
    }
    for (var i = 0; i < words.length; i++) {
      var tspan = el.append('tspan').text(words[i]);
      if (i > 0)
        tspan.attr('x', 0).attr('dy', '15');
    }

  };

  // remove edges associated with a node
  GraphCreator.prototype.spliceLinksForNode = function(node) {
    var thisGraph = this,
      toSplice = thisGraph.edges.filter(function(l) {
        return (l.source === node || l.target === node);
      });
    toSplice.map(function(l) {
      thisGraph.edges.splice(thisGraph.edges.indexOf(l), 1);
    });
  };

  GraphCreator.prototype.replaceSelectEdge = function(d3Path, edgeData) {
    var thisGraph = this;
    d3Path.classed(thisGraph.consts.selectedClass, true);
    //修改箭头样式
    // d3Path.style('marker-end', 'url(#selected-end-arrow)');
    if (thisGraph.state.selectedEdge) {
      thisGraph.removeSelectFromEdge();
    }
    thisGraph.state.selectedEdge = edgeData;
  };

  GraphCreator.prototype.replaceSelectNode = function(d3Node, nodeData) {
    // A circle node has been selected.
    var thisGraph = this;
    d3Node.classed(this.consts.selectedClass, true);
    if (thisGraph.state.selectedNode) {
      thisGraph.removeSelectFromNode();
    }
    thisGraph.state.selectedNode = nodeData;
  };

  GraphCreator.prototype.removeSelectFromNode = function() {
    // A circle node has been deselected.

    var thisGraph = this;
    thisGraph.circles.filter(function(cd) {
      return cd.id === thisGraph.state.selectedNode.id;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedNode = null;

    d3.selectAll("#inspector").remove();

  };

  GraphCreator.prototype.removeSelectFromEdge = function() {
    var thisGraph = this;
    thisGraph.paths.filter(function(cd) {
      return cd === thisGraph.state.selectedEdge;
    }).classed(thisGraph.consts.selectedClass, false);
    thisGraph.state.selectedEdge = null;
  };

  GraphCreator.prototype.pathMouseDown = function(d3path, d) {
    var thisGraph = this,
      state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownLink = d;

    if (state.selectedNode) {
      thisGraph.removeSelectFromNode();
    }

    var prevEdge = state.selectedEdge;
    if (!prevEdge || prevEdge !== d) {
      thisGraph.replaceSelectEdge(d3path, d);
    } else {
      if(d3.event.button != 2){
        thisGraph.removeSelectFromEdge();
        // d.style('marker-end', 'url(#end-arrow)');
      }
    }
    if (d3.event.button == 2) {
      thisGraph.showMenu();
      // thisGraph.menuEvent();
    }
  };

  // mousedown on node
  GraphCreator.prototype.circleMouseDown = function(d3node, d) {
    var thisGraph = this,
      state = thisGraph.state;
    d3.event.stopPropagation();
    state.mouseDownNode = d;

    if (d3.event.shiftKey || thisGraph.state.drawLine) {
      var result = thisGraph.isAllowLinking(d);
      if (!result.success) {
        layer.msg(result.msg, {time: 2000, icon: 0, offset: '180px'});
        return;
      }      
      // Automatically create node when they shift + drag?
      state.shiftNodeDrag = d3.event.shiftKey;
      // reposition dragged directed edge
      var link = thisGraph.dragLine.classed('hidden', false)
        .attr('d', 'M' + d.x + ',' + d.y + 'L' + d.x + ',' + d.y);
      refresh(link);// 兼容IE11
      return;
    }
  };

  // mouseup on nodes
  GraphCreator.prototype.circleMouseUp = function(d3node, d) {
    var thisGraph = this,
      state = thisGraph.state,
      consts = thisGraph.consts;
    // reset the states
    state.shiftNodeDrag = false;
    d3node.classed(consts.connectClass, false);

    var mouseDownNode = state.mouseDownNode;
    if (!mouseDownNode) return;

    thisGraph.dragLine.classed("hidden", true);

    if (mouseDownNode !== d) {
      var result = thisGraph.isAllowLinked(d, mouseDownNode);
      if (!result.success) {
        layer.msg(result.msg, {time: 2000, icon: 0, offset: '180px'});
        return;
      }
      // we're in a different node: create new edge for mousedown edge and add to graph
      var newEdge = {
        edgeId: seqer_edgeID.gensym(),
        postCondition: {transitionEventType: 'transitionClass'},
        source: mouseDownNode,
        target: d,
        drawLine: thisGraph.state.drawLine
      };
      var filtRes = thisGraph.paths.filter(function(d) {
        if (d.source === newEdge.target && d.target === newEdge.source) {
          thisGraph.edges.splice(thisGraph.edges.indexOf(d), 1);
        }
        return d.source === newEdge.source && d.target === newEdge.target;
      });
      if (!filtRes[0].length) {
        thisGraph.edges.push(newEdge);
        thisGraph.updateGraph();
      }
    } else {
      // we're in the same node
      var prevNode = state.selectedNode;
      if (state.justDragged) {
        // dragged, not clicked
        if (state.selectedEdge) {
          thisGraph.removeSelectFromEdge();
        }
        if (!prevNode || prevNode !== d) {
          thisGraph.replaceSelectNode(d3node, d);
          thisGraph.changePropDiv(d); // 添加更改属性div
        } else {
          // thisGraph.removeSelectFromNode();
        }
      
      } else {
        // clicked, not dragged
        if (d3.event.shiftKey) {

        } else {
          if (state.selectedEdge) {
            thisGraph.removeSelectFromEdge();
          }
          if (!prevNode || prevNode !== d) {
            thisGraph.replaceSelectNode(d3node, d);
            thisGraph.changePropDiv(d); // 添加更改属性div
            thisGraph.showMenu();
            // thisGraph.menuEvent();
          } else {
            if (d3.event.button == '2') {
              thisGraph.showMenu();
              // thisGraph.menuEvent();
            } else {
              thisGraph.removeSelectFromNode();
            }
          }
        }
      }
    }
    state.mouseDownNode = null;
    state.justDragged = false;
    return;

  }; // end of circles mouseup

  /**
   * 判断节点是否允许被连线
   * @param  {Object}  mouseDownNode 连线开始节点
   * @param  {Object}  eventNode     连线结束节点
   * @return {Object}                连线是否成功信息
   */
  GraphCreator.prototype.isAllowLinked = function(eventNode, mouseDownNode) { 
    var thisGraph = this;
    var result = {
      success: true,
      msg: ''
    };
    switch (eventNode.type) {
      case 'start':
        result.success = false;
        result.msg = '不允许';
        break;
      case 'end':
        if (thisGraph.hasLinked(eventNode)) {
          result.success = false;
          result.msg = '已有连线！';
        }
        break;
    }
    switch (mouseDownNode.type) {
      case 'start':
        if (thisGraph.hasLinked(mouseDownNode)) {
          result.success = false;
          result.msg = '已有连线！';
        }
        break;
      case 'end':
        result.success = false;
        result.msg = '不允许';
        break;
      case 'activity':
        var edges = thisGraph.getLinkedEdges(mouseDownNode, 1);
        var edgeLinkEnd = edges.filter(function(edge) {
          return edge.target.type == 'end';
        });
        if (edgeLinkEnd.length) {
          result.success = false;
          result.msg = '活动不能有转出转移！';
        }
        break;
    }
    return result;
  };

  /**
   * 判断节点是否允许连线
   * @param  {Object}  eventNode 出发实践节点对象 
   * @return {Object}            连线是否成功信息
   */
  GraphCreator.prototype.isAllowLinking = function(eventNode) {
    var thisGraph = this;
    var result = {
      success: true,
      msg: ''
    };
    switch (eventNode.type) {
      case 'start':
        if (thisGraph.hasLinked(eventNode)) { 
          result.success = false;
          result.msg = '已有连线！';
        }
        break;
      case 'end':
        result.success = false;
        result.msg = '不允许！';
        break;
      case 'activity':
        var edges = thisGraph.getLinkedEdges(eventNode, 1);
        var edgeLinkEnd = edges.filter(function(edge) {
          return edge.target.type === 'end';
        });
        if (edgeLinkEnd.length) {
          result.success = false;
          result.msg = '活动不能有转出转移！';
        }
      break;
    }
    return result;
  };

  //更改属性div
  GraphCreator.prototype.changePropDiv = function(d) {
    var thisGraph = this;
    $('.component-prop').empty().append(
        '<div>' + 
        '  <div name="id" class="prop-value"><span>id:</span><span>' + d.id + '</span></div>'+
        '  <div name="name" class="prop-value"><span>名称:</span><span>' + d.title + '</span></div>'+
        '</div>' +
        '<div class="clearfix"></div>'+
        '<div> ' +
        '  <div name="type" class="prop-value"><span>类型:</span><span>' + d.component + '</span></div>'+
        '  <div name="" class="prop-value"><span>执行者:</span><span>无</span></div>' +
        '</div>' +
        '<div class="clearfix"></div>');
  };

  // 右击显示菜单
  GraphCreator.prototype.showMenu = function() {
    var thisGraph = this;
    $('#flowComponents div[name=selectBtn]').trigger('click'); 
    thisGraph.circles.style({'cursor': 'default'}); // 防止在活动块上右击存在问题
    var selectedNode = thisGraph.state.selectedNode,
      selectedEdge = thisGraph.state.selectedEdge;
    if (selectedNode) {
      if (selectedNode.type == 'activity') {
        $('#rMenu a[name=propMenu]').show();
        if (selectedNode.component == 'blockActivity') {
          $('#rMenu a[name=editMenu]').show();
        } else {
          $('#rMenu a[name=editMenu]').hide();
        }
      } else {
        $('#rMenu a[name=propMenu]').hide();
        $('#rMenu a[name=editMenu]').hide();
      }
    } else if (selectedEdge) {
      var sourceType = selectedEdge.source.type,
        targetType = selectedEdge.target.type;
      $('#rMenu a[name=editMenu]').hide();
      if (sourceType == 'start' || targetType == 'end') {
        $('#rMenu a[name=propMenu]').hide();
      } else {
        $('#rMenu a[name=propMenu]').show();
      }
    }
    d3.select("#rMenu").style({ 
      "top": (d3.event.clientY-2)+"px", 
      "left": (d3.event.clientX-2)+"px", 
      "display": "block" 
    });
    d3.select('#rMenu').on('contextmenu', function() {
      d3.event.preventDefault();
    });
  };

  // mousedown on main svg
  GraphCreator.prototype.svgMouseDown = function() {
    this.state.graphMouseDown = true;
  };

  // mouseup on main svg
  GraphCreator.prototype.svgMouseUp = function() {
    var thisGraph = this,
      state = thisGraph.state;
    if (state.justScaleTransGraph) {
      // dragged not clicked
      state.justScaleTransGraph = false;
    } else if (state.graphMouseDown && d3.event.shiftKey) {
      // clicked not dragged from svg
      var xycoords = d3.mouse(thisGraph.svgG.node()),
        d = {
          id: seqer_nodeID.gensym(),
          title: '普通活动',
          component: 'ordinaryActivity',
          type: 'activity',
          x: xycoords[0],
          y: xycoords[1],
          conventional: {
            MustActivity: true, 
            taskAssign: 'taskAutoMode', 
            autoAcceptAllAssignments: true, 
            isResponsible: true,
            startMode: 'manual',
            finishMode: 'manual'
          },
          frontCondition: {},
          postCondition: {},
          extendAttr: [],
          highLevel: {},
          timeoutLimit: {},
          monitorinf: {isResponsibleTem: true},
          eventTypeId: null
        };
      thisGraph.nodes.push(d);
      thisGraph.updateGraph();
    } else if (state.shiftNodeDrag || state.drawLine) {
      // dragged from node
      state.shiftNodeDrag = false;
      thisGraph.dragLine.classed("hidden", true);//win7 IE11下存在bug
    }
    state.graphMouseDown = false;
  };

  // keydown on main svg
  GraphCreator.prototype.svgKeyDown = function() {
    var thisGraph = this,
      state = thisGraph.state,
      consts = thisGraph.consts;
    // make sure repeated key presses don't register for each keydown
    if (state.lastKeyDown !== -1) return;

    state.lastKeyDown = d3.event.keyCode;
    var selectedNode = state.selectedNode,
      selectedEdge = state.selectedEdge;
    /*
    switch (d3.event.keyCode) {
      //case consts.BACKSPACE_KEY:
      case consts.DELETE_KEY:
        d3.event.preventDefault();
        if (selectedNode) {
          thisGraph.nodes.splice(thisGraph.nodes.indexOf(selectedNode), 1);
          thisGraph.spliceLinksForNode(selectedNode);
          state.selectedNode = null;
          thisGraph.updateGraph();
          // thisGraph.
        } else if (selectedEdge) {
          thisGraph.edges.splice(thisGraph.edges.indexOf(selectedEdge), 1);
          state.selectedEdge = null;
          thisGraph.updateGraph();
        }
        break;
    }*/
  };

  GraphCreator.prototype.svgKeyUp = function() {
    this.state.lastKeyDown = -1;
  };

  // call to propagate changes to graph
  GraphCreator.prototype.updateGraph = function() {
    var thisGraph = this,
      consts = thisGraph.consts,
      state = thisGraph.state,
      nodes = thisGraph.nodes, 
      edges = thisGraph.edges;
    
    thisGraph.paths = thisGraph.paths.data(edges, function(d) {
      return String(d.source.id) + "+" + String(d.target.id);
    });
    var paths = thisGraph.paths;
    // update existing paths
    var link = paths.style('marker-end', 'url(#'+thisGraph.containerId+'-end-arrow)')
      .classed(consts.selectedClass, function(d) {
        return d === state.selectedEdge;
      })
      .attr("conditype", function(d) {
        if (d.postCondition) {
          return changeCase(d.postCondition.conditype, 5);
        } else {
          return '';
        }
      })
      .attr("d", function(d) {
        if (d.drawLine == 'NOROUTING') {
          return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        }
        if (d.drawLine == 'SIMPLEROUTING') {
          var start = {
            x: d.source.x,
            y: d.source.y
          };
          var des = {
            x: d.target.x,
            y: d.target.y
          };
          return thisGraph.getLink_d(start, des);
        }
      });
    refresh(link); // 兼容IE11

    // add new paths
    paths.enter()
      .append("path")
      .style('marker-end', 'url(#'+thisGraph.containerId+'-end-arrow)')
      .classed("link", true)
      .attr("conditype", function(d) {
        if (d.postCondition) {
          return changeCase(d.postCondition.conditype, 5);
        } else {
          return '';
        }
      })
      .attr("d", function(d) {
        if (d.drawLine == 'NOROUTING') {
          return "M" + d.source.x + "," + d.source.y + "L" + d.target.x + "," + d.target.y;
        }
        if (d.drawLine == 'SIMPLEROUTING') {
          var start = {
            x: d.source.x,
            y: d.source.y
          };
          var des = {
            x: d.target.x,
            y: d.target.y
          };
          return thisGraph.getLink_d(start, des);
        }
      })
      .on("mousedown", function(d) {
        thisGraph.pathMouseDown.call(thisGraph, d3.select(this), d);
      })
      .on("mouseup", function(d) {
        state.mouseDownLink = null;
      });

    // remove old links
    paths.exit().remove();

    // update existing nodes
    thisGraph.circles = thisGraph.circles.data(nodes, function(d) {
      return d.id;
    });
    thisGraph.circles.attr("transform", function(d) {
      if (d == state.selectedNode) { // 更新节点名称
        var tspan = d3.select(this).select('tspan');
        if (tspan.text() !== d.title) {
          tspan.text(d.title);
        }
      }
      return "translate(" + d.x + "," + d.y + ")";
    });

    // add new nodes
    var newGs = thisGraph.circles.enter()
      .append("g")
        .attr({"id": function(d) { return generateUUID(); }});

    newGs.classed(consts.circleGClass, true)
      .attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
      })
      .on("mouseover", function(d) {
        if (state.shiftNodeDrag) {
          d3.select(this).classed(consts.connectClass, true);
        }
      })
      .on("mouseout", function(d) {
        d3.select(this).classed(consts.connectClass, false);
      })
      .on("mousedown", function(d) {
        thisGraph.circleMouseDown.call(thisGraph, d3.select(this), d);
      })
      .on("mouseup", function(d) {
        thisGraph.circleMouseUp.call(thisGraph, d3.select(this), d);
      })
      .call(thisGraph.drag);

    newGs.append("circle")
      .attr("r", String(consts.nodeRadius));

    newGs.each(function(d) {
      switch (d.type) {
        case 'start':
          d3.select(this).classed('start', true);
          break;
        case 'end':
          d3.select(this).classed('end', true);
          break;
      }
      thisGraph.insertTitleLinebreaks(d3.select(this), d);
    });

    // remove old nodes
    thisGraph.circles.exit().remove();
  };
  
  GraphCreator.prototype.zoomed = function() {
    this.state.justScaleTransGraph = true;
    var translate = this.dragSvg.translate();
    var scale = this.dragSvg.scale();
    if (!translate[0]) translate = [0, 0];
    if (!scale) scale = 1;
    d3.select(".full-right>.tab.active ." + this.consts.graphClass)
      .attr("transform", "translate(" + translate + ") scale(" + scale + ")");
  };

  GraphCreator.prototype.updateWindow = function(svg) {
    var docEl = document.documentElement,
      bodyEl = document.getElementsByTagName('body')[0];
    var x = window.innerWidth || docEl.clientWidth || bodyEl.clientWidth;
    var y = window.innerHeight || docEl.clientHeight || bodyEl.clientHeight;
    svg.attr("width", x).attr("height", y);
  };

  /**
   * 创建子流程graph对象
   */
  GraphCreator.prototype.createSubGraph = function() {
    var thisGraph = this;
    var containerId = d3.select('.full-right>.tab.active').attr('data-tab'),
      activitySetId = d3.select('.full-right>.menu>.item.active').attr('activitysetid');

    var svg = d3.select('.full-right>.tab.active .svg-container').append("svg")
      .attr("width", "100%")
      .attr("height", "100%");
    /*
    var editedBlockNode = graph_main.nodes.find(function(node) {
      return (node.component == 'blockActivity' && node.activitySet.activitySetId == activitySetId);
    });*/
    var editedBlockNode = thisGraph.state.selectedNode;

    var subGraph = editedBlockNode.activitySet.graphCreator;
    var pools = graphPool.pools;
    var isExist = pools.indexOf(subGraph);
    if (isExist === -1) {
      var graph_active;
      if (subGraph) {
        graph_active = new GraphCreator(containerId, svg, subGraph.nodes, subGraph.edges, subGraph.participants);
      } else {
        graph_active = new GraphCreator(containerId, svg, [], [], []);
        editedBlockNode.activitySet.graphCreator = graph_active;
      } 
      pools.push(graph_active);
      graphPool.updateGraphActiveById(containerId);
      graph_active.updateGraph();
    }
  };

  GraphCreator.prototype.createNode = function(data) {
    var node;
    switch (data.type) {
      case 'activity':
        node = {
          id: seqer_nodeID.gensym(),
          title: data.text,
          component: data.component,
          type: data.type,
          x: data.x,
          y: data.y,
          conventional: {
            MustActivity: true, 
            taskAssign: 'taskAutoMode', 
            autoAcceptAllAssignments: true, 
            isResponsible: true,
            startMode: 'manual',
            finishMode: 'manual'
          },
          frontCondition: {},
          postCondition: {},
          extendAttr: [],
          highLevel: {},
          timeoutLimit: {},
          monitorinf: {isResponsibleTem: true},
          eventTypeId: null
        };
        if (data.component == 'blockActivity') {
          node.activitySet = {
            activitySetId: seqer_blockId.gensym(),
            graphCreator: null
          };
        }
        break;
      default: // 开始、结束节点
        node = {
          id: generateUUID(),
          title: data.text,
          component: data.component,
          type: data.type,
          x: data.x,
          y: data.y
        };
        break;
    }
    return node;
  };


  /**** MAIN ****/
  var container = d3.select('[data-tab="tab_main"] .svg-container').node(),
    containerId = 'tab_main';

    console.log('12122313213123', d3, d3.select('[data-tab="tab_main"] .svg-container'))

  var svg = d3.select('[data-tab="tab_main"] .svg-container').append("svg")
    .attr("width", "100%")
    .attr("height", container.clientHeight);

  var initialDate = initFlowChart();
  window.graph_main = new GraphCreator(containerId, svg, initialDate.nodes, initialDate.edges, initialDate.participants);
  graphPool.pools.push(graph_main);
  graph_main.updateGraph();
  initCommonEvent();

})(window.d3, window.saveAs, window.Blob, vkbeautify);

function initCommonEvent() {
  $('.editor-toolbar').on('click', '.sign.in,.sign.out', handleImportOrExport);
  $('.full-right').on('click', '.full-right-btn .item', handleViews);
  $('.editor-toolbar #delete-ele').on('click', handleDeleteNode);
  $('.editor-toolbar #zoom-enlarge,#zoom-narrow').on('click.zoom', handleClickZoom);
  $("#reset-zoom").on("click", resetZoom);
  $('#helper').on('click', handleHelp);
  $('#flowComponents .components-btn').on('click', handleComponentsBtn);
  $("#delete-graph").on("click", clearGraph);
  $('.editor-toolbar .icon.save').on('click', handleSave);
  $('#rMenu .item').on('click', handleRightMenu);
  $('.full-left [name=addStartEndBtn]').on('click', handleAddStartEnd);
}

function initFlowChart() {
  var initialDate = {
    nodes: [],
    edges: [],
    participants: []
  };
  // if (create_type == 'create') return;
  if (create_type == 'Show') {
    $.ajax({ // handle=Show&id=Package_njyaCNBY&type=xpdl&onlycode=23653VB5&fornocache=KXW33813
      url: "../wfdurl/urlConfig.do",
      type: "post",
      async: false,
      data: {
        "handle": create_type,
        "id": package_id,
        "type": 'xpdl',
        "onlycode": '23653VB5',
        "fornocache": 'KXW33813'
      },
      dataType: "html",
      success: function(result) {
        initialDate = importXpdl(result);
      },
      error: function(data) {
        alert("服务器繁忙,请稍后再试...");
      }
    });
  }
  return initialDate;
}

//根据xpdl格式还原流程图
function importXpdl(str) {
  str = vkbeautify.xmlmin(str);
  var nodes = [],
    edges = [],
    initialDate = {},
    error = {
      messages: []
    };

  while ((str = str.replace(":", "_")) && (str.indexOf(":") > -1));
  var root = $("<ROOT>" + str + "</ROOT>");
  if (!root.find("WorkflowProcess").length) {
    error.messages.push("XPDL:WorkflowProcess node not found");
    console.error(error.messages);
    return false;
  }

  var nodesId_seq = [], // node id 序列数组
    edgesId_seq = [], // edge id 序列数组
    participants = []; // 参与者集
  // 活动加入nodes
  root.find("Activities Activity").each(function() {
    var id = $(this).attr('id'),
      name = $(this).attr('name'),
      x = parseInt($(this).find('ExtendedAttribute[name=XOffset]').attr('Value')),
      y = parseInt($(this).find('ExtendedAttribute[name=YOffset]').attr('Value'));
      
    var syncType = $(this).find('ExtendedAttribute[name=syncType]').attr('Value');
    var responsible = $(this).find('ExtendedAttribute[name=responsible]').attr('Value');
    var conventional = { // 常规
        startMode: $(this).find('StartMode').html().replace(/<(\w+)>.+/g, function(match, p1) {return p1;}),
        finishMode: $(this).find('FinishMode').html().replace(/<(\w+)>.+/g, function(match, p1) {return p1;}),
        isMulInstance: $(this).find('ExtendedAttribute[name=isMulInstance]').attr('Value'),
        isResponsible: $(this).find('ExtendedAttribute[name=isResponsible]').attr('Value'), // true or false
        autoAcceptAllAssignments: $(this).find('ExtendedAttribute[name=autoAcceptAllAssignments]').attr('Value'), // true or false
        completeAllAssignments: $(this).find('ExtendedAttribute[name=completeAllAssignments]').attr('Value'),
        assignmentsOrder: $(this).find('ExtendedAttribute[name=assignmentsOrder]').attr('Value'),
        description: $(this).find('Description').html(),
        taskAssignMode: $(this).find('ExtendedAttribute[name=taskAssignMode]').attr('Value'),
        mustActivity: $(this).find('ExtendedAttribute[name=MustActivity]').attr('Value'), // true or false
        participantID: $(this).find('ExtendedAttribute[name=ParticipantID]').attr('Value'),
        performer: $(this).find('Performer').html()
      },
      frontCondition = { // 前置条件
        convergeType: $(this).find('TransitionRestriction Join').attr('Type'),
        isCreateNew: $(this).find('ExtendedAttribute[name=isCreateNew]').attr('Value'),
        voteModel: syncType && syncType.split('|')[0],
        voteText: syncType && syncType.split('|')[1] || ''
      },
      timeoutLimit = { // 超时限制
        limitTime: $(this).find('Limit').html(),
        warnTime: $(this).find('ExtendedAttribute[name=warnTime]').attr('Value'),
        warnAgentClassName: $(this).find('ExtendedAttribute[name=warnAgentClassName]').attr('Value'),
        limitAgentClassName: $(this).find('ExtendedAttribute[name=LimitAgentClassName]').attr('Value'),
        deadline: []
      },
      highLevel = { // 高级
        activityEndEvent: $(this).find('ExtendedAttribute[name=ActivityEndEvent]').attr('Value'),
        activityCreateEvent: $(this).find('ExtendedAttribute[name=ActivityCreateEvent]').attr('Value'),
        finishRule: $(this).find('ExtendedAttribute[name=FinishRule]').attr('Value') 
      },
      monitorinf = { // 监控信息
        isResponsibleTem: $(this).find('ExtendedAttribute[name=isResponsibleTem]').attr('Value'),
        responsible: responsible && responsible.split(',') || ''
      };
    $(this).find('Deadline').each(function() {
      var json_obj = {
          execution: $(this).attr('Execution'),
          deadlineCondition: $(this).find('DeadlineCondition').html(),
          exceptionName: $(this).find('ExceptionName').html()
      };
      timeoutLimit.deadline.push(JSON.stringify(json_obj));
    });
    
    var extendAttr = []; // 扩展属性集
    $(this).find('ExtendedAttribute[name=YOffset]').nextAll().each(function() { 
      var json_obj = {name: $(this).attr('name'), value: $(this).attr('Value')};
      extendAttr.push(JSON.stringify(json_obj));
    });
      
    var d = {
            id: id,
            title: name,
            //component要根据xpdl确定---未修改
            component: name=='普通活动'?'ordinaryActivity':name=='块活动'?'blockActivity':name=='子活动'?'subFlowActivity':name=='路径活动'?'routeActivity':'',
            type: 'activity',
            x: x,
            y: y,
            conventional: conventional,
            frontCondition: frontCondition,
            postCondition: {},
            extendAttr: extendAttr,
            timeoutLimit: timeoutLimit,
            highLevel: highLevel,
            monitorinf: monitorinf,
            eventTypeId: null
          };
      nodes.push(d);
      
      var result = /_Act([0-9]+)$/.exec(id);
      nodesId_seq.push(result[1]);
      
  });
  //活动之间连线加入edges
  root.find("Transitions Transition").each(function() {
    var from_actId = $(this).attr('From'),
      to_actId = $(this).attr('To'),
      edgeId = $(this).attr('Id'),
      drawLine = $(this).find('[name=RoutingType]').attr('Value'),
      transitionEventType = $(this).find('[name=TransitionEventType]').attr('Value');
    var edge = {
            edgeId: edgeId,
            postCondition: {transitionEventType: transitionEventType},
            drawLine: drawLine
          };
    
    nodes.forEach(function(node, i) {
      if (node.id == from_actId) {
        edge.source = nodes[i];
      }
      if (node.id == to_actId) {
        edge.target = nodes[i];
      }
    });
    edges.push(edge);
    var result = /_Tra([0-9]+)$/.exec(edgeId);
      edgesId_seq.push(result[1]);
  });
  if (edgesId_seq.length) {// 重新设置edge id 序列后缀
    var seq = maxArr(edgesId_seq) + 1;
    seqer_edgeID.set_seq(seq);
  }
  //开始、结束的node及开始、结束连接的edge--------------------------有改动 未测试
  var regExp_act = /_Act([0-9]+)$/;
  root.find('WorkflowProcess>ExtendedAttributes ExtendedAttribute[name$=OfWorkflow]').each(function() {
    var label_name = $(this).attr('name');
    var label_vals = $(this).attr('Value').split(';');
    var d = {
              id: label_vals[0],
              /*title: '开始',
              component: 'startComponent',
              type: 'start',*/
              x: parseFloat(label_vals[2]),
              y: parseFloat(label_vals[3]),
              eventTypeId: null
            };
    switch (label_name) {
      case 'StartOfWorkflow':
        d.title = '开始';
        d.component = 'startComponent';
        d.type = 'start';
        nodes.push(d);

        var result = regExp_act.exec(label_vals[0]);
            nodesId_seq.push(result[1]);
        if (label_vals[1] != -1) {
          nodes.forEach(function(node, i) {
            if (node.id == label_vals[1]) {
              var edge = {
                edgeId: seqer_edgeID.gensym(),  
                drawLine: label_vals[4],
                source: nodes[nodes.length-1],
                target: node
              };
              edges.push(edge);
            }
          });
        }
        break;
      case 'EndOfWorkflow':
        d.title = '结束';
        d.component = 'endComponent';
        d.type = 'end';
        nodes.push(d);

        var match = regExp_act.exec(label_vals[0]);
            nodesId_seq.push(match[1]);
        if (label_vals[1] != -1) {
          nodes.forEach(function(node, i) {
            if (node.id == label_vals[1]) {
              var edge = {
                edgeId: seqer_edgeID.gensym(),  
                drawLine: label_vals[4],
                source: node,
                target: nodes[nodes.length-1]
              };
              edges.push(edge);
            }
          });
        }
        break;
    }
  });
  
  if (nodesId_seq.length) {// 重新设置 node id 序列后缀
    seqer_nodeID.set_seq(maxArr(nodesId_seq) + 1);
  }
  
  //参与者集
  root.find("Participants Participant").each(function() {
    var participant = {
        conventional_definition_id: $(this).attr('Id'),
        conventional_definition_name: $(this).attr('Name'),
        conventional_definition_description: $(this).find('Description').html(),
        conventional_definition_participant: $(this).find('ExtendedAttribute[name=PartyBeanId]').attr('Value'),
        typeName: [],
        isAppData: [],
        itemName: [],
        itemValue: [],
        secLevelS: [],
        secLevelE: [],
        condition: [],
        conditionXml: [],
        roleName: []
    };
    $(this).find('ExtendedAttributes ExtendedAttribute').each(function() {
      var value = $(this).attr('Value') || $(this).html();
      participant[$(this).attr('Name')] = value.split(',');
    });
    
    participants.push(participant);
  });
  
  initialDate.nodes = nodes;
  initialDate.edges = edges;
  initialDate.participants = participants;
  return initialDate;
}

/**
 * svg
 * refresh 连线兼容IE11
 * @param  {[type]} link [改变attr后的dragLine]
 * 
 */
function refresh(link) {
  if (/(MSIE 10)|(Trident)/.test(navigator.appVersion)) {
    if (link[0] instanceof Array) {
      link[0].forEach( function(item) {
        item.parentNode.insertBefore(item, item);
      });
    } else if (link[0]) {
      var svgNode = link.node();
      svgNode.parentNode.insertBefore(svgNode, svgNode);
    }
  }
}

  }
}
</script>
<style>
  @import "../../../static/css/graph-creator.css";
  /* 滚动条的css */
  @import "../../../static/css/jquery.mCustomScrollbar.css";
  @import "../../../static/js/ztree/css/metroStyle/metroStyle.css";
  @import "../../../static/js/laypage/skin/laypage.css";
  @import "../../../static/css/flowchart.css";

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
