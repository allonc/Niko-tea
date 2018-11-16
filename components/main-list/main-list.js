// components/main-list/main-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    datalist:{
      type:Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    b:9
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  attached:function(){
    console.log(this.properties.datalist)
  }
})
