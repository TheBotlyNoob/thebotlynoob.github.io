import React from 'react';

export default class Get extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      if (!this.props.src) {
        console.error(new Error("Get Requires The src Attribute!"));
      }
      fetch(this.props.src)
        .then(res => res.text())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        )
    }
  
    render () {
      const {error, isLoaded, items} = this.state;
      if (error) {
        return (`Error: ${error.message}`);
      } else if (!isLoaded) {
        return ("Loading...");
      } else {
        return (items);
      }
    }
}