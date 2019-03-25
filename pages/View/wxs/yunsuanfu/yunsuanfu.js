// pages/View/wxs/yunsuanfu/yunsuanfu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    // 基本运算符
    var a = 10, b = 20;

    // 加法运算
    console.log(30 === a + b);
    // 减法运算
    console.log(-10 === a - b);
    // 乘法运算
    console.log(200 === a * b);
    // 除法运算
    console.log(0.5 === a / b);
    // 取余运算
    console.log(10 === a % b);
    var a = '.w', b = 'xs';

    // 字符串拼接
    console.log('.wxs' === a + b);

    // 一元运算符
    var a = 10, b = 20;

    // 自增运算
    console.log(10 === a++);
    console.log(12 === ++a);
    // 自减运算
    console.log(12 === a--);
    console.log(10 === --a);
    // 正值运算
    console.log(10 === +a);
    // 负值运算
    console.log(0 - 10 === -a);
    // 否运算
    console.log(-11 === ~a);
    // 取反运算
    console.log(false === !a);
    // delete 运算
    console.log(true === delete a.fake);
    // void 运算
    console.log(undefined === void a);
    // typeof 运算
    console.log("number" === typeof a);

    // 位运算符
    var a = 10, b = 20;

    // 左移运算
    console.log(80 === (a << 3));
    // 无符号右移运算
    console.log(2 === (a >> 2));
    // 带符号右移运算
    console.log(2 === (a >>> 2));
    // 与运算
    console.log(2 === (a & 3));
    // 异或运算
    console.log(9 === (a ^ 3));
    // 或运算
    console.log(11 === (a | 3));

    // 比较运算符
    var a = 10, b = 20;

    // 小于
    console.log(true === (a < b));
    // 大于
    console.log(false === (a > b));
    // 小于等于
    console.log(true === (a <= b));
    // 大于等于
    console.log(false === (a >= b));

    // 等值运算符
    var a = 10, b = 20;

    // 等号
    console.log(false === (a == b));
    // 非等号
    console.log(true === (a != b));
    // 全等号
    console.log(false === (a === b));
    // 非全等号
    console.log(true === (a !== b));

    // 赋值运算符
    var a = 10;

    a = 10; a *= 10;
    console.log(100 === a);
    a = 10; a /= 5;
    console.log(2 === a);
    a = 10; a %= 7;
    console.log(3 === a);
    a = 10; a += 5;
    console.log(15 === a);
    a = 10; a -= 11;
    console.log(-1 === a);
    a = 10; a <<= 10;
    console.log(10240 === a);
    a = 10; a >>= 2;
    console.log(2 === a);
    a = 10; a >>>= 2;
    console.log(2 === a);
    a = 10; a &= 3;
    console.log(2 === a);
    a = 10; a ^= 3;
    console.log(9 === a);
    a = 10; a |= 3;
    console.log(11 === a);

    // 二元逻辑运算符
    var a = 10, b = 20;

    // 逻辑与
    console.log(20 === (a && b));
    // 逻辑或
    console.log(10 === (a || b));

    // 其他运算符
    var a = 10, b = 20;

    //条件运算符
    console.log(20 === (a >= 10 ? a + 10 : b + 10));
    //逗号运算符
    console.log(20 === (a, b));
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