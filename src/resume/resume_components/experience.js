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

                <div>
                    <h1>Flatiron School</h1>
                    <h2 >Software Engineering Immersive, April 2019 - August 2019</h2>
                    <ul>Worked with with peers on labs and projects, with timelines varying from a couple of days to a week.</ul>
                    <ul>Used Github to collaborate on projects with adherence to best practices such as specific branches, commit messages, and code review.</ul>
                    <ul>Aggressively researched issues and bugs on my own to independently find a solution.</ul>
                </div>
                
                <div>
                    <h1>Research Analyst</h1>
                    <h2>Insurance Archaeology Group, February 2018 - April 2019</h2>
                    <ul>Conducted research online to reconstruct corporate histories, locate court cases to track down further leads, and identify entities likely to still maintain insurance information on our clients.</ul>
                    <ul>Worked with courts, government agencies, law firms, and insurance brokers to obtain insurance policies and other records.</ul>
                    <ul>Provided clients with high level, yet concise and readable, overviews of technical insurance information.</ul>
                </div>

                <div>
                    <h1>Quality Assurance / Software Tester</h1>
                    <h2 >Epic, June 2015 - June 2017</h2>
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