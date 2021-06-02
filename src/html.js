import React from 'react'
import PropTypes from 'prop-types'

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
        <span>This Website Is Made With <span role='img' aria-label='emoji'>❤️</span> In: <a href='https://gatsbyjs.com/'>Gatsby.js</a>, And Is Open Source On: <a href='https://github.com/TheBotlyNoob/TheBotlyNoob.github.io/'>GitHub</a>!</span>
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
