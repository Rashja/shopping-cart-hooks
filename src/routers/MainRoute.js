import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Head from './Head';
import Home from "./Home";
import ShoppingCart from './../components/ShoppingCart';
import Login from './../components/Login';
import NotFounPage from './NotFoundPage';
import ProductPage from './../components/ProductPage';
import Cart from '../components/Cart';


const MainRoute=(props)=>{
    const { userReducer } = props;
    let authRoute=localStorage.getItem('auth') === userReducer.authToken  ? null : <Redirect to='./Login' />
    return(
    <BrowserRouter>
            <Head />
            <Switch>
                <Route  
                    path='/' 
                    component={Home} 
                    exact
                    children={authRoute}
                />
                <Route  
                    path='/Products' 
                    component={ShoppingCart} 
                    exact 
                    children={authRoute}
                />
                <Route  path='/Products/:id' component={ProductPage}  />
                <Route  
                    path='/Cart' 
                    component={Cart}
                    children={authRoute}
                />
                <Route  path='/Login' component={Login}  />
                <Route  component={NotFounPage} />
            </Switch>
    </BrowserRouter>
)}
const mapStateToProps=state=>({
        userReducer:state.userReducer
})
export default connect(mapStateToProps)(MainRoute);