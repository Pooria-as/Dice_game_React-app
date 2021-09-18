import React from "react"
import "./Dice.css"
class Dice extends React.Component {
    render() {
        let dice_class=`dice fas fa-dice-${this.props.diceFace} ${this.props.rolling ? "shaking" : ''}`;
        return (
        <i className={dice_class}></i>
        );
    }
}
export default Dice;