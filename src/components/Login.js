import React from 'react';
import { connect } from "react-redux";
import { getUserData, getMode, getAuthToken } from './../actions/index';
import { Container,Col,Row,Form,FormGroup,Label,Input,Button } from 'reactstrap';
import uuid from 'uuid';

class Login extends React.Component{
    state={
        userText:'',
        passwordText:''
    }
    componentDidMount(){
        if(localStorage.getItem('auth') === this.props.userReducer.authToken){
            this.props.history.push('/Products');
        }else{
            if(this.props.userReducer && this.props.userReducer.userData.length === 0){
                this.props.getUserData()
                }
        }
    }
    handleUser= e => {
        this.setState({userText:e.target.value.trim()})
    }
    handlePassword= e => {
        this.setState({passwordText:e.target.value.trim()})
    }
    handleForm= e => {
        e.preventDefault();
        const {userData}=this.props.userReducer;
        const {userText,passwordText}=this.state;
        const findUser = ({username,password}) => {
            return username === userText && password === passwordText
        }
        if(userData.find(findUser)){
            const auth = uuid();
            this.props.getAuthToken(auth)
            localStorage.setItem('auth',auth);
            this.props.getMode();
            this.props.history.push('/Products');
        }
        return false
    }
    render(){
        return(
            <Container>
                <Row className='justify-content-sm-center' >
                    <Col sm={3} >
                        <Form className='loginForm' onSubmit={this.handleForm} >
                            <FormGroup>
                                <Label for='username' >username</Label>
                                <Input type='text' placeholder='username' onChange={this.handleUser} />
                            </FormGroup>
                            <FormGroup>
                                <Label for='username' >password</Label>
                                <Input type='password' placeholder='password' onChange={this.handlePassword} />
                            </FormGroup>
                            <Button 
                                className='d-block' 
                                color='info' 
                                children={'Log In'}
                                disabled={this.state.userText === '' && this.state.passwordText === ''}
                            />
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const mapStateToProps=state=>({
    userReducer:state.userReducer
})
const mapDispatchToProps=dispatch=>({
    getUserData:()=>dispatch(getUserData()),
    getMode:()=>dispatch(getMode()),
    getAuthToken:(authToken)=>dispatch(getAuthToken(authToken))
})
export default connect(mapStateToProps,mapDispatchToProps)(Login);