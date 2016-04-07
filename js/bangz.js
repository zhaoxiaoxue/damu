/**
 * Created by Administrator on 2016/3/29.
 */
$(function(){
    $('.mc').tap(function(){
        var attr=$(this).attr('kaig');
        var index=$(this).index();
        if(attr=='true'){
            $(this).attr({kaig:'false'});
            $('.mcm').eq(index).show();
            $(this).find('i').css({display:'none'});
            $(this).find('i').last().css({display:'inline-block'});
        }else{
            $(this).attr({kaig:'true'})
            $('.mcm').eq(index).hide();
            $(this).find('i').css({display:'none'});
            $(this).find('i').first().css({display:'inline-block'});
        }

        console.log(index)
    });

})