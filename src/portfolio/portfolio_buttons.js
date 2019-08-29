import React, { Component } from 'react';
import styles from './portfolio_buttons_styling.module.css'

class PortfolioButtons extends Component {

    render() {
        return(
          <React.Fragment>

            <div className={styles.button_container}>
            <button name="bugging" className={styles.button} onClick={event => this.props.handleClick(event)}>What's Bugging You?</button>
            <button name="art" className={styles.button} onClick={event => this.props.handleClick(event)}>NYC Art Events</button>
            <button name="fight" className={styles.button} onClick={event => this.props.handleClick(event)}>Fight Simulator</button>
            </div>

            </React.Fragment>
        )
    }
}

export default (PortfolioButtons)