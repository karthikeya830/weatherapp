import React , { useState } from 'react'
import Axios from 'axios';


const PredictAge = () => {

    const [age, setAge] = useState();

    const getAge = (name) => {
        Axios.get(`https://api.agify.io/?name=${name}`)
        .then((response) => {
            setAge(response.data.age);
        });
    }

    const handleOnClick = () => {
        let val = document.getElementById("name");
        getAge(val.value);
    }

    

  return (
    <div className="center">
        <input type="text" id="name" placeholder="Enter Your Name"></input> <span></span>
        <button onClick={handleOnClick}>Predict Age</button>
        <p>{age}</p>
        
    </div>
  )
}

export default PredictAge;