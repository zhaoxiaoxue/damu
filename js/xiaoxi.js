/**
 * Created by Administrator on 2016/3/29.
 */
$(function(){
    $('.tan').tap(function(){
        var index=$(this).index();
        $('.tan').removeClass('tap');
        $(this).addClass('tap');

        $('.min').css({display:'none'});
        $('.min').eq(index).css({display:'block'})
    })
})