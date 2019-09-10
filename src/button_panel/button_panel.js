import React, { Component } from 'react';
import styles from './button_panel.module.css'

class ButtonPanel extends Component {

    generateButtons = (array) => {
        return array.map(function(object) {

            if (object.type === 'button') {
                return <button className={styles.button} name={object.componentName} onClick={event => this.props.handleClick(event)}>{object.componentDisplay}</button>
            } else {
                return <a className={styles.buttonCostume} href = {object.link} target = "_blank" rel="noopener noreferrer">{object.componentDisplay}</a>
            }
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