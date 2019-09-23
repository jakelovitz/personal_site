import React from 'react';
import styled from 'styled-components'

const MyGrid = styled('div')`
    display: grid;
    grid-template-rows: auto auto auto auto auto;
    height: au;
    font-family: 'Cantarell', sans-serif;
    
    
`

function Education() {
    return (

        <React.Fragment>

            <MyGrid>
                <div>
                    <h1>Flatiron School</h1>
                    <h2 >Software Engineering Immersive</h2>
                    <ul>Learned Ruby, Rails, JavaScript, and React/Redux in fast paced learning environment.</ul>
                    <ul>Designed and developed a highly responsive React web application with a Rails backend.</ul>
                    <ul>Gained a solid understanding of Object Oriented Programming.</ul>
                </div>

                <div>
                    <h1>Boston College</h1>
                    <h2>Bachelor's Degree, Double Major in History and Secondary Education, 3.5</h2>
                    <ul>Full-time student teacher for the Spring Semester, 2015</ul>
                    <ul>Designed my own curriculum, lesson plans and assessments</ul>
                    <ul>Developed an innovative pedagogical style to improve student outcomes</ul>
                    <ul>Wrote an Honors Thesis about public views on Human Rights under the Carter and Clinton administrations.</ul>
                </div>
                
            </MyGrid>
        </React.Fragment>
    )
}

export default Education