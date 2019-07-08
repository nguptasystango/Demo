import React, {Component} from 'react';
import classes from './Login.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Login extends Component {
    render () {
        return (
            <div>
                <Header /> 
                <h1>Login..........</h1>
                <Footer />
            </div> 
        );
    }
}

export default Login;