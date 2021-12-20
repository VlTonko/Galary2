const elements = {
  btnPrew: document.querySelector('#btnPrew'),
  btnPlay: document.querySelector('#btnPlay'),
  btnStop: document.querySelector('#btnStop'),
  btnNext: document.querySelector('#btnNext'),
  slides: Array.from(document.querySelectorAll('.slideView')),
  currentSlide: 0,
};

export default elements;
