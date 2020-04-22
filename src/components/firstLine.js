import React, {useLayoutEffect,useState,useEffect, useContext} from "react";
import {CurrentContext} from '../contexts/currentContext'
import currentReducer from '../reducer/currentReducer'
import {CalculationContext} from '../contexts/calculationContext'
import {LastPressContext} from '../contexts/lastPressContext'



const FirstLine= ()=>{
    const {currentState} = useContext(CurrentContext);
    const {calculationState} = useContext(CalculationContext);

    const [renderResult,setRenderResult] = useState(0)
    const {lastPressState}=React.useContext(LastPressContext)    

        useEffect (()=>{

        const LineOneElement= document.getElementById("line1")

        console.log(LineOneElement)
        console.log('LineOneElement.clientWidth', LineOneElement.clientWidth)
        let LineOneElementClientWidthString=LineOneElement.clientWidth
        console.log(LineOneElementClientWidthString)

        const resultElement= document.getElementsByClassName("result")[0]
        console.log("resultElement.clientWidth before font-size Change", resultElement.clientWidth)
        
        resultElement.style.fontSize="1.5em"

        while( resultElement.clientWidth> LineOneElement.clientWidth){
            console.log("resultElement.clientWidth> LineOneElement.clientWidth")
            console.log(resultElement.style.fontSize)
            let fontSizeLength= resultElement.style.fontSize.length
            console.log(fontSizeLength)

            let fontSizeStringObjInNumbersOnly=resultElement.style.fontSize.substr(0, fontSizeLength-2 );

            console.log(fontSizeStringObjInNumbersOnly)

            console.log(Number(fontSizeStringObjInNumbersOnly))
            let fontSizeInNumberFormat= Number(fontSizeStringObjInNumbersOnly);
            resultElement.style.fontSize= (fontSizeInNumberFormat-0.1) +"em"

            
            console.log(resultElement.style.fontSize)

        }
        console.log(resultElement)
         console.log(resultElement.style)
         
         console.log("resultElement.clientWidth AFTER font-size Change", resultElement.clientWidth)

         console.log(resultElement.innerHTML)
         console.log((resultElement.innerHTML+"").length)
    })
    useEffect(()=>{
        console.log(currentState)

        setRenderResult(renderProcess(currentState)) 
        },[currentState])
    useEffect(()=>{
        setRenderResult(renderProcess(calculationState)) 
    }
,[calculationState])
useEffect(()=>{
    //for rendering unchanged calculationState:(result+0)
    if(lastPressState=='='){
        setRenderResult(renderProcess(calculationState)) 
    }
        //for rendering unchanged currentState:(3+3+3+3...=, 3 pressed )
        console.log(lastPressState)
    if (lastPressState=='DIGIT'){
        setRenderResult(renderProcess(currentState)) 
    }
}
,[lastPressState])

const  renderProcess= (renderState)=>{
    if(isNaN(renderState)) {
        console.log(renderState)
         
            if(renderState[renderState.length-1]=='.'){     
            return renderState
        }else{
            return 'output is NaN'    
        }
    }else{
        return   renderState
    }
}
    return(
  
        
        <div div className="Line Line-1" id="line1" >
    
        <div div className="result"  >
        
        {renderResult}        </div>
       </div>
   
    

    )
}
export default FirstLine