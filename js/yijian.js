/**
 * Created by Administrator on 2016/3/29.
 */
$(function(){
    FastClick.attach(document.body);
    $('.tijiao').tap(function(){
        var txt=$('.txt').val();
        var num=txt.length;
        if(txt==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').first().css({display:'block'});
        }else if(num>200){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(1).css({display:'block'});
        }else{
            $('.zhezhao').css({display:'block'});
            $('.tan span').last().css({display:'block'});

            setTimeout(function(){
                $('.zhezhao').css({display:'none'});
                $('.tan span').css({display:'none'});

                location.href='./mine.html';
            },1000)
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
