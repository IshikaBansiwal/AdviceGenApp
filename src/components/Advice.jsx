import React, { useState } from "react";
import RandomAdvise from "./RandomAdvice";

function Advice(){
    const [advice,setAdvice]=useState("NA")
    return(
        <>
        <h1>Advice Generator</h1>
        <RandomAdvise onSelectAdvice={setAdvice}></RandomAdvise>
        <h2 id="advice">{advice}</h2>

        </>
    )
}
export default Advice;