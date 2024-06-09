Page({
    data: {
      historyRecord: {}
    },
  
    onLoad: function(options) {
      const id = options.id;
      // 从后端获取具体历史记录
      wx.request({
        url: `https://your-backend-server.com/history/${id}`,
        method: 'GET',
        success: res => {
          this.setData({
            historyRecord: res.data.record
          });
        },
        fail: err => {
          console.error('获取历史记录详情失败：', err);
        }
      });
    },
  
    navigateBack: function() {
      wx.navigateBack();
    }
  });
  