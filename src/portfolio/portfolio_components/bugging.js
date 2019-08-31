import React, { Component } from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    height: au;
    font-family: 'Cantarell', sans-serif;
    padding-left: 5%;
`

class Bugging extends Component {

    render() {

        return (

            <React.Fragment>

                <MyGrid>

                    <h1>What's Bugging You?</h1>
                    
                    <h2>Overview</h2>

                    <ul>Web application with a React/Redux front-end and Rails backend.</ul>
                    
                    <ul>
                        What's Bugging You? is a wellness app that lets users log, and later react to, complaints about various spheres of their life (bug species) to track if their feelings about each complaint improved or worsened over time.
                    </ul>

                    <ul>
                        Uses multiple graphs to help users examine their complaints and reactions to discern patterns in their behavior.
                    </ul>

                    <ul>
                        Users can assign a color to each bug species to easier identify and track related bugs.
                    </ul>

                    <h2>Tech Specs</h2>

                    <ul>
                        What's Bugging You? uses a React/Redux Front. I made further use of the Immutability-Helper library to dynamically update JavaScript Objects and Arrays in real-time for a quick, responsive user interface. Storing and editing arrays and objects also let me limit the number of calls the app makes to my Rails backend, creating a quicker, more efficient application.
                    </ul>

                    <ul>
                        The Rails backend handles storing and sorting all the application's data. Though, as previously mentioned, my implimentation of Redux lowers the numbers of calls made to the backend, the Rails server is still responsible for all CRUD actions that take place through the app, and then passes the new data up through JSON endpoints.
                    </ul>

                    <ul>
                        Given the two week timeline I had to get a working version of What's Bugging You? I initially opted to use the Semantic Library for my styling. However, I came to find Semantic limited in a few respects, and started transitioning to my own custom CSS. This included using CSS-in-JS modules through Emotion, which allowed me to pass in data to maintain consistent color-coding throughout the application.
                    </ul>


                    
                </MyGrid>
            </React.Fragment>
        )
    }
}

export default Bugging