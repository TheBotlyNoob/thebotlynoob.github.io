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
        {this.state.data?.map((i, key) => <section key={key} className='text-gray-600 flex justify-center text-center'>
          <div className='container px-5 py-24 mx-auto'>
            <div>
              <div className='py-8 px-4'>
                <div className='h-full flex items-start'>
                  <div className='w-12 flex-shrink-0 flex flex-col text-center leading-none'>
                    <span className='text-gray-500 pb-2 mb-2 border-b-2 border-gray-200'>{new Date(i.date).toLocaleString('default', { month: 'short' })}</span>
                    <span className='font-medium text-lg text-gray-800 leading-none'>{i.date.split('-')[1]}</span>
                  </div>
                  <div className='flex-grow pl-6'>
                    <h2 className='tracking-widest text-xs font-medium text-indigo-500 mb-1'>{i.cat}</h2>
                    <h1 className='text-xl font-medium text-gray-900 mb-3'>{i.title}</h1>
                    <p className='leading-relaxed'>{i.desc}</p>
                    <Link to={i.slug} class="text-indigo-500 inline-flex items-center mt-4 mb-5">Learn More
                    <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                  </div>
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
