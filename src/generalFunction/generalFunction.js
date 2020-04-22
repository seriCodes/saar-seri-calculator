

const resetCalculationStateAndActionHistoryStateIfNecessary= (lastPressState,calculationDispatch,ActionHistoryDispatch)=>{
    if(lastPressState=='='){//prevent unwanted caculation with past calculation state: 1+2=3, 0.1+1
        console.log('calculationDispatch CLEAR')
                    calculationDispatch({
                        type: 'CLEAR',
                        payload:0
                    })
            ActionHistoryDispatch({//the complete reset is necessary  
                type: 'null',
            })         
            }
}
export {resetCalculationStateAndActionHistoryStateIfNecessary}
const resetCurrentState = (dispatchCurrent)=>{
    console.log('inside resetCurrentState' )

    dispatchCurrent({
        type: 'CLEAR',
        payload:0
})

}
export {resetCurrentState}
const calculationLatestAction = (calculationDispatch,ActionHistoryState,currentState)=>{
    calculationDispatch({
        type: ActionHistoryState,
        payload: currentState
    })
}
export {calculationLatestAction}
const currentStateResetCheckAndDispatchIfNecessary = (lastPressState,dispatchCurrent)=>{
    console.log("currentStateResetCheckAndDispatchIfNecessary-lastPressState:", lastPressState)

    if(lastPressState==null || 
        lastPressState=='ACTION'||
        lastPressState=='='){
            console.log("activated currentStateResetCheckAndDispatchIfNecessary")
            dispatchCurrent({
            type: 'CLEAR',
            payload:0
        })
    }
}
export {currentStateResetCheckAndDispatchIfNecessary}
const legalOrderButtonPress = (lastPressState)=>{
    if(lastPressState!='DIGIT' &&//+-*/
    lastPressState!='=' ){
    // lastPressState!='.'){//DOT press Contril was taken care of
       alert('oreder incorrect\nit is still the last math operation')
       return false
   }
   return true

 
}
export {legalOrderButtonPress}


    