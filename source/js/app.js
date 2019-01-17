import React from 'react'
import ReactDOM from 'react-dom'

import TextLoop from './components/text-loop/textLoop'
import './components/scroll-to/scrollTo'
import './components/skills/skills'

import '../css/styles.scss'

ReactDOM.render(
  <TextLoop />,
  document.getElementById('textLoop')
);
