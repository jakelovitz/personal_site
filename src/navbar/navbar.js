import React, { Component } from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Navbar extends Component {


    render() {
        return(
            <header>
                <nav className={styles.navbar}>

                <Link className={styles.one} to="/">
                    <span>Jake Lovitz</span>
                    <span className={styles.onehalf}>AT A GLANCE</span>
                </Link>
                    
                <Link className={styles.two} to="/resume">Resume</Link>

                <div className={styles.three}>

                    <a className={styles.threeone} href="https://linkedin.com/in/jakelovitz/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
    
                    {/* <Link className={styles.threetwo} to="/portfolio">Portfolio </Link> */}
                </div>

                </nav>

            </header>
        )
    }
}

export default Navbar