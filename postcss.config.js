module.exports = {
    plugins: {
        'postcss-px2rem': { // 把px单位换算成rem单位
            remUnit: 50,
        },
        'autoprefixer': {
            overrideBrowserslist: [
                'Android 4.1',
                'iOS 7.1',
                'Chrome > 31',
                'ff > 31',
                'ie >= 8'
                //'last 2 versions', // 所有主流浏览器最近2个版本
            ],
            grid: true
        }
    }
}
