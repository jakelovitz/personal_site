import React, { Component } from 'react';
import styles from './guiding_principles.module.css'
import { FaSchool, FaGlobeAmericas, FaTree } from 'react-icons/fa';


class GuidingPrinciples extends Component {
    render() {

        return (
            <div className={styles.container}>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_one}>Be a Life-Long Learner < FaSchool style={{color: '#DDA0DD'}} size={25}/></h3>
                    <p className={styles.row_two}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim.
                    </p>
                </div>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_three}>Think Big < FaGlobeAmericas style={{color: '#DDA0DD'}} size={25}/></h3>
                    <p className={styles.row_four}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim.
                    </p>
                </div>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_five}>Serve the Public Good < FaTree style={{color: '#DDA0DD'}} size={25}/></h3>
                    <p className={styles.row_six}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim.
                    </p>
                </div>

            </div>
        )
    }
}

export default GuidingPrinciples;