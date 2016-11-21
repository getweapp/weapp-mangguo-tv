App(
    {
        onLaunch: function () {
            console.log('芒果TV 初始化成功')
        },
        onShow: function () {
            console.log('页面显示')
          
        },
        onHide: function () {
            console.log('页面隐藏')

        },
        globalData: {
            hasLogin: false
        }
    }
)

var appInstance = getApp()
console.log(appInstance) // I am global data
