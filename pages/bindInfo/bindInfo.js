Page({
    data: {
      userInfo: null
    },
  
    navigateBack: function() {
      wx.navigateBack();
    },
  
    bindUserInfo: function(e) {
      const userInfo = e.detail.userInfo;
      if (userInfo) {
        this.setData({ userInfo: userInfo });
        wx.showToast({
          title: '绑定成功',
          icon: 'success'
        });
      } else {
        wx.showToast({
          title: '绑定失败',
          icon: 'none'
        });
      }
    }
  });
  