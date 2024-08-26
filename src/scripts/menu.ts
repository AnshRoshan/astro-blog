// ------- avoid using ! ---------
// document
// 	.querySelector('.hamburger')!
// 	.addEventListener('click', () => {
// 		document
// 			.querySelector('.nav-links')!
// 			.classList.toggle('expanded')
// 	})

const hamburger = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')

if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('expanded')
  })
}
