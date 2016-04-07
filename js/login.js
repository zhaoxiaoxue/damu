/**
 * Created by Administrator on 2016/3/29.
 */
//备注：当用户名和密码同时错误，验证码才会出现  $('.yzm').css({display:'block'});
$(function(){
    FastClick.attach(document.body);
    $('.denglu').tap(function(){
        var yhm=$('.yhm').val();
        var mm=$('.mm').val();
        var yzm=$('.yzm').val();

        if(yhm==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(0).css({display:'block'});
        }else if(mm==''){
            $('.zhezhao').css({display:'block'});
            $('.tan span').eq(2).css({display:'block'});
        }else{
            window.history.go(-1);//返回上一页
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
});