/**
 * Created by Administrator on 2016/3/29.
 */
//验证码没有判断
$(function(){
    FastClick.attach(document.body);

    var reg=/^1[3|4|5|7|8]\d{9}$/;
    var regmm=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,}$/;
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
    //------------------点击确认修改--------------------
    $('.xiugai').tap(function(){
        var shouj=$('.shouj').val();
        var sjyzm=$('.sjyzm').val();
        var mm=$('.mm').val();
        var cmm=$('.cmm').val();

        if(shouj==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').first().css({display:'block'})
        }else if(!reg.test(shouj)){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(1).css({display:'block'});
        }else if(sjyzm==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(3).css({display:'block'});
        }else if(mm==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(5).css({display:'block'});
        }else if(!regmm.test(mm)){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(6).css({display:'block'});
        }else if(cmm==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(7).css({display:'block'});
        }else if(cmm!=mm){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(8).css({display:'block'});
        }else{
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