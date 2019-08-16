import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import styles from './container.module.css'
import ButtonPanel from './button_panel'
import ResumeComponent from './resume_component'

class ResumeContainer extends Component {

    state = {
        resumeComponent: null
    }

    handleClick = (event) => {
        this.setState({ resumeComponent: event.target.name })
    }

    render() {
        console.log(this.state)
        return (


            <React.Fragment>
            <Navbar />

            <div className={styles.container}>

            <ButtonPanel handleClick={this.handleClick}/>
                
            <ResumeComponent selectedPortion={this.state.resumeComponent} />
            </div>

            </React.Fragment>

        );
    }
}

export default ResumeContainer;