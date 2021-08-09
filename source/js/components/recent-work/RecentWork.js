import React, { useRef, Fragment } from 'react';
import Link from '../link/Link';
import ScrollTo from '../scroll-to/ScrollTo';

import './RecentWork.scss';

import NorthFaceLogo from "/source/icons/the-north-face.svg";
import NYULogo from "/source/icons/logo-nyusps-hsa.svg";
import SMULogo from "/source/icons/smu-cox.svg";
import MAWLogo from "/source/icons/logo-make-a-wish.svg";
import YaleLogo from "/source/icons/logo-yale-alumni.svg";
import NCCULogo from "/source/icons/logo-nccu.svg";
import SJULogo from "/source/icons/sju-logo.svg";
import MonroeLogo from "/source/icons/monroeCollege-logo.svg";
import AIGLogo from "/source/icons/aig-logo.svg";
import SYWLogo from "/source/icons/syw-logo.svg";


const RecentWork = (props) => {
  const recentWork = [
    { id: 1, src: 'https://www.thenorthface.com/lucy-transition.html', icon: <NorthFaceLogo />, aria: 'Visit The North Face site' },
    { id: 2, src: 'https://www.sps.nyu.edu/high-school-academy.html', icon: <NYULogo />, aria: 'Visit NYU School of Professional Studies - High School Academy site' },
    { id: 3, src: 'https://www.smu.edu/cox', icon: <SMULogo />, aria: 'SMU Cox School of Business site' },
    { id: 4, src: 'https://wish.org/impact', icon: <MAWLogo />, aria: 'Make a Wish - Impact of a Wish site' },
    { id: 5, src: 'https://alumni.yale.edu/', icon: <YaleLogo />, aria: 'Yale Alumni site' },
    { id: 6, src: 'https://www.nccu.edu/', icon: <NCCULogo />, aria: 'North Carolina Central University Site' },
    { id: 7, src: 'https://www.sju.edu/', icon: <SJULogo />, aria: 'Saint Joseph University' },
    { id: 8, src: 'https://www.monroecollege.edu/', icon: <MonroeLogo />, aria: 'Monroe College Site' },
    { id: 9, src: 'https://www-606.aig.com/', icon: <AIGLogo />, aria: 'AIG - Private Client Group' },
    { id: 10, src: 'https://www.shareyourwhy.com/', icon: <SYWLogo />, aria: 'Share Your Why' }
  ];

  const latestRecentWork = recentWork.sort((a, b) => b.id - a.id)

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
              latestRecentWork.map((client) => (
                <li key={client.id}>
                {
                  (client.src) ?
                    <Link href={client.src} rel="noopener noreferrer" target="_blank" ariaLabel={client.aria}>
                      {client.icon}
                      {/* <svg className={client.icon}>
                        <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${iconPath}${client.icon}.svg#${client.icon}`}></use>
                      </svg> */}
                    </Link>
                    :
                    <>
                    {client.icon}
                    </>
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
