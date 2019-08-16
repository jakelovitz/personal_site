import React, { Component } from 'react';
import styles from './resume_styling.module.css'
import Education from './resume_components/education'
import Experience from './resume_components/experience'
import Skills from './resume_components/skills'


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
            <div className={styles.resume_container}>
                {this.determineComponent()}
            </div>
        )
    }

}

export default ResumeComponent