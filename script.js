let mysidebar = document.querySelector(".slider");
let dots = document.getElementsByClassName("dot");
let rightbtn = document.getElementsByClassName("arrows2");
let lefttbtn = document.getElementsByClassName("arrows1");

// starting code for desktop slider----------------

let slideIndex1 = 0;

function moveforward() {
  let firstChild = mysidebar.firstElementChild;
  mysidebar.removeChild(firstChild);
  mysidebar.appendChild(firstChild);

  slideIndex1++;
 
  if (slideIndex1 === 2) {
    rightbtn[0].style.display = 'none';
    lefttbtn[0].style.display = 'block';

  }

  updateActiveDot();
}

function updateActiveDot() {
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  dots[slideIndex1].classList.add("active");
}
updateActiveDot();

function movebackward() {
  let lastChild = mysidebar.lastElementChild;
  mysidebar.removeChild(lastChild);
  mysidebar.insertBefore(lastChild, mysidebar.firstElementChild);
  slideIndex1--;

  if (slideIndex1 < 0) {
    slideIndex1 = dots.length - 1;
    rightbtn[0].style.display = 'none';

  }
  if (slideIndex1 === 0) {
    lefttbtn[0].style.display = 'none';
    rightbtn[0].style.display = 'block'

  }
  if (slideIndex1 == 1) {
    console.log('slider testing');
    rightbtn[0].style.display = 'block';

  }
  updateActiveDot();

}
// end code for desktop slider----------------

// starting code for gallery desktop-------------------
let nextslideDesk = document.getElementsByClassName('next');
let prevslideDesk = document.getElementsByClassName('prev');
let galleryIndex = 1;
showSlides(galleryIndex);

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

function plusSlides(n, btntype) {
  showSlides(galleryIndex += n, btntype);

}

function currentSlide(n, btntype) {
  showSlides(galleryIndex = n, btntype);

}

function showSlides(n, btntype) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots1 = document.getElementsByClassName("demo");

  if (n > slides.length) {
    galleryIndex = 1

  }

  if (n < 1) {
    galleryIndex = slides.length
    prevslideDesk[0].style.display = 'block';
    nextslideDesk[0].style.display = 'none';

  }

  if (n == slides.length && btntype == 'next') {
    nextslideDesk[0].style.display = 'none';
    prevslideDesk[0].style.display = 'block';

  }

  if (n == 1 && btntype == 'prev') {
    prevslideDesk[0].style.display = 'none';
    nextslideDesk[0].style.display = 'block';

  }

  if (n == 2 && btntype == 'next') {
    prevslideDesk[0].style.display = 'block';

  }

  if (n == slides.length - 1 && btntype == 'prev') {
    nextslideDesk[0].style.display = 'block';
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }

  for (i = 0; i < dots1.length; i++) {
    dots1[i].className = dots1[i].className.replace(" active", "");

  }

  slides[galleryIndex - 1].style.display = "block";
  dots1[galleryIndex - 1].className += " active";

}
// End code for gallery desktop-------------------


// starting code for mobile slider-------------------
let leftarrowmobile = document.getElementsByClassName('arrows1m');
let rightarrowmobile = document.getElementsByClassName('arrows2m');
let mobileIndex = 1;
showSlidesm(mobileIndex);

function plusSlidesm(n, btntype) {
  showSlidesm(mobileIndex += n, btntype);

}

function showSlidesm(n, btntype) {
  
  let i;
  let slidesm = document.getElementsByClassName("boxm");
  let dots1m = document.getElementsByClassName("dotm");

  if (n > slidesm.length) {
    mobileIndex = 1

  }

  if (n < 1) {
    mobileIndex = slidesm.length
    leftarrowmobile[0].style.display = 'block';
    rightarrowmobile[0].style.display = 'none';

  }

  if (n == slidesm.length && btntype == 'next') {
    leftarrowmobile[0].style.display = 'block';
    rightarrowmobile[0].style.display = 'none';

  }

  if (n == 1 && btntype == 'prev') {
    leftarrowmobile[0].style.display = 'none';
    rightarrowmobile[0].style.display = 'block';

  }

  if (n == 2 && btntype == 'next') {
    leftarrowmobile[0].style.display = 'block';

  }

  if (n == slidesm.length - 1 && btntype == 'prev') {
    rightarrowmobile[0].style.display = 'block';
  }

  for (i = 0; i < slidesm.length; i++) {
    slidesm[i].style.display = "none";

  }

  for (i = 0; i < dots1m.length; i++) {
    dots1m[i].className = dots1m[i].className.replace(" active", "");

  }

  slidesm[mobileIndex - 1].style.display = "block";
  dots1m[mobileIndex - 1].className += " active";

}
// End code for mobile slider-------------------

// automatic slider code begin-------------------

const slider = document.querySelector('.gridcontainerMobile');
const slides = slider.querySelectorAll('li');

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every 
// 5 Secs, use SetInterval() method
setInterval(() => {
slides[activeSlide].classList.remove('active');
activeSlide++;
if (activeSlide === slideCount) {
	activeSlide = 0;
}
slides[activeSlide].classList.add('active');
}, 2000);

// end automatic slider code begin-------------------

