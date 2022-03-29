export default Api = (deatils) => {
    return(dispatch) => {
        dispatch({
            type:"data",
            payload: user
        })
    }
}

export default Button = () =>{
    return(dispatch) => {
        dispatch({
            type:"Increment",
            payload: amount
        })
    }
}