$('.work-link').on('click', function(){
		$('#landing').css({display: 'none'})
		$('#work').css({display: 'block'})
})

//on hovering the arrow replace the image with arrow of stronger color
$('#arrow-right').on('mouseover', function(){
	$('#arrow-right').attr('src','./images/icons8-right-arrow-100-1.png')
	$('#work-link-text').css({color: '#0f4c81'}) 
})

//on unhovering the arrow replace the image with the original, lighter one
$('#arrow-right').on('mouseout', function(){
	$('#arrow-right').attr('src','./images/icons8-right-arrow-100.png')
	$('#work-link-text').css({color: '#6f93b3'}) 
})

//loop through carousel parent div and save first and last child so that the carousel can be endless
$(".images").each(function(index) {
    firstChild = $(this).children(".carousel-item:first");
    lastChild = $(this).children(".carousel-item:last")
});


/*function swap(a, b) {
    a = $(a); b = $(b);
    var tmp = $('<span>').hide();
    a.before(tmp);
    b.before(a);
    tmp.replaceWith(b);
};
*/

//on clicking the left arrow in carousel, go left
$('#left').on('click', function(){
	let active = $('.central')
	let previous = active.prev()

	if (previous.length === 0){
		previous = lastChild.removeClass('small').addClass('central')
		firstChild.removeClass('central').addClass('small')
	} else {
		active.removeClass('central').addClass('small')
		previous.addClass('central').removeClass('small')
	}
})

$('#right').on('click', function(){
	let active = $('.central')
	let next = active.next()

	if (next.length === 0){
		next = firstChild.removeClass('small').addClass('central')
		lastChild.removeClass('central').addClass('small')
	} else {
		active.removeClass('central').addClass('small')
		next.addClass('central').removeClass('small')
	}
})



