import 'babel-polyfill';
import React, { useState } from 'react'
import Typist from 'react-typist'

import './TextLoop.scss';

const TextLoop = () => {
  const [index, setIndex] = useState(0)
  const outsideWorks = [
    'Front End Developer',
    'Freelancer',
    'Photographer',
    'Traveller',
    'Cyclist',
    'Foodie',
    'Stout Lover',
    'Creative',
    'Technologist',
    'Coder',
    'Dog Lover'
  ];
  const outsideWork = outsideWorks[index % outsideWorks.length]

  return (
    <section className="component text-loop">
      <div className="grid-container">
        <div id="textLoop">
          <h2> I am a
          <Typist key={index} avgTypingDelay={150} onTypingDone={() => setIndex((i) => i + 1)}>
            {outsideWork}
          </Typist>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default TextLoop
