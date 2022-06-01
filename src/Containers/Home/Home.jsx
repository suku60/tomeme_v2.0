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
    <div className="box_basic_container home" id='animReverseFade'>
      <div className="background_sides"></div>
      <div className="background_cover"></div>
      <h1 className="welcome_text">Your daily dose of shitposting</h1>
      <h2 className="welcome_subtext subtext_quote">- Albert Mandela</h2>
      <h2 className="welcome_subtext subtext_join">Join the family</h2>
      <Form displayFromParent={formState} formType={formType}/>
      <div className="temporaryBtn" onClick={()=>{showForm("login")}}>login</div>
      <div className="temporaryBtn btn_register" onClick={()=>{showForm("register")}}>register</div>
    </div>
  )
}

export default Home;