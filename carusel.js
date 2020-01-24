$('.next').click(function() {
    next();
});

$('.previous').click(function() {
    prev();
});

var degree = 0;
        
function next(){
    var main = $('.second');
    var right = $('.third');
    var left = $('.first');
	var back = $('.fourth');
	
    main.toggleClass('second third');
    right.toggleClass('third fourth');
	back.toggleClass('fourth first');
    left.toggleClass('first second');
	
	

}
        
function prev(){
    var main = $('.second');
    var right = $('.third');
    var left = $('.first');
    var back = $('.fourth');
		
    main.toggleClass('second first');
	left.toggleClass('first fourth');
	back.toggleClass('fourth third');
    right.toggleClass('third second');
    
}

