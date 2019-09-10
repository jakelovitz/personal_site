import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import ButtonPanel from './button_panel'
import ResumeComponent from './resume_component'
import Footer from '../footer/footer'
import styled from 'styled-components'

const MyGrid = styled('div')`
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 10%;
    display: grid;
    padding-top: 1%;
    padding-bottom: 1%;
    background-color: #808080;
    color: black;
    margin-right: 10%;
    margin-left: 10%;
    grid-column-gap: 2%;
    font-family: 'Cantarell', sans-serif;
`

const buttons = [
    {
        type: "button",
        componentName: "bugging", 
        componentDisplay: "What's Bugging You?"
    },
    {
        type: "button",
        componentName: "art", 
        componentDisplay: "NYC Art Events"
    },
    {
        type: "button",
        componentName: "fight", 
        componentDisplay: "Fight Simulator"
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

                        <ButtonPanel handleClick={this.handleClick}/>
                            
                        <ResumeComponent selectedPortion={this.state.resumeComponent} />
                    </MyGrid>
                <Footer />
            </React.Fragment>

        );
    }
}

export default ResumeContainer;