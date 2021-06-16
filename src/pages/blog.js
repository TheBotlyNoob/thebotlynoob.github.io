import React from 'react';
import { Seo } from '../components';
import { Link } from 'gatsby';
import { Layout } from '../components';
import '../styles/blog.css';

export default class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        data: undefined,
    }
  }

  componentDidMount() {
      fetch('/api/blogs.json')
        .then(res => res.json())
        .then(data => this.setState({
          data
        }));
  }
  render() {
    return (
      <Layout>
        <Seo title='Blogs'/>
        {this.state.data?.map((i, key) => <section key={key} className='blog-info'>
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
                  <Link to={i.slug} class='learn-more'>Learn More
                  <svg class='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' stroke-width='2' fill='none' stroke-linecap='round' stroke-linejoin='round'>
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
