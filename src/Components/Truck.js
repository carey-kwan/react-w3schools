import React from 'react';

class Truck extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        color: "red",
        year: 1964,
        trim: "L"
      };
    }
    static getDerivedStateFromProps(props, state) {
        return {trim: props.trim}
    }

    changeColor = () => {
        this.setState({color:"blue"});
    }

    componentDidMount() {
        setTimeout(() => {
          this.setState({year: 2000})
        }, 1000)
    }

    render() {
      return (
        <div>
            <h2>I am a {this.state.color}, {this.props.model} Truck from {this.state.year}!</h2>
            <p>The trim is {this.state.trim}.</p>
            <button 
                type="button"
                onClick={this.changeColor}
            >Change color</button>
        </div>
        
      );

    }


  }

  export default Truck;