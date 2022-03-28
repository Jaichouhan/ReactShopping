export default Reducer = (state=0,action) => {
    if(action.type ===  "data"){
        return state + action.payload
    }
    else{
        return state;
    }
}