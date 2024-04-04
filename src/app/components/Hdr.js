import React from 'react';

import './Hdr.css';

const Hdr = (props) => {
  return (
    <div className="hdr">
     <h1>{props.children}</h1>
    </div>
  );
};

export default Hdr;