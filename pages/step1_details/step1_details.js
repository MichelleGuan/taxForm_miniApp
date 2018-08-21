// pages/step1_details/step1_details.js
import { $wuxSelect } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    company: '',
  },
  onClick1() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
        'Mr',
        'Mrs',
        'Ms',
        'Dr',
      ],
      onConfirm: (value) => {
        this.setData({
          value1: value
        })
      },
    })
  },
  onClick2() {
    $wuxSelect('#wux-select2').open({
      value: this.data.value2,
      options: [
        '员工',
        '企业经理/雇主',
      ],
      onConfirm: (value) => {
        this.setData({
          value2: value
        })
      },
    })
  },
  firstname: function (e) {
    this.setData({
      firstname: e.detail.value,
    })
  },
  lastname: function (e) {
    this.setData({
      lastname: e.detail.value,
    })
  },
  phone: function (e) {
    this.setData({
      phone: e.detail.value,
    })
  },
  email: function (e) {
    this.setData({
      email: e.detail.value,
    })
  },
  company: function (e) {
    this.setData({
      company: e.detail.value,
    })
  },
  onClick3() {
    $wuxSelect('#wux-select3').open({
      value: this.data.value3,
      options: [
        'Whatsapp',
        'Wechat',
        'email',
      ],
      onConfirm: (value) => {
        this.setData({
          value3: value
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var a = this;
    wx.getStorage({
      key: 'step1_detail',
      success: function (res) {
        a.setData({
          value1: res.data[0],
          firstname: res.data[1],
          lastname: res.data[2],
          email: res.data[3],
          phone: res.data[4],
          company: res.data[5],
          value2: res.data[6],
          value3: res.data[7]
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
  goBack: function () {
    var a = this;
    wx.setStorage({
      key: 'step1_detail',
      data: [a.data.value1, a.data.firstname, a.data.lastname, a.data.email, a.data.phone, a.data.company, a.data.value2, a.data.value3],
    })
    wx.navigateBack({
      delta: 1,
    })
  }
})