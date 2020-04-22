
const historysReducer= (state,action)=>{
    switch(action.type){
        case '+':
            console.log('ActionHistoryDispatch +')

        return'+'
        case '-':
            console.log(action.payload)
            return'-'
        case '/':
            console.log( "case: '/'  from ActionHistoryDispatch")

            return '/'
        
        case 'X':

        return 'X'
                
        case '=':

        return "="
        case 'CLEAR':

        return null
        default:
            return null
 
    }

}
export default historysReducer