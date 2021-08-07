import 'babel-polyfill';
import React, { Component } from 'react'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

import './TextLoop.scss';

const TextLoop = () => {
  const outsideWork = [
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

  return (
    <section className="component text-loop">
      <div className="grid-container">
        <div id="textLoop">
          <h2> I am a
          <TypistLoop interval={3000}>
            {outsideWork.map(text => <Typist key={text} startDelay={1000} cursor={{show: false}}>{text}</Typist>)}
          </TypistLoop>
          </h2>
        </div>
      </div>
    </section>
  )
}

export default TextLoop
