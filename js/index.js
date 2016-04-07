/**
 * Created by Administrator on 2016/3/30.
 */
$(function(){
    FastClick.attach(document.body);
    //-----------------排序-----------------
    $('.paixu').tap(function(){
        $('.zhezhao').css({display:'block'});
        $('.px').css({display:'block'});
    });
    $('.pcon').tap(function(){
        $('.pcon').removeClass('tap');
        $(this).addClass('tap');
        $('.zhezhao').css({display:'none'});
        $('.px').css({display:'none'});
    });
    $('.pxx').tap(function(){
        $('.zhezhao').css({display:'none'});
        $('.px').css({display:'none'});
    });

    //-----------------筛选--------------------
    $('.shaixuan').tap(function(){
        $('.zhezhao').css({display:'block'});
        $('.sx').css({display:'block'});
    });

    $('.m1').tap(function(){
        $('.m1').removeClass('tap');
        $(this).addClass('tap');
    });
    $('.m2').tap(function(){
        $('.m2').removeClass('tap');
        $(this).addClass('tap');
    });
    $('.m3').tap(function(){
        $('.m3').removeClass('tap');
        $(this).addClass('tap');
    });

    $('.chongz').tap(function(){
        $('.czmm').removeClass('tap');
        $('.jiek').val('');
    });
    $('.quxiao').tap(function(){
        $('.zhezhao').css({display:'none'});
        $('.sx').css({display:'none'});
    });
    $('.que').tap(function(){
        $('.zhezhao').css({display:'none'});
        $('.sx').css({display:'none'});
    });

    $('.zhezhao').tap(function(e){
        if(e.target==this){
            $('.zhezhao').css({display:'none'});
            $('.px').css({display:'none'});
            $('.sx').css({display:'none'});
        }
    })
//    --------------------------------------------
    $('.newsx').tap(function(){
        $(this).css({background:'#FDFDFD'});
    });


//-----------------------------------

    function goTop(times){
        var style = document.getElementById('scroller').style;
        var transform = style.transform;

        var transformY = transform.slice(15,22);
        var num=Math.abs(parseInt(transformY));
        if(!!!times){
            document.getElementById('scroller').style.transform='translate(0px,0px) scale(1) translateZ(0px)';
            return;
        }
        //移动总距离
        var inter=13.333;//ms,每次移动间隔时间
        var forCount=Math.ceil(times/inter);//移动次数
        var stepL=Math.ceil(num/forCount);//移动步长
        var timeId=null;
        function ani(){
            !!timeId&&clearTimeout(timeId);
            timeId=null;
            if(num<=0||forCount<=0){//移动端判断次数好些，因为移动端的scroll事件触发不频繁，有可能检测不到有<=0的情况
                document.getElementById('scroller').style.transform='translate(0px,0px) scale(1) translateZ(0px)';
                return;
            }
            forCount--;
            num-=stepL;
            document.getElementById('scroller').style.transform='translate(0px,'+-num+'px) scale(1) translateZ(0px)';
            timeId=setTimeout(function(){ani();},inter);
        }
        ani();
    }

    $('#scroller').swipe(function(){
        var style = document.getElementById('scroller').style;
        var transform = style.transform;
        var transformY = transform.slice(15,22);
        var num=parseInt(transformY);
        if(num<-300){
            $('.fanh').show();
        }else{
            $('.fanh').hide();
        }
    });
    $('.fanh').tap(function(){
        goTop(300);
        $('.fanh').hide();
    });
//--------------------加载、刷新---------------------------


})