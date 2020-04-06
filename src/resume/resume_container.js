import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import ResumeComponent from './resume_component'
import Footer from '../footer/footer'
import styled from 'styled-components'
import ButtonPanel from '../button_panel/button_panel'
import styles from './container.module.css'

const MyGrid = styled('div')`
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 40px;
    display: grid;
    grid-template-rows: auto auto auto;
    justify-items: center;
    padding: 1%;
    background-color: #808080;
    color: black;
    margin-right: 10%;
    margin-left: 10%;
    height: auto;
`


const buttons = [
    {
        componentName: "experience", 
        componentDisplay: "Experience"
    },
    {
        componentName: "education", 
        componentDisplay: "Education"
    },
    {
        componentName: "skills", 
        componentDisplay: "Skills"
    }
]

class ResumeContainer extends Component {

    state = {
        resumeComponent: "experience"
    }

    handleClick = (event) => {
        this.setState({ resumeComponent: event.target.name })
    }

    render() {
        console.log(this.state)
        return (


        <React.Fragment>
            <Navbar />
                    {/* <MyGrid>

                        <ButtonPanel handleClick={this.handleClick} array={buttons}/>
                            
                        <ResumeComponent selectedPortion={this.state.resumeComponent} />

                    </MyGrid> */}
        <div className={styles.container}>
        <h2>Experience</h2>

        <div>
        <h3>Quality Engineer, Digital Pulp, October 2019 - March 2020</h3>
        <ul>Worked with developers and project managers to develop and execute testing plans</ul>
        <ul>Wrote detailed, in-depth reports to facilitate quick, effective fixes to bugs</ul>
        <ul>Communicated with clients to ensure our web strategies met their unique organizational needs</ul>
        <ul>Wrote comprehensive user guides and led training sessions to ensure our clients could achieve their goals as soon as sites went live</ul>
        </div>

        <div>
            <h2>Flatiron School, Software Engineering Immersive, April 2019 - August 2019</h2>
            <ul>Worked with with peers on labs and projects, with timelines varying from a couple of days to a week.</ul>
            <ul>Used Github to collaborate on projects with adherence to best practices such as specific branches, commit messages, and code review.</ul>
            <ul>Aggressively researched issues and bugs on my own to independently find a solution.</ul>
        </div>

        <div>
            <h2>Research Analyst, Insurance Archaeology Group, February 2018 - April 2019</h2>
            <ul>Conducted research online to reconstruct corporate histories, locate court cases to track down further leads, and identify entities likely to still maintain insurance information on our clients.</ul>
            <ul>Worked with courts, government agencies, law firms, and insurance brokers to obtain insurance policies and other records.</ul>
            <ul>Provided clients with high level, yet concise and readable, overviews of technical insurance information.</ul>
        </div>

        <div>
            <h2>Quality Assurance / Software Tester, Epic, June 2015 - June 2017</h2>
            <ul>Guaranteed quality of Obstetrics software in a number of different functional areas, evaluating quality by numerous metrics including functionality and user accessibility.</ul>
            <ul>Led testing efforts and ensured the completion of the nation’s first national registry of Obstetrics data.</ul>
            <ul>Collaborated across the company to view new developments from every angle and ensure we were meeting actual clinical needs.</ul>
            <ul>Traveled on-site to different hospitals to assist in educating doctors, nurses, and other clinicians in using Epic software.</ul>
        </div>

        <div>
            <h2>Flatiron School</h2>
            <h2 >Software Engineering Immersive</h2>
            <ul>Learned Ruby, Rails, JavaScript, and React/Redux in fast paced learning environment.</ul>
            <ul>Designed and developed a highly responsive React web application with a Rails backend.</ul>
            <ul>Gained a solid understanding of Object Oriented Programming.</ul>
        </div>

        <div>
            <h2>Boston College</h2>
                <h2>Bachelor's Degree, Double Major in History and Secondary Education, 3.5</h2>
                <ul>Full-time student teacher for the Spring Semester, 2015</ul>
                <ul>Designed my own curriculum, lesson plans and assessments</ul>
                <ul>Developed an innovative pedagogical style to improve student outcomes</ul>
                <ul>Wrote an Honors Thesis about public views on Human Rights under the Carter and Clinton administrations.</ul>
        </div>

        </div>

        <Footer />
            </React.Fragment>

        );
    }
}

export default ResumeContainer;