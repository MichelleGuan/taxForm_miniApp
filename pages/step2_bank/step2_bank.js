// pages/step2_bank/step2_bank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bankName:'',
    swift:'',
    cnaps:'',
    account:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = this;
    wx.getStorage({
      key: 'step2_bank',
      success: function (res) {
        a.setData({
          bankName: res.data[0],
          swift: res.data[1],
          cnaps: res.data[2],
          account: res.data[3]
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
  bankName: function (e) {
    this.setData({
      bankName: e.detail.value,
    })
  },
  swift: function (e) {
    this.setData({
      swift: e.detail.value,
    })
  },
  cnaps: function (e) {
    this.setData({
      cnaps: e.detail.value,
    })
  },
  account: function (e) {
    this.setData({
      account: e.detail.value,
    })
  },
  goBack: function () {
    var a = this;
    wx.setStorage({
      key: 'step2_bank',
      data: [a.data.bankName, a.data.swift, a.data.cnaps, a.data.account],
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})