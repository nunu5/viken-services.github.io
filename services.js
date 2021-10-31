var navTrigger = document.getElementsByClassName('nav-trigger')[0],
    body = document.getElementsByTagName('body')[0];

navTrigger.addEventListener('click', toggleNavigation);

function toggleNavigation(event) {
  event.preventDefault();
  body.classList.toggle('nav-open');
}

const myCarousel = document.getElementById('myCarousel')
myCarousel.addEventListener('slid.bs.carousel', function () {
  const activeItem = this.querySelector(".active");
  document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
  document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");
})
