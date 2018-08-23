import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'
import twitter_512 from '../components/twitter_512.png';
import github from '../components/github.jpg';
import unnamed from '../components/unnamed.jpg';

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
          className='main-container'
        >
          <main>
            {children}
          </main>
        </div>
        <footer className='contact-info'>
              <ul>
                <li> <img src={unnamed} alt="" className='social-link'/><a href="//linkedin.com/in/mokutsu">mokutsu</a></li>
                <li><img src={github} alt="" className='social-link'/><a href="//github.com/mokutsu">mokutsu</a></li>
                <li><img src={twitter_512} alt="" className='social-link'/> <a href="//twitter.com/moktusu2">@mokutsu2</a></li>
              </ul>
            </footer>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
