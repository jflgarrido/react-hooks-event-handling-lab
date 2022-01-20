// Code Keypad Component Here
import React from "react";

function Keypad () {

    function textPassword() {
        console.log('Entering password...')
    }
    return (
        <input type="password" onChange={textPassword}/>
    )
}

export default Keypad;