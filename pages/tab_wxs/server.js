var server = {
  yemianxuanran:function(){
    wx.navigateTo({
      url:'../View/wxs/yemianxuanran/yemianxuanran'
    })
  },
  shujuchuli: function () {
    wx.navigateTo({
      url: '../View/wxs/shujuchuli/shujuchuli'
    })
  },
  wxsModel:function(){
    wx.navigateTo({
      url:'../View/wxs/wxsModel/wxsModel'
    })
  },
  yunsuanfu:function(){
    wx.navigateTo({
      url:'../View/wxs/yunsuanfu/yunsuanfu'
    })
  }
}
module.exports = server