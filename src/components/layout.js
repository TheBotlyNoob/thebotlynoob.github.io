import React, { Component } from 'react';
import doge from '../images/doge.jpg';
import { Link } from 'gatsby';
import pages from '../../static/api/pages.json';

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  render() {
    return (
      <div id='main' {...this.props}>
        <header className='text-gray-600 body-font'>
          <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
            <Link
              to='/'
              className='flex title-font font-medium items-center mb-4 md:mb-0'
            >
              <img
                className='w-10 h-10 text-white p-2 bg-indigo-500 rounded-full'
                src={doge}
                alt='doge'
              />
              <span className='ml-3 text-xl'>JJ</span>
            </Link>
            <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center'>
              {pages.map((page, key) => (
                <Link key={key} to={page} className='mr-5 hover:text-gray-900'>
                  {page
                    .split('/')
                    [page.split('/').length - 1].replace(/./g, (c, i) =>
                      i === 0 ? c.toUpperCase() : c
                    )}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <div id='body'>{this.props.children}</div>
        <footer>
          <span>
            This Website Is Made With{' '}
            <span role='img' aria-label='heart'>
              ❤️
            </span>{' '}
            In: <a href='https://gatsbyjs.com/'>Gatsby.js</a>, And Is Open
            Source On:{' '}
            <a href='https://github.com/TheBotlyNoob/TheBotlyNoob.github.io/'>
              GitHub
            </a>
            !
          </span>
        </footer>
      </div>
    );
  }
}
