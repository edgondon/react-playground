import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        console.log('this is the RouletteGun component speaking', props)
        super(props)
    this.state = {
        chamber: null,
        spinningTheChamber: false,
        parag: "spinning the chamber and pulling the trigger!"
    }
    
}


componentDidMount() {
    console.log('RouletteGun DidMount')
    
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

timeout = () => {
    let numz = Math.ceil(Math.random() * 8);
    console.log(numz);
    if (numz === 8) {this.setState({parag: "Safe" })}
    else {this.setState({parag: "BANG!!!!" })}

}


trigger = () => {

    this.setState({spinningTheChamber: true})
    setTimeout(this.timeout, 2*1000)
    clearTimeout(this.timeout)
    }





render() {
    return (
        <div>
            <p>{this.state.parag}</p>
            <button onClick={this.trigger}>
                    Pull the trigger!
            </button>
        </div>
    )
}



}

















export default RouletteGun;
