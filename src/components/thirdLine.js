import React from "react";
import {CurrentContext} from '../contexts/currentContext'
import {legalOrderButtonPress, currentStateResetCheckAndDispatchIfNecessary,calculationLatestAction, resetCurrentState,resetCalculationStateAndActionHistoryStateIfNecessary } from "../generalFunction/generalFunction";
import {LastPressContext} from '../contexts/lastPressContext'
import {CalculationContext} from '../contexts/calculationContext'
import {ActionsHistoryContext} from '../contexts/actionsHistoryContext'

const ThirdLine= ()=>{
    const {currentState,dispatchCurrent}=React.useContext(CurrentContext)
    const {lastPressState, dispatchLastPress}=React.useContext(LastPressContext)    
    const { calculationState,calculationDispatch} = React.useContext(CalculationContext)
    const { ActionHistoryState,ActionHistoryDispatch} = React.useContext(ActionsHistoryContext)

    const sevenClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)        
        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)
        dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:7
        })
        dispatchLastPress({type:'DIGIT'})  

    }
    const eightClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)        
        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)
           
        dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:8
        })
        dispatchLastPress({type:'DIGIT'})  

    }

    const nineClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)        
        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch) 
        
        dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:9
        })        
        dispatchLastPress({type:'DIGIT'})  
    }

    const xEvent= ()=>{
        
                //+-X/ //// 6X3=,/2
        if (!legalOrderButtonPress(lastPressState,dispatchCurrent)){
            return 
       } 
       console.log(ActionHistoryState)
        console.log(calculationState)
         if(ActionHistoryState){
             console.log('second opertation in a row')
             console.log(calculationState)
             calculationLatestAction(calculationDispatch,ActionHistoryState,currentState)
             
 
         }else{  
             console.log("calculationDispatch X")
           
             calculationDispatch({//needed for first number to enter the state(state initialized with 0 & is dealt)
                 type: 'X',
                 payload: currentState,
                 isneededForFirstNumberEnterState:true
                 
             })
         }
         ActionHistoryDispatch({
             type: 'X',
         })
         console.log(lastPressState)
  
         dispatchLastPress({type:'ACTION'})
         console.log(lastPressState)
 
     }

    return(
        <div className="Line Line-3">
        <div className="buttons line-2__7" id="7" onClick={sevenClicked}>7</div>
        <div className="buttons line-2__8" id="8" onClick={eightClicked}>8</div>
        <div className="buttons line-2__9" id="9" onClick={nineClicked}>9</div>
        <div className="buttons line-2__x" id="*" onClick={xEvent}>x</div>
        </div>

    )
}
export default ThirdLine