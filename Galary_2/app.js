let slides = Array.from(document.querySelectorAll('.slideView'));
let currentSlide = 0;
let time = 2000;
let interval;

const btnPrew = document.querySelector('#btnPrew');
const btnPlay = document.querySelector('#btnPlay');
const btnStop = document.querySelector('#btnStop');
const btnNext = document.querySelector('#btnNext');

class Viev {
  nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide !== slides.length - 1 ? currentSlide++ : (currentSlide = 0);

    console.log(slides[currentSlide]);
    slides[currentSlide].classList.add('active');
    console.log(currentSlide);
  }

  prewSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide !== 0 ? currentSlide-- : (currentSlide = slides.length - 1);
    console.log(slides[currentSlide]);
    slides[currentSlide].classList.add('active');
    console.log(currentSlide);
  }

  runShow() {
    interval = setInterval(firstClass.nextSlide, time);
  }

  stopShow() {
    clearInterval(interval);
  }
}

let firstClass = new Viev();

btnNext.addEventListener('click', firstClass.nextSlide);
btnPrew.addEventListener('click', firstClass.prewSlide);
btnPlay.addEventListener('click', firstClass.runShow);
btnStop.addEventListener('click', firstClass.stopShow);

/*
function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide !== slides.length - 1 ? currentSlide++ : (currentSlide = 0);

  console.log(slides[currentSlide]);
  slides[currentSlide].classList.add('active');
  console.log(currentSlide);
}

function prewSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide !== 0 ? currentSlide-- : (currentSlide = slides.length - 1);
  console.log(slides[currentSlide]);
  slides[currentSlide].classList.add('active');
  console.log(currentSlide);
}
*/
/*
console.log(domImages);
let numbersImages = domImages.length; //4
let indexImage = 1;

function changeImage(numImg) {
  let path = './image/' + numImg + '.jpg';
  console.log(path);
  domImages[0].setAttribute('src', path);
}

changeImage(3);
changeImage(2);
*/
