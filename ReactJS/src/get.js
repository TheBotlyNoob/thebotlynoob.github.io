import React, { Component } from 'react';

class getJSON extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      if (!this.props.src || !this.props.item) {
        console.error(new Error("getJSON Requires The: item, & src Attribute!"));
      }
      fetch(this.props.src)
        .then(res => res.json())
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
  
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else if (!JSON.parse(items) == "object") {
        return (new Error("The URL Does Not Return A JSON Object. Try Using The get Element!"));
      } else {
        return (
          items[this.props.item]
        );
      }
    }
  }