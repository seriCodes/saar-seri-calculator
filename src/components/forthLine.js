import React from "react";
import {CurrentContext} from '../contexts/currentContext'
import {ActionsHistoryContext} from '../contexts/actionsHistoryContext'
import {CalculationContext} from '../contexts/calculationContext'
import {LastPressContext} from '../contexts/lastPressContext'
import {currentStateResetCheckAndDispatchIfNecessary,calculationLatestAction, resetCurrentState,resetCalculationStateAndActionHistoryStateIfNecessary } from "../generalFunction/generalFunction";

const ForthLine= ()=>{
    const {currentState, dispatchCurrent}=React.useContext(CurrentContext)

    const { ActionHistoryState ,ActionHistoryDispatch} = React.useContext(ActionsHistoryContext)
    const { calculationState,calculationDispatch} = React.useContext(CalculationContext)
    const {lastPressState, dispatchLastPress}=React.useContext(LastPressContext)    

    const fourClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)

        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)

        dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:4
        })    
        dispatchLastPress({type:'DIGIT'})  
    }
    const fiveClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)

        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)

        dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:5
        })
        dispatchLastPress({type:'DIGIT'})  

    }

    const sixClicked= ()=>{
        currentStateResetCheckAndDispatchIfNecessary(lastPressState,dispatchCurrent)

        resetCalculationStateAndActionHistoryStateIfNecessary(lastPressState,calculationDispatch,ActionHistoryDispatch)

        dispatchCurrent({
            type: 'ADD_DIGIT',
            payload:6
        })
        dispatchLastPress({type:'DIGIT'})  

    }
    const minusEvent= ()=>{
        console.log(ActionHistoryState)

        if(ActionHistoryState){
            console.log("inside minus, ActionHistoryState is",ActionHistoryState )
             if(ActionHistoryState=='+'&& lastPressState=='ACTION'){ //1+-2=>1-2   //case of 1-+2=>1+-2 is taken care in +Event
                ActionHistoryDispatch({
                    type: '-',
                })
             }
            console.log("inside minus, lastPressState is",lastPressState )
            
           
            if((ActionHistoryState=='+'&& lastPressState=='DIGIT')|| //1+2-4=>3-4 DIGIT+ DIGIT -DIGIT
            ((ActionHistoryState=='X' || ActionHistoryState=='/')&& lastPressState=='DIGIT' )|| //3X2-4=>6-4||1/2-3=>0.5-3 DIGITX OR / DIGIT -DIGIT
            (ActionHistoryState=='-' && lastPressState=='DIGIT')//3-5-7=>-2-7 DIGIT - DIGIT -DIGIT
            ){
                console.log("calculationLatestAction " )
                calculationLatestAction(calculationDispatch,ActionHistoryState,currentState)

                resetCurrentState(dispatchCurrent)
            }
            if(ActionHistoryState=='-' && lastPressState=='ACTION'){//3--2=>3+2
                console.log("DIGIT -- DIGIT " )
                ActionHistoryDispatch({
                    type: '+',
                })
            } 
                if((ActionHistoryState=='X' || ActionHistoryState=='/') && lastPressState=='ACTION'){//3X-9 , 3/-9
                    console.log("DIGIT X- DIGIT " )                    
                    calculationDispatch({
                        type:'OPPOSITE_PREFIX' })                   
                }
                return//NECASSARY!
            
        }else{          
       
            // if (calculationState==0){}//not needed bc it's always be 0 in this situation
            calculationDispatch({//needed for first number to enter the state=
                type: '-',
                payload: currentState,
                isneededForFirstNumberEnterState:true
            })
        }
        console.log( "type: '-'")
            ActionHistoryDispatch({
                type: '-',
            })
            dispatchLastPress({type:'ACTION'})                 
    }
    
    return(
        
        <div className="Line Line-4"> 
        <div className="buttons line-5__4" id="4" onClick={fourClicked}>4</div>
        <div className="buttons line-4__5" id="5" onClick={fiveClicked}>5</div>
        <div className="buttons line-5__6" id="6" onClick={sixClicked}>6</div>
        <div className="buttons line-5__-" id="-" onClick={minusEvent}>-</div>
        </div>
        
           )
}
export default ForthLine