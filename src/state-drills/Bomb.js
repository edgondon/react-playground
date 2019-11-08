import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        console.log('this is the bomba component speaking', props)
        super(props)
    this.state = {
        count: 0
    }
}


componentDidMount() {
    console.log('Bomb DidMount')
    this.interval = setInterval(() => {
      console.log('setInterval')
      this.setState({
        count: this.state.count + 1
      })
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

seeThis = () => {

    if (this.state.count >= 8) {
        return `BOOM!!!!`;
    }
    if (this.state.count % 2 === 0  && this.state.count <= 8) {
        return `tick`;
    }
    if  (this.state.count % 2 !== 0 && this.state.count <= 8) {
        return `tock`;
    }

}



render() {
    return (
        <div>
            <p>{this.seeThis()}</p>
            
        </div>
    )
}



}

export default Bomb;


