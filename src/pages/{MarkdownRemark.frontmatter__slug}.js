import React from 'react';
import { graphql } from 'gatsby';
import { Disqus } from 'gatsby-plugin-disqus';
import { Location } from '@reach/router';
import '../styles/blog.css';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {

  const { frontmatter, html } = data.markdownRemark;

  return (
    <div className='blog-post-container'>
      <div className='blog-post'>
        <div className='head'>
          <h1 className='title'>{frontmatter.title}</h1>
          <h2 className='date'>{frontmatter.date}</h2>
          <h3 className='category'>{frontmatter.cat}</h3>
          <h4 className='num'>Blog Post #{frontmatter.num}</h4>
        </div>
        <div
          className='blog-post-content'
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
      <Disqus className='comments' config={{
            url: `${Location}/${frontmatter.slug}`,
            identifier: frontmatter.num.toString(),
            title: frontmatter.title,
        }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date
        slug
        title
        num
        cat
      }
    }
  }
`
