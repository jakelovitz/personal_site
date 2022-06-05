import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer'
import styles from './basic_info_styling.module.css'

function BasicInfoContainer() {
    return (

        <React.Fragment>
        <Navbar />

        <div className={styles.container}>


            <div className={styles.content}>
                
                <div>
                    <img className={styles.img} src={process.env.PUBLIC_URL + '/OG.png'} alt="your humble web developer" />
                </div>

                <div className={styles.container_two}>

                <div>
                    <h3 className={styles.row_one}>Quality Assurance Specialist</h3>
                    <p className={styles.row_two}>
                        I have three years of professional experience in QA, and worked on projects including the first national obstetrical outcomes registry in the US to website for major American universities. My experience in QA has left me proficient in manual software testing, cross-browser testing, and test plan validation.
                    </p>
                </div>

                <div>
                    <h3 className={styles.row_three}>Full-Stack Web Development skills</h3>
                    <p className={styles.row_four}>
                        I'm well versed in several programming languages, including Ruby on Rails, JavaScript, React, Redux, HTML, and CSS, including CSS-in-JS. Check out my portfolio!
                    </p>
                </div>

                <div>
                    <h3 className={styles.row_five}>Voracious Reader</h3>
                    <p className={styles.row_six}>

                        When not coding, I can usually be found with a book in hand. I'm currently reading <span>The Story of Art</span>, by E.H. Gombrich, and <span>The City and the City</span>, by China Miéville.

                    </p>
                </div>

            </div>

            </div>
        </div>
        
        <Footer />
        </React.Fragment>
    );
}

export default BasicInfoContainer;