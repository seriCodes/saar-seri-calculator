
const  calculationReducer= (state,action)=>{
    if(typeof(action.payload)== "string"){//0.0+9 =>0+9 , 0.+9=>0+9
        console.log(action.payload)

        action.payload= Number(action.payload)
       console.log("action.payload was converted to number")

    }
    if(typeof(state)== "string"){
        state= Number(state)
        console.log("state was converted to number")

     }
 
     console.log(state)
     console.log(action.payload)

    switch(action.type){
            case '+':    
             console.log('+ case calc redu')

            return state+ action.payload

            case '-':

                if(action.isneededForFirstNumberEnterState){

                    return action.payload
                }
                return  state-action.payload
            case '=':
                console.log('= case calc redu')
                console.log(state)

                    return  state
            case 'X':
                console.log(action.isneededForFirstNumberEnterState)

                if(action.isneededForFirstNumberEnterState){
                    return action.payload
                }
                return  state*action.payload
                case '/':
                    console.log(action.isneededForFirstNumberEnterState)
                    console.log(action)
                    console.log(state)
                    if(action.isneededForFirstNumberEnterState){
                        return action.payload
                    }
                return state/(action.payload);
                case 'PERCENT_SIGN':
                    return state/(100);

                case 'OPPOSITE_PREFIX':
                    return state*(-1);
                case 'CLEAR':
                    return 0;
                    case null:
                    return action.payload;
                default:
            return state
        }
       

}

export default calculationReducer