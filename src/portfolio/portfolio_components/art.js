import React, { Component } from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    height: au;
    font-family: 'Cantarell', sans-serif;
    padding-left: 5%;
`

class Art extends Component {
    
    render() {

        return (

            <React.Fragment>

                <MyGrid>
                <h1>NYC Art</h1>
                    
                    <h2>Overview</h2>

                    <ul>A Monolithic Rails Application that queries the New York Art Beat API</ul>

                    <ul>Users can query the API and user-created events(hosted by the app) simultaneously by selected the NYC neighborhood they'd like to see events for. The app the queries the API for events in that location, and also retrieves user-created events from it's own database.</ul>

                    <ul>Users can then browse the list of events, going to each app's show page for more information, and saving events they're interested in.</ul>

                    <ul>User's can also create their own events. The neighborhood is a required field, and user-created events will show up in searches for their neighborhood. User's can create and edit event they themselves have created, but not other user events. No one can edit event from the API.</ul>

                    <h2>Tech Specs</h2>
                    
                    
                </MyGrid>
            </React.Fragment>
        )
    }
}

export default Art