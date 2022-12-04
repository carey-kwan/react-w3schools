import React from 'react';
import Truck from './Truck'

//no explicit props argument defined unless there is a constructor
class Barn extends React.Component {
    render() {
      return (
        <div>   
        <h1>{this.props.message} Who lives in my Garage?</h1>
        <Truck color="black" trim="SE" model="Monster" />
        </div>
      );
    }
  }

  export default Barn;