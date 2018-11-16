//index.js
//获取应用实例
// import datalist from '../../data/datalist.js'
var datalist = require('../../data/datalist.js')
const app = getApp()

Page({
  data: {
    datalist:datalist
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {
    // console.log(datalist)
  }

})