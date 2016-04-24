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

    var leftLi = $('.content-left li');
    var lastI = leftLi.last();
    for(var j = 0;j<leftLi.length;j++){
        if(j!=0) {
            leftLi.eq(j).on('mouseover', function () {
                var divH = $(this).find('div').height();
                var iH = $(this).height();
                $(this).find('div').css('top', -iH / 2);
                $(this).find('span').css('height', $(this).height());
                 var topAndDiv =$(this).find('div').offset().top+divH;
                 var iAndtop = lastI.offset().top+ lastI.height() ;
                if(topAndDiv >iAndtop){
                    $(this).find('div').css('top',-(divH -lastI.height())+20);
                }
            })
        }
    }
});