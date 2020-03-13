import React from 'react';

const Link = (props) => {
  return (
    <a rel={props.rel} target={props.target} aria-label={props.ariaLabel} className={props.className} href={props.href} onClick={props.onClickHandler}>{ props.children }</a>
  )
}

export default Link;
