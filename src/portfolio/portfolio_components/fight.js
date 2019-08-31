import React, { Component } from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    height: au;
    font-family: 'Cantarell', sans-serif;
    padding-left: 5%;
`

class Fight extends Component {

    render() {

        return (

            <React.Fragment>

                <MyGrid>

                <h1>Fight Simulator</h1>
                    
                    <h2>Overview</h2>

                    <ul>A React application with a small Rails backend.</ul>

                    <ul>This projects is dear to me in large part because of the fast turnaround time we (two partners and your humble developer)  had to create it. Our timeline was five days, but it fell right over the ourth of July, where we had pre-existing plans. This meant we had a whatever free time we could find over the long weekend to study how to implement our plan in React, and effectively two and a half days to actually write the code. This project was a true experience in learning on the fly, quickly and effectively finding the right sources to help troubleshoot bugs, and working collaboratively to solve problems in a quick, efficient manner.
                    </ul>

                    <ul>Users can create their own fighters by filling out the 'Create Fighter' form. This form has them select an image for their fighter and four accompanying moves (five images total) by copying image source URLs into the appropriate fields, and assiging power and usage points from common pools to determine how strong a move is and how many times it can be utilized.</ul>

                    <ul>Once created, a fighter is saved in Rails, which also displayed a list of all pre-existing fighters. A user can select on of these champions in lieu of created their own.</ul>

                    <ul>The simulator works with two players sharing one computer. Each player selects, or creates, their champion, and the game then starts. One player is randomly selected to begin, and they make the first move. After the move is selected, the move image appears, their opponents health goes down, and the turns switch. </ul>

                    <h2>Tech Specs</h2>

                    <ul>With the tight timeline I outlined above, this app was a labor of love in learning how to correctly send GET, CREATE, PATCH, and DELETE requests between React and Rails.</ul>

                    <ul>I also used React to track and update various components based on user interaction. One example would be the Power and Usage pools for a move. Each pool started with twenty points, which a user could then distribute among their fighter's four moves via '+' and '-' points, which would raise/lower the pool value as appropriate.</ul>
                    
                    
                </MyGrid>

            </React.Fragment>
        )
    }
}

export default Fight