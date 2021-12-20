import './style.css';
import elements from './scripts/elements';
import View from './scripts/view';

let firstClass = new View();
elements.btnNext.addEventListener('click', firstClass.btnNextSlide);
elements.btnPrew.addEventListener('click', firstClass.btnPrewSlide);
elements.btnPlay.addEventListener('click', firstClass.runShow);
elements.btnStop.addEventListener('click', firstClass.stopShow);
