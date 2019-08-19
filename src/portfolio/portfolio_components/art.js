import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto

`

function Art() {
    return (

        <React.Fragment>

            <MyGrid>
                <p>Art</p>
                 
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Art