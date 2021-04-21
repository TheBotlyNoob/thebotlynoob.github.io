import React from 'react';
import * as flatted from 'flatted';

export default class Var extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        isLoaded: false,
        variable: null,
      };
    }
  
    componentDidMount() {
      let vari = this.props.var, setto = this.props.set;
      if (!vari) {
        console.error(new Error("Var Requires The var Attribute!"));
      } else if (!setto) {
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
      const {isLoaded, variable} = this.state;
      if (!isLoaded) {
        return (<span className={"loading " + this.props?.className} id={this.props?.id} name={this.props?.name}>Loading...</span>);
      } else {
        return (<span className={this.props?.className} id={this.props?.id} name={this.props?.name}>{variable}</span>);
      }
    }
}