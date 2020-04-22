import React from "react";
import currentReducer from '../reducer/currentReducer'
var CurrentContext=React.createContext()
export {CurrentContext}
const initialState =0
const CurrentProvider= (props)=>{
    const[currentState,dispatchCurrent]=React.useReducer(currentReducer,initialState)
    console.log(currentState) 
    const valueProp= {currentState,dispatchCurrent}
    return (
        <CurrentContext.Provider value={valueProp} >        
        {props.children}
        </CurrentContext.Provider>
    )
}
export {CurrentProvider}


