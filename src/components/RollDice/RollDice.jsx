import React from "react";
import Dice from "../Dice/Dice";

class RollDice extends React.Component {

    static defaultProps ={
        sides:['one','two','three','four','five','six']
    }


    constructor(props)
    {
        super(props);
        this.state=
        {
            dice_1:"one",
            dice_2:"two",
            rolling :false
        }
        
    }
    
    componentDidMount() 
    {
        alert('😜 بازی تاس تاس بریز سلطان !')
    }
    
    RollingDiceHandler = () =>
    {  
        const RandomDice_1=this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const RandomDice_2=this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState({dice_1:RandomDice_1,dice_2:RandomDice_2,rolling:true})

        setTimeout(()=>{
            this.setState({rolling:false})
        },1000);

    }    



    render() { 
        const {dice_1,dice_2}=this.state
        return (
            <div>
                <Dice diceFace={dice_1} rolling={this.state.rolling} />
                <Dice diceFace={dice_2} rolling={this.state.rolling}/>
                
                <br/>
                <button type="button" className="btn btn-outline-success" onClick={this.RollingDiceHandler}> 
                {
                    this.state.rolling ? "...🎲🎲" : '🎲تاس بریز 🎲'
                }
                </button>
                <br/>
                <br/>
                {
                    this.state.dice_1===this.state.dice_2 ? "جفت آوردی 😎" :''
                }
            </div>
        );
    }
}
 
export default RollDice;