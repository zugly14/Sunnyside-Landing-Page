const menu = document.getElementById('menu-header')

const hamburberIcon = document.getElementById('hamburger-icon')

hamburberIcon.addEventListener('click', () => {
	menu.classList.toggle('is-active')
	console.log('i clicked c:')
})

console.log(hamburberIcon)
