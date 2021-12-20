import elements from './elements';
let interval;

class View {
  constructor() {
    this.btnNextSlide = this.btnNextSlide.bind(this);
    this.btnPrewSlide = this.btnPrewSlide.bind(this);
    this.runShow = this.runShow.bind(this);
    this.stopShow = this.stopShow.bind(this);
    this.time = 4000;
  }

  nextSlide() {
    elements.slides[elements.currentSlide].classList.remove('active');
    elements.currentSlide !== elements.slides.length - 1 ? elements.currentSlide++ : (elements.currentSlide = 0);
    elements.slides[elements.currentSlide].classList.add('active');
  }

  prewSlide() {
    elements.slides[elements.currentSlide].classList.remove('active');
    elements.currentSlide !== 0 ? elements.currentSlide-- : (elements.currentSlide = elements.slides.length - 1);
    elements.slides[elements.currentSlide].classList.add('active');
  }

  runShow() {
    elements.btnPlay.classList.add('buttonHidden');
    console.log(this);
    console.log(this.nextSlide);

    interval = setInterval(this.nextSlide, this.time);
    elements.btnStop.classList.remove('buttonHidden');
  }

  stopShow() {
    elements.btnStop.classList.add('buttonHidden');
    clearInterval(interval);
    elements.btnPlay.classList.remove('buttonHidden');
  }

  btnNextSlide() {
    this.nextSlide();
    this.stopShow();
  }

  btnPrewSlide() {
    this.prewSlide();
    this.stopShow();
  }
}

export default View;
