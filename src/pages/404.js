import React from 'react';
import { Redirect } from 'react-router-dom';
import { notFound as Styles } from '../css';

export default class notFound extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      keyPressed: false
    };
  }

  run () {
    this.setState({
      keyPressed: true
    });
  }

  render () {
    if (this.state.keyPressed) {
      return (
        <Redirect to='/'/>
      )
    }
    return (
      <div>
        <Styles />
        <div className='notfound'>
            <div className='centered'><span className='inverted'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>&nbsp;</div>
            <div className='centered'><span className='inverted'>&nbsp;4&nbsp;0&nbsp;4&nbsp;</span><span className='shadow'>&nbsp;</span></div>
            <div className='centered'><span className='inverted'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className='shadow'>&nbsp;</span></div>
            <div className='centered'>&nbsp;<span className='shadow'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
            <div className='row'>&nbsp;</div>
            <div className='row'>A fatal exception 404 has occurred at C0DE:ABAD1DEA in 0xC0DEBA5E.</div>
            <div className='row'>The current request will be terminated.</div>
            <div className='row'>&nbsp;</div>
            <div className='row'>* Press any key to return to the previous page.</div>
            <div className='row'>* Press CTRL+ALT+DEL to restart your computer. You will</div>
            <div className='row'>&nbsp;&nbsp;lose any unsaved information in all applications.</div>
            <div className='row'>&nbsp;</div>
            <div className='centered'>Press any key to continue...<span className='blink'>&#9608;</span></div>
            <input id='run' autoFocus onBlur={() => this.run()} onKeyPress={() => this.run()}></input>
        </div>
      </div>
    );
  }
};
