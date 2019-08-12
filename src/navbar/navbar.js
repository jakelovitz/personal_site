import React, { Component } from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return(
            <header>
                <nav className={styles.navbar}>

                <Link className={styles.one} to="/">About Jake</Link>
                    
                <Link className={styles.two} to="/resume">Resume</Link>

                <div className={styles.three}>Portfolio</div>

                </nav>

            </header>
        )
    }
}

export default Navbar