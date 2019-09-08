import React, { Component } from 'react';
import styles from './footer.module.css'
import { Route } from 'react-router-dom'

class Footer extends Component {
    render() {
        return(
            <footer>

                <Route>
                <nav className={styles.footer}>

                <a className={styles.one} href="https://github.com/jakelovitz" target="_blank" rel="noopener noreferrer">Github</a>
                
                <a className={styles.two} href="https://linkedin.com/in/jakelovitz/" target="_blank" rel="noopener noreferrer">LinkedIn</a>

                <a className={styles.three} href="https://medium.com/@jakelovitz" target="_blank" rel="noopener noreferrer">Blog</a>

                <p className={styles.four} >jakelovitz@gmail.com / 914-438-7994</p>

                </nav>
                </Route>
            </footer>
        )
    }
}

export default Footer