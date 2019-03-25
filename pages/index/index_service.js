var service = {
  getLocation:function(){
      wx.getLocation({
      type: 'wgs84',
      success: (res) => {
        const latitude = res.latitude; // 纬度
        const longitude = res.longitude; // 经度
        console.log('latitude:', latitude, 'longitude:', longitude)
      }
    })
  },
  scanCode:function(){
    wx.scanCode({
      success: (res) => {
        console.log('scanCode',res)
      },
      error:(res) =>{
        console.log('scanCode_error')
      }
    })
  }
}
module.exports = service