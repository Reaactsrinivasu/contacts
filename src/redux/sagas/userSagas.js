import {call,all,fork,put,delay,take,takeEvery,takeLatest} from 'redux-saga/effects';
import { 
loadUsersSuccess,
loadUsersError ,
createUserSuccess,
createUserError,
deleteUserSuccess,
deleteUserError ,
updateUserSuccess,
updateUserError

} from '../actions/actions';
import * as types from '../actions/actionTypes';
import { loadUserApi,createUserApi,deleteUserApi, updateUserApi} from '../api';
  
export function* onLoadUsersStartAsync (){
        try {
            const response = yield call(loadUserApi);
            // console.log("resp",response);
            if (response.status === 200) {
                yield delay(500);
                yield put(loadUsersSuccess(response.data));
            }
        } catch (error) {
            yield put(loadUsersError(error.response.data));
            
        }
}
export function* onCreateUserStartAsync ({payload}){
        try {
            const response = yield call(createUserApi,payload);
            // console.log("resp",response);
            if (response.status === 200) {
                // yield delay(500);
                yield put(createUserSuccess(response.data));
                // yield put(onLoadUsers());
            }
        } catch (error) {
            yield put(createUserError(error.response.data));
            
        }
}


export function* onDeleteUsersStartAsync(userId){

    try {
        const response = yield call(deleteUserApi,userId);
        // console.log("resp",response);
        if (response.status === 200) {
            yield delay(500);
            yield put(deleteUserSuccess(userId));
        }
    } catch (error) {
        yield put(deleteUserError(error.response.data));
        
    }

}
            
            export function* onUpdateUserStartAsync (payload){
                console.log("updatedData",payload.payload[0]);
                let id = payload.payload[0].id;
                const payloadData = payload.payload[0].addUserData;

            try {
                const response = yield call(updateUserApi,id,payloadData);
                // console.log("resp",response);
                if (response.status === 200) {
                    // yield delay(500);
                    yield put(updateUserSuccess(response.data));
                    // yield put(onLoadUsers());
                }
            } catch (error) {
                yield put(updateUserError(error.response.data));
                
            }
        }



export function* onLoadUsers(){
    yield takeEvery(types.LOAD_USERS_START,onLoadUsersStartAsync);
}
export function* onCreateUser(){
    yield takeLatest(types.CREATE_USER_START,onCreateUserStartAsync);
}
export function* onDeleteUser(){
    while (true) {
        const {payload : userId} =  yield take(types.DELETE_USER_START);
        yield call(onDeleteUsersStartAsync, userId);
        
    }
}

export function* onUpdateUser(){
    yield takeLatest(types.UPDATE_USER_START,onUpdateUserStartAsync);
}
const userSagas =[fork(onLoadUsers),fork(onCreateUser),fork(onDeleteUser),fork(onUpdateUser)];
export default function* rootSaga(){
    yield all([...userSagas]);
}

    
    
     

