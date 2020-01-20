$('.next').click(function() {
    next();
});

$('.previous').click(function() {
    prev();
});
        
function next(){
    var main = $('.second');
    var right = $('.third');
    var left = $('.first');
            
    main.toggleClass('second third');
    right.toggleClass('third first');
    left.toggleClass('first second');
}
        
function prev(){
    var main = $('.second');
    var right = $('.third');
    var left = $('.first');
            
    main.toggleClass('second first');
    right.toggleClass('third second');
    left.toggleClass('first third');
}