/**
 * Created by Administrator on 2016/4/6.
 */
$(function(){
    var myScroll,
        pullUpEl, pullUpOffset;
    /**
     * 滚动翻页 （自定义实现此方法）
     * myScroll.refresh();		// 数据加载完成后，调用界面更新方法
     */
    var index;
    function pullUpAction () {
        var div=$('.pinx').parent();
        for(var i=0;i<div.length;i++){
            if(div[i].style.display!='none'){
                index=i;
            }
        }
        var tdiv=$('.xpin').eq(index).find('.pinx').last();
        setTimeout(function () {	// <-- Simulate network congestion, remove setTimeout from production!

            for (var i=0; i<3; i++) {
                $('<div></div>').addClass('pinx').html('<div class="pinxf"> <span>用户1</span> <span>2015-02-21</span> <div class="clear"></div> </div> <div class="pinxc"> <p>好用好用真好用！非常好用！！借钱非常快。。快如闪电，电闪雷鸣，来啊里看到我及对外价位的骄傲你惨案错误安检单位下午基地啊我觉得你方法的能完成，今晚你发一服务部擦边舞蹈。阿迪王年底啊。 </p> </div> <div class="pinxz"> <div class="conp pinco"> <img src="./images/lx1.png" alt=""> <span>4.45分</span> </div> <div class="tao"> <i class="iconfont" >&#xe6ab;</i> <i class="iconfont" style="display: none;color:rgb(251, 224, 43)">&#xe625;</i> &nbsp;有用（520） </div> <div class="clear"></div> </div>').insertAfter(tdiv);
            }

            myScroll.refresh();		// 数据加载完成后，调用界面更新方法 Remember to refresh when contents are loaded (ie: on ajax completion)
        }, 1000);	// <-- Simulate network congestion, remove setTimeout from production!
    }

    /**
     * 初始化iScroll控件
     */
    function loaded() {
        var div=$('.pinx').parent();
        for(var i=0;i<div.length;i++){
            if(div[i].style.display!='none'){
                index1=i;
            }
        }
        pullUpEl = document.getElementsByClassName('pullUp')[index1];
        pullUpOffset = pullUpEl.offsetHeight;

        myScroll = new iScroll('wrapper', {
            scrollbarClass: 'myScrollbar', /* 重要样式 */
            useTransition: false, /* 此属性不知用意，本人从true改为false */
            onRefresh: function () {
                if (pullUpEl.className.match('loading')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                }
            },
            onScrollMove: function () {
                if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'flip';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
                    this.maxScrollY = this.maxScrollY;
                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                    this.maxScrollY = pullUpOffset;
                }
            },
            onScrollEnd: function () {
                if (pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                    pullUpAction();	// Execute custom function (ajax call?)
                }
            }
        });

        setTimeout(function () { document.getElementById('wrapper').style.left = '0'; }, 800);
    }

//初始化绑定iScroll控件
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
    document.addEventListener('DOMContentLoaded', loaded(), false);

});
