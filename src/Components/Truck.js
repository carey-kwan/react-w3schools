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
        }, 5000)
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        document.getElementById("div1").innerHTML =
        "Before the update, the year was " + prevState.year;
    }
      
    componentDidUpdate() {
        document.getElementById("div2").innerHTML =
        "The updated year is " + this.state.year;
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
            <div id="div1"></div>
            <div id="div2"></div>
        </div>
        
      );

    }


  }

  export default Truck;