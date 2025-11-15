const hamButtons = document.querySelectorAll('#hamBtn');
const ham = document.getElementById('hamBtn') || document.querySelector('.hamburger');
const menu = document.getElementById('menu');

function toggleMenu() {
  if(!menu || !ham) return;
  const isOpen = menu.classList.toggle('show');
  ham.classList.toggle('active');
  ham.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  menu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
}

document.addEventListener('DOMContentLoaded', ()=>{
  // ensure menu hidden on load (no flash)
  if(menu) menu.style.visibility = 'hidden';
  if(ham) {
    ham.addEventListener('click', toggleMenu);
  }
  // observe menu class to adjust visibility
  if(menu) {
    const observer = new MutationObserver(()=> {
      if(menu.classList.contains('show')) menu.style.visibility = 'visible';
      else menu.style.visibility = 'hidden';
    });
    observer.observe(menu, {attributes:true, attributeFilter:['class']});
  }
});
