import React from 'react';

const SustainIntroBlock = (props) => {
  return (
    <div className="intro-block pb-4">
      <div className="container">
        <h2 className="text-center main-title">Sustainability</h2>
        <div className="d-flex flex-wrap title-flex">
          <div className="intro-item pr-sm-4" dangerouslySetInnerHTML={{__html: props.data?.section_content}}>
          </div>
          <div className="intro-item img-wrapper">
            <img alt="" className="img-thumbnail" src={props.data?.section_avatar} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainIntroBlock;