var slideNow = 1;
var slideCount = $('#slidewrapper').children().length;
var slideInterval = 5000;
var navBtnId = 0;
var translateWidth = 0;

$(document).ready(function() {
    var switchInterval = setInterval(nextSlide, slideInterval);

    $('#viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
        checkActiveBtn();
    });

    $('#next-btn').click(function() {
        nextSlide();
    });

    $('#prev-btn').click(function() {
        prevSlide();
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('#viewport').width() * (navBtnId);
            $('#slidewrapper').css({
                '-webkit-animation-name': +'fade',
                '-webkit-animation-duration': 1.5+'s',
                'animation-name': +'fade',
                'animation-duration': 1.5+'s',
                '-webkit-transition': 0+'s',
                '-o-transition': 0+'s',
                transition: 0+'s',
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
            if (slideNow == 1) {
                $('#prev-btn').css({
                    opacity: 0,
                });
            }
            if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
                $('#next-btn').css({
                    opacity: 0
                });
            }
            if (slideNow>1){
                $('#prev-btn').css({
                    opacity: 1,
                });
            }
            if (slideNow<slideCount){
                $('#next-btn').css({
                    opacity: 1,
                });
            }
        }
        checkActiveBtn();
    });
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        $('#prev-btn').css({
           opacity: 0
        });
    }
});
        
function checkActiveBtn(){
    var dotCount = navBtnId+1;
    for(let i = 1; i != slideCount+1; i++){
        if(i==slideNow){
            if(slideNow >= slideCount &&  $('.slide-nav-btn:nth-child(5)').hasClass('nav-disable')){
                $('.slide-nav-btn:nth-child(5)').toggleClass('nav-disable nav-active');  
            }else if(slideNow >= slideCount &&  $('.slide-nav-btn:nth-child(5)').hasClass('nav-active')){
        
            }else{
                if(i==slideNow && $('.slide-nav-btn:nth-child('+i+')').hasClass('nav-active')){
                   
                }else{
                     $('.slide-nav-btn:nth-child('+i+')').toggleClass('nav-disable nav-active');
                }
            }
        }else if(i!=slideNow && $('.slide-nav-btn:nth-child('+i+')').hasClass('nav-disable') ){
                
        }
        else if(i!=slideNow && $('.slide-nav-btn:nth-child('+i+')').hasClass('nav-active')){
            $('.slide-nav-btn:nth-child('+i+')').toggleClass('nav-active nav-disable '); 
        }
        else if(slideNow > slideCount &&  $('.slide-nav-btn:nth-child(5)').hasClass('nav-disable')){
            $('.slide-nav-btn:nth-child(5)').toggleClass('nav-disable nav-active');  
        }
        
        else if(slideNow > slideCount &&  $('.slide-nav-btn:nth-child(5)').hasClass('nav-active')){
        
        }
    }
    
    
}
function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
       $('#next-btn').css({
           opacity: 0
        });
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transition': 1.5+'s',
            '-o-transition': 1.5+'s',
            transition: 1.5+'s',
        });
        
        slideNow++;
    }
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
       $('#next-btn').css({
           opacity: 0,
        });
    }
    
    if (slideNow>1){
            $('#prev-btn').css({
                opacity: 1
            });
    }
    checkActiveBtn();
}

function prevSlide() {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        $('#prev-btn').css({
           opacity: 0
        });
    } else {
        translateWidth = -$('#viewport').width() * (slideNow - 2);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transition': 1.5+'s',
            '-o-transition': 1.5+'s',
            transition: 1.5+'s',
        });
        slideNow--;
    }
    
    if (slideNow == 1) {
       $('#prev-btn').css({
           opacity: 0,
        });
    }
    
    if(slideNow < slideCount){
            $('#next-btn').css({
                opacity: 1
            })
       }
    checkActiveBtn();
}