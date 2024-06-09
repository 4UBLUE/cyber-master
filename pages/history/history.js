Page({
    data: {
      historyRecords: [],
      displayedRecords: [],
      currentPage: 1,
      pageSize: 10,
      totalPages: 1
    },
  
    navigateBack: function() {
      wx.navigateBack();
    },
  
    onLoad: function() {
      this.fetchData();
    },
  
    fetchData: function() {
      const fetchedData = [
        { id: 1, date: '2023-06-01', summary: '对话记录 1' },
        { id: 2, date: '2023-06-02', summary: '对话记录 2' },
        { id: 3, date: '2023-06-03', summary: '对话记录 3' },
        { id: 4, date: '2023-06-04', summary: '对话记录 4' },
        { id: 5, date: '2023-06-05', summary: '对话记录 5' },
        { id: 6, date: '2023-06-06', summary: '对话记录 6' },
        { id: 7, date: '2023-06-07', summary: '对话记录 7' },
        { id: 8, date: '2023-06-08', summary: '对话记录 8' },
        { id: 9, date: '2023-06-09', summary: '对话记录 9' },
        { id: 10, date: '2023-06-10', summary: '对话记录 10' }
      ];
  
      const totalPages = Math.ceil(fetchedData.length / this.data.pageSize);
  
      this.setData({
        historyRecords: fetchedData,
        totalPages: totalPages
      });
  
      this.updateDisplayedRecords();
    },
  
    updateDisplayedRecords: function() {
      const start = (this.data.currentPage - 1) * this.data.pageSize;
      const end = start + this.data.pageSize;
      const displayedRecords = this.data.historyRecords.slice(start, end);
  
      this.setData({
        displayedRecords: displayedRecords
      });
    },
  
    viewDetail: function(e) {
      const id = e.currentTarget.dataset.id;
      wx.navigateTo({
        url: `/pages/historyDetail/historyDetail?id=${id}`
      });
    },
  
    handleDelete: function(e) {
      const id = e.currentTarget.dataset.id;
      const updatedRecords = this.data.historyRecords.filter(record => record.id !== id);
      const totalPages = Math.ceil(updatedRecords.length / this.data.pageSize);
  
      this.setData({
        historyRecords: updatedRecords,
        totalPages: totalPages,
        currentPage: Math.min(this.data.currentPage, totalPages) // 确保当前页码在有效范围内
      });
  
      this.updateDisplayedRecords();
  
      wx.showToast({
        title: '删除成功',
        icon: 'success'
      });
    },
  
    prevPage: function() {
      if (this.data.currentPage > 1) {
        this.setData({ currentPage: this.data.currentPage - 1 }, this.updateDisplayedRecords);
      }
    },
  
    nextPage: function() {
      if (this.data.currentPage < this.data.totalPages) {
        this.setData({ currentPage: this.data.currentPage + 1 }, this.updateDisplayedRecords);
      }
    }
  });
  