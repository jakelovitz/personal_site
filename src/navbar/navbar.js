import React, { Component } from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

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

                <Link className={styles.three} to="/portfolio">Portfolio</Link>

                </nav>

            </header>
        )
    }
}

export default Navbar