import React, { Component } from 'react';
import { Seo } from '../components';
import { Layout } from '../components';
import { Octokit, log } from '../utils';
import '../styles/main.css';

const octokit = Octokit();

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ghRepos: []
    };
  }

  async componentDidMount() {
    const rateLimit = (await octokit.rest.rateLimit.get()).data.resources.core
      .limit;
    rateLimit
      ? log.info(`Requests: ${rateLimit}`)
      : log.error('Your Out Of GitHub Requests! Some Things Will Not Work!');
    this.setState({
      ghRepos: (
        await octokit.rest.repos.listForUser({
          username: 'TheBotlyNoob',
          per_page: 100,
          type: 'all',
          sort: 'updated'
        })
      ).data
    });
  }

  render() {
    return (
      <Layout>
        <Seo title='Home' />
        <h1>Hi, I'm Jay!</h1>
        <h3>
          I'm A Passionate Developer, I Like To Use Web Technologies Such As
          React, HTML, And JavaScript. I've Worked On Many Projects, Here Are My
          Current Projects
        </h3>

        <hr />

        <ul id='projects'>
          {this.state.ghRepos.map((repo, key) =>
            !repo.private ? (
              <li className='project' key={key}>
                <a href={repo.html_url}>{repo.full_name}</a>
              </li>
            ) : (
              <></>
            )
          )}
        </ul>

        <span style={{ marginTop: '100px' }}>
          I Am An Owner, And Developer Of <a href='/s/freedom'>Freedom</a>
        </span>

        <footer style={{ marginTop: '200px' }}>
          PS: I Would Do Some Fancy Pants Animations, But I'm Not That Good...
        </footer>
      </Layout>
    );
  }
}
