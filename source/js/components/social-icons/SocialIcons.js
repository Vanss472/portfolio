import React from 'react';
import Link from '../link/Link';

import './SocialIcons.scss';
const iconPath = '/source/images/';

const SocialIcons = () => {
  const socials = [
    { profile: "LinkedIn", src: "https://www.linkedin.com/in/vanessa-martinez-7921bb15", icon: "linkedin" },
    { profile: "GitHub", src: "https://github.com/Vanss472?tab=repositories", icon: "github" },
    { profile: "CodePen", src: "https://codepen.io/vanss472/pens/popular/", icon: "codepen" },
    { profile: "Instagram", src: "https://www.instagram.com/vanss472/", icon: "instagram" }
  ];

  return (
    <section className="component social-icons">
      <div className="grid-container">
        <ul>
          {
            socials.map((social) => (
              <li key={social.profile}>
                <Link href={social.src}>
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
