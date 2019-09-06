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
        
        // this.toggleGallery = this.toggleGallery.bind(this);
        
        return (

            <React.Fragment>

                <MyGrid>
                    <h1>NYC Art Events</h1>
                    
                    <h2>Overview</h2>

                    <ul>A Monolithic Rails Application that queries the New York Art Beat API</ul>

                    <ul>Users can query the API and user-created events(hosted by the app) simultaneously by selected the NYC neighborhood they'd like to see events for. The app the queries the API for events in that location, and also retrieves user-created events from it's own database.</ul>

                    <ul>Users can then browse the list of events, going to each app's show page for more information, and saving events they're interested in.</ul>

                    <ul>User's can also create their own events. The neighborhood is a required field, and user-created events will show up in searches for their neighborhood. User's can create and edit event they themselves have created, but not other user events. No one can edit event from the API.</ul>

                    <h2>Tech Specs</h2>
                    
                    <ul>NYC Art queries the New York Art Beat API for art events throughout NYC and parses that data based on the user's geographic preferences. If an Event object hasn't already been created for that event, Rails makes on now. It also grabs all the user-created Events from the database and displays them to the user alongside the API-created events.</ul>

                    <ul>We used BCrypt to securely encrypt user passwords, and a Sessions Controller to restrict some user actions - for example, only the creater of an event can delete it, and a user can only un-save their own events.</ul>

                    <ul>We also implemented Google Materialize for the styling. We utilized various Materialize components to best showcase event information in attractive, accessible manner.</ul>

                    <h2>Demo Video</h2>

                    <ul><iframe title="NYC Art Events Demo" width="560" height="315" src="https://www.youtube.com/embed/GNXeV-o5dg4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></ul>
                    
                </MyGrid>

            </React.Fragment>
        )
    }
}

export default Art