import React, {useEffect, useState} from 'react';
import './Form.css';

const Form = (props) => {

  const [formDisplay, setFormDisplay] = useState("none");

  useEffect(() => {

  },[]);

  useEffect(() => {

    setFormDisplay(props.displayFromParent);

  },[props.displayFromParent]);
  
  return (
    <div className='box_form centered_children' id={"animItemComingFromBottom"} style={{display: formDisplay}}>
      <div className="form">
        <div className="close_form_button centered_children" onClick={()=>{setFormDisplay("none")}}>X</div>
      </div>
    </div>
  )
}

export default Form;