import React from 'react';
import PropTypes from 'prop-types';
import { Octokit, log } from '../utils';

const octokit = Octokit();

export default class Emoji extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            img: null,
        };
    }

    componentDidMount () {
        octokit.rest.emojis.get().then(i => this.setState({
            img: i.data[this.props.icon],
        }));
    }

    render () {
        log.debug(this.state.result)
        return (
            <img src={this.state.img} alt='emoji'></img>
        )
    }
}

Emoji.propTypes = {
    icon: PropTypes.string
};
