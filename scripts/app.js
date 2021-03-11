const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');
const menuBurger = document.querySelector('.burger i');
const navlinks = document.querySelector('.nav-links');
const newBody = document.querySelector('body');

// Menu
menuBurger.addEventListener('click', ()=>{
navlinks.classList.toggle('nav-active');
newBody.classList.toggle('forTheBody');
menuBurger.classList.remove("fa+''+fa-bars")
menuBurger.classList.add("fas+''+fa-times");
});


//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');


//Counter 
let counter =1; 
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';




setInterval(()=>{
  if(counter>=carouselImages.length -1) return;
  carouselSlide.style.transition = 'transform 1s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
} , 3000)


//Button Listener
nextBtn.addEventListener('click', ()=>{
  if(counter>=carouselImages.length -1) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter++;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
})

prevBtn.addEventListener('click', ()=>{
  if(counter <=0) return;
  carouselSlide.style.transition = 'transform 0.4s ease-in-out';
  counter--;
  carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
}); 

carouselSlide.addEventListener('transitionend', ()=>{
  if(carouselImages[counter].id==='lastClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length -2;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }

  if(carouselImages[counter].id==='firstClone') {
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length -counter;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
  }
})