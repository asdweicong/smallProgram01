// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  //事件处理函数
  bindViewTapShujubangding: function () {
    wx.navigateTo({
      url: '../View/shujubangding/shujubangding'
    })
  },
  bindViewTapLiebiexuanran: function () {
    wx.navigateTo({
      url: '../View/liebiexuanran/liebiexuanran'
    })
  },
  bindViewTapCondition: function () {
    wx.navigateTo({
      url: '../View/condition/condition'
    })
  },
  bindViewTemplate: function () {
    wx.navigateTo({
      url: '../View/template/template'
    })
  },
  bindViewEvent: function () {
    wx.navigateTo({
      url: '../View/Event/Event'
    })
  },
  bindViewImportOrInclude: function () {
    wx.navigateTo({
      url: '../View/importOrInclude/importOrInclude'
    })
  },

  bindViewWxhtml: function () {
    wx.navigateTo({
      url: '../View/WXSS/WXSS'
    })
  },

  bindViewWxs: function () {
    wx.navigateTo({
      url: '../View/WXS/WXS'
    })
  },

  bindViewWxsModule: function () {
    wx.navigateTo({
      url: '../View/module/module'
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})