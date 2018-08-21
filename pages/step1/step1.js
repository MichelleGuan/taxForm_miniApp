// page/step1/step1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    taxPhoto: [],
    basicInfo: [],
    components: [{
      title: '请您提供以下内容',
      children: [{
        title: '税务发票',
        remark: '',
        url: '/pages/picture/picture?gid=税务发票上传',
      },
      {
        title: '基本信息',
        remark: '',
        url: '/pages/step1_details/step1_details',
      },
      ],
    },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  //Step1所有数据已经传输到了这个页面，提交只校验了是不是为空，还没有进行其他校验
  submit: function (event) {
    var _this = this;
    var isBasic = 1;
    if (_this.data.taxPhoto.length == 0) {
      wx.showModal({
        title: '税务发票',
        content: '请完成税务发票上传，最少上传一张',
        showCancel: false,
        confirmText: '确 定',
        confirmColor: '#000000'
      })
    } else {
      for (var i = 0; i < _this.data.basicInfo.length; i++) {
        if (_this.data.basicInfo[i] == "" || _this.data.basicInfo[i] == undefined) {
          isBasic = 0;
        }
      }

      var test = JSON.stringify({
        "BusinessDetailsLodgementDate": null,
        "InvoicesLodgementDate": null,
        "RefundInstructionsLodgementDate": null,
        "RefNum": "171206-055443-WB",
        "Invoices": [
          "invoice_20171201_074027_766644.jpg",
          "invoice_20171201_075124_855044.jpg",
          "invoice_20171204_050911_274607.jpg",
          "invoice_20171217_232126_980953.jpg",
          "invoice_20171217_232652_708865.jpg",
          "invoice_20171217_232701_978061.jpg",
          "invoice_20171217_232711_561833.jpg",
          "invoice_20171217_232922_900433.jpg"
        ],
        "EntityType": "Company",
        "AreYou": "Director / Owner of the business",
        "LegalName": "Example Company Pty Ltd",
        "MainBusinessLocation": {
          "AddressLine1": "ddd eee fff",
          "AddressLine2": null,
          "Suburb": null,
          "State": null,
          "Country": null,
          "Landline": null,
          "Mobile": null,
          "Email": null
        },
        "PostalAddressSame": true,
        "PostalAddress": {
          "AddressLine1": "ddd eee fff",
          "AddressLine2": null,
          "Suburb": null,
          "State": null,
          "Country": null,
          "Landline": null,
          "Mobile": null,
          "Email": null
        },
        "TripOccurred": false,
        "WhenPlanned": "2018-11-14T00:00:00",
        "WhoIsMakingTheTrip": "Employee/s of the business",
        "Purpose": "To receive payment for services",
        "FirstTrip": true,
        "MainIndustry": "Rental, hiring and real estate services",
        "MainActivity": "hello world! this is a test message!!!",
        "Director1": {
          "Title": null,
          "FamilyName": "Choong",
          "FirstGivenName": "Moses",
          "OtherGivenNames": null,
          "TFN": null,
          "DOB": null,
          "Address": {
            "AddressLine1": null,
            "AddressLine2": null,
            "Suburb": null,
            "State": null,
            "Country": null,
            "Landline": null,
            "Mobile": null,
            "Email": null
          }
        },
        "Director2": {
          "Title": null,
          "FamilyName": "Li",
          "FirstGivenName": "Ziming",
          "OtherGivenNames": null,
          "TFN": null,
          "DOB": null,
          "Address": {
            "AddressLine1": null,
            "AddressLine2": null,
            "Suburb": null,
            "State": null,
            "Country": null,
            "Landline": null,
            "Mobile": null,
            "Email": null
          }
        },
        "PublicOfficer": "Director 2",
        "SoleProprietor": {
          "Title": "Mrs",
          "FamilyName": "fff",
          "FirstGivenName": "ggg",
          "OtherGivenNames": "ggg2",
          "TFN": "123",
          "DOB": "2015-11-28T00:00:00",
          "Address": {
            "AddressLine1": "100 lonsdale st",
            "AddressLine2": null,
            "Suburb": "melbourne",
            "State": null,
            "Country": null,
            "Landline": null,
            "Mobile": null,
            "Email": null
          }
        },
        "BusinessLicencePhotos": [
          "business_licence_20171204_021643_108592.jpg",
          "business_licence_20171204_045157_989649.jpg",
          "business_licence_20171204_050032_656252.jpg",
          "business_licence_20171204_050626_559941.jpg",
          "business_licence_20171204_051812_980193.jpg",
          "business_licence_20171204_051919_857909.jpg"
        ],
        "TaxStatementPhotos": [
          "tax_statement_20171204_043113_149219.jpg",
          "tax_statement_20171204_050619_992862.jpg",
          "tax_statement_20171204_051819_998830.jpg",
          "tax_statement_20171204_051913_612410.jpg"
        ],
        "Director1PassportPhotos": [
          "director1_passport_20171204_045148_186599.jpg",
          "director1_passport_20171204_050336_462301.jpg",
          "director1_passport_20171204_050634_091332.jpg",
          "director1_passport_20171204_051831_875882.jpg",
          "director1_passport_20171204_051904_419560.jpg",
          "director1_passport_20171206_055312_245450.jpg",
          "director1_passport_20171206_055331_031311.jpg",
          "director1_passport_20171206_055337_632018.jpg",
          "director1_passport_20171206_055342_173980.jpg",
          "director1_passport_20171206_055347_315248.jpg",
          "director1_passport_20171206_055351_832213.jpg",
          "director1_passport_20171206_055356_065198.jpg",
          "director1_passport_20171206_055400_982395.jpg",
          "director1_passport_20171206_055405_502747.jpg",
          "director1_passport_20171206_055408_935542.jpg"
        ],
        "Director1DriverLicencePhotos": [
          "director1_driver_licence_20171204_045955_289063.jpg",
          "director1_driver_licence_20171204_050144_122414.jpg",
          "director1_driver_licence_20171204_050152_523316.jpg",
          "director1_driver_licence_20171204_050225_907402.jpg",
          "director1_driver_licence_20171204_050319_241848.jpg",
          "director1_driver_licence_20171204_050325_365343.jpg",
          "director1_driver_licence_20171204_050641_876785.jpg",
          "director1_driver_licence_20171204_051843_408884.jpg"
        ],
        "Director2PassportPhotos": [
          "director2_passport_20171204_045055_557716.jpg",
          "director2_passport_20171204_050002_859232.jpg",
          "director2_passport_20171204_050233_094263.jpg",
          "director2_passport_20171204_050310_295370.jpg",
          "director2_passport_20171204_050649_025522.jpg",
          "director2_passport_20171204_050839_943273.jpg",
          "director2_passport_20171204_050853_387256.jpg",
          "director2_passport_20171204_051850_772941.jpg",
          "director2_passport_20171204_063802_872959.jpg"
        ],
        "Director2DriverLicencePhotos": [
          "director2_driver_licence_20171204_045044_062937.jpg",
          "director2_driver_licence_20171204_050015_841930.jpg",
          "director2_driver_licence_20171204_051856_644218.jpg",
          "director2_driver_licence_20171204_063815_557707.jpg"
        ],
        "Email": "asfd@example.com"
      });



      if (isBasic == 1 && _this.data.basicInfo.length != 0) {
        wx.setStorage({
          key: 'step1Submit',
          data: true,
          contentType: 'application/x-www-form-urlencoded',
          success: function (res) {
            wx.uploadFile({
 //              url: 'https://gstra1.azurewebsites.net/api/claims',
                     url: 'https://wechat.weboostapp.com/addons/gst_refund/redirect_api.php',
                      filePath: _this.data.taxPhoto[0],
                      name: 'files',
              contentType: 'application/x-www-form-urlencoded',
                      formData: {
                       claim: test,
                        step: "Business-Details"
                      },
                      success: function (res) {
                       // console.log("claim",test)
                        console.log(res);
                      },
                      fail: function (err) {
                       console.log(err);
                      }
                    });

 //图片多张上传方法，微信接口仅支持一次一张，目前没找到其他方案。如果可以多次上传，可以使用这个方法，下面也留了后面formData上传的位置，在promise的then。因为上传是异步方法，promise比递归效率高很多，建议使用promise和map方法。

          //   var promise = Promise.all(_this.data.taxPhoto.map((taxPhoto, index) => {
          //     console.log(taxPhoto);
          //     return new Promise(function (resolve, reject) {
          //       wx.uploadFile({
          //         url: 'https://wechat.weboostapp.com/addons/gst_refund/redirect_api.php',
          //         filePath: taxPhoto,
          //         name: 'Invoices',
          //         formData: {
          //           "EntityType": "Company",
          //           "AreYou": "Director / Owner of the business",
          //           "LegalName": "Example Company Pty Ltd"
          //         },
          //         success: function (res) {
          //           resolve(res.data);
          //           console.log(res);
          //         },
          //         fail: function (err) {
          //           reject(new Error('failed to upload file'));
          //         }
          //       });
          //     });
          //   }));
          //   promise.then(function (results) {
          //     console.log(results);
          //   }).catch(function (err) {
          //     console.log(err);
          //   });
          //    wx.request({
          //     url: 'https://wechat.weboostapp.com/addons/gst_refund/redirect_api.php',
          //     method: '"":""',
          //     data: {
          //       cliam: '{1,2,3}',
          //       step: "Business-Details",
          //       files: ''
          //     },
          //     header: {
          //       'content-type': 'formdata' // 默认值
          //     },
          //     success: function (res) {
          //       console.log(res)
          //     }
          //   })
            },
           fail: function (res) { },
           complete: function (res) { },
          })
      } else {
        wx.showModal({
          title: '基本信息',
          content: '请填写基本信息，所有*问题不能为空',
          showCancel: false,
          confirmText: '确 定',
          confirmColor: '#000000'
        })
      }
    }
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
      key: '税务发票上传photo',
      success: function (res) {
        a.setData({
          taxPhoto: res.data
        })
        console.log(a.data.taxPhoto)
      },
    })
    wx.getStorage({
      key: 'step1_detail',
      success: function (res) {
        a.setData({
          basicInfo: res.data
        })
        console.log(a.data.basicInfo)
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
  gotoValid: function () {
    wx.uploadFile({
      url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
      filePath: tempFilePaths[0],
      name: 'file',
      formData: {
        'user': 'test'
      },
      success: function (res) {
        var data = res.data
        //do something
      }
    })
    wx.navigateTo({
      url: '/pages/step1_valid/step1_valid',
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})