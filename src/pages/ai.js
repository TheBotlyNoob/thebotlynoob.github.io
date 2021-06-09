import React from 'react';
//import * as brain from 'brain.js/src';
//import { log } from '../utils';

export default class ai extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: undefined,
            res: undefined,
            quotes: undefined,
        }
    }

    run() {
    }

    render() {
        return (
          <div>
            <input onChange={(e) => this.setState({data: e.target.value})}/><button onClick={() => this.run()}>TEST!</button>
            <h1>{this.state.res ?? ''}</h1>
          </div>
        )
    }
}

