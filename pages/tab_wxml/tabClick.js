var tabClick = {
  getLocation: function () {
    wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude; // 纬度
        const longitude = res.longitude; // 经度
        console.log('latitude:', latitude, 'longitude:', longitude)
      }
    })
  },
  scanCode: function () {
    wx.scanCode({
      success: (res) => {
        console.log('scanCode', res)
        wx.navigateTo({
          url: res.result
        })
      },
      error: (res) => {
        console.log('scanCode_error')
      }
    })
  },


  //事件处理函数
  bindViewTapShujubangding: function () {
    wx.navigateTo({
      url: '../View/wxml/shujubangding/shujubangding'
    })
  },
  bindViewTapLiebiexuanran: function () {
    wx.navigateTo({
      url: '../View/wxml/liebiexuanran/liebiexuanran'
    })
  },
  bindViewTapCondition: function () {
    wx.navigateTo({
      url: '../View/wxml/condition/condition'
    })
  },
  bindViewTemplate: function () {
    wx.navigateTo({
      url: '../View/wxml/template/template'
    })
  },
  bindViewEvent: function () {
    wx.navigateTo({
      url: '../View/Event/Event'
    })
  },
  bindViewImportOrInclude: function () {
    wx.navigateTo({
      url: '../View/wxml/importOrInclude/importOrInclude'
    })
  },

  bindViewWxhtml: function () {
    wx.navigateTo({
      url: '../View/wxml/WXSS/WXSS'
    })
  },

  bindViewWxs: function () {
    wx.navigateTo({
      url: '../View/wxml/WXS/WXS'
    })
  },

  bindViewWxsModule: function () {
    wx.navigateTo({
      url: '../View/wxml/module/module'
    })
  },
}
module.exports = tabClick;