import React from 'react'
import lastPressReducer from '../reducer/lastPressReducer'
const LastPressContext = React.createContext()
export {LastPressContext}
const initialState=null    

const LastPressProvider= (props)=>{
    const [lastPressState, dispatchLastPress]=React.useReducer(lastPressReducer, initialState)
   const valueProp= {lastPressState, dispatchLastPress}

    return(
        <LastPressContext.Provider value={valueProp} >
        {props.children}
        </LastPressContext.Provider>
    )

}
export {LastPressProvider}