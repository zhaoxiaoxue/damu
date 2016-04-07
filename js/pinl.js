/**
 * Created by Administrator on 2016/3/29.
 */
$(function(){
    FastClick.attach(document.body);
    var reg=/^([1-9]{1,6})$/;
    //-----------评分-----------------
    var index1,index2='0',index3,index4;
    $('.xip img').tap(function(){
        index1=$(this).index();
        $('.xip img').attr({src:"./images/x3.png"});
        for(var i=0;i<=index1;i++){
            $('.xip img').eq(i).attr({src:"./images/x1.png"});
        }
        $('.fen').html(index1+1);
    });
    //----------------借款成功、失败、其他--------------
    $('.pin').children('.pins').each(function(i){
        $(this).data('index',i);
    });
    $('.pin').children('.pins').tap(function(){
        index2=$(this).data('index');
        if(index2==0){
            $('.pincg').css({display:'block'});
        }else{
            $('.pincg').css({display:'none'});
        }
        $('.quan img').css({display:'none'});
        $('.quan img').eq(index2).css({display:'inline-block'});
    })
    //-------------------借款成功的选填三项--------------------
    $('.fimg.fs img').tap(function(){
        index3=$(this).index();
        $('.fimg.fs img').attr({src:"./images/x3.png"});
        for(var i=0;i<=index3;i++){
            $('.fimg.fs img').eq(i).attr({src:"./images/x1.png"});
        }
    });
    $('.fimg.se img').tap(function(){
        index4=$(this).index();
        $('.fimg.se img').attr({src:"./images/x3.png"});
        for(var i=0;i<=index4;i++){
            $('.fimg.se img').eq(i).attr({src:"./images/x1.png"});
        }
    });

    //--------------------------点击提交--------------------------------
    $('.tijiao').tap(function(){
        if(index1==undefined){
            $('.zhezhao').css({display:'block'});
            $('.tan span').first().css({display:'block'});
        }else if(index2=='0'){
            if($('.tet').val()==''){
                $('.tet').val('这个平台不错，利率很低，而且我很快就获得了借款！');
            }
            var num=parseInt($('.jin').val());
            if($('.jin').val()==''){
                $('.zhezhao').css({display:'block'});
                $('.tan span').eq(1).css({display:'block'});
            }else if(!reg.test(num)){
                $('.zhezhao').css({display:'block'});
                $('.tan span').eq(2).css({display:'block'});
            }else if(index3==undefined){
                $('.zhezhao').css({display:'block'});
                $('.tan span').first().css({display:'block'});
            }else if(index4==undefined){
                $('.zhezhao').css({display:'block'});
                $('.tan span').first().css({display:'block'});
            }else{
                $('.zhezhao').css({display:'block'});
                $('.tan span').last().css({display:'block'});

                setTimeout(function(){
                    $('.zhezhao').css({display:'none'});
                    $('.tan span').css({display:'none'});

                    location.href='./xianq.html';
                },1000);
            }

        }else if(index3=='1'||index4=='2'){
            if($('.tet').val()==''){
                $('.tet').val('借款平台提示我的信用分不够，让我多发帖，积累信用分！');
            }
        }else{
            $('.zhezhao').css({display:'block'});
            $('.tan span').last().css({display:'block'});

            setTimeout(function(){
                $('.zhezhao').css({display:'none'});
                $('.tan span').css({display:'none'});

                location.href='./xianq.html';
            },1000);
        }
        var time=setTimeout(function(){
            $('.zhezhao').css({display:'none'});
            $('.tan span').css({display:'none'});
        },1000)
    })

    $('.zhezhao').tap(function(e){
        if(e.target==this){
            $('.zhezhao').css({display:'none'});
            $('.tan span').css({display:'none'});
        }
    })

})