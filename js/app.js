const bg = document.querySelector('.bg')
const hacker = document.querySelector('.hacker')

window.addEventListener('mousemove', (e) => {
    let x = e.clientX / this.innerWidth
    let y = e.clientY / this.innerHeight

    bg.style.transform = `translate(-${x * 50}px, -${y * 50}px)`
    hacker.style.transform = `translate(-${x * 70}px, -${y * 70}px)`
})