import * as types from '../actions/actionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null
};


const usersReducer = (state = initialState, action)=>{
    switch (action.type) {
        //getting user details
        case types.LOAD_USERS_START:
                                
            return {
                ...state,
                loading: true
            };
        case types.LOAD_SINGLE_USER:
                                
            return {
                ...state,
                loading: true, 
                // loading: false ,
                users:action.payload
            };
        case types.LOAD_USERS_SUCCESS:
            return {
                ...state,
                loading: false ,
                users:action.payload
            };
            case types.LOAD_USERS_ERROR:
            return {
                ...state,
                loading: false ,
                error:action.payload
            };
            //adding new user details
        case types.CREATE_USER_START:
            return {
                ...state,
                loading: true
            };
        case types.CREATE_USER_SUCCESS:
            return {
                ...state,
                loading: false ,
            };
            case types.CREATE_USER_ERROR:
            return {
                ...state,
                loading: false ,
                error:action.payload
            };

            //deleting existing user details
        case types.DELETE_USER_START:
            return {
                ...state,
                loading: true
            };
        case types.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false ,
                users: state.users.filter((item)=>item.id !== action.payload),
            };
            case types.DELETE_USER_ERROR:
            return {
                ...state,
                loading: false ,
                error:action.payload
            };


            //updating existing user details
        case types.UPDATE_USER_START:
            return {
                ...state,
                loading: true
            };
        case types.UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading: false ,
            };
            case types.UPDATE_USER_ERROR:
            return {
                ...state,
                loading: false ,
                error:action.payload
            };
            default:
            return state;
    }

}
export default usersReducer;