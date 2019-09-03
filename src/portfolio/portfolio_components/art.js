import React, { Component } from 'react';
import styled from 'styled-components'
import ReactBnbGallery from 'react-bnb-gallery'

const photos = [{
    photo: "https://i.imgur.com/wHwS3CY.png",
    caption: "Viñales, Pinar del Río, Cuba",
    subcaption: "Photo by Simon Matzinger on Unsplash",
    thumbnail: "https://i.imgur.com/wHwS3CY.png",
  }, {
    photo: "https://i.imgur.com/myxenHd.png",
    caption: "La Habana, Cuba",
    subcaption: "Photo by Gerardo Sanchez on Unsplash",
    thumbnail: "https://i.imgur.com/myxenHd.png",
  }, {
    photo: "https://i.imgur.com/WLstnQM.png",
    caption: "Woman smoking a tobacco",
    subcaption: "Photo by Hannah Cauhepe on Unsplash",
    thumbnail: "https://i.imgur.com/WLstnQM.png",
  }];

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    height: au;
    font-family: 'Cantarell', sans-serif;
    padding-left: 5%;
`

class Art extends Component {
    
    state = { galleryOpened: false };
    
    toggleGallery = () => {
        console.log(this.state.galleryOpened)

        this.setState({
            galleryOpened: !this.state.galleryOpened
        });
    }

    render() {
        
        // this.toggleGallery = this.toggleGallery.bind(this);
        
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
                    
                    <ul>Queries the New York Art Beat API for art events throughout NYC and parses that data based on the user's geographic preferences.</ul>

                    <ul>Utilizes BCrypt to securely encrypt user passwords.</ul>

                    <ul>Implemented Google Material to showcase event information in attractive, accessible manner.</ul>
                    
                </MyGrid>

            </React.Fragment>
        )
    }
}

export default Art