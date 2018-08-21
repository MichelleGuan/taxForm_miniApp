// pages/step2_adress/step2——adress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    current:'',
    adressLine1:'',
    adressLine2:'',
    district:'',
    country:'',
    officePhone:'',
    mobilephone:'',
    email:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a=this;
    this.setData({
      current:options.gid,
    });
  console.log(this.data.current);
  wx.getStorage({
    key: a.data.current + 'adress',
    success: function (res) {
      a.setData({
        adressLine1: res.data[0],
        adressLine2: res.data[1],
        district: res.data[2],
        country: res.data[3],
        officePhone: res.data[4],
        mobilephone: res.data[5],
        email: res.data[6]
      })
    },
  })
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
  
  },
  adressLine1:function(e){
    this.setData({
      adressLine1:e.detail.value
    })
  },
  adressLine2:function(e){
    this.setData({
      adressLine2:e.detail.value
    })
  },
  district:function(e){
    this.setData({
      district:e.detail.value
    })
  },
  country:function(e){
    this.setData({
      country:e.detail.value
    })
  },
  officePhone:function(e){
    this.setData({
      officePhone:e.detail.value
    })
  },
  mobilephone:function(e){
    this.setData({
      mobilephone:e.detail.value
    })
  },
  email:function(e){
    this.setData({
      email:e.detail.value
    })
  },
  goBack: function () {
    var a = this;
    wx.setStorage({
      key:  a.data.current + 'adress',
      data: [a.data.adressLine1, a.data.adressLine2, a.data.district, a.data.country, a.data.officePhone, a.data.mobilephone, a.data.email],
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})