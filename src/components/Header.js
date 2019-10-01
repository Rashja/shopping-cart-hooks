import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../actions/index';
import SearchInput from "./SearchInput";
import { withRouter } from "react-router"
import { Button } from 'reactstrap';

class  Header extends React.Component{
    handleLogOut = () => {
        const { logOut }=this.props;
        logOut()
        localStorage.removeItem('auth');
        this.props.history.push('./Login')
    }
    render(){
        const title='Enjoy Your Shopping';
        return(
            <div>
                <Button color='danger' onClick={this.handleLogOut} >Log Out</Button>
                <h1 className="header">{title}</h1>
                <SearchInput />
            </div>
        )
    }
}
const mapDispatchToProps=dispatch=>({
    logOut:()=>dispatch(logOut())
})
export default withRouter(connect(null,mapDispatchToProps)(Header));