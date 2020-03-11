import React, { Component, Fragment } from 'react';

import BgImage from '../components/bg-image/BgImage';
import PageTitle from '../components/page-title/PageTitle';
import TextLoop from '../containers/text-loop/TextLoop';
import Skills from '../containers/skills/Skills';
import SocialIcons from '../components/social-icons/SocialIcons';
// import ScrollTo from './components/scroll-to/ScrollTo';
// import RecentWork from './components/recent-work/RecentWork';

class App extends Component {
  render() {
    return (
      <Fragment>
        <BgImage bgImgPath="../images/vanss_bg2_1280x1000.jpg" />
        <PageTitle lineOne="Hello, my name is" lineTwo="Vanessa Martínez" />
        <TextLoop />
        <Skills />
        <SocialIcons />
        {/* <ScrollTo />
        <RecentWork /> */}
      </Fragment>
    )
  }
}

export default App;
