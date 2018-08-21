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
        className={this.state.scrolled ? "global-header scrolled-header" : "global-header full-header"}
        style={{'borderBottom': '2px solid black'}}
      >
        <div
          style={{
            margin: '0 auto',}}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: 'black',
                textDecoration: 'none',
              }}
            >MO</Link>
          </h1>
          <nav>
            <ul>

              <li style={{ margin: 0 }}>
                <Link
                  to="/projects"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >Works
                </Link>
              </li>

              <li style={{ margin: 0 }}>
                <Link
                  to="/about"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >about
                </Link>
              </li>

              <li style={{ margin: 0 }}>
                  <Link
                    to="/contact_page"
                    style={{
                      color: 'black',
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
