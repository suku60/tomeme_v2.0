import React, {useEffect, useState} from 'react';
import './Form.css';

const Form = (props) => {

  const [formType, setFormType] = useState(props.formType || undefined);

  const [formDisplay, setFormDisplay] = useState("none");

  useEffect(() => {

  },[]);

  useEffect(() => {

    setFormDisplay(props.displayFromParent);

  },[props.displayFromParent]);


  return (
    <div className='box_form centered_children' id="animReverseFade" style={{display: formDisplay}}>
      <div className="form_container" id="animItemComingFromBottom">
        <div className="close_form_button centered_children" onClick={()=>{setFormDisplay("none")}}>X</div>
          <form className='centered_children'>
            <h1>Create your account</h1>
            <label><b>Email</b></label>
            <input type="text" name="email" placeholder="email" required/>
            <input type="text" name="username" placeholder="username" required/>
            <input type="password" name="password" placeholder="password" required/>
            <input type="password" name="confirmation" placeholder="confirm your password" required/>
            <p>By clicking Register, you'll agree you are over 18 and our <a href="https://blank.page/">Privacy Policy</a>.</p>
            <button>Register</button>
          </form>
      </div>
    </div>
  )
}

export default Form;