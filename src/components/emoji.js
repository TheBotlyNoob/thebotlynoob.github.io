import React from 'react';
import PropTypes from 'prop-types';

export default class Emoji extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            icon: null,
        };
    }

    componentDidMount () {
        fetch('https://raw.githack.com/github/gemoji/master/db/emoji.json')
          .then(i => i.json())
          .then(i => i.map(e => {
              if (e.aliases.includes(this.props.icon)) this.setState({
                  icon: e.emoji
              });
              return e;
          }));
    }

    render () {
        return this.state.icon ?? '';
    }
}

Emoji.propTypes = {
    icon: PropTypes.string
};
