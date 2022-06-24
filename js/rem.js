//动态计算font-size
(function(){
    function getFontSize() {
        // 获取跟页面dom的根元素
        const Html = document.documentElement;
        // 获取设备的宽度 包括padding  不包括margin border
        let deviceWidth = Html.clientWidth;
        // 设别宽度>640
        if(deviceWidth > 640){
            // 重新赋值
            deviceWidth = 640;
        }
        Html.style.fontSize = deviceWidth / 7.5 +'px';
    }
    getFontSize()
    // 页面宽度或高度改变时调用
    window.addEventListener('resize',getFontSize)
    // 反转移动的时候调用
    window.addEventListener('orientationchange',getFontSize)
})()
