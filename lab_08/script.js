let img = document.getElementById('image-mouse');
let maxX = window.innerWidth - img.width;
let maxY = window.innerHeight - img.height;

img.addEventListener('mouseenter', () => {
    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    img.style.left = `${randomX}px`;
    img.style.top = `${randomY}px`;
});


window.addEventListener('resize', () => {
    maxX = window.innerWidth - img.width;
    maxY = window.innerHeight - img.height;
});





































































// ©Danya4kas game 