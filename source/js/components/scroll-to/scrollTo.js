import React, { useState, useEffect, useRef } from 'react';
import Link from '../link/Link';

import './ScrollTo.scss';
const iconPath = '/source/images/';
const iconName = 'down-arrow';
const iconId = 'downArrow';

const ScrollTo = (props) => {
  const [ scrollTo, setScrollTo ] = useState(false);
  const target = document.getElementById('recentwork');
  let scrollToBtn = useRef();

  const scrollToTarget = target => {
    window.scroll({
      'behavior': 'smooth',
      'left': 0,
      'top': target.offsetTop
    });
  };

  useEffect(() => {
    return () => {
      scrollToBtn.addEventListener('click', scrollToTarget(target));
    }
  })

  return (
    <section className="down-arrow">
      <div className="grid-container">
        <Link onClickHandler={() => setScrollTo(!scrollTo)} className="scrollTo-button" href="#recentwork">
          <svg>
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${iconPath}${iconName}.svg#${iconId}`}></use>
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default ScrollTo;

// ScrollTo
// require('smoothscroll-polyfill').polyfill();
// import './ScrollTo.scss';

// console.log('scrollTo init');

// const scrollToBtn = document.querySelector('.scrollTo-button');
// const target = document.getElementById('recentwork');

// scrollToBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   scrollTo(target);
// });

// const scrollTo = target => {
//   window.scroll({
//     'behavior': 'smooth',
//     'left': 0,
//     'top': target.offsetTop
//   });
// };
