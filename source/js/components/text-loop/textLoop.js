import 'babel-polyfill';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Typist from 'react-typist'
import TypistLoop from 'react-typist-loop'

import './text-loop.scss';

class TextLoop extends Component {
  render() {
    return (
      <div>
        <h2> I am a
          <TypistLoop interval={1000}>
            {[
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
            ].map(text => <Typist key={text} startDelay={300} cursor={{show: false}}>{text}</Typist>)}
          </TypistLoop>
        </h2>
      </div>
    );
  }
}

export default TextLoop
