import React, { Component } from 'react';
import Education from './resume_components/education'
import Experience from './resume_components/experience'
import Skills from './resume_components/skills'
import styled from 'styled-components'

const MyContainer = styled('div')`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
    flex: 1;
    margin-right: 15%;
    margin-left: 15%;
    margin-top: 1%;
    margin-bottom: stretch;
`

class ResumeComponent extends Component {

    determineComponent = () => {
        if (this.props.selectedPortion === "none") {
            return "Select what you'd like to see from buttons above!"
        } else if (this.props.selectedPortion === "education") {
            return <Education />
        } else if (this.props.selectedPortion === "experience") {
            return <Experience />
        } else if (this.props.selectedPortion === "skills") {
            return <Skills />
        }
    }
    
    render() {
        return (
            <MyContainer>
                {this.determineComponent()}
            </MyContainer>
        )
    }

}

export default ResumeComponent