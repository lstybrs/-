Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['月排行', '周排行', '总排行'],
    currentTab: 0,
    cats: [],
    flag: "week",
    page: 1,
    cats1: [],
    cats2: []
  },


  //顶部导航栏
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.requestBannerList()
    this.requestBannerList2()
    this.requestBannerList3()
  },

  //加载banner列表
  requestBannerList: function () {
    var that = this;
    wx.request({
      url: 'https://wmpy.net.cn/pywmApi/findUserGrowthRanking',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        currentPage: this.data.page,
        timeSpan: 'week'

      },
      success: function (res) {
        var data = res.data.recordS
        var oldData = that.data.cats
        var newData = oldData.concat(data)
        console.log(data)
        that.setData({
          cats: newData
        })
        // console.log(cats)
      }

    })
  },



  //加载banner2列表
  requestBannerList2: function () {
    var that = this;
    wx.request({
      url: 'https://wmpy.net.cn/pywmApi/findUserGrowthRanking',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        currentPage: this.data.page,
        timeSpan: 'month',

      },
      success: function (res) {

        var data = res.data.recordS
        var oldData = that.data.cats1
        var newData = oldData.concat(data)

        console.log(data)
        that.setData({
          cats1: newData
        })
        // console.log(cats)
      }

    })
  },


  //加载banner3列表
  requestBannerList3: function () {
    var that = this;
    wx.request({
      url: 'https://wmpy.net.cn/pywmApi/findUserGrowthRanking',
      method: "POST",
      header: {
        "content-type": "application/x-www-form-urlencoded"
      },
      data: {
        currentPage: this.data.page,
        timeSpan: 'year'

      },
      success: function (res) {

        var data = res.data.recordS//新获取的数组
        var oldData = that.data.cats2//已经获取的数组
        var newData = oldData.concat(data)//数组的拼接

        console.log(data)
        that.setData({
          cats2: newData// 赋值
        })
        // console.log(cats)
      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.data.page += 1
    this.requestBannerList()
    this.requestBannerList3()
    this.requestBannerList2()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})