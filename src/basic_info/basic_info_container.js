import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from './basic_info_styling.module.css'
import GuidingPrinciples from './guiding_principles'

function BasicInfoContainer() {
    return (

        <React.Fragment>
        <Navbar />

        <div className={styles.container}>

            <h2 className={styles.text}>Your Humble Web Developer</h2>

            <div className={styles.img_col}>
                <img className={styles.img} src={process.env.PUBLIC_URL + '/OG.png'} alt="your humble web developer" />
            </div>

            <h2 className={styles.principles_header}>Jake Lovitz, at a glance</h2>
            <GuidingPrinciples className={styles.principles_text}/>

        </div>
        
        <Footer />
        </React.Fragment>
    );
}

export default BasicInfoContainer;