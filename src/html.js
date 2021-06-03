import React from 'react';
import PropTypes from 'prop-types';
import doge from './images/doge.jpg';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <script async src='https://arc.io/widget.min.js#JwJzS1VY'></script>
        <meta charSet='utf-8' />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        {props.headComponents}
      </head>
      <header className='text-gray-600 body-font'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
          <a href='/' className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
            <img className='w-10 h-10 text-white bg-black dark:bg-white p-2 rounded-full' src={doge} alt='doge'/>
            <span className='ml-3 text-xl'>JJ</span>
          </a>
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center'>
            <a href='/blog' className='mr-5 hover:text-gray-900'>Blog</a>
            <a href='/fonts' className='mr-5 hover:text-gray-900'>Fonts</a>
            <a href='https://github.com/TheBotlyNoob' className='mr-5 hover:text-gray-900'>GitHub</a>
          </nav>
        </div>
      </header>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id='___gatsby'
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
      <footer>
        <span>This Website Is Made With <span role='img' aria-label='heart'>❤️</span> In: <a href='https://gatsbyjs.com/'>Gatsby.js</a>, And Is Open Source On: <a href='https://github.com/TheBotlyNoob/TheBotlyNoob.github.io/'>GitHub</a>!</span>
      </footer>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
