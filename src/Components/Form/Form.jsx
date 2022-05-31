import React, {useEffect, useState} from 'react';
import './Form.css';

const Form = (props) => {
  console.log(props.formType, typeof(props.formType))

  const [formType, setFormType] = useState(props.formType || undefined);

  const [formDisplay, setFormDisplay] = useState("none");

  useEffect(() => {

  },[]);

  useEffect(() => {

    setFormDisplay(props.displayFromParent);
    setFormType(props.formType);

  },[props.displayFromParent, props.formType]);

  console.log("antes del switch...", formType)

switch(formType){


  case "register":
  return (
    <div className='box_form centered_children' id="animReverseFade" style={{display: formDisplay}}>
      <div className="form_container" id="animItemComingFromBottom">
        <button className="close_form_button centered_children" onClick={()=>{setFormDisplay("none")}}>X</button>
        <form className='centered_children'>
          <h1>Create your account</h1>
          <input type="text" name="email" placeholder="email" required/>
          <input type="text" name="username" placeholder="username" required/>
          <input type="password" name="password" placeholder="password" required/>
          <input type="password" name="confirmation" placeholder="confirm your password" required/>
          <p>By clicking Register, you'll agree you are over 18 and our <a href="https://blank.page/">Privacy Policy</a>.</p>
          <button className='form_button' onClick={()=>{}}>Register</button>
        </form>
      </div>
    </div>
  )
  break;

  case "login":
    return (
      <div className='box_form centered_children' id="animReverseFade" style={{display: formDisplay}}>
        <div className="form_container" id="animItemComingFromBottom">
          <button className="close_form_button centered_children" onClick={()=>{setFormDisplay("none")}}>X</button>
          <form className='centered_children'>
            <h1>Login with your account</h1>
            <input type="text" name="username" placeholder="username" required/>
            <input type="password" name="password" placeholder="password" required/>
            <button className='form_button' onClick={()=>{}}>Login</button>
          </form>
        </div>
      </div>
    )
  break;

  // default is the same as register form now. We'll use this for
  // making the form of "new meme post"
  
  default:
  return (
    <div className='box_form centered_children' id="animReverseFade" style={{display: formDisplay}}>
      <div className="form_container" id="animItemComingFromBottom">
        <button className="close_form_button centered_children" onClick={()=>{setFormDisplay("none")}}>X</button>
        <form className='centered_children'>
          <h1>Create your account</h1>
          <input type="text" name="email" placeholder="email" required/>
          <input type="text" name="username" placeholder="username" required/>
          <input type="password" name="password" placeholder="password" required/>
          <input type="password" name="confirmation" placeholder="confirm your password" required/>
          <p>By clicking Register, you'll agree you are over 18 and our <a href="https://blank.page/">Privacy Policy</a>.</p>
          <button className='form_button' onClick={()=>{}}>Register</button>
        </form>
      </div>
    </div>
  )
  break;
 }
}

export default Form;