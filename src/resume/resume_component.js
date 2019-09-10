import React, { Component } from 'react';
import Education from './resume_components/education'
import Experience from './resume_components/experience'
import Skills from './resume_components/skills'
import styled from 'styled-components'

// const MyContainer = styled('div')`
// display: grid;
// grid-template-rows: auto auto auto auto auto;
// height: au;
// font-family: 'Cantarell', sans-serif;
// padding-left: 5%;
// `

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
            <div>
                {this.determineComponent()}
            </div>
        )
    }

}

export default ResumeComponent