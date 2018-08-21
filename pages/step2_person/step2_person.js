
// pages/step2_person/step2_person.js
import { $wuxSelect } from '../../dist/index'
import { $wuxCalendar } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: [],
    personAdress:'',
    current:'',
    name:'',
    email:'121',
    taxNumber:'',
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
  openCalendar1() {
    $wuxCalendar().open({
      value: this.data.value2,
      onChange: (values, displayValues) => {
        console.log('onChange', values, displayValues)
        this.setData({
          value2: displayValues,
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      current: options.gid,
      personAdress:options.gid+'地址'
    });
    console.log(this.data.current);
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
    var a = this;
    wx.getStorage({
      key: a.data.current + 'person',
      success: function (res) {
        a.setData({
          value1: res.data[0],
          name: res.data[1],
          taxNumber: res.data[2],
          value2: res.data[3],
          email: res.data[4]
        })
        console.log(a.data.name);
      },
    })
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
  name: function (e) {
    this.setData({
      name: e.detail.value,
    })
  },
  email: function (e) {
    this.setData({
      email: e.detail.value,
    })
  },
  taxNumber: function (e) {
    this.setData({
      taxNumber: e.detail.value,
    })
  },
  goBack: function () {
    var a = this;
    wx.setStorage({
      key: a.data.current + 'person',
      data: [a.data.value1, a.data.name, a.data.taxNumber, a.data.value2,a.data.email],
      success: function (res) {
      wx.navigateBack({
      delta: 1,
    })
      }
    })
    
  }
})