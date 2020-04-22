//index.js
//获取应用实例
const app = getApp()

Page({
  onPullDownRefresh: function () {

    wx.showNavigationBarLoading() 

    setTimeout(function () {

      wx.hideNavigationBarLoading() 

      wx.stopPullDownRefresh() 

    }, 1000);
  },
  data: {
    slider: [
      { picUrl:'/images/1.jpg'},
      { picUrl: '/images/2.jpg' },
      { picUrl: '/images/3.jpg' },
      { picUrl: '/images/4.jpg' },
  ],
    swiperCurrent: 0,
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  toast: function (e) {
    wx.navigateTo({
      url: '/pages/text/text',
    })
  },
  toast1: function (e) {
    wx.navigateTo({
      url: '/pages/text1/text1',
    })
  },
})
