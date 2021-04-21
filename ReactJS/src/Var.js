import React from 'react';
import * as flatted from 'flatted';

export default class Var extends React.Component {
    constructor (props) {
      super (props);
      this.state = {
        error: null,
        isLoaded: false,
        variable: null,
      };
    }
  
    componentDidMount () {
      let vari = this.props.var, setto = this.props.set;
      console.log(vari);console.log(setto);
      if (vari) {
        this.setState({
            isLoaded: true,
            error: "Var Requires The var Attribute!",
          });
      } else if (setto) {
          this.setState({
              isLoaded: true,
              variable: sessionStorage[vari],
          });
      } else {
          sessionStorage[vari] = flatted.stringify(setto);
          this.setState({
            isLoaded: true,
            variable: sessionStorage[vari],
          });
      }
    }
  
    render () {
      const {error, isLoaded, variable} = this.state;
      if (error) {
          return(`Error: ${error.message}`)
      }
      else if (!isLoaded) {
        return ("Loading...");
      } else {
        return (variable);
      }
    }
}