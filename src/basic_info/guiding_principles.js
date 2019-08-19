import React, { Component } from 'react';
import styles from './guiding_principles.module.css'
import { FaSchool, FaGlobeAmericas, FaTree } from 'react-icons/fa';


class GuidingPrinciples extends Component {
    render() {

        return (
            <div className={styles.container}>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_one}>Full-Stack Web Developer</h3>
                    <p className={styles.row_two}>
                        <ul>Proficient in Ruby on Rails, JavaScript, React, Redux, HTML, and CSS, including CSS-in-JS</ul>
                        <ul>Solid understanding of Object Oriented Programming</ul>
                        <ul>Professional experience in Quality Assurance, user-focused design, Agile software development in scrum teams, and technical documentation.</ul>
                    </p>
                </div>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_three}>Life-Long Learner </h3>
                    <p className={styles.row_four}>
                        Education is a life-long pursuit. People are at their best when they never stop learning, and growing, both professionally and personally. Pursue new interests and opportunities. Be honest about what you don’t know, and be eager to learn.
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