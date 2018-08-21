// page/landing/landing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    step1:'',
    components: [{
      title: 'Step1-税务发票',
      children: [{
        title: '我的税务发票',
        remark: '',
        url: '/pages/step1/step1',
      },
      ],
    },
    {
      title: 'Step2-机构细节',
      children: [
        {
          title: '我的机构细节',
          remark: '请先完成step1',
          url: '',
        },
      ]
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /*
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var a = this
    wx.getStorage({
      key: 'step1Submit',
      success: function (res) {
        a.setData({
          step1: res.data
        })
        console.log(a.data.step1)
        if (a.data.step1 == true) {
          a.setData({
            'components[1].children[0].url': '/pages/step2/step2',
            'components[1].children[0].remark': '',
            'components[0].children[0].remark': '已经提交',
            'components[0].children[0].url': '',
          })
        } else {
          a.setData({
            'components[1].children[0].url': '',
            'components[0].children[0].url': '/pages/step1/step1',
            'components[1].children[0].remark': '请先完成step1',
          })
        }
        console.log(a.data.components[1].children[0].url)
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
  clearTax: function(){
  wx.clearStorage(
     wx.navigateTo({
       url: '/pages/landing/landing',
       success: function(res) {},
       fail: function(res) {},
       complete: function(res) {},
     })
  );
  },
  clearClaim:function(){
    wx.clearStorage(
      wx.navigateTo({
        url: '/pages/index/index',
        success: function (res) { },
        fail: function (res) { },
        complete: function (res) { },
      })
    );
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
  faq:function(){
   wx.navigateTo({
     url: '/pages/faq/faq',
   })
  }
})