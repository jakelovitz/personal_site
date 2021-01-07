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


            <div className={styles.content}>
                <div>
                    <img className={styles.img} src={process.env.PUBLIC_URL + '/OG.png'} alt="your humble web developer" />
                </div>

            <h2 className={styles.text}>Jake, your humble webhost</h2>


                <GuidingPrinciples/>

            </div>
        </div>
        
        <Footer />
        </React.Fragment>
    );
}

export default BasicInfoContainer;