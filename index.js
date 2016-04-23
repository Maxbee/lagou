$(function(){
   var li = $('.ban li');
    var ban = $('.ban');
    var em =$('.ban-ctr em');

    var ctr=$('.ban-ctr li');
    var i= 0;
    ctr.on('mouseover',function(){
       i =  $(this).index() ;
        ban.stop();
        em.stop();
        var index = - i * 165;
        var emindex =  i*52;
        ban.animate({
            top:index
        });
        em.animate({
            top:emindex
        });
    })
    setInterval(function(){

        var index = - i * 165;
        var emindex =  i*52;
       ban.animate({
           top:index
       });
        em.animate({
            top:emindex
        });
        i++;
        if(i>2){
            i = 0;
        }

    },3000)

    $('input').on('click',function(){
        $(this).attr('placeholder','请输入职位名称或公司名称');
    })
    $('input').on('blur',function(){
        $(this).attr('placeholder','视觉设计');
    })

});