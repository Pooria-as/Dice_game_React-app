import React from "react"
import "./App.css"
import RollDice from "./components/RollDice/RollDice";


class App extends React.Component {

    

    render() { 
    
        return <div className='App'>
        <RollDice/>
        </div>;
    }
}
 
export default App;