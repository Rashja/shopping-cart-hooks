const initialState={
    products: [],
    currentProduct: undefined, 
    loading:false,
    failed:false,
    success:false 
};

const productsReducer=(state=initialState,action)=>{
        
    switch(action.type){

        case 'FETCH_LIST':
            return {...state, products: action.Json.data, success:true, loading:false, failed:false};

        case 'FETCH_WAITING':
            return {
                ...state, loading:true,failed:false, success:false
            }

        case 'FETCH_FAILED':
            return {
                ...state, 
                failed:true, 
                success:false, 
                loading:false
            }    

        case 'PRODUCT_PAGE':
            return {...state, currentProduct: action.item.id};
        
        case 'ADD_ITEM_FROM_MODAL':
            return {...state, currentProduct: action.item.id};

        case 'HANDLE_DELETE':
        let retriveProduct=state.products[action.id]
            return{
                    ...state,
                    products: {
                        ...state.products,
                        [action.id]:{
                            ...retriveProduct,
                            inventory:retriveProduct.inventory +1
                        }
                    }
                }

        case 'ADD_TO_CART':
            let id=action.id;
            let product=state.products[id]
            return {
                ...state,
                products:{
                    ...state.products,
                    [id]:{
                        ...product,
                        inventory:product.inventory -1
                    }
    
                }
            };
            
        default:
            return state;
    }
}
export default productsReducer;