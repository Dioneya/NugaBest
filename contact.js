$('.phone-btn img').click(function(){
    phone(); 
});

$('.mail-btn img').click(function(){
    mail(); 
});
        
function phone(){
    var phoneIsActive = $('.phone-btn p').hasClass('active');
            
    if(phoneIsActive==true){
        $('.phone-btn').toggleClass('active disable');
        $('.phone-btn div').toggleClass('text-active text-disable');
    }else{
        $('.phone-btn').toggleClass('disable active');
        $('.phone-btn div').toggleClass('text-disable text-active');
        }
}
        
function mail(){
    var phoneIsActive = $('.mail-btn p').hasClass('active');
            
    if(phoneIsActive==true){
        $('.mail-btn').toggleClass('active disable'); 
        $('.mail-btn div').toggleClass('text-active text-disable');
    }else{
        $('.mail-btn').toggleClass('disable active');
        $('.mail-btn div').toggleClass('text-disable text-active');
        }
}