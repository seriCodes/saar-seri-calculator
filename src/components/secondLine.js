import React , {useState,useEffect} from "react";
import {CurrentContext} from '../contexts/currentContext'
import currentReducer from '../reducer/currentReducer'
import {ActionsHistoryContext} from '../contexts/actionsHistoryContext'
import {CalculationContext} from '../contexts/calculationContext'
import {LastPressContext} from '../contexts/lastPressContext'

import {legalOrderButtonPress, currentStateResetCheckAndDispatchIfNecessary,calculationLatestAction, resetCurrentState,resetCalculationStateAndActionHistoryStateIfNecessary } from "../generalFunction/generalFunction";

const SecondLine= ()=>{
    const {currentState, dispatchCurrent}=React.useContext(CurrentContext)
    const { ActionHistoryState ,ActionHistoryDispatch} = React.useContext(ActionsHistoryContext)
    const[renderClearState,setRenderClear] = useState("AC")
    const { calculationState,calculationDispatch} = React.useContext(CalculationContext)
    const {lastPressState, dispatchLastPress}=React.useContext(LastPressContext)    

    useEffect( ()=>{
        console.log(ActionHistoryState)

        if(currentState!=0){
            setRenderClear("C")
        }else         {
            setRenderClear("AC")
        }  
    },[currentState])
   
    const clearClicked= ()=>{
        console.log(currentState)

        // console.log('clearClicked clicked')
            if(currentState!==0){           
                console.log('dispatchCurrent')

                dispatchCurrent({
                    type:'CLEAR',
                    payload:0                    
                })
                ActionHistoryDispatch({
                    type:'CLEAR',
                })
                dispatchLastPress({
                    type:'DIGIT'                    
                })

            }else {
                console.log('ActionHistoryDispatch')

                setRenderClear("AC")
                //it does the same as in C button above intentionally to fix this problem:
                //1.2+.3=AC 1.2+.3 //otherwise it won't have the same result 
                dispatchCurrent({
                    type:'CLEAR',
                    payload:0                    
                })
                ActionHistoryDispatch({
                    type:'CLEAR',
                })
                calculationDispatch({
                    type:'CLEAR'                    
                })
                dispatchLastPress({
                    type:'CLEAR'                    
                })
            }       
            
        console.log(currentState)

    }
    const prefixClicked= ()=>{
        if(lastPressState=="ACTION"){
            alert('Can not make +- after another ACTION')
            return undefined;
        }
        if(lastPressState=="DIGIT"){
            dispatchCurrent({
                type:'OPPOSITE_PREFIX', })
        }
        if(lastPressState=="="){
            calculationDispatch({
                type:'OPPOSITE_PREFIX' })
        }
        console.log(currentState)

        if(currentState===0 && lastPressState!="="){
            alert('0 is not + nor - \nYou can do better XD')

        }       
    }

    const percentClicked= ()=>{
        if(lastPressState=="ACTION"){
            alert('Can not make % after another ACTION')
            return undefined;
        }
        if(lastPressState=="DIGIT"){
            dispatchCurrent({
                type:'PERCENT_SIGN',
            })
        }
        if(lastPressState=="="){
            calculationDispatch({
                type:'PERCENT_SIGN',
            })
        }
 
      
    }
    const divideEvent= ()=>{
        console.log(ActionHistoryState)
        // (+-*/) ////  (6+3=,/2)
        if (!legalOrderButtonPress(lastPressState,dispatchCurrent)){
             return 
        }   
        if(ActionHistoryState){
            console.log("inside / ActionHistoryState")

            calculationLatestAction(calculationDispatch,ActionHistoryState,currentState)

        }else{  
            calculationDispatch({//needed for first number to enter the state
                type: '/',
                payload: currentState,
                isneededForFirstNumberEnterState:true
            })  
        }        
        console.log( "type: '/'")
        ActionHistoryDispatch({
                type: '/',
            })
        dispatchLastPress({type:'ACTION'})          
    
}
   
    return(
        <div className="Line Line-2">
        <div className= "buttons clear"  onClick={clearClicked}>{renderClearState}</div>
        <div className="buttons prefix" onClick={prefixClicked}>+-</div>
        <div className="buttons %" id="%" onClick={percentClicked}>%</div>
        <div className="buttons /" id="/" onClick={divideEvent}>/</div>
        </div>
    )
}
export default SecondLine