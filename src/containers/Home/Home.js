import React, {Component} from 'react';
import classes from './Home.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

class Home extends Component { 
    render () {
        let styleContainer = "container " + classes.Home;
        return (
            <div>
                <Header /> 
                <div className={styleContainer}>
                    <div className="row">
                        <h1>Welcome!!!!!!!!!!!</h1>
                    </div> 
                </div>
                <Footer />
            </div> 
        );
    }
}

export default Home;