import React from 'react';

import './Hdr.css';

const Hdr = (props) => {
  return (
    <div className="hdr">
     {props.children}
    </div>
  );
};

export default Hdr;