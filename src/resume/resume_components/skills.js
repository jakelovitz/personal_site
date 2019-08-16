import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto

`

function Skills() {
    return (

        <React.Fragment>

            <MyGrid>
                <h2>Skillz Skillz</h2>

                <h3>Skillz Skillz Skillz</h3>
          
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Skills