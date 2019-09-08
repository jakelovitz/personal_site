import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-columns: auto auto;
    grid-column-gap: 30%;
    padding-bottom: 10%;
    font-family: 'Cantarell', sans-serif;
`

const MyHTwo = styled('h2')`
    color: purple
`

const MyHThree = styled('h3')`
    align-self: left;
`

function Skills() {
    return (

        <React.Fragment>

            <MyGrid>
            <div>
                <MyHTwo>Languages:</MyHTwo>

                <MyHThree>Ruby on Rails</MyHThree>
                <MyHThree>JavaScript</MyHThree>
                <MyHThree>React</MyHThree>
                <MyHThree>Redux</MyHThree>
                <MyHThree>HTML</MyHThree>
                <MyHThree>CSS</MyHThree>
                <MyHThree>CSS-in-JS</MyHThree>
            </div>

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