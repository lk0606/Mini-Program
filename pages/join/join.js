// pages/join/join.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */

  /**
   * 初始数据
   */
  data: {
    tips: [
      '姓名不能为空', 
      '手机号码不正确或手机号为空',
      '地区不能为空',
      '小区名称不能为空',
      ],
    regInfo: [
      {
        img: '../../img/join_1.png',
        text: '请输入您的姓名'
      },
      {
        img: '../../img/join_2.png',
        text: '请输入您的手机号'
      },
      {
        img: '../../img/join_3.png',
        text: '请输入您的地区'
      },
      {
        img: '../../img/join_4.png',
        text: '请输入您的小区名称'
      }
    ]
  },

  /**
   * 方法列表
   */
  // 全局表单验证
  // formValidation() {
  //   app.regValidation();
  // },
  // 获取input值
  inputVal(e) {
    // let index = e.currentTarget.dataset['index']
    // this.setData({ val: e.detail.value })
    // console.log()
    // console.log(this.data.val + '这是键盘输入')
  },
  // 失去焦点验证
  blurValidation(e) {
    let index = e.currentTarget.dataset['index']
    console.log(e)
    if ( index === 0 && e.detail.value === '') {
      // console.log(inputVal)
      wx.showModal({
        title: '提示',
        content: this.data.tips[index]
      })
    }
    else if ( index === 1 && !app.regValidation(e.detail.value, "phone")) {
      wx.showModal({
        title: '提示',
        content: this.data.tips[index],
        // success(res) {
        //   if (res.confirm) {
        //     console.log('用户点击确定')
        //   } else if (res.cancel) {
        //     console.log('用户点击取消')
        //   }
        // }
      })
    }
    else if ( index === 2 && e.detail.value === '') {
      wx.showModal({
        title: '提示',
        content: this.data.tips[index]
      })
    }
    else if ( index === 3 && e.detail.value === '') {
      wx.showModal({
        title: '提示',
        content: this.data.tips[index]
      })
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
