import React from 'react';
import './BgImage.scss';

const BgImage = (props) => {
  const style = {
    backgroundImage: `url(${props.bgImgPath})`
  }
  return <div className="component bg bg-position" style={style}></div>
}

export default BgImage;
