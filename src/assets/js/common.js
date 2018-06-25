/* eslint no-extend-native: "off" */
/**
  * 对Date的扩展，将 Date 转化为指定格式的String * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)
  * 可以用 1-2 个占位符 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) * eg: * (new
  * Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
  * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
  * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
  * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
  * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
*/
Date.prototype.pattern = function (fmt) {
  var o = {
    'M+': this.getMonth() + 1, // 月份
    'd+': this.getDate(), // 日
    'h+': this.getHours() % 12 === 0 ? 12 : this.getHours() % 12, // 小时
    'H+': this.getHours(), // 小时
    'm+': this.getMinutes(), // 分
    's+': this.getSeconds(), // 秒
    'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
    'S': this.getMilliseconds() // 毫秒
  }
  var week = {
    '0': '/u65e5',
    '1': '/u4e00',
    '2': '/u4e8c',
    '3': '/u4e09',
    '4': '/u56db',
    '5': '/u4e94',
    '6': '/u516d'
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  if (/(E+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? '/u661f/u671f' : '/u5468') : '') + week[this.getDay() + ''])
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
    }
  }
  return fmt
}

const common = {
  /**
   * svg
   * refresh 连线兼容IE11
   * @param  {[type]} link [改变attr后的dragLine]
   *
   */
  refresh: function (link) {
    if (/(MSIE 10)|(Trident)/.test(navigator.appVersion)) {
      if (link[0] instanceof Array) {
        link[0].forEach(function (item) {
          item.parentNode.insertBefore(item, item)
        })
      } else if (link[0]) {
        var svgNode = link.node()
        svgNode.parentNode.insertBefore(svgNode, svgNode)
      }
    }
  },
  /**
   * 大小写字母转化
   * @param  {[type]} str  需要转化的字符串
   * @param  {[type]} type 1: 首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
   * @return {[type]}      转化后的字符串
   * changeCase('asdasd', 1) --> Asdasd
   */
  changeCase: function (str, type) {
    if (!str) return ''
    function ToggleCase (str) {
      var itemText = ''
      str.split('').forEach(
        function (item) {
          if (/^([a-z]+)/.test(item)) {
            itemText += item.toUpperCase()
          } else if (/^([A-Z]+)/.test(item)) {
            itemText += item.toLowerCase()
          } else {
            itemText += item
          }
        })
      return itemText
    }
    switch (type) {
      case 1:
        return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
          return v1.toUpperCase() + v2
        })
      case 2:
        return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
          return v1.toLowerCase() + v2
        })
      case 3:
        return ToggleCase(str)
      case 4:
        return str.toUpperCase()
      case 5:
        return str.toLowerCase()
      default:
        return str
    }
  },
  /**
   * randomWord 产生任意长度随机字母数字组合
   * randomFlag-是否任意长度 min-任意长度最小位[固定位数] max-任意长度最大位
   * xuanfeng 2014-08-28
   */
  randomWord: function (randomFlag, min, max) {
    var str = ''
    var range = min
    var arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min
    }
    for (var i = 0; i < range; i++) {
      let pos = Math.round(Math.random() * (arr.length - 1))
      str += arr[pos]
    }
    return str
  },
  /**
   * [generateUUID 返回一串序列码]
   * @return {String} [uuid]
   */
  generateUUID: function () {
    var d = new Date().getTime()
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  },
  /**
   * 生成不重复的序列号
   */
  serialMarker: function () {
    var prefix = ''
    var seq = 1
    return {
      setPrefix: function (p) {
        prefix = String(p)
      },
      setSeq: function (s) {
        seq = s
      },
      gensym: function () {
        var result = prefix + seq
        seq += 1
        return result
      }
    }
  },
  packageId: function () {
    var packageId = ''
    packageId = packageId.indexOf('Package_') !== -1 ? packageId : 'Package_' + this.randomWord(false, 8)
    return packageId
  },
  workflowName: '过程',
  workflowId: function () {
    return common.packageId() + '_Wor1'
  },
  createTime: new Date().pattern('yyyy-MM-dd HH:mm:ss'),
  // 定义生成 node id 序列
  seqerNodeID: function () {
    var seqerNodeID = common.serialMarker()
    seqerNodeID.setPrefix(common.workflowId() + '_Act')
    return seqerNodeID
  },
  // 定义生成 edge id 序列
  seqerEdgeID: function () {
    var seqerEdgeID = common.serialMarker()
    seqerEdgeID.setPrefix(common.workflowId() + '_Tra')
    return seqerEdgeID
  },
  // 定义生成 参与者id 序列
  seqerParticipantID: function () {
    var seqerParticipantID = common.serialMarker()
    seqerParticipantID.setPrefix(common.workflowId() + '_Par')
    return seqerParticipantID
  },
  // 定义生成 块活动blockId 序列
  seqerBlockId: function () {
    var seqerBlockId = common.serialMarker()
    seqerBlockId.setPrefix(common.workflowI + '_Ase')
    return seqerBlockId
  },
  /**
   * 存放所有 GraphCreator 对象及方法
   */
  graphPool: {
    pools: [],
    updateGraphActiveById: function (containerId) {
      this.pools.forEach(function (graph) {
        if (graph.containerId === containerId) {
          // 确保当前点击的是true
          graph.state.activeEdit = true
        } else {
          graph.state.activeEdit = false
        }
      })
    },
    getGraphByActiveEdit: function () {
      var graphActive = this.pools.find(function (graph) {
        return graph.state.activeEdit
      })
      return graphActive
    },
    removeGraphFromPools: function (containerId) {
      var pools = this.pools
      for (var i = 0; i < pools.length; i++) {
        if (pools[i].containerId === containerId) {
          pools.splice(i, 1)
        }
      }
    }
  }
}

export default common
