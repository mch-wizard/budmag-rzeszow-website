document.addEventListener('DOMContentLoaded', function() {

  const hamburger = document.querySelector('.menu-hamburger');
  const nav = document.querySelector('.navigation-box');
  let ulList = document.querySelector('.navigation-list');

  const handleClick = () => {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
  };

  const clickLink = (e) => {
    if ( e.target.closest('li').classList.contains('navigation-list__item') ) {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
    };
  };

  hamburger.addEventListener('click', handleClick);
  ulList.addEventListener('click', clickLink);
});