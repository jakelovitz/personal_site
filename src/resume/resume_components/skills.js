import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    height: stretch;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40%;
    margin-top: 10%
    margin-bottom: 20%;
    font-family: 'Cantarell', sans-serif;
    white-space: nowrap;
`

const MyHTwo = styled('h2')`
    color: purple
`

const MyHThree = styled('h3')`
    align-self: left;
`

const MyColumn = styled('div')`
    width: stretch;
`

function Skills() {
    return (

        <React.Fragment>

            <MyGrid>
            <MyColumn>
                <MyHTwo>Languages:</MyHTwo>

                <MyHThree>Ruby on Rails</MyHThree>
                <MyHThree>JavaScript</MyHThree>
                <MyHThree>React</MyHThree>
                <MyHThree>Redux</MyHThree>
                <MyHThree>HTML</MyHThree>
                <MyHThree>CSS / CSS-in-JS</MyHThree>
            </MyColumn>

            <div>
                <MyHTwo>Experience In:</MyHTwo>
                <MyHThree>Project Management</MyHThree>
                <MyHThree>Quality Assurance</MyHThree>
                <MyHThree>User-Focused Design</MyHThree>
                <MyHThree>Agile Software Development</MyHThree>
                <MyHThree>Scrum Teams</MyHThree>
                <MyHThree>Technical Documentation</MyHThree>
            </div>
            </MyGrid>
        </React.Fragment>
    )
}

export default Skills