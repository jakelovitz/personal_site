import React from 'react';
import styled from 'styled-components'
import styles from '../resume_styling.module.css'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    font-family: 'Cantarell', sans-serif;
`

function Education() {
    return (

        <React.Fragment>

            <MyGrid>
                <div className={styles.wrapper}>
                    <h2>Flatiron School</h2>
                    <h3>Software Engineering Immersive</h3>
                    <p>Learned Ruby, Rails, JavaScript, and React/Redux in fast paced learning environment.</p>
                    <p>Designed and developed a highly responsive React web application with a Rails backend.</p>
                    <p>Gained a solid understanding of Object Oriented Programming.</p>
                </div>

                <div className={styles.wrapper}>
                    <h2>Boston College</h2>
                    <h3>Bachelor's Degree, Double Major in History and Secondary Education, 3.5</h3>
                    <p>Full-time student teacher for the Spring Semester, 2015</p>
                    <p>Designed my own curriculum, lesson plans and assessments</p>
                    <p>Developed an innovative pedagogical style to improve student outcomes</p>
                    <p>Wrote an Honors Thesis about public views on Human Rights under the Carter and Clinton administrations.</p>
                </div>
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Education