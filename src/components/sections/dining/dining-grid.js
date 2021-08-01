import React from 'react';
import RoomGridItem from './dining-grid-item';

const DiningGrid = (props) => {
  return (
    <div className='container'>
      {
        props.title && <h1 className="dining-grid-title">{props.title}</h1>
      }
      <div className='dining-grid-wrapper'>
        {
          props.data?.filter((x, index) => index <= 3).map(x => (
            <RoomGridItem key={x.id} id={x.id} route={x.route} title={x.post_name} image={x.thumbnail} link={x.link} linkText={x.linkText} description={x.post_content} />
          ))
        }
      </div>
    </div>
  );
}

export default DiningGrid;