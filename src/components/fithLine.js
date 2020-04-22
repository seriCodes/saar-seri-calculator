import React, {useReducer, useEffect} from "react";
import {CurrentContext} from '../contexts/currentContext'
import {ActionsHistoryContext} from '../contexts/actionsHistoryContext'
import {CalculationContext} from '../contexts/calculationContext'
import {setRenderResult,renderProcess} from '../contexts/calculationContext'
import {LastPressContext} from '../contexts/lastPressContext'
import {legalOrderButtonPress,currentStateResetCheckAndDispatchIfNecessary,calculationLatestAction, resetCurrentState,resetCalculationStateAndActionHistoryStateIfNecessary } from "../generalFunction/generalFunction";

const FithLine= ()=>{
    
    const { currentState,dispatchCurrent} = React.useContext(CurrentContext)
    const { ActionHistoryState,ActionHistoryDispatch} = React.useContext(ActionsHistoryContext)
    const { calculationState,calculationDispatch} = React.useContext(CalculationContext)
    const {lastPressState, dispatchLastPress}=React.useContext(LastPressContext)    

    const oneClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)        
        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)
           
                dispatchCurrent({
                    type: 'ADD_DIGIT',
                    payload:1
                })
            
            dispatchLastPress({type:'DIGIT'})  
    }
    const twoClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)

        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)

                dispatchCurrent({
                    type: 'ADD_DIGIT',
                    payload:2
                })
            
            dispatchLastPress({type:'DIGIT'})  
    }
    const threeClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)

        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)

                dispatchCurrent({
                    type: 'ADD_DIGIT',
                    payload:3
                })
            
            dispatchLastPress({type:'DIGIT'})        
    }
    const plusEvent= ()=>{
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
            console.log("calculationDispatch +")
          
            calculationDispatch({//needed for first number to enter the state
                type: '+',
                payload: currentState
            })
        }
        ActionHistoryDispatch({
            type: '+',
        })
        console.log(lastPressState)
 
        dispatchLastPress({type:'ACTION'})
        console.log('lastPressState is needed to be ACTION but is ', lastPressState)

    }
    return(
       
        <div className="Line Line-5">
        <div className="buttons line-5__1" id="1"  onClick={oneClicked} >1</div>
        <div className="buttons line-5__2" id="2" onClick={twoClicked}>2</div>
        <div className="buttons line-5__3" id="3" onClick={threeClicked}>3</div>
        <div className="buttons line-5__+" id="+" onClick={plusEvent}>+</div>
        </div>
      
    )
}
export default FithLine