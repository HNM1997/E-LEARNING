const stateDefault = {
    credential: null,
}

export const UserReducer = (state = stateDefault,action) => {
    switch(action.type){
        case FETCH_CREDENTIAL :{
            state.credential = action.payload
        }
        default: return {...state}
    }
}