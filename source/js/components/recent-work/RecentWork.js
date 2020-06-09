import React, { useRef, Fragment } from 'react';
import Link from '../link/Link';
import ScrollTo from '../scroll-to/ScrollTo';

import './RecentWork.scss';
const iconPath = './images/';

const RecentWork = (props) => {
  const recentWork = [
    { id: 1, src: 'https://www.thenorthface.com/lucy-transition.html', icon: 'the-north-face', aria: 'Visit The North Face site' },
    { id: 2, src: 'https://www.sps.nyu.edu/high-school-academy.html', icon: 'logo-nyusps-hsa', aria: 'Visit NYU School of Professional Studies - High School Academy site' },
    { id: 3, src: 'https://www.smu.edu/cox', icon: 'smu-cox', aria: 'SMU Cox School of Business site' },
    { id: 4, src: 'https://wish.org/impact', icon: 'logo-make-a-wish', aria: 'Make a Wish - Impact of a Wish site' },
    { id: 5, src: 'https://alumni.yale.edu/', icon: 'logo-yale-alumni', aria: 'Yale Alumni site' },
    { id: 6, src: 'https://www.nccu.edu/', icon: 'logo-nccu', aria: 'North Carolina Central University Site' },
    { id: 7, src: 'https://www.sju.edu/', icon: 'sju-logo', aria: 'Saint Joseph University' },
    { id: 8, src: 'https://www.monroecollege.edu/', icon: 'monroeCollege-logo', aria: 'Monroe College Site' },
    { id: 9, src: 'https://www-606.aig.com/', icon: 'aig-logo', aria: 'AIG - Private Client Group' }
  ];

  let targetRef = useRef(null);

  const scrollToTargetHandler = (e) => {
    console.log('init');
    e.preventDefault();
    window.scroll({
      'behavior': 'smooth',
      'left': 0,
      'top': targetRef.current.offsetTop
    });
  };

  return (
    <Fragment>
      <ScrollTo scrollToTarget={scrollToTargetHandler} />
      <section ref={targetRef} id="recentwork" className="component recent-work">
        <div className="grid-container">
          <h2>{props.sectionTitle}</h2>
          <ul>
            {
              recentWork.map((client) => (
                <li key={client.id}>
                {
                  (client.src) ?
                    <Link href={client.src} rel="noopener noreferrer" target="_blank" ariaLabel={client.aria}>
                      <svg className={client.icon}>
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${iconPath}${client.icon}.svg#${client.icon}`}></use>
                      </svg>
                    </Link>
                    :
                    <svg className={client.icon}>
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${iconPath}${client.icon}.svg#${client.icon}`}></use>
                    </svg>
                }
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    </Fragment>
  )
}

export default RecentWork;
