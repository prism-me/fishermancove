import React from 'react';

const SustainPillarsBlock = (props) => {
  return (
    <div className="pillars-block py-4">
      <div className="container">
        <div className="d-flex flex-wrap title-flex">
          <div className="pillars-item img-wrapper">
            <img alt="" className="img-thumbnail" src={props.data?.section_avatar} />
          </div>
          <div className="pillars-item pl-sm-4">
            <h3 className="">
              {props.data?.section_name}
            </h3>
            <div dangerouslySetInnerHTML={{ __html: props.data?.section_content }}>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default SustainPillarsBlock;