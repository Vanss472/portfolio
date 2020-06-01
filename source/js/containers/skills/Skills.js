import React, { Component } from 'react';
import Button from '../../components/button/Button';
import './Skills.scss';

class Skills extends Component {
  render() {
    const skills = [
      { type: 'Accessibility', level: 'skill-full' },
      { type: 'HTML', level: 'skill-full' },
      { type: 'CSS', level: 'skill-full' },
      { type: 'JavaScript', level: 'skill-half' },
      { type: 'ES6', level: 'skill-half' },
      { type: 'React', level: 'skill-three-quarters' },
      { type: 'Gatsby', level: 'skill-one-quarter' },
      { type: 'Contentful', level: 'skill-one-quarter' },
      { type: 'Webpack', level: 'skill-full' },
      { type: 'Pattern Lab', level: 'skill-full' },
      { type: 'Storybook', level: 'skill-half' },
      { type: 'Design System', level: 'skill-full' },
      { type: 'Responsive Design', level: 'skill-full' },
      { type: 'GSAP', level: 'skill-full' },
      { type: 'UI/UX', level: 'skill-full' },
      { type: 'TypeScript', level: 'skill-one-quarter' }
    ];

    return (
      <section className="component skills">
        <div className="grid-container">
          <h2 id="mySkills">
            Skills
            <span>[ press s ]</span>
          </h2>
          <ul>
            {
              skills.map((skill, index) => (
                <li key={index}>
                  <Button context={skill.type} className={skill.level} />
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    )
  }
}

export default Skills;

