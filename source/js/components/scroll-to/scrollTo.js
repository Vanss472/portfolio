// ScrollTo
require('smoothscroll-polyfill').polyfill();
import './ScrollTo.scss';

console.log('scrollTo init');

const scrollToBtn = document.querySelector('.scrollTo-button');
const target = document.getElementById('recentwork');

scrollToBtn.addEventListener('click', (e) => {
  e.preventDefault();
  scrollTo(target);
});

const scrollTo = target => {
  window.scroll({
    'behavior': 'smooth',
    'left': 0,
    'top': target.offsetTop
  });
};
