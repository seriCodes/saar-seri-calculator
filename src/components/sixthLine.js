import React, { useEffect } from 'react'
import {CurrentContext} from '../contexts/currentContext'
import {CalculationContext} from '../contexts/calculationContext'
import {ActionsHistoryContext} from '../contexts/actionsHistoryContext'
import {LastPressContext} from '../contexts/lastPressContext'
import {currentStateResetCheckAndDispatchIfNecessary,calculationLatestAction, resetCurrentState,resetCalculationStateAndActionHistoryStateIfNecessary } from "../generalFunction/generalFunction";

const SixthLine=()=>{
    const {currentState,dispatchCurrent}=React.useContext(CurrentContext)
    const {ActionHistoryDispatch,ActionHistoryState}=React.useContext(ActionsHistoryContext)    
    const {calculationState,calculationDispatch}= React.useContext(CalculationContext)
    const {lastPressState, dispatchLastPress}=React.useContext(LastPressContext)    




    const zeroClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)
        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)
 
    dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:0
        })  
    dispatchLastPress({type:'DIGIT'})
   
    }
    const  dotClicked= ()=>{
        if(lastPressState=='='){
         resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)
         resetCurrentState(dispatchCurrent)
    }
    if(lastPressState=='.'){
        alert("Don't press twice on DOT")
        return
    }
   
    if(lastPressState=='ACTION'){//1+.3 equal to 1+0.3 
        
        resetCurrentState(dispatchCurrent)
        console.log('currentState was resetCurrentState- NOT synchronize state', currentState )

    }

         dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:'.'
        })
//THIS IS THE STATE BEFORE ABOVE dispatchCurrent FOR DOT
        console.log('currentState before currentState%1===0', currentState )

        if(currentState%1===0 || //9+0.1.+=>9+0.1+//currenstate is 0.1
            lastPressState=='ACTION'){// A fix for sychronization problem!: 1.2+.(some DIGIT i didn't press yet)--> currentState is'nt changesd yet t0 0. & is still 1.2
            dispatchLastPress({type:'.'})// first dot click
            console.log('dispatchLastPress is a DOT')

        }
   
    }

    const equalClicked= ()=>{

if(lastPressState == 'DIGIT'){
    console.log('equalEvent clicked')
    console.log(ActionHistoryState)
    console.log(calculationState)
    console.log(currentState)
    calculationLatestAction(calculationDispatch,ActionHistoryState,currentState)

    ActionHistoryDispatch({
        type: "="
    })
    dispatchLastPress({type:'='})
    resetCurrentState(dispatchCurrent)

    }
}   
    return(
        <div className="Line Line-3">
        <div className="buttons line-6__0" id="0" onClick={zeroClicked}>0</div>
        <div className="buttons line-6__." id="." onClick={dotClicked}>.</div>
        <div className="buttons line-6__=" id="=" onClick={equalClicked}>=</div>

        </div>   
         )
}
export default SixthLine;