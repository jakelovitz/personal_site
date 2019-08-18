import React from 'react';
import styled from 'styled-components'
import styles from '../resume_styling.module.css'

const MyGrid = styled('div')`
    display: grid;
    grid-template-columns: auto auto
`

function Skills() {
    return (

        <React.Fragment>

            <MyGrid>
            <div className={styles.wrapper}>
                <h2>Skills:</h2>

                <h3>Ruby on Rails</h3>
                <h3>JavaScript</h3>
                <h3>React</h3>
                <h3>Redux</h3>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>CSS-in-JS</h3>
            </div>

            <div className={styles.wrapper}>
                <h2>Experience In:</h2>
                <h3>Quality Assurance</h3>
                <h3>User-Focused Design</h3>
                <h3>Agile Software Development</h3>
                <h3>Scrum Teams</h3>
                <h3>Technical Documentation</h3>
            </div>
            </MyGrid>
        </React.Fragment>
    )
}

export default Skills