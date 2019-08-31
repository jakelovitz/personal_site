import React from 'react';
import styled from 'styled-components'
import styles from '../resume_styling.module.css'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    font-family: 'Cantarell', sans-serif;
`

function Experience() {
    return (

        <React.Fragment>

            <MyGrid>

                <div className={styles.wrapper}>
                    <h2>Flatiron School</h2>
                    <h3>Software Engineering Immersive</h3>
                    <h3>April 2019 - August 2019</h3>
                    <p className={styles.text}>Worked with with peers on labs and projects, with timelines varying from a couple of days to a week.</p>
                    <p className={styles.text}>Used Github to collaborate on projects with adherence to best practices such as specific branches, commit messages, and code review.</p>
                    <p className={styles.text}>Aggressively researched issues and bugs on my own to independently find a solution.</p>
                </div>
                
                <div className={styles.wrapper}>
                    <h2>Research Analyst</h2>
                    <h3>Insurance Archaeology Group</h3>
                    <h3>February 2018 - April 2019</h3>
                    <p className={styles.text}>Conducted research online to reconstruct corporate histories, locate court cases to track down further leads, and identify entities likely to still maintain insurance information on our clients.</p>
                    <p className={styles.text}>Worked with courts, government agencies, law firms, and insurance brokers to obtain insurance policies and other records.</p>
                    <p className={styles.text}>Provided clients with high level, yet concise and readable, overviews of technical insurance information.</p>
                </div>

                <div className={styles.wrapper}>
                    <h2>Quality Assurance / Software Tester</h2>
                    <h3>Epic</h3>
                    <h3>June 2015 - June 2017</h3>
                    <p className={styles.text}>Guaranteed quality of Obstetrics software in a number of different functional areas, evaluating quality by numerous metrics including functionality and user accessibility.</p>
                    <p className={styles.text}>Led testing efforts and ensured the completion of the nation’s first national registry of Obstetrics data.</p>
                    <p className={styles.text}>Collaborated across the company to view new developments from every angle and ensure we were meeting actual clinical needs.</p>
                    <p className={styles.text}>Traveled on-site to different hospitals to assist in educating doctors, nurses, and other clinicians in using Epic software.</p>
                </div>
          
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Experience