import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import styled from 'styled-components'
import PortfolioComponent from './portfolio_component'
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

class PortfolioContainer extends Component {

    state = {
        selectedComponent: "bugging"
    }

    handleClick = (event) => {
        debugger
        this.setState({ selectedComponent: event.target.name })
    }

    render() {
        console.log(this.state)
        return (

            <React.Fragment>
                < Navbar />

                <MyGrid>

                    <ButtonPanel handleClick={this.handleClick} array={buttons}/>

                    <PortfolioComponent selectedPortion={this.state.selectedComponent}/>

                </MyGrid>
                
                <Footer />
            </React.Fragment>
        )
    }
}

export default PortfolioContainer;