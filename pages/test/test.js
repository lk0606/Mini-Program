// pages/test/test.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    region: ['新疆维吾尔自治区', '乌鲁木齐市', '天山区']
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindRegionChange(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        region: e.detail.value
      })
    }
  }
})
