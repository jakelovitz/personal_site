import React, { Component } from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto
    font-family: 'Cantarell', sans-serif;
`

class Fight extends Component {

    render() {

        return (

            <React.Fragment>

                <MyGrid>
                    <p>Fight</p>
                    
                    
                </MyGrid>
            </React.Fragment>
        )
    }
}

export default Fight