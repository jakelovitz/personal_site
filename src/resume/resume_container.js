import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import ResumeComponent from './resume_component'
import Footer from '../footer/footer'
import styled from 'styled-components'
import ButtonPanel from '../button_panel/button_panel'

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
                    <MyGrid>

                        <ButtonPanel handleClick={this.handleClick} array={buttons}/>
                            
                        <ResumeComponent selectedPortion={this.state.resumeComponent} />

                    </MyGrid>
                <Footer />
            </React.Fragment>

        );
    }
}

export default ResumeContainer;