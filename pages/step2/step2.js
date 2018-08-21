// page/step2/step2.js
import { $wuxSelect } from '../../dist/index'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value1: '',
    value2: '',
    value3: '',
    value4: '',
    value5: '',
    value6: '',
    value7: '',
    company: '',
    mainActivity: '',
    email: '',
    step2: [],
    adressLine1: '',
    adressLine2: '',
    district: '',
    country: '',
    officePhone: '',
    mobilephone: '',
    adressEmail: '',
    bankName: '',
    swift: '',
    cnaps: '',
    account: '',
    companyLicense: [],
    companyTax: [],
    companyPerson1Photo: [],
    companyPerson2Photo: [],
    companyPerson1name: '',
    companyPerson1taxNumber: '',
    companyPerson1Value2: '',
    companyPerson1email: '',
    companyPerson1Value1: '',
    companyPerson1adressLine1: '',
    companyPerson1adressLine2: '',
    companyPerson1district: '',
    companyPerson1country: '',
    companyPerson1officePhone: '',
    companyPerson1mobilephone: '',
    companyPerson1Adressemail: '',
    companyPerson2Value1: '',
    companyPerson2name: '',
    companyPerson2taxNumber: '',
    companyPerson2Value2: '',
    companyPerson2email: '',
    companyPerson2adressLine1: '',
    companyPerson2adressLine2: '',
    companyPerson2district: '',
    companyPerson2country: '',
    companyPerson2officePhone: '',
    companyPerson2mobilephone: '',
    companyPerson2Adressemail: '',
    personalValue1: '',
    personalname: '',
    personaltaxNumber: '',
    personalValue2: '',
    personalemail: '',
    personaladressLine1: '',
    personaladressLine2: '',
    personaldistrict: '',
    personalcountry: '',
    personalofficePhone: '',
    personalmobilephone: '',
    personalAdressemail: '',
    personalLicense: [],
    personalTax: [],
    personalPhoto: [],
    orgPerson2Value1: '',
    orgPerson2name: '',
    orgPerson2taxNumber: '',
    orgPerson2Value2: '',
    orgPerson2email: '',
    orgPerson2adressLine1: '',
    orgPerson2adressLine2: '',
    orgPerson2district: '',
    orgPerson2country: '',
    orgPerson2officePhone: '',
    orgPerson2mobilephone: '',
    orgPerson2Adressemail: '',
    orgPerson1Value1: '',
    orgPerson1name: '',
    orgPerson1taxNumber: '',
    orgPerson1Value2: '',
    orgPerson1email: '',
    orgPerson1adressLine1: '',
    orgPerson1adressLine2: '',
    orgPerson1district: '',
    orgPerson1country: '',
    orgPerson1officePhone: '',
    orgPerson1mobilephone: '',
    orgPerson1Adressemail: '',
    orgPerson1Photo: [],
    orgPerson2Photo: [],
    orgTax: [],
    orgLicense: []
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onReady: function () {

  },
  onShow: function () {
    var a = this;
    wx.getStorage({
      key: 'step2',
      success: function (res) {
        a.setData({
          step2: res.data,
          value1: res.data[0],
          company: res.data[1],
          value2: res.data[2],
          value3: res.data[3],
          value4: res.data[4],
          mainActivity: res.data[5],
          email: res.data[6],
          value5: res.data[7],
          value6: res.data[8],
          value7: res.data[9],
        })
      },
    });
  },
  onShareAppMessage: function () {

  },

  //所有值已经取到这个页面了,校验方法比较挫，没有优化，只校验了是不是空。
  //由于页面层级过多，模拟器测试有诸多问题，请以手机端为准
  //目前发现使用多次之后链接有可能失效，没有报错
  submit: function () {
    var _this = this;
    var a = this;
    function getStorage(callback) {
      wx.getStorage({
        key: 'step2',
        success: function (res) {
          a.setData({
            step2: res.data,
            value1: res.data[0],
            company: res.data[1],
            value2: res.data[2],
            value3: res.data[3],
            value4: res.data[4],
            mainActivity: res.data[5],
            email: res.data[6],
            value5: res.data[7],
            value6: res.data[8],
            value7: res.data[9],
          })
        },
      });
      wx.getStorage({
        key: '机构的法定地址' + 'adress',
        success: function (res) {
          a.setData({
            adressLine1: res.data[0],
            adressLine2: res.data[1],
            district: res.data[2],
            country: res.data[3],
            officePhone: res.data[4],
            mobilephone: res.data[5],
            adressEmail: res.data[6]
          })
        },
      });
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
      });
      wx.getStorage({
        key: '公司营业执照' + 'photo',
        success: function (res) {
          a.setData({
            companyLicense: res.data
          });
        },
      });
      wx.getStorage({
        key: '个人经营者营业执照' + 'photo',
        success: function (res) {
          a.setData({
            personalLicense: res.data
          });
        },
      });
      wx.getStorage({
        key: '非盈利组织营业执照' + 'photo',
        success: function (res) {
          a.setData({
            orgLicense: res.data
          });
        },
      });
      wx.getStorage({
        key: '公司销售税/增值税交税证明' + 'photo',
        success: function (res) {
          a.setData({
            companyTax: res.data
          });
        },
      });
      wx.getStorage({
        key: '个人经营者销售税/增值税交税证明' + 'photo',
        success: function (res) {
          a.setData({
            personalTax: res.data
          });
        },
      });
      wx.getStorage({
        key: '非盈利组织销售税/增值税交税证明' + 'photo',
        success: function (res) {
          a.setData({
            orgTax: res.data
          });
        },
      });
      wx.getStorage({
        key: '公司负责人1护照，驾照，或身份证' + 'photo',
        success: function (res) {
          a.setData({
            companyPerson1Photo: res.data
          });
        },
      });
      wx.getStorage({
        key: '公司负责人2护照，驾照，或身份证' + 'photo',
        success: function (res) {
          a.setData({
            companyPerson2Photo: res.data
          });
        },
      });
      wx.getStorage({
        key: '个人经营者护照，驾照，或身份证' + 'photo',
        success: function (res) {
          a.setData({
            personalPhoto: res.data
          });
        },
      });
      wx.getStorage({
        key: '非盈利组织办公人员1证件' + 'photo',
        success: function (res) {
          a.setData({
            orgPerson1Photo: res.data
          });
        },
      });
      wx.getStorage({
        key: '非盈利组织办公人员2证件' + 'photo',
        success: function (res) {
          a.setData({
            orgPerson2Photo: res.data
          });
        },
      });
      wx.getStorage({
        key: '公司负责人1' + 'person',
        success: function (res) {
          a.setData({
            companyPerson1Value1: res.data[0],
            companyPerson1name: res.data[1],
            companyPerson1taxNumber: res.data[2],
            companyPerson1Value2: res.data[3],
            companyPerson1email: res.data[4]
          });
        },
      });
      wx.getStorage({
        key: '公司负责人1地址' + 'adress',
        success: function (res) {
          a.setData({
            companyPerson1adressLine1: res.data[0],
            companyPerson1adressLine2: res.data[1],
            companyPerson1district: res.data[2],
            companyPerson1country: res.data[3],
            companyPerson1officePhone: res.data[4],
            companyPerson1mobilephone: res.data[5],
            companyPerson1Adressemail: res.data[6]
          })
        },
      });
      wx.getStorage({
        key: '公司负责人2' + 'person',
        success: function (res) {
          a.setData({
            companyPerson2Value1: res.data[0],
            companyPerson2name: res.data[1],
            companyPerson2taxNumber: res.data[2],
            companyPerson2Value2: res.data[3],
            companyPerson2email: res.data[4]
          });
        },
      });
      wx.getStorage({
        key: '公司负责人2地址' + 'adress',
        success: function (res) {
          a.setData({
            companyPerson2adressLine1: res.data[0],
            companyPerson2adressLine2: res.data[1],
            companyPerson2district: res.data[2],
            companyPerson2country: res.data[3],
            companyPerson2officePhone: res.data[4],
            companyPerson2mobilephone: res.data[5],
            companyPerson2Adressemail: res.data[6]
          })
        },
      });
      wx.getStorage({
        key: '个人经营者' + 'person',
        success: function (res) {
          a.setData({
            personalValue1: res.data[0],
            personalname: res.data[1],
            personaltaxNumber: res.data[2],
            personalValue2: res.data[3],
            personalemail: res.data[4]
          });
        },
      });
      wx.getStorage({
        key: '个人经营者地址' + 'adress',
        success: function (res) {
          a.setData({
            personaladressLine1: res.data[0],
            personaladressLine2: res.data[1],
            personaldistrict: res.data[2],
            personalcountry: res.data[3],
            personalofficePhone: res.data[4],
            personalmobilephone: res.data[5],
            personalAdressemail: res.data[6]
          })
        },
      });
      wx.getStorage({
        key: '非盈利组织办公人员1' + 'person',
        success: function (res) {
          a.setData({
            orgPerson1Value1: res.data[0],
            orgPerson1name: res.data[1],
            orgPerson1taxNumber: res.data[2],
            orgPerson1Value2: res.data[3],
            orgPerson1email: res.data[4]
          });
        },
      });
      wx.getStorage({
        key: '非盈利组织办公人员1地址' + 'adress',
        success: function (res) {
          a.setData({
            orgPerson1adressLine1: res.data[0],
            orgPerson1adressLine2: res.data[1],
            orgPerson1district: res.data[2],
            orgPerson1country: res.data[3],
            orgPerson1officePhone: res.data[4],
            orgPerson1mobilephone: res.data[5],
            orgPerson1Adressemail: res.data[6]
          })
        },
      });
      wx.getStorage({
        key: '非盈利组织办公人员2' + 'person',
        success: function (res) {
          a.setData({
            orgPerson2Value1: res.data[0],
            orgPerson2name: res.data[1],
            orgPerson2taxNumber: res.data[2],
            orgPerson2Value2: res.data[3],
            orgPerson2email: res.data[4]
          });
        },
      });
      wx.getStorage({
        key: '非盈利组织办公人员2地址' + 'adress',
        success: function (res) {
          a.setData({
            orgPerson2adressLine1: res.data[0],
            orgPerson2adressLine2: res.data[1],
            orgPerson2district: res.data[2],
            orgPerson2country: res.data[3],
            orgPerson2officePhone: res.data[4],
            orgPerson2mobilephone: res.data[5],
            orgPerson2Adressemail: res.data[6]
          })
        },
      });
      wx.setStorage({
        key: 'step2',
        data: [_this.data.value1, _this.data.company, _this.data.value2, _this.data.value3, _this.data.value4, _this.data.mainActivity, _this.data.email, _this.data.value5, _this.data.value6, _this.data.value7],
        success: function (res) {
          callback();
        }
      });

    }
    //开始校验
    function valid() {
      if (_this.data.company == '' || _this.data.value1 == '' || _this.data.value2 == '' || _this.data.value3 == '' || _this.data.value4 == '' || _this.data.mainActivity == '' || _this.data.email == '' || _this.data.value1 == '') {
        wx.showModal({
          title: '机构细节未完成',
          content: '请填写机构细节，所有*问题不能为空',
          showCancel: false,
          confirmText: '确 定',
          confirmColor: '#000000'
        })
      } else if (_this.data.adressEmail == '' || _this.data.adressLine1 == '' || _this.data.country == '' || _this.data.district == '' || _this.data.officePhone == '' || _this.data.mobilephone == '') {
        console.log(_this.data.adressLine1);
        wx.showModal({
          title: '机构法定地址未完成',
          content: '请填写机构法定地址，所有*问题不能为空',
          showCancel: false,
          confirmText: '确 定',
          confirmColor: '#000000'
        })
      } else if (_this.data.bankName == '' || _this.data.swift == '' || _this.data.cnaps == '' || _this.data.account == '') {
        wx.showModal({
          title: '银行信息未完成',
          content: '请填写银行信息，所有*问题不能为空',
          showCancel: false,
          confirmText: '确 定',
          confirmColor: '#000000'
        })
      } else if (_this.data.value1 == '公司' && (_this.data.companyLicense.length == 0 || _this.data.companyTax.length == 0 || _this.data.companyPerson1Photo.length == 0 || _this.data.companyPerson1Value1 == '' || _this.data.companyPerson1name == '' || _this.data.companyPerson1taxNumber == '' || _this.data.companyPerson1Value2 == '' || _this.data.companyPerson1email == '' || _this.data.companyPerson1adressLine1 == '' || _this.data.companyPerson1district == '' || _this.data.companyPerson1country == '' || _this.data.companyPerson1officePhone == '' || _this.data.companyPerson1mobilephone == '' || _this.data.value5==''||_this.data.companyPerson1Adressemail == '')) {
        wx.showModal({
          title: '公司信息未完成',
          content: '请填写公司负责人信息以及公司材料图片，所有*问题不能为空',
          showCancel: false,
          confirmText: '确 定',
          confirmColor: '#000000'
        })
      }else if (_this.data.value1 == '个人' && (_this.data.personalLicense.length == 0 || _this.data.personalTax.length == 0 || _this.data.personalPhoto.length == 0 || _this.data.personalValue1 == '' || _this.data.personalname == '' || _this.data.personaltaxNumber == '' || _this.data.personalValue2 == '' || _this.data.personalemail == '' || _this.data.personaladressLine1 == '' || _this.data.personaldistrict == '' || _this.data.personalcountry == '' || _this.data.personalofficePhone == '' || _this.data.personalmobilephone == '' || _this.data.persoanlAdressemail == '')) {
        wx.showModal({
          title: '个人经营者信息不全',
          content: '请填写个人经营者信息以及企业材料图片，所有*问题不能为空',
          showCancel: false,
          confirmText: '确 定',
          confirmColor: '#000000'
        })
        //这个部分第二个人出于未知原因过不去，一行一行测试过，需要在手机端测试确认一次
      }else if (_this.data.value1 == '非盈利组织' && (
         _this.data.orgPerson1Photo.length == 0 || _this.data.orgPerson2Photo.length == 0 || _this.data.orgTax.length == 0 ||     
      //   _this.data.orgPerson2Value1 == '' || _this.data.orgPerson2name == ''  || _this.data.orgLicense.length == 0 ||
      //   _this.data.orgPerson2Value2 == '' || _this.data.orgPerson2email == '' || 
      // _this.data.orgPerson2adressLine1 == '' || _this.data.orgPerson2mobilephone== '' || _this.data.orgPerson2district == '' || 
      // _this.data.orgPerson2country == '' || _this.data.orgPerson2officePhone == '' || _this.data.orgPerson2Adressemail == ''||
         _this.data.orgPerson1Value1 == '' || _this.data.orgPerson1name == '' ||
      _this.data.orgPerson1Value2 == '' || _this.data.orgPerson1email == '' || _this.data.orgPerson1adressLine1 == '' || _this.data.orgPerson1mobilephone== '' || _this.data.orgPerson1district == '' || _this.data.orgPerson1country == '' || _this.data.orgPerson1officePhone == '' || _this.data.orgPerson1Adressemail == ''||_this.data.value6==''||_this.data.value7=='')) {
        wx.showModal({
          title: '非盈利组织信息不全',
          content: '请填写非盈利组织信息以及组织材料图片，所有*问题不能为空',
          showCancel: false,
          confirmText: '确 定',
          confirmColor: '#000000'
        })
      }
      else {
        console.log("success");
      }
      // else{
      //   for(var i=0;i<_this.data.step2.length-3;i++){
      //     if (_this.data.step2[i] =="" || _this.data.step2[i]==undefined){
      //       isStep2 = 0;
      //     }     
      //     }
      //    if(isStep2==1 && _this.data.step2.length != 0){
      //      wx.setStorage({
      //      key: 'step2Submit',
      //      data: true,
      //      success: function(res) {
      //        wx.navigateTo({
      //      url: '/pages/landing/landing',
      //    })
      //      },
      //      fail: function(res) {},
      //      complete: function(res) {},
      //    })
      //    }else{
      //      wx.showModal({
      //        title: '机构基本信息信息',
      //        content: '请填写机构基本信息，所有*问题不能为空',
      //        showCancel: false,
      //        confirmText: '确 定',
      //        confirmColor: '#000000'
      //      })
      //    }
      // }
    }
    getStorage(valid);
  },
  company: function (e) {
    this.setData({
      company: e.detail.value,
    })
  },
  mainActivity: function (e) {
    this.setData({
      mainActivity: e.detail.value,
    })
  },
  email: function (e) {
    this.setData({
      email: e.detail.value,
    })
  },
  onClick1() {
    $wuxSelect('#wux-select1').open({
      value: this.data.value1,
      options: [
        '公司',
        '个人',
        '非盈利组织',
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
        '建立在澳大利亚的新业务',
        '投资目的',
        '购买现有的公司',
        '承包商/分包商',
        '接受服务付款',
        '公司或机构的结构变化',
        '以上情况不适用',
      ],
      onConfirm: (value) => {
        this.setData({
          value2: value
        })
      },
    })
  },
  onClick3() {
    $wuxSelect('#wux-select3').open({
      value: this.data.value3,
      options: [
        '是',
        '否',
      ],
      onConfirm: (value) => {
        this.setData({
          value3: value
        })
      },
    })
  },
  onClick4() {
    $wuxSelect('#wux-select4').open({
      value: this.data.value4,
      options: [
        '农业',
        '林业',
        '钓鱼(包括水产养殖)',
        '矿业',
        '制造业',
        '电力、煤气、水和废物',
        '建筑',
        '批发贸易',
        '零售贸易',
        '住宿和食品服务',
        '运输、邮政和仓储',
        '信息、媒体和电信',
        '金融和保险服务',
        '出租和房地产服务',
        '专业、科学、技术服务',
        '管理和支持服务',
        '公共管理和安全',
        '教育和培训',
        '卫生保健和社会援助',
        '艺术和娱乐服务',
        '其他',
      ],
      onConfirm: (value) => {
        this.setData({
          value4: value
        })
      },
    })
  },
  onClick5() {
    $wuxSelect('#wux-select5').open({
      value: this.data.value5,
      options: [
        '负责人1',
        '负责人2',
      ],
      onConfirm: (value) => {
        this.setData({
          value5: value
        })
      },
    })
  },
  onClick6() {
    $wuxSelect('#wux-select6').open({
      value: this.data.value6,
      options: [
        '首席执行官',
        '主席',
        '财务主管',
        '秘书',
      ],
      onConfirm: (value) => {
        this.setData({
          value6: value
        })
      },
    })
  },
  onClick7() {
    $wuxSelect('#wux-select7').open({
      value: this.data.value7,
      options: [
        '首席执行官',
        '主席',
        '财务主管',
        '秘书',
      ],
      onConfirm: (value) => {
        this.setData({
          value7: value
        })
      },
    })
  },
})