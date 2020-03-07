let mouseCursor = document.querySelector('.cursor')
let navLinks = document.querySelectorAll('.nav-links li')



const cursor = (e) => {
  mouseCursor.style.top = e.pageY + 'px'
  mouseCursor.style.left = e.pageX + 'px'
}

window.addEventListener('mousemove', cursor)

navLinks.forEach(link => {
  link.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove("link-grow")
    link.classList.remove('hover-link')
  })
  link.addEventListener('mouseover', () => {
    mouseCursor.classList.add('link-grow')
    link.classList.add('hover-link')
  })
})