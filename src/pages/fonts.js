import React, { Component } from 'react';
import { Seo } from '../components';
import { Link } from 'gatsby';
import { Layout } from '../components';
import { fetcher } from '../utils';

export default class fonts extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount = fetcher('/api/fonts.json', null, 'json', data => this.setState({ data }))

    render() {
      return (
        <Layout>
          <Seo title='Fonts'/>
          <h1 style={{ margin: '10px' }}>Fonts</h1>
          <hr/>
          {this.state.data.map((i, key) => <div key={key}>
              <Link to={`/fonts/${i}`} style={{ margin: '5px' }}>{i.split('/')[i.split('/').length - 2]}</Link>
              <br/>
            </div>)}
            </Layout>
    )
  }
}
