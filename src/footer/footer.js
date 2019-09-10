import React, { Component } from 'react';
import styles from './footer.module.css'
import { Route } from 'react-router-dom'
import Pdf from '../Lovitz-Resume.pdf';

class Footer extends Component {
    render() {
        return(
            <footer>

                <Route>
                <nav className={styles.footer}>

                <a className={styles.one} href="https://github.com/jakelovitz" target="_blank" rel="noopener noreferrer">Github</a>
                
                <a className={styles.two} href="https://linkedin.com/in/jakelovitz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                <a className={styles.three} href="https://medium.com/@jakelovitz" target="_blank" rel="noopener noreferrer">Blog</a>

                <a className={styles.four} href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Resume!</a>

                <p className={styles.five} >jakelovitz@gmail.com</p>

                </nav>
                </Route>
            </footer>
        )
    }
}

export default Footer