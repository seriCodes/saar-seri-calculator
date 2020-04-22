
const lastPressReducer=(   state,action)=>{
    console.log(state)
    console.log(action.type)

    switch(action.type){
        case 'ACTION':
        return 'ACTION'
        case 'DIGIT':
        return 'DIGIT'
        case '=':
        return '='
        case null:
        return null
        case 'CLEAR':
        return null
        case '.':
        return '.'
        default: 
        return  'other'
    }
}
export default lastPressReducer