import React, { Component } from 'react';
import { Seo } from '../components';
import { Layout } from '../components';
import fonts from '../../static/api/fonts.json';

export default class Fonts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <Layout>
        {console.log(fonts)}
        <Seo title='Fonts' />
        <h1 style={{ margin: '10px' }}>Fonts</h1>
        <hr />
        {fonts.map((i, key) => (
          <div key={key}>
            <a href={`/fonts/${i}`} style={{ margin: '5px' }}>
              {i.split('/')[i.split('/').length - 2]}
            </a>
            <br />
          </div>
        ))}
      </Layout>
    );
  }
}
