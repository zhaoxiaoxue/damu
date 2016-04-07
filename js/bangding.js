/**
 * Created by Administrator on 2016/3/29.
 */
/**
 * Created by Administrator on 2016/3/29.
 */
//备注：短信验证、图片验证，需要获取--没有判断
$(function(){
    FastClick.attach(document.body);
    var reg=/^1[3|4|5|7|8]\d{9}$/;
    //------------------点击获取验证码--------------------

    $('.yanzm').tap(function(){
        var shouj=$('.shouj').val();
        var index=60;
        if($(this).val()=='获取验证码'){
            if(shouj==''){
                $('.zhezhao').css({display:'block'});
                $('.tan span').first().css({display:'block'})
            }else if(reg.test(shouj)){
                $('.zhezhao').css({display:'block'});
                $('.tan span').eq(2).css({display:'block'});

                var timeid=setInterval(function(){
                    index--;
                    $('.yanzm').val(index+'s');
                    if(index==0){
                        clearInterval(timeid);
                        $('.yanzm').val('获取验证码');
                    }
                },1000)

            }else{
                $('.zhezhao').css({display:'block'});
                $('.tan span').eq(1).css({display:'block'});
            }
            var time=setTimeout(function(){
                $('.zhezhao').css({display:'none'});
                $('.tan span').css({display:'none'});
            },1000)

        }
    })
    //------------------点击确定--------------------
    $('.queding').tap(function(){
        var shouj=$('.shouj').val();
        var sjyzm=$('.sjyzm').val();

        if(shouj==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').first().css({display:'block'})
        }else if(!reg.test(shouj)){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(1).css({display:'block'});
        }else if(sjyzm==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(3).css({display:'block'});
        }else {
            $('.zhezhao').css({display:'block'});
            $('.tan span').last().css({display:'block'});

            setTimeout(function(){
                $('.zhezhao').css({display:'none'});
                $('.tan span').css({display:'none'});

                location.href='./index.html';
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