import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto

`

function Fight() {
    return (

        <React.Fragment>

            <MyGrid>
                <p>Fight</p>
                 
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Fight