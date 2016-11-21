Page({
    data: {
        userInfo: {
            nickName: 'GetWeApp',
            avatarUrl: 'http://ogth2odq7.qnssl.com/G-%20%281%29.png'
        }
    },

    getUserInfo () {
        let that = this;
        wx.getUserInfo({
            success (res) {
                console.log(res)
                that.setData({ userInfo: res.userInfo })
            }
        })
    },

    onLoad (params) {
        wx.login({
            success (res) {
                if (res.code) {
                    console.log('登录成功！' + res.code)
                } else {
                    console.error('获取用户登录态失败！' + res.errMsg)
                }
            }
        })
    }

})
