import React, {useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { validateInputs } from '../../utilities';
import axios from 'axios';

import './Form.css';

const Form = (props) => {

  let navigate = useNavigate();

  // validations variables

  let validationsError;
  let passwordLenghtError;
  let wrongPasswordError;

  // Hooks

  const [formType, setFormType] = useState(props.formType || undefined);
  const [formDisplay, setFormDisplay] = useState("none");

  const [customMsg, setCustomMsg] = useState("");

  const [loaderDisplay, setLoaderDisplay] = useState(false);

  const [userData, setUserData] = useState({});


  useEffect(() => {

  },[]);

  useEffect(() => {

    setFormDisplay(props.displayFromParent);
    setFormType(props.formType);

    if(props.formType === "login"){

      setUserData({
        username: "",
        password: ""
      });
    }

    if(props.formType === "register"){

      setUserData({
        email: "",
        username: "",
        password: "",
        passwordConfirmation: ""
      });
    }

  },[props.displayFromParent, props.formType]);

  // Handler function

  const fillForm = (e) => {

    setUserData({ ...userData, [e.target.name]: e.target.value })

  }

  // Services

  const Login = async () => {

    let fieldsToValidate = Object.entries(userData);
    let error = "";

    setCustomMsg("");

    // Validating inputs
    for (let element of fieldsToValidate) {

      error = validateInputs(element[0], element[1]);

      if (error !== "ok") {
        setCustomMsg("Fields cannot be empty");

        validationsError = true;

        return

      } else if (error == "ok") {
        setCustomMsg("");

        validationsError = false;
      }
    }

    let body = {
      username: userData.username,
      password: userData.password
    }

    let loginResult;

    if (!validationsError && !wrongPasswordError && !passwordLenghtError) {
      
      setLoaderDisplay(true)

      try {

        loginResult = await axios.post("https://socialmeme.herokuapp.com/users/login", body)
        console.log("we're getting this from database:", loginResult)

        if (loginResult.data.token) {
          setCustomMsg(`Welcome to the family ${loginResult.data.user.username}!
          You will be redirected to dashboard`);

          setTimeout(() => {

            navigate("/dashboard")

            // props.dispatch({ type: LOGIN, payload: loginResult.data });

          }, 1800)
        } else {

          setCustomMsg("Wrong username or password");

          setLoaderDisplay(false);
        }
      } catch (loginError) {

        setCustomMsg("There has been a problem with the server, please try again later");

        console.log("Server error", loginError)
      }
    }

  }
  console.log("userdata:", userData)
  
switch(formType){

  case "register":
  return (
    <div className='box_form centered_children' id="animReverseFade" style={{display: formDisplay}}>
      <div className="box_notification"></div>
      <div className="form_container" id="animItemComingFromBottom">
        <button className="close_form_button centered_children" onClick={()=>{setFormDisplay("none")}}>X</button>
        <form className='centered_children'>
          <h1>Create your account</h1>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="text" 
          name="email" 
          placeholder="email" 
          required/>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="text" 
          name="username" 
          placeholder="username" 
          required/>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="password" 
          name="password" 
          placeholder="password" 
          required/>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="password" 
          name="confirmation" 
          placeholder="confirm your password" 
          required/>
          <p>By clicking Register, you'll agree you are over 18 and our <a href="https://blank.page/">Privacy Policy</a>.</p>
          <button 
          className='form_button' 
          onClick={()=>{}}>Register</button>
        </form>
      </div>
    </div>
  )
  break;

  case "login":
    return (
      <div className='box_form centered_children' id="animReverseFade" style={{display: formDisplay}}>
        <div className="box_notification"></div>
        <div className="form_container" id="animItemComingFromBottom">
          <button 
          className="close_form_button centered_children" 
          onClick={()=>{setFormDisplay("none")}}>X</button>
          <form className='centered_children'>
            <h1>Login with your account</h1>
            <input 
          onChange={(e) => { fillForm(e) }} 
            type="text" 
            name="username" 
            placeholder="username" 
            required/>
            <input 
          onChange={(e) => { fillForm(e) }} 
            type="password"
             name="password" 
            placeholder="password" 
            required/>
            <div 
            className='form_button' 
            onClick={() => Login()}>Login</div>
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
      <div className="box_notification"></div>
      <div className="form_container" id="animItemComingFromBottom">
        <button 
        className="close_form_button centered_children" 
        onClick={()=>{setFormDisplay("none")}}>X</button>
        <form className='centered_children'>
          <h1>Create your account DEFAULT</h1>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="text" 
          name="email" 
          placeholder="email" 
          required/>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="text" 
          name="username" 
          placeholder="username" 
          required/>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="password" 
          name="password" 
          placeholder="password" 
          required/>
          <input 
          onChange={(e) => { fillForm(e) }} 
          type="password" 
          name="confirmation" 
          placeholder="confirm your password" 
          required/>
          <p>By clicking Register, you'll agree you are over 18 and our <a href="https://blank.page/">Privacy Policy</a>.</p>
          <button 
          className='form_button' 
          onClick={()=>{}}>Register</button>
        </form>
      </div>
    </div>
  )
  break;
 }
}

export default Form;