import React, { Component } from 'react';
import styles from './button_panel.module.css'

class ButtonPanel extends Component {

    generateButtons = (array) => {
        return array.map(function(object) {
            return <button className={styles.button} name={object.componentName} onClick={event => this.props.handleClick(event)}>{object.componentDisplay}</button>
        }, this);
    }

    render() {

        return(

            <div className={styles.button_container}>
                {this.generateButtons(this.props.array)}
            </div>
           
        )
    }
}

export default (ButtonPanel)