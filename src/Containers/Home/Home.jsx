import React, {useEffect, useState} from 'react';
import './Home.css';

import Form from '../../Components/Form/Form';

const Home = () => {

  const [formState, setFormState] = useState("none");

  const showForm = () => {

    if (!formState) {
      setFormState(true);
    }else{
      setFormState(false);
    }
  }

  return (
    <div className="box_basic_container home" id='animItemFallingFromTop'>
      <div className="board">
        <Form displayFromParent={formState}/>
      </div>
      <div className="temporaryBtn" onClick={()=>{showForm()}}></div>
    </div>
  )
}

export default Home;