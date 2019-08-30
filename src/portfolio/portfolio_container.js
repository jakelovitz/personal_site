import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import styles from './portfolio_styling.module.css'
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

const SideBar = styled('div')`
    height: 100%;
    display: grid;
    grid-column-rows: auto auto auto;
    grid-row-gap: 10%
    background-color: 808080;
    border: 10px white;
    margin-top: 10%;
    margin-left: 10%;
    margin-right: 10%;
`

const Button = styled('button')`
    padding: 15px;
    font-size: 18px;
    border-radius: 40px;
    border-width: 3px;
    border-color: white;
    color: white;
    background-color: transparent;
    font-weight: bold;
    justify-self: stretch;
    &:hover { 
        color: purple;
        border-radius: 40px;
        border-width: 3px;
        border-color: purple;
    }
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
            </React.Fragment>
        )
    }
}

export default PortfolioContainer;