// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkbox: ['../../img/check_1.png', '../../img/checked_1.png'],
    regInfo: {
      normal: [
        {
          text: '真实姓名',
          placeholder: '请输入真实姓名'
        },
        {
          text: '微信群名称',
          placeholder: '请输入微信群名称'
        },
        {
          text: '身份证号',
          placeholder: '请输入身份证号'
        },
        {
          text: '联系电话',
          placeholder: '请输入手机号'
        }
      ],
      region: [
        {
          text: '所在地区',
          placeholder: '请选择地区',
          icon: '../../img/rightarrow.png'
        },
        {
          text: '',
          placeholder: '请选择',
          icon: '../../img/rightarrow.png'
        }
      ],
      special: [
        {
          text: '详细地址',
          placeholder: '请输入详细地址'
        },
        {
          text: '授权小区',
          placeholder: '请选择小区',
          icon: '../../img/rightarrow.png'
        }
      ]
    }
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