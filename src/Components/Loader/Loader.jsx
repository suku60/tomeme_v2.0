import React, {useEffect, useState} from 'react';
import './Loader.css';

const Loader = () => {

  return (
    <div className="box_loader centered_children" id="animReverseFade">
      <div className="loader"></div>
    </div>
  )
}

export default Loader;