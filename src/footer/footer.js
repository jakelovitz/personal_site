import React, { Component } from 'react';
import styles from './footer.module.css'
import { Route } from 'react-router-dom'
import Pdf from '../Lovitz-Resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMedium, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

class Footer extends Component {
    render() {
        return(
            <footer>
                <Route>
                    <nav className={styles.NewFooter}>

                        <div className={styles.SectionA}>
                            <p className={styles.oneone}>Jake Lovitz</p>
                           
                        </div>

                        <div className={styles.SectionB}>
                            <a href = {Pdf} target = "_blank" rel="noopener noreferrer">Download Resume!</a>
                        </div>
                        
                        <div className={styles.SectionC}>
                            <p className={styles.onetwo}>jakelovitz@gmail.com</p>
                           
                        </div>

                        <div className={styles.SectionD}>
                        
                            <a className={styles.threeone} href="https://linkedin.com/in/jakelovitz/" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin}/>
                            </a>
                                
                            <a href="https://github.com/jakelovitz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                                
                            <a href="https://medium.com/@jakelovitz" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMedium}/></a>
                        
                        </div>
                    </nav>
                </Route>
            </footer>
        )
    }
}

export default Footer