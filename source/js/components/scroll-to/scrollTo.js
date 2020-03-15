import smoothscroll from 'smoothscroll-polyfill';
import React from 'react';
import Link from '../link/Link';

import './ScrollTo.scss';

// kick off the polyfill!
smoothscroll.polyfill();

const iconPath = './images/';
const iconName = 'down-arrow';
const iconId = 'downArrow';

const ScrollTo = (props) => {
  return (
    <section className="down-arrow">
      <div className="grid-container">
        <Link onClickHandler={props.scrollToTarget} className="scrollTo-button" href="#recentwork">
          <svg>
            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${iconPath}${iconName}.svg#${iconId}`}></use>
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default ScrollTo;
