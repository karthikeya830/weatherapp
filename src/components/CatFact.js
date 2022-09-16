import Axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';

const CatFact = () => {

    const [catFact, setCatFact] = useState("");

    const handleOnChange = () => {
        Axios.get("https://catfact.ninja/fact").then((res) => {
            setCatFact(res.data.fact);
        });
    };

    // fetch("https://catfact.ninja/fact")
    //     .then((res) => res.json())
    //     .then((data) => {
    //         console.log(data);
    //     } );

    useEffect(() => {
        handleOnChange();
    }, [] );



  return (
    <div class="center">
        <button onClick={handleOnChange}>Cat Fact Button</button>
        {<p>{catFact} </p>}
    </div>
  )
}

export default CatFact;