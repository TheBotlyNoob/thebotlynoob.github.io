import {Component} from 'react';
import PropTypes from 'prop-types'; 
import axios from 'axios';

export default class Get extends Component {
    constructor (props) {
        super (props);
     
        this.state = {
          data: [],
          isLoading: false,
          error: null,
        };
      }
     
      componentDidMount () {
        this.setState ({ isLoading: true });
        
        axios.get(this.props.src)
          .then(result => this.setState ({
            data: result.data,
            isLoading: false
          }))
          .catch(error => this.setState ({
            error,
            isLoading: false
          }));
      }

    render () {
        const { data, isLoading, error } = this.state;
     
        if (error) {
          return <span style={{color: 'white'}}>{error?.name}: <code>{error?.message}</code></span>;
        }
     
        if (isLoading) {
          return "Loading...";
        }
     
        return data;
      }
    }

Get.propTypes = {
        src: PropTypes.string.isRequired
};