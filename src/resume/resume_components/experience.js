import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    height: au;
    font-family: 'Cantarell', sans-serif;
    padding-left: 5%;
`

function Experience() {
    return (

        <React.Fragment>

            <MyGrid>

                <h1>Experience</h1>

                <div>
                    <h2>Quality Engineer, Digital Pulp, October 2019 - March 2020</h2>
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
          
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Experience