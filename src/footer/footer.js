import React, { Component } from 'react';
import styles from './footer.module.css'
import { Route } from 'react-router-dom'
import Pdf from '../Lovitz-Resume.pdf';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return(
            <footer>
                <Route>
                    <nav className={styles.footer}>

                        <div className={styles.one}>
                            <p className={styles.oneone}>Jake Lovitz</p>
                            <p className={styles.onetwo}>jakelovitz@gmail.com</p>
                        </div>
                        
                        <div className={styles.two}>
                            <Link className={styles.twoone} to="/resume">Resume</Link>
                            <a className={styles.twotwo} href="https://github.com/jakelovitz" target="_blank" rel="noopener noreferrer">Github</a>
                        </div>

                        <div className={styles.three}>
                            <Link className={styles.threeone} to="/portfolio">Portfolio</Link>
                            <a className={styles.threetwo} href="https://medium.com/@jakelovitz" target="_blank" rel="noopener noreferrer">portfolio</a>
                        </div>

                        {/* <a className={styles.four} href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Resume!</a> */}

                    </nav>
                </Route>
            </footer>
        )
    }
}

export default Footer