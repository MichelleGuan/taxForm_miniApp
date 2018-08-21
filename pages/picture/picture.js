// pages/step1_invoice/step1_invoice.js
var app= getApp();
// var upng = require('../../upng-js/UPNG.js');
const regeneratorRuntime = require('../../runtime.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tempFilePaths:[],
    base64:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    console.log(options.gid);
    this.setData({
      current: options.gid,
    });
    wx.getStorage({
      key: this.data.current + 'photo',
      success: function (res) {
        _this.setData({
          tempFilePaths: res.data
        });
      },
    })
    console.log(this.data.current)
  },
  chooseimage: function () {
    var _this = this;
    wx.chooseImage({
      count: 9, // 默认9
      sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var path = _this.data.tempFilePaths.concat(res.tempFilePaths)
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片

        _this.setData({
          tempFilePaths: path,
        }); 

        console.log(_this.data.tempFilePaths);
        wx.setStorage({
      key: _this.data.current + 'photo',
      data: _this.data.tempFilePaths,
    });
      }
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },
  
  
  done:function(){
    var _this=this;
    
  wx.setStorage({
    key: _this.data.current + 'photo',
    data: _this.data.tempFilePaths,
  })
  },
  // 删除图片
  deleteImg: function (e) {
    var imgs = this.data.tempFilePaths;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      tempFilePaths: imgs
    });
  },
  
})