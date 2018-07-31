import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem 0',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >MO</Link>
      </h1>
      <nav>
        <ul>
          <li style={{ margin: 0 }}>
            <Link
              to="/about"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >about
            </Link>
          </li>

          <li style={{ margin: 0 }}>
            <Link
              to="/projects"
              style={{
                color: 'white',
                textDecoration: 'none',
              }}
            >projects
            </Link>
          </li>
          <li style={{ margin: 0 }}>
              <Link
                to="/contact_page"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                }}
              >contact
              </Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
