import React from 'react';
import { Seo } from '../components';
import { Link } from 'gatsby';
import '../styles/404.css';

export default function notFound () {
  return (
    <div id='notfound'>
      <Seo title='404'/>
      <div className='notfound'>
        <div>
          <div className='notfound-404'>
            <h1>!</h1>
          </div>
          <h2>Error<br/>404</h2>
        </div>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. <Link to='/'>Back to homepage</Link></p>
      </div>
    </div>
  );
}
