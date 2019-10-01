import { all, put, takeEvery } from 'redux-saga/effects';
import axios from "axios";
import { fetchListItem, showUserData, fetchWaiting, fetchFailed } from "./../actions";
import ApiService from './../apiService/apiservice'
import { actionsType } from './../actions/constants' 

const { GET_DATA, CHECK_OUT, GET_USER_DATA } = actionsType;

const apiService=new ApiService();

function* fetchList(){
  yield put(fetchWaiting())
  const json=yield axios.get('http://5c18eb2ccfe31000133b17a2.mockapi.io/product-items',
    apiService.getRequest());

    if(json.status === 200)
      yield put(fetchListItem(json));
    else
      yield put(fetchFailed())
      
}
function* fetchUserInfo(){
  const json=yield axios.get('http://localhost:3000/posts',
    apiService.getRequest())
  const Json=json.data;    
  yield put(showUserData(Json))  
}
function* actionWatcher(){
  yield takeEvery(GET_DATA,fetchList);
  yield takeEvery(CHECK_OUT,fetchList);
  yield takeEvery(GET_USER_DATA,fetchUserInfo);
}

export default function* rootSaga(){
  yield all([actionWatcher()])
}




