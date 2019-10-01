import { actionsType } from './constants';

const {
    GET_DATA,
    ADD_TO_CART,
    MODAL_CLICK,
    CLOSE_MODAL,
    FETCH_LIST,
    PRODUCT_PAGE,
    CHECK_OUT,
    HANDLE_DELETE,
    ADD_ITEM_FROM_MODAL,
    HANDLE_CHANGE,
    GET_VALUE,
    GET_USER_DATA,
    SHOW_USER_DATA,
    GET_MODE,
    LOG_OUT,
    FETCH_WAITING,
    FETCH_FAILED,
    GET_AUTH_TOKEN
    
} = actionsType;


export const getData=()=>({
    type : GET_DATA
});
export const addToCart= id => ({
    type : ADD_TO_CART,
    id
});
export const modalClick= product => ({
    type : MODAL_CLICK,
    product
});
export const closeModal=() => ({
    type : CLOSE_MODAL
});
export const fetchListItem = Json => ({
    type : FETCH_LIST,
    Json
});
export const productPage= item => ({
    type : PRODUCT_PAGE,
    item
})
export const checkOut= () => ({
    type : CHECK_OUT
})
export const handleDelete= id => ({
    type : HANDLE_DELETE,
    id
})
export const addItemFromModal= item => ({
    type : ADD_ITEM_FROM_MODAL,
    item
})
export const handleChange= ({pageNumber,info}) => ({
    type : HANDLE_CHANGE,
    pageNumber,
    info
});
export const getValue= inputValue => ({
    type : GET_VALUE,
    inputValue
})
export const getUserData= () => ({
    type : GET_USER_DATA,
})
export const showUserData= userData => ({
    type : SHOW_USER_DATA,
    userData
})
export const getMode= () => ({
    type : GET_MODE,
})
export const logOut= () => ({
    type : LOG_OUT,
})
export const fetchWaiting = () => ({
    type : FETCH_WAITING
})
export const fetchFailed = () => ({
    type : FETCH_FAILED
})
export const getAuthToken = authToken =>({
    type:GET_AUTH_TOKEN,
    authToken
})


