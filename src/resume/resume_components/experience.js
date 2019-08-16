import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto

`

function Experience() {
    return (

        <React.Fragment>

            <MyGrid>
                <h2>Flatiron School</h2>
                <h3>Software Engineering Immersive</h3>
                <h3>April 2019 - August 2019</h3>
                <p>Learned Ruby, Rails, JavaScript, and React/Redux in fast paced learning environment.</p>
                <p>Designed and developed a highly responsive React web application with a Rails backend.</p>
                <p>Gained a solid understanding of Object Oriented Programming.</p>
                
                
                <h2>Research Analyst</h2>
                <h3>Insurance Archaeology Group</h3>
                <h3>February 3019 - April 2019</h3>
                <p>Conducted research online to reconstruct corporate histories, locate court cases to track down further leads, and identify entities likely to still maintain insurance information on our clients.</p>
                <p>Worked with courts, government agencies, law firms, and insurance brokers to obtain insurance policies and other records.</p>

          
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Experience