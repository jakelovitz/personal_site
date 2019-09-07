import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import styled from 'styled-components'
import PortfolioComponent from './portfolio_component'
import PortfolioButtons from './portfolio_buttons'

const MyGrid = styled('div')`
    margin-top: 2%;
    margin-bottom: 2%;
    border-radius: 10%;
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

class PortfolioContainer extends Component {

    state = {
        selectedComponent: "bugging"
    }

    handleClick = (event) => {
        this.setState({ selectedComponent: event.target.name })
    }

    render() {
        console.log(this.state)
        return (

            <React.Fragment>
            <Navbar />

            <MyGrid>

                {/* <SideBar>
                    <Button name="bugging" onClick={this.handleClick}>What's Bugging You</Button>
                    <Button  name="fight" onClick={this.handleClick}>Fight Simulator</Button>
                    <Button  name="art" onClick={this.handleClick}>NYC Art Events</Button>
                </SideBar> */}

                <PortfolioButtons handleClick={this.handleClick}/>

                <PortfolioComponent selectedPortion={this.state.selectedComponent}/>

            </MyGrid>
            <Footer />
            </React.Fragment>
        )
    }
}

export default PortfolioContainer;