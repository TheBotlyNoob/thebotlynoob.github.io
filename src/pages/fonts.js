import React from 'react';
import { Seo } from '../components';

export default class fonts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: undefined,
        }
    }

    componentDidMount() {
        fetch('/api/fonts.json')
          .then(res => res.json())
          .then(data => this.setState({
              data
          }));
    }

    render() {
        return (
            <div>
                <Seo title='Fonts'/>
                <h1 style={{ margin: '10px' }}>Fonts</h1>
                <hr/>
                {this.state.data?.map((i, key) => <a href={`/fonts/${i}`} key={key} style={{ margin: '5px' }}>{i}</a>)}
            </div>
        )
    }
}
