// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 选择地区
    region: [
      {
        "id": 362, "title": "请选择地区", "isLeaf": false, "children": [{ "id": 3421, "title": "请选择", "isLeaf": true }]
      },
      { "id": 363, "title": "乌鲁木齐市", "isLeaf": false, "children": [{ "id": 3422, "title": "天山区", "isLeaf": true }, { "id": 3423, "title": "沙依巴克区", "isLeaf": true }, { "id": 3424, "title": "新市区", "isLeaf": true }, { "id": 3425, "title": "水磨沟区", "isLeaf": true }, { "id": 3426, "title": "头屯河区", "isLeaf": true }, { "id": 3427, "title": "达坂城区", "isLeaf": true }, { "id": 3428, "title": "米东区", "isLeaf": true }, { "id": 3429, "title": "乌鲁木齐县", "isLeaf": true }] },
      {
        "id": 364, "title": "克拉玛依市", "isLeaf": false, "children": [{ "id": 3430, "title": "市辖区", "isLeaf": true }, { "id": 3431, "title": "独山子区", "isLeaf": true }, { "id": 3432, "title": "克拉玛依区", "isLeaf": true }, { "id": 3433, "title": "白碱滩区", "isLeaf": true }, { "id": 3434, "title": "乌尔禾区", "isLeaf": true }]
      },
      {
        "id": 365, "title": "吐鲁番地区", "isLeaf": false, "children": [{ "id": 3435, "title": "吐鲁番市", "isLeaf": true }, { "id": 3436, "title": "鄯善县", "isLeaf": true }, { "id": 3437, "title": "托克逊县", "isLeaf": true }, { "id": 5001, "title": "高昌", "isLeaf": true }]
      },
      {
        "id": 366, "title": "哈密地区", "isLeaf": false, "children": [{ "id": 3438, "title": "哈密市(伊州区)", "isLeaf": true }, { "id": 3439, "title": "巴里坤哈萨克自治县", "isLeaf": true }, { "id": 3440, "title": "伊吾县", "isLeaf": true }]
      },
      {
        "id": 367, "title": "昌吉回族自治州", "isLeaf": false, "children": [{ "id": 3441, "title": "昌吉市", "isLeaf": true }, { "id": 3442, "title": "阜康市", "isLeaf": true }, { "id": 3444, "title": "呼图壁县", "isLeaf": true }, { "id": 3445, "title": "玛纳斯县", "isLeaf": true }, { "id": 3446, "title": "奇台县", "isLeaf": true }, { "id": 3447, "title": "吉木萨尔县", "isLeaf": true }, { "id": 3448, "title": "木垒哈萨克自治县", "isLeaf": true }, { "id": 5072, "title": "芳草湖", "isLeaf": true }]
      },
      {
        "id": 368, "title": "博尔塔拉蒙古自治州", "isLeaf": false, "children": [{ "id": 3449, "title": "博乐市", "isLeaf": true }, { "id": 3450, "title": "精河县", "isLeaf": true }, { "id": 3451, "title": "温泉县", "isLeaf": true }, { "id": 5002, "title": "阿拉山口", "isLeaf": true }]
      },
      {
        "id": 369, "title": "巴音郭楞蒙古自治州", "isLeaf": false, "children": [{ "id": 3452, "title": "库尔勒市", "isLeaf": true }, { "id": 3453, "title": "轮台县", "isLeaf": true }, { "id": 3454, "title": "尉犁县", "isLeaf": true }, { "id": 3455, "title": "若羌县", "isLeaf": true }, { "id": 3456, "title": "且末县", "isLeaf": true }, { "id": 3457, "title": "焉耆回族自治县", "isLeaf": true }, { "id": 3458, "title": "和静县", "isLeaf": true }, { "id": 3459, "title": "和硕县", "isLeaf": true }, { "id": 3460, "title": "博湖县", "isLeaf": true }]
      },
      {
        "id": 370, "title": "阿克苏地区", "isLeaf": false, "children": [{ "id": 3461, "title": "阿克苏市", "isLeaf": true }, { "id": 3462, "title": "温宿县", "isLeaf": true }, { "id": 3463, "title": "库车县", "isLeaf": true }, { "id": 3464, "title": "沙雅县", "isLeaf": true }, { "id": 3465, "title": "新和县", "isLeaf": true }, { "id": 3466, "title": "拜城县", "isLeaf": true }, { "id": 3467, "title": "乌什县", "isLeaf": true }, { "id": 3468, "title": "阿瓦提县", "isLeaf": true }, { "id": 3469, "title": "柯坪县", "isLeaf": true }]
      },
      {
        "id": 371, "title": "克孜勒苏柯尔克孜自治州", "isLeaf": false, "children": [{ "id": 3470, "title": "阿图什市", "isLeaf": true }, { "id": 3471, "title": "阿克陶县", "isLeaf": true }, { "id": 3472, "title": "阿合奇县", "isLeaf": true }, { "id": 3473, "title": "乌恰县", "isLeaf": true }]
      },
      {
        "id": 372, "title": "喀什地区", "isLeaf": false, "children": [{ "id": 3474, "title": "喀什市", "isLeaf": true }, { "id": 3475, "title": "疏附县", "isLeaf": true }, { "id": 3476, "title": "疏勒县", "isLeaf": true }, { "id": 3477, "title": "英吉沙县", "isLeaf": true }, { "id": 3478, "title": "泽普县", "isLeaf": true }, { "id": 3479, "title": "莎车县", "isLeaf": true }, { "id": 3480, "title": "叶城县", "isLeaf": true }, { "id": 3481, "title": "麦盖提县", "isLeaf": true }, { "id": 3482, "title": "岳普湖县", "isLeaf": true }, { "id": 3483, "title": "伽师县", "isLeaf": true }, { "id": 3484, "title": "巴楚县" }, { "id": 3485, "title": "塔什库尔干塔吉克自治县", "isLeaf": true }]
      },
      {
        "id": 373, "title": "和田地区", "isLeaf": false, "children": [{ "id": 3486, "title": "和田市", "isLeaf": true }, { "id": 3487, "title": "和田县", "isLeaf": true }, { "id": 3488, "title": "墨玉县", "isLeaf": true }, { "id": 3489, "title": "皮山县", "isLeaf": true }, { "id": 3490, "title": "洛浦县", "isLeaf": true }, { "id": 3491, "title": "策勒县", "isLeaf": true }, { "id": 3492, "title": "于田县", "isLeaf": true }, { "id": 3493, "title": "民丰县", "isLeaf": true }]
      },
      {
        "id": 374, "title": "伊犁哈萨克自治州", "isLeaf": false, "children": [{ "id": 3494, "title": "伊宁市", "isLeaf": true }, { "id": 3495, "title": "奎屯市", "isLeaf": true }, { "id": 3496, "title": "伊宁县", "isLeaf": true }, { "id": 3497, "title": "察布查尔锡伯自治县", "isLeaf": true }, { "id": 3498, "title": "霍城县", "isLeaf": true }, { "id": 3499, "title": "巩留县", "isLeaf": true }, { "id": 3500, "title": "新源县", "isLeaf": true }, { "id": 3501, "title": "昭苏县", "isLeaf": true }, { "id": 3502, "title": "特克斯县", "isLeaf": true }, { "id": 3503, "title": "尼勒克县", "isLeaf": true }, { "id": 5071, "title": "霍尔果斯市", "isLeaf": true }]
      },
      {
        "id": 375, "title": "塔城地区", "isLeaf": false, "children": [{ "id": 3504, "title": "塔城市", "isLeaf": true }, { "id": 3505, "title": "乌苏市", "isLeaf": true }, { "id": 3506, "title": "额敏县", "isLeaf": true }, { "id": 3507, "title": "沙湾县", "isLeaf": true }, { "id": 3508, "title": "托里县", "isLeaf": true }, { "id": 3509, "title": "裕民县", "isLeaf": true }, { "id": 3510, "title": "和布克赛尔蒙古自治县", "isLeaf": true }]
      },
      {
        "id": 376, "title": "阿勒泰地区", "isLeaf": false, "children": [{ "id": 3511, "title": "阿勒泰市", "isLeaf": true }, { "id": 3512, "title": "布尔津县", "isLeaf": true }, { "id": 3513, "title": "富蕴县", "isLeaf": true }, { "id": 3514, "title": "福海县", "isLeaf": true }, { "id": 3515, "title": "哈巴河县", "isLeaf": true }, { "id": 3516, "title": "青河县", "isLeaf": true }, { "id": 3517, "title": "吉木乃县", "isLeaf": true }]
      },
      { "id": 5003, "title": "可克达拉", "isLeaf": true },
      {
        "id": 5006, "title": "石河子", "isLeaf": false, "children": [{ "id": 5007, "title": "新城街道", "isLeaf": true }, { "id": 5008, "title": "向阳街道", "isLeaf": true }, { "id": 5009, "title": "红山街道", "isLeaf": true }, { "id": 5010, "title": "老街街道", "isLeaf": true }, { "id": 5011, "title": "东城街道", "isLeaf": true }, { "id": 5012, "title": "北泉镇", "isLeaf": true }, { "id": 5013, "title": "石河子乡", "isLeaf": true }, { "id": 5014, "title": "兵团一五二团", "isLeaf": true }]
      },
      {
        "id": 5015, "title": "阿拉尔市", "isLeaf": false, "children": [{ "id": 5016, "title": "金银川路街道", "isLeaf": true }, { "id": 5017, "title": "幸福路街道", "isLeaf": true }, { "id": 5018, "title": "青松路街道", "isLeaf": true }, { "id": 5019, "title": "南口街道", "isLeaf": true }, { "id": 5020, "title": "托喀依乡", "isLeaf": true }, { "id": 5021, "title": "工业园区", "isLeaf": true }, { "id": 5022, "title": "兵团七团", "isLeaf": true }, { "id": 5023, "title": "兵团八团", "isLeaf": true }, { "id": 5024, "title": "兵团十团", "isLeaf": true }, { "id": 5025, "title": "兵团十一团", "isLeaf": true }, { "id": 5026, "title": "兵团十二团" }, { "id": 5027, "title": "兵团十四团", "isLeaf": true }, { "id": 5028, "title": "兵团十六团", "isLeaf": true }, { "id": 5029, "title": "兵团第一师水利管理处", "isLeaf": true }, { "id": 5030, "title": "阿拉尔农场", "isLeaf": true }, { "id": 5031, "title": "兵团第一师幸福农场", "isLeaf": true }, { "id": 5032, "title": "中心监狱", "isLeaf": true }]
      },
      {
        "id": 5033, "title": "图木舒克市", "isLeaf": false, "children": [{ "id": 5034, "title": "齐干却勒街道", "isLeaf": true }, { "id": 5035, "title": "前海街道", "isLeaf": true }, { "id": 5036, "title": "永安坝街道", "isLeaf": true }, { "id": 5037, "title": "兵团四十四团", "isLeaf": true }, { "id": 5038, "title": "兵团四十九团", "isLeaf": true }, { "id": 5039, "title": "兵团乌市团", "isLeaf": true }, { "id": 5040, "title": "兵团五十一团", "isLeaf": true }, { "id": 5041, "title": "兵团五十三团", "isLeaf": true }, { "id": 5042, "title": "兵团图木舒克市喀拉拜勒镇", "isLeaf": true }, { "id": 5043, "title": "兵团图木舒克市永安坝", "isLeaf": true }]
      },
      {
        "id": 5044, "title": "五家渠", "isLeaf": false, "children": [{ "id": 5045, "title": "军垦路街道", "isLeaf": true }, { "id": 5046, "title": "青湖路街道", "isLeaf": true }, { "id": 5047, "title": "人民路街道", "isLeaf": true }, { "id": 5048, "title": "兵团一零一团", "isLeaf": true }, { "id": 5049, "title": "兵团一零二团", "isLeaf": true }, { "id": 5050, "title": "兵团一零三团", "isLeaf": true }]
      },
      {
        "id": 5051, "title": "北屯", "isLeaf": false, "children": [{ "id": 5052, "title": "北屯镇", "isLeaf": true }, { "id": 5053, "title": "兵团一八三团", "isLeaf": true }, { "id": 5054, "title": "兵团一八七团", "isLeaf": true }, { "id": 5055, "title": "兵团一八八团", "isLeaf": true }]
      },
      {
        "id": 5056, "title": "铁门关", "isLeaf": false, "children": [{ "id": 5057, "title": "农二师三十团", "isLeaf": true }, { "id": 5058, "title": "兵团二十九团", "isLeaf": true }]
      },
      {
        "id": 5059, "title": "昆玉", "isLeaf": false, "children": [{ "id": 5060, "title": "兵团二二四团", "isLeaf": true }, { "id": 5061, "title": "兵团皮山农场", "isLeaf": true }, { "id": 5062, "title": "喀拉喀什镇", "isLeaf": true }, { "id": 5063, "title": "乌尔其乡", "isLeaf": true }, { "id": 5064, "title": "普恰克其乡", "isLeaf": true }, { "id": 5065, "title": "阔依其乡", "isLeaf": true }, { "id": 5066, "title": "乌鲁克萨依乡", "isLeaf": true }, { "id": 5067, "title": "奴尔乡", "isLeaf": true }, { "id": 5068, "title": "博斯坦乡", "isLeaf": true }, { "id": 5069, "title": "兵团四十七团", "isLeaf": true }, { "id": 5070, "title": "兵团一牧场", "isLeaf": true }]
      }
    ],
    // 地区下标
    regionId: 0,
    regionChildrenId: 0,
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
      region: 
      [
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
   * 组件的方法列表
   */
  bindRegionChange(e) {
    console.log('picker发送市选择改变，携带值为', e.detail.value)
    this.setData({
      regionId: e.detail.value
    })
  },
  bindRegionChildrenChange(e) {
    console.log('picker发送区选择改变，携带值为', e.detail.value)
    this.setData({
      regionChildrenId: e.detail.value
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