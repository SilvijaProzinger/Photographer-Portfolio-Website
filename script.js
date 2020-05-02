let landing = document.getElementById('landing')
let work = document.getElementById('work')

let workButtons = document.getElementsByClassName('work-link')

//on hovering the arrow replace the image with arrow of stronger color
document.getElementById('arrow-right').addEventListener('mouseover', function(){
	document.getElementById('arrow-right').src = './images/icons8-right-arrow-100-1.png'
	document.getElementById('work-link-text').style.color = '#0f4c81'
})

//on unhovering the arrow returns to normal, lighter color
document.getElementById('arrow-right').addEventListener('mouseout', function(){
	document.getElementById('arrow-right').src = './images/icons8-right-arrow-100.png'
	document.getElementById('work-link-text').style.color = '#6f93b3'
})

/*on hovering the arrow replace the image with arrow of stronger color
document.getElementById('arrow-left').addEventListener('mouseover', function(){
	console.log('replace')
})
*/

for (let i=0; i < workButtons.length; i++){
	workButtons[i].addEventListener('click', function(){
		landing.style.display = 'none'
		work.style.display = 'block'
		console.log(i)
	})
}
