import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    font-family: 'Cantarell', sans-serif;
`

function Education() {
    return (

        <React.Fragment>

            <MyGrid>
                <div>
                    <h2>Flatiron School</h2>
                    <h3 style={{marginLeft: "5%"}}>Software Engineering Immersive</h3>
                    <p style={{marginLeft: "5%"}}>Learned Ruby, Rails, JavaScript, and React/Redux in fast paced learning environment.</p>
                    <p style={{marginLeft: "5%"}}>Designed and developed a highly responsive React web application with a Rails backend.</p>
                    <p style={{marginLeft: "5%"}}>Gained a solid understanding of Object Oriented Programming.</p>
                </div>

                <div>
                    <h2>Boston College</h2>
                    <h3 style={{marginLeft: "5%"}}>Bachelor's Degree, Double Major in History and Secondary Education, 3.5</h3>
                    <p style={{marginLeft: "5%"}}>Full-time student teacher for the Spring Semester, 2015</p>
                    <p style={{marginLeft: "5%"}}>Designed my own curriculum, lesson plans and assessments</p>
                    <p style={{marginLeft: "5%"}}>Developed an innovative pedagogical style to improve student outcomes</p>
                    <p style={{marginLeft: "5%"}}>Wrote an Honors Thesis about public views on Human Rights under the Carter and Clinton administrations.</p>
                </div>
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Education