import React, { Component } from 'react';
import styles from './guiding_principles.module.css'


class GuidingPrinciples extends Component {
    render() {

        return (
            <div className={styles.container}>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_three}>Quality Assurance Specialist</h3>
                    <p className={styles.row_four}>
                        I have three years of professional experience in QA, and worked on projects including the first national obstetrical outcomes registry in the US to website for major American universities. My experience in QA has left me proficient in manual software testing, cross-browser testing, and test plan validation.
                    </p>
                </div>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_one}>Full-Stack Web Development skills</h3>
                    <p className={styles.row_two}>
                        I'm well versed in several programming languages, including Ruby on Rails, JavaScript, React, Redux, HTML, and CSS, including CSS-in-JS. Check out my portfolio!
                    </p>
                </div>

                <div className={styles.wrapper}>
                    <h3 className={styles.row_five}>Voracious Reader</h3>
                    <p className={styles.row_six}>
                        When not coding, I can usually be found with a book in hand. I'm currently reading <span>The Fate of Rome</span>, by Kyle Harper, and <span>The City and the City</span>, by China Miéville.
                    </p>
                </div>

            </div>
        )
    }
}

export default GuidingPrinciples;