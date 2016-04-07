/**
 * Created by Administrator on 2016/3/30.
 */
$(function(){

    FastClick.attach(document.body);
    $('.zwei').tap(function(){
        $('.zwei').css({display:'inline-block'});
        $(this).css({display:'none'})
    });
    $('.xianq').tap(function(){
        $('.xianq').addClass('tap');
        $('.pin').removeClass('tap');

        $('.xianqm').css({display:'block'});
        $('.pmain').css({display:'none'});
    });

    $('.pin').tap(function(){
        $('.pin').addClass('tap');
        $('.xianq').removeClass('tap');

        $('.pmain').css({display:'block'});
        $('.xianqm').css({display:'none'});
    });
    var indexx;
    $('.tan').tap(function(){
        $('.tan').removeClass('tap');
        $(this).addClass('tap');

        indexx=$(this).index();
        $('.xpin').css({display:'none'});
        $('.xpin').eq(indexx).css({display:'block'});
    });
    //-------------------点击我要借款-----------------
    var kaiguan=true;
    $('.btnt').tap(function(){
        $('.btnt').css({display:'inline-block'});
        $(this).css({display:'none'});
        if(kaiguan){
            $('.fo').css({display:'block'});
            $('.zhezhao').css({display:'block'});
            kaiguan=false;
        }else{
            $('.fo').css({display:'none'});
            $('.zhezhao').css({display:'none'});
            kaiguan=true;
        }

    });
    //---------------点击微信公众号----------------
    $('.wxin').tap(function(){
        $('.fo').css({display:'none'});
        $('.zhezhao').css({display:'none'});
        $('.btnt').css({display:'inline-block'});
        $('.btnt').eq(1).css({display:'none'});
        kaiguan=true;

        $('.weix').css({display:'block'});
        $('.zhezhao2').css({display:'block'});
    });

    $('.an').tap(function(e){
        if(e.target==this){
            $('.weix').css({display:'none'});
            $('.zhezhao2').css({display:'none'});
        };
    })
    $('.zhezhao2').tap(function(e){
        if(e.target==this){
            $('.weix').css({display:'none'});
            $('.zhezhao2').css({display:'none'});
        }
    })

    $('.zhezhao').tap(function(e){
        if(e.target==this){
            kaiguan=true;
            $('.btnt').css({display:'inline-block'});
            $('.btnt').eq(1).css({display:'none'});
            $('.zhezhao').css({display:'none'});
            $('.fo').css({display:'none'});
            $('.tanc span').css({display:'none'});
        }
    })
//    ------------------点击桃心-----------
    $('.tao').each(function(i){
        $(this).data('index',i);
    })
    $('.tao').tap(function(){
        var index=parseInt($(this).data('index'));
        $('.tao').eq(index).find('i').eq(0).css({display:'none'});
        $('.tao').eq(index).find('i').eq(1).css({display:'inline-block'});
        console.log(index);

    });

//-----------------------点击评论------------------
    $(window).scroll(function(){
        var height=document.body.scrollTop;
        var size=document.body.style.fontSize;
        console.log(height,size);
    });
})