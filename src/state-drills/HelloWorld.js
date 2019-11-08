import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        console.log('this is the helloworld component speaking', props)
        super(props)
    this.state = {
        who: "world",
        countA: "Friend!",
        countB: "React!",
        countC: "World!"
    }
}

ButtonClickFriend = () => {

    this.setState({ who: this.state.countA})
    
}

ButtonClickReact = () => {

    this.setState({ who: this.state.countB})
    
}

ButtonClickWorld = () => {

    this.setState({ who: this.state.countC})
    
}


render() {
    return (
        <div>
            <p>Hello, {this.state.who}</p>
            <button onClick={this.ButtonClickFriend}>
                    Friend!
            </button>
            <button onClick={this.ButtonClickReact}>
                    React!
            </button>
            <button onClick={this.ButtonClickWorld}>
                    World!
            </button>
        </div>
    )
}


}

export default HelloWorld;