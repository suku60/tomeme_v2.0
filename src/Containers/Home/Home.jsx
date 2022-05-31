import React, {useEffect, useState} from 'react';
import './Home.css';

import Form from '../../Components/Form/Form';
import Button from '../../Components/Button/Button';

const Home = () => {

  const [formState, setFormState] = useState("none");
  const [formType, setFormType] = useState(undefined);

  const showForm = (loginOrRegisterForm) => {

    console.log("1")
    setFormType(loginOrRegisterForm);

    if (!formState) {
      setFormState(true);
    console.log("2")

    }else{
      setFormState(false);
    console.log("3")

    }
  }

  return (
    <div className="box_basic_container home" id='animItemFallingFromTop'>
        <Form displayFromParent={formState} formType={formType}/>
      <div className="temporaryBtn" onClick={()=>{showForm("login")}}>login</div>
      <div className="temporaryBtn btn_register" onClick={()=>{showForm("register")}}>register</div>
    </div>
  )
}

export default Home;