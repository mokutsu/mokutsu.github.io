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
          <nav>
            <ul>

              <li style={{ margin: 0 }}>
                {/* <Link
                  to="/projects"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >Works
                </Link> */}
                <a href="#project-section">Works</a>
              </li>

              <li style={{ margin: 0 }}>
                {/* <Link
                  to="/about"
                  style={{
                    color: 'black',
                    textDecoration: 'none',
                  }}
                >About
                </Link> */}
                <a href="#about">About</a>
              </li>
              <li style={{ margin: 0 }}>
                <a href="#contact">Contact</a>
              </li>
              {/* <li style={{ margin: 0 }}>
                  <Link
                    to="/contact_page"
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                    }}
                  >Contact
                  </Link>
              </li> */}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header
