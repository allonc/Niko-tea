Page({
  data: {
    list: ''
  },
  methods: {
    getPage: function() {
      var that = this;
      return new Promise((resolve,reject)=>{
        wx.request({
          url: 'https://new.hibuys.cn/api/goods/index', //仅为示例，并非真实的接口地址
          data: {},
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            if (res.statusCode===200){
              resolve(res)
              console.log(res)
            }else{
              reject(res)
            }
            // that.setData({
            //   list: res.data.data.total
            // })
          }
        })
      })
    },
    getAA: function() {
      var that = this;
      return new Promise((resolve,reject)=>{
        wx.request({
          url: 'https://new.hibuys.cn/api/goods/show', //仅为示例，并非真实的接口地址
          data: {
            id: 73
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            resolve(res)
            console.log(res)

          }
        })
      })
    },
    getLast: function() {
      var that = this;
      return new Promise((resolve,reject)=>{
        wx.request({
          url: 'https://new.hibuys.cn/api/goods/show', //仅为示例，并非真实的接口地址
          data: {
            id: 78
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            resolve(res)
            console.log('最后的请求')

          }
        })
      })
    }
  },
  onLoad: function() {
    wx.showLoading({
      title: '2323',
    })
    var getPage = this.methods.getPage;
    var getAA = this.methods.getAA;
    var getLast = this.methods.getLast;

    Promise.all([getPage(), getAA()]).then((resolve) => {
      this.methods.getLast();
      console.log(getPage())
      wx.hideLoading()
    })

  }
})