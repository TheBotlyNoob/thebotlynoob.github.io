import React from 'react';
import { Seo } from '../components';
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
      <div>
        <Seo title='Blogs'/>
        {this.state.data?.map((i, key) => <section key={key} className='blog-post'>
          <div className='outer-container'>
            <div className='middle-container'>
              <div className='inner-container'>
                <div className='left-info'>
                  <span className='category'>{i.cat}</span>
                  <span className='date'>{i.date}</span>
                </div>
                <div className='main-body'>
                  <h2 className='title'>{i.title}</h2>
                  <p className='desc'>{i.desc}</p>
                  <a href={i.slug} className='learn-more'>Learn More
                    <svg className='arrow' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
      </div>
    );
  }
};
