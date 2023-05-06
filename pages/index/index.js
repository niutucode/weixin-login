// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    account: "",
    password: "",
    checked: false,
  },

  confirm() {
    // 弹出提示框
    wx.showModal({
      title: '进行登录/注册',
      content: `account: ${this.data.account} password: ${this.data.password}`,
    });
  },

  nav1() {
    // 弹出确认框
    wx.showToast({
      title: '跳转隐私协议',
    });
  },

  nav2() {
    wx.showToast({
      title: '跳转用户协议',
    });
  },

  accountInput() {
    console.log(this.data.account);
  },

  passwordInput() {},

  onLoad() {
    
  },
})
