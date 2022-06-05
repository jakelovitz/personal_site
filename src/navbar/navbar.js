import React, { Component } from 'react';
import styles from './navbar.module.css'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Pdf from '../Lovitz-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class NavBar extends Component {
    render() {
        return(
            <header>
                <Route>
                    <nav className={styles.NewNavbar}>

                        <div className={styles.SectionA}>
                            <Link className={styles.sectionB} to="/">Jake Lovitz</Link>
                        </div>

                        <div className={styles.SectionB}>
                            <Link className={styles.sectionB} to="/resume">Resume</Link>
                        </div>
                        
                        {/* <div className={styles.SectionC}>
                            <p className={styles.onetwo}>jakelovitz@gmail.com</p>
                        </div> */}

                        <div className={styles.SectionD}>
                        
                            <a className={styles.threeone} href="https://linkedin.com/in/jakelovitz/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                                
                            <a href="https://github.com/jakelovitz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                                
                            <a href="https://medium.com/@jakelovitz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium}/></a>
                        
                        </div>
                    </nav>
                </Route>
            </header>
        )
    }
}

export default NavBar