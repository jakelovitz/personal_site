import React, { Component } from 'react';
import Bugging from './portfolio_components/bugging'
import Fight from './portfolio_components/fight'
import Art from './portfolio_components/art'


class ResumeComponent extends Component {

    determineComponent = () => {
        if (this.props.selectedPortion === "none") {
            return "Select what you'd like to see from buttons above!"
        } else if (this.props.selectedPortion === "bugging") {
            return <Bugging />
        } else if (this.props.selectedPortion === "fight") {
            return <Fight />
        } else if (this.props.selectedPortion === "art") {
            return <Art />
        }
    }
    
    render() {
        return (
            <div >
                {this.determineComponent()}
            </div>
        )
    }

}

export default ResumeComponent