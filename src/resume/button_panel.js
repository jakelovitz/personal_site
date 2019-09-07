import React, { Component } from 'react';
import styles from './button_panel_styling.module.css'
import Pdf from '../Lovitz-Resume.pdf';

class ButtonPanel extends Component {

    render() {
        return(
          <React.Fragment>

            <div className={styles.button_container}>
                <button name="experience" className={styles.button} onClick={event => this.props.handleClick(event)}>Experience</button>
                <button name="education" className={styles.button} onClick={event => this.props.handleClick(event)}>Education</button>
                <button name="skills" className={styles.button} onClick={event => this.props.handleClick(event)}>Skills</button>
                
                <a className={styles.buttonCostume} href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Resume!</a>
            </div>

            </React.Fragment>
        )
    }
}

export default (ButtonPanel)