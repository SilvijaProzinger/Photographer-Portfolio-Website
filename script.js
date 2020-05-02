let landing = document.getElementById('landing')
let work = document.getElementById('work')

let workButtons = document.getElementsByClassName('work-link')

//on hovering the arrow replace the image with arrow of stronger color
document.getElementById('arrow-right').addEventListener('mouseover', function(){
	console.log('replace')
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
