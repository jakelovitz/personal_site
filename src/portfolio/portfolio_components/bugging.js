import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto

`

function Bugging() {
    return (

        <React.Fragment>

            <MyGrid>
                <h3>What's Bugging You?</h3>
                

                <ul>Web application with a React/Redux front-end and Rails backend.</ul>
                
                <ul>
                    Wellness app that lets users log, and later react to, complaints about
                    various spheres of their life to track if their feelings about each
                    complaint improved or worsened over time.
                </ul>

                <ul>
                    Uses multiple visual cues to help users examine their complaints
                    and reactions to discern patterns in their behavior.
                </ul>
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Bugging