import React from 'react';
import Navbar from '../navbar/navbar';
import styles from './basic_info_styling.module.css'
import GuidingPrinciples from './guiding_principles'

function BasicInfoContainer() {
    return (

        <React.Fragment>
        <Navbar />
        <div className={styles.container}>
            <h2 className={styles.text}>A Portrait of your humble web developer</h2>
            <img className={styles.img} src={process.env.PUBLIC_URL + '/LovitzStraw.png'} />
            <GuidingPrinciples />

        </div>
        </React.Fragment>
    );
}

export default BasicInfoContainer;