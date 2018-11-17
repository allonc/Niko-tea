// components/main-list/main-list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    datalist: {
      type: Object
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    goods: [],
    currentActive: '',
    active: 0,
    heightArr: [],
    contentH: 0,
    foodAreaHeight: [0]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    taptap(e) {
      let tapId = e.currentTarget.dataset.tapId;
      let activeId = e.currentTarget.dataset.index
      this.setData({
        currentActive: tapId,
        active: activeId
      })
    },
    onScroll(event) {
      let scrollTop = event.detail.scrollTop
      let foodAreaHeight = this.data.foodAreaHeight
      console.log(scrollTop);
      foodAreaHeight.forEach((item, index) => {
        if (scrollTop >= foodAreaHeight[index] && scrollTop < foodAreaHeight[index + 1]) {
          this.setData({ active: index })
        }
      })
    },
    setFoodListAreaHeight() {
      let query = wx.createSelectorQuery().in(this);
      let that = this;
      //分类栏的高度
      query.select('.title').boundingClientRect(function (rect) {
        that.setData({
          eleCateTitleHeight: rect.height
        })
      }).exec();
      //商品item的高度
      query.select('.inner').boundingClientRect(function (rect) {
        that.setData({
          eleFoodHeight: rect.height
        })
      }).exec();

      //把商品列表每个分类的区间高度计算，并放进数组
      //上面获取元素的高度可能不是同步的，所以把下面的放在setTimeout里面
      let foodAreaHeight = [0]
      let heightCount = 0
      setTimeout(() => {
        this.data.goods.forEach((item, index) => {
          console.log(item.products.data.length * this.data.eleFoodHeight);
          // console.log(item.products.data.length)
          heightCount += item.products.data.length * this.data.eleFoodHeight + this.data.eleCateTitleHeight;

          foodAreaHeight.push(heightCount)
        })
        this.setData({
          foodAreaHeight
        })
      }, 100)
    }
  },
  ready: function () {

    let getgoods = this.properties.datalist.data
    this.setData({ goods: getgoods }, () => this.setFoodListAreaHeight())
    // console.log(this.data.goods)
  }
})