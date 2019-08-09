import React, { Component } from 'react';
import styles from './guiding_principles.module.css'

class GuidingPrinciples extends Component {
    render() {

        return (
            <div className={styles.container}>

                <h1 className={styles.header}>Guiding Principles</h1>

                <h3 className={styles.one}>Be a Life-Long Learner</h3>

                <p className={styles.row_one}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
                </p>

                <h3 className={styles.two}>Think Big</h3>

                <p className={styles.row_two}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
                </p>

                <h3 className={styles.three}>Serve the Public Good</h3>

                <p className={styles.row_three}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor sed viverra ipsum nunc aliquet bibendum enim. In massa tempor nec feugiat. Nunc aliquet bibendum enim facilisis gravida. Nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper.
                </p>

            </div>
        )
    }
}

export default GuidingPrinciples;