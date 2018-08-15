import React from 'react'
import { Link } from 'gatsby'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }
  componentDidMount() {
    console.log(this)
    window.addEventListener('scroll', this.handleScroll.bind(this));
    console.log('added')
  }
  componentWillUnmount() {
        console.log(this)
    window.removeEventListener('scroll', this.handleScroll.bind(this));
    console.log('removed')
  }
  handleScroll(e) {
        console.log(this)
    console.log('handle scroll')
    this.setState({scrolled: true});
  }
  render() {
    return (
      <header
        style={{
          marginBottom: '1.45rem'
        }}
        className={this.state.scrolled ? "scrolled-header" : "full-header"}
      >
        <div
          style={{
            margin: '0 auto',
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
    );
  }
}

export default Header
