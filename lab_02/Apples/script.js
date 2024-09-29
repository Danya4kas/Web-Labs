
  let rotateRight = true;
  const button = document.querySelector('.header_btn');

  button.addEventListener('click', () => {
    const rotateAngle = rotateRight ? '15deg' : '-15deg'; 
    button.style.setProperty('--rotate-angle', rotateAngle);
    rotateRight = !rotateRight; 
  });
  

  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav_links');
  const burgerIcon = burger.querySelector('i');
  
  burger.addEventListener('click', () => {
  
      navLinks.classList.toggle('active');
  
    
      if (burgerIcon.classList.contains('bx-menu')) {
          burgerIcon.classList.replace('bx-menu', 'bx-x');
      } else {
          burgerIcon.classList.replace('bx-x', 'bx-menu');
      }
  });
  
  