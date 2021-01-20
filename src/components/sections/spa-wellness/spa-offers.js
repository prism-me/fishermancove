import React, { Component } from 'react';

const SpaWellnessRecommendations = (props) => {
  return (
    <div className="spa-recommendations-wrapper">
      <div className="container">
        <h2 className="section-heading text-muted">{props.title}</h2>
        {/* <div className="container-fluid"> */}
        <div className="row">
          {
            props.data?.map((x, i) => (
              <div className="col-12 col-md-4 no-gutters px-2">
                <div className="grid-item">
                  <div className="spa-title" style={{ backgroundImage: `url(${x.image})` }}>
                    <h4>{x.title}</h4>
                    <div className="slide-hover-overlay"></div>
                  </div>
                </div>
              </div>
            ))
          }
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default SpaWellnessRecommendations;