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
                    <h3 className={styles.row_five}>Voracious Reader</h3>
                    <p className={styles.row_six}>
                        When not coding, I can usually be found with a book in hand. My favorite genres are an interesting mix of historical non-fiction and science fantasy. I'm currently reading <span>The Fate of Rome</span>, by Kyle Harper, and <span>The Fall of Hyperion</span>, by Dan Simmons.
                    </p>
                </div>

            </div>
        )
    }
}

export default GuidingPrinciples;