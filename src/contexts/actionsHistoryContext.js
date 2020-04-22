import React from 'react'
import historysReducer from '../reducer/actionsHistoryReducer'
var  ActionsHistoryContext =React.createContext()
export {ActionsHistoryContext}
const initialState=null

const ActionsHistoryProvider=(props)=>{
    const [ActionHistoryState,ActionHistoryDispatch]=React.useReducer(historysReducer,initialState)
    console.log(ActionHistoryState)
    const valueProp={ActionHistoryState,ActionHistoryDispatch}

    return(
        <ActionsHistoryContext.Provider value= {valueProp}>
        {props.children}
        </ActionsHistoryContext.Provider>
    )
}

export {ActionsHistoryProvider}
