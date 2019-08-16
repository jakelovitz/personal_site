import React from 'react';
import Navbar from '../navbar/navbar';
import styles from './basic_info_styling.module.css'
import GuidingPrinciples from './guiding_principles'

function BasicInfoContainer() {
    return (

        <React.Fragment>
        <Navbar />

        <div className={styles.container}>

            <h2 className={styles.text}>Your Humble Web Developer</h2>
            <img className={styles.img} src={process.env.PUBLIC_URL + '/OG.png'} />

            <h2 className={styles.principles_header}>Guiding Principles</h2>
            <GuidingPrinciples className={styles.principles_text}/>

        </div>
        </React.Fragment>
    );
}

export default BasicInfoContainer;