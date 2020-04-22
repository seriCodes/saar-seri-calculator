import React from 'react'
import calculationReducer from '../reducer/calculationReducer'
var  CalculationContext =React.createContext()
export {CalculationContext}
const initialState=0//needed for rendering initial 0

const CalculationProvider=(props)=>{
    const [calculationState,calculationDispatch]=React.useReducer(calculationReducer,initialState)
    console.log(calculationState)
    const valueProp={calculationState,calculationDispatch}

    return(
        <CalculationContext.Provider value= {valueProp}>
        {props.children}
        </CalculationContext.Provider>
    )
}

export {CalculationProvider}
