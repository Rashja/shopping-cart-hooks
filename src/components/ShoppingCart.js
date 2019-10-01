import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { connect } from "react-redux";
import Header from "./Header";
import Products from "./Products";
import { getData } from "./../actions";
import ProductModal from "./ProductModal";
import Loading from './Loading';
import {Container} from 'reactstrap';

const ShoppingCart =(props)=>{
  const dispatch = useDispatch();
  const mapState=useSelector(state =>({
    productsReducer: state.productsReducer,
    productsIsLoaded: Object.keys(state.productsReducer.products).length
  }))
  useEffect(()=>{
    if (!mapState.productsIsLoaded) {
      dispatch(getData())
    }
  },[])
  
    return (
      <Fragment>
        {mapState.productsReducer.loading ? <Loading /> :
        <Container fluid >
          <Header />
          <Products />
          <ProductModal />
        </Container>}
      </Fragment>
    );
}

export default ShoppingCart;
