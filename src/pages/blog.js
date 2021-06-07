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
        {this.state.data?.map((i, key) => <a href={i.slug} key={key} class='text-gray-600 flex justify-center'>
          <div class='container px-5 py-24 mx-auto'>
            <div class='flex flex-wrap -mx-4 -my-8'>
              <div class='py-8 px-4 lg:w-1/3'>
                <div class='h-full flex items-start'>
                  <div class='w-12 flex-shrink-0 flex flex-col text-center leading-none'>
                    <span class='text-gray-500 pb-2 mb-2 border-b-2 border-gray-200'>{new Date(i.date).toLocaleString('default', { month: 'short' })}</span>
                    <span class='font-medium text-lg text-gray-800 title-font leading-none'>{i.date.split('-')[1]}</span>
                  </div>
                  <div class='flex-grow pl-6'>
                    <h2 class='tracking-widest text-xs title-font font-medium text-indigo-500 mb-1'>{i.cat}</h2>
                    <h1 class='title-font text-xl font-medium text-gray-900 mb-3'>{i.title}</h1>
                    <p class='leading-relaxed mb-5'>{i.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        )}
      </div>
    );
  }
};
