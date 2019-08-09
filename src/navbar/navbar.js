import React, { Component } from 'react';
import styles from './navbar.module.css'

class Navbar extends Component {
    render() {
        return(
            <header>
                <nav className={styles.navbar}>

                    <div className={styles.one}>Abut Jake</div>

                    <div className={styles.two}>Resume</div>

                    <div className={styles.three}>Portfolio</div>

                </nav>

            </header>
        )
    }
}

export default Navbar