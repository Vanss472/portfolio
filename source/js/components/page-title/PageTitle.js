import React from 'react';
import './PageTitle.scss';

const PageTitle = (props) => {
  return (
    <section className="component full-name">
      <div className="grid-container">
        <h1>
          <span>{props.lineOne}</span>
          {props.lineTwo}
        </h1>
      </div>
    </section>
  )
}

export default PageTitle;
