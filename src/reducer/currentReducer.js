
const currentReducer=(   state,action)=>{
    console.log(state)
    console.log(action.type)

    switch(action.type){
        case 'OPPOSITE_PREFIX':
        return -1*state
        case 'PERCENT_SIGN':
            return (state/100);
    
        case 'CLEAR':    

        return 0// 0 and take care of the hidden unchanged output state
        case '=': 
        console.log('=')
        return  action.payload
        case 'ADD_DIGIT': 
        console.log('ADD_DIGIT')
        if(state===0 && action.payload!='.'){
            console.log('state', state)

            console.log('state===0', state===0)

            return action.payload
        }else if(action.payload==='.')
            {
                console.log(state)
                console.log("action.payload==='.")

                if(state % 1 === 0){
                    console.log('first dot click')

                    return  state+'.'// first dot click
                }else{
                    console.log('SECOND dot click')

                    return  state//9.3.8=>9.38
                }
        }else{
            let numberString= state+""+action.payload
            if(action.payload==0){
                return numberString
            }
            let numberStringParsed=Number(numberString)
            return  numberStringParsed       
        }      
                
        default: //ALLCLEAR
        console.log('turn 0')
        return  0
    }
}
export default currentReducer