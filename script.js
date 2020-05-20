//on hovering the arrow replace the image with arrow of stronger color
$('#arrow-right').on('mouseover', function(){
	$('.work-link').attr('src','./images/icons8-right-arrow-100-1.png')
	$('#work-link-text').css({color: '#0f4c81'}) 
})

//on unhovering the arrow replace the image with the original, lighter one
$('#arrow-right').on('mouseout', function(){
	$('.work-link').attr('src','./images/icons8-right-arrow-100.png')
	$('#work-link-text').css({color: '#6f93b3'}) 
})

$('#arrow-left').on('mouseover', function(){
	$('.work-link-home').attr('src','./images/icons8-left-arrow-100-1.png')
	$('#work-link-text').css({color: '#0f4c81'}) 
})

$('#arrow-left').on('mouseout', function(){
	$('.work-link-home').attr('src','./images/icons8-left-arrow-100.png')
	$('#work-link-text').css({color: '#6f93b3'}) 
})

//loop through carousel parent div and save first and last child so that the carousel can be endless
$(".images").each(function(index) {
    firstChild = $(this).children(".carousel-item:first");
    lastChild = $(this).children(".carousel-item:last")
});

//on hovering the left arrow replace it with a more vibrant icon
$('#left').on('mouseover', function(){
	$('#left').attr('src', './images/icons8-chevron-left-52-1.png')
})

//on unhovering the left arrow replace it with a regular icon
$('#left').on('mouseout', function(){
	$('#left').attr('src', './images/icons8-chevron-left-52.png')
})

//on hovering the left arrow replace it with a more vibrant icon
$('#right').on('mouseover', function(){
	$('#right').attr('src', './images/icons8-chevron-right-52-1.png')
})

//on unhovering the left arrow replace it with a regular icon
$('#right').on('mouseout', function(){
	$('#right').attr('src', './images/icons8-chevron-right-52.png')
})

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
	showDescription()
})

//on clicking the right arrow go right
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
	showDescription()
})

const showDescription = () => {
	let shown = $('.shown')

	//show description for each image
	$('.images-descriptions').find('div').each(function(){
		let idValue = $(this).attr('id')
		if (idValue == $('.central').index()){
		    console.log(idValue)
			$(this).removeClass('hidden').addClass('shown')
			shown.removeClass('shown').addClass('hidden')
		}
	})
}

$('.icon-one').on('mouseover', function(){
	$('.icon-one').attr('src', 'images/icons8-linkedin-80-1.png')
})

$('.icon-one').on('mouseout', function(){
	$('.icon-one').attr('src', 'images/icons8-linkedin-80.png')
})

$('.icon-two').on('mouseover', function(){
	$('.icon-two').attr('src', 'images/icons8-gmail-96-1.png')

})

$('.icon-two').on('mouseout', function(){
	$('.icon-two').attr('src', 'images/icons8-gmail-96.png')

})

$('#hamburgerIcon').on('click', function(){
	$('.mobile-menu').css({width: '100%'})
	$('#closeIcon').css({display: 'block'})
})

$('#closeIcon').on('click', function(){
	$('.mobile-menu').css({width: '0'})
	$('#closeIcon').css({display: 'none'})
})