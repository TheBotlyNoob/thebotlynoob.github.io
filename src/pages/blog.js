import React from 'react';
import { Seo } from '../components';
import { Link } from 'gatsby';
import { Layout } from '../components';
import { fetcher } from '../utils';
import '../styles/blog.css';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        data: [],
    }
}

componentDidMount = fetcher('/api/blogs.json', null, 'json', data => this.setState({ data }))

  render() {
    return (
      <Layout>
        <Seo title='Blogs'/>
        {this.state.data.map((i, key) => <section key={key} className='blog-info'>
          <div className='outer-container'>
            <div className='medium-container'>
              <div className='inner-container'>
                <div className='dates'>
                  <span className='month'>{new Date(i.date).toLocaleString('default', { month: 'short' })}</span>
                  <span className='day'>{i.date.split('-')[1]}</span>
                </div>
                <div className='main-body'>
                  <h2 className='category'>{i.cat}</h2>
                  <h1 className='title'>{i.title}</h1>
                  <p className='desc'>{i.desc}</p>
                  <Link to={i.slug} className='learn-more'>Learn More
                  <svg className='arrow' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                    <path d='M5 12h14'></path>
                    <path d='M12 5l7 7-7 7'></path>
                  </svg>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
      </Layout>
    );
  }
};
