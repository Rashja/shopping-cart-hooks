const initialState={mode:false,userData:[],authToken:''};

const userReducer=(state=initialState,action)=>{
    switch(action.type){

        case 'SHOW_USER_DATA':
            return {
                ...state,
                userData:action.userData,
                mode:false
            }
        case 'GET_AUTH_TOKEN':
            return {
                ...state,
                authToken:action.authToken
            }
        case 'GET_MODE':
            return {...state,mode:true}
        
        case 'LOG_OUT':
            return {...state,mode:false,authToken:''}

        default:
            return state;
    }
}
export default userReducer;