import React from 'react';
import Link from '../link/Link';

import './SocialIcons.scss';
const iconPath = './images/';

const SocialIcons = () => {
  const socials = [
    { profile: "LinkedIn", src: "https://www.linkedin.com/in/vanessa-martinez-7921bb15", icon: "linkedin", aria: "Visit my LinkedIn profile" },
    { profile: "GitHub", src: "https://github.com/Vanss472?tab=repositories", icon: "github", aria: "Visit my GitHub profile" },
    { profile: "CodePen", src: "https://codepen.io/vanss472/pens/popular/", icon: "codepen", aria: "Visit my Codepen playground" },
    { profile: "Instagram", src: "https://www.instagram.com/vanss472/", icon: "instagram", aria: "Visit my Instagram profile" }
  ];

  return (
    <section className="component social-icons">
      <div className="grid-container">
        <ul>
          {
            socials.map((social) => (
              <li key={social.profile}>
                <Link href={social.src} ariaLabel={social.aria}>
                  <svg>
                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref={`${iconPath}${social.icon}.svg#${social.icon}`}></use>
                  </svg>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  )
}

export default SocialIcons;
