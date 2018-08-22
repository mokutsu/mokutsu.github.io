import React from 'react';

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: {
        name: '',
        stack: [],
        description: '',
      },
      emptyProject: {
          name: '',
          stack: [],
          description: '',
      },
      allProjects: [
        {
          name: 'The Home Depot',
          position: 'UX Analyst',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Taking a data-driven approach to optimize the ux strategy, information architecture for homedepot.ca, for Appliances, Kitchen, Bath portfolios',
          link: '://homedepot.ca'
        },
        {
          name: 'G Adventures',
          position: 'Full-Stack Developer',
          stack: ['JavaScript', 'python', 'django MVT Framework', 'django REST', 'jquery', 'bootstrap', 'html', 'css', 'sass', 'unix', 'postgresql', 'mysql'],
          description: 'Develop new functionality, fix bugs for web applications used by Operations teams using python and JavaScript. Write tests, deploy features, refactor legacy code, all that goodness too.',
          link: '(internal password protected website)'
        },
        {
          name: 'BizXPro',
          position: 'Junior Full-Stack Developer',
          stack: ['react.js', 'redux', 'NPM', 'webpack', 'babel', 'JavaScript', 'ES6', 'python', 'django REST', 'rest api', 'heroku paas', 'docker', 'postgres'],
          description: 'Fix bugs, implement new features for a fully bootstrapped early stage IT marketplace startup',
          link: 'www.bizxpro.com'
        },
        {
          name: 'Wild Fork Foods',
          position: 'Student (UX Research Course)',
          stack: ['ux', 'ux research', 'usability testing', 'one-on-one moderated testing'],
          description: 'Identified key user segments, created test script, and conducted one-on-one moderated testing for identifying usability issues for the launch of Wild Fork Foods, a US-based online meat ordering service',
          link: 'www.wildforkfoods.com'
        },
        {
          name: 'City Explorer',
          position: 'Student (Information Architecture Course)',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Created user flows, wire frames, site maps and develop information architecture for City Explorer, a "walk and discover" app project developed for George Brown College course',
          link: 'see project section'
        },
        {
          name: 'WeatherView',
          position: 'Student (react redux)',
          stack: ['react', 'redux', 'JavaScript', 'API integration'],
          description: 'Developed a mini application charting weather in several cities using react, redux, and open weather API for Stephen Girder\'s react redux course.'
        },
        {
          name: 'Chris Tam',
          position: 'Full-Stack Developer',
          stack: ['react', 'npm', 'node', 'css', 'javascript', 'github pages'],
          description: 'Converted wireframe design into functioning portfolio website for visual designer.'
        },
        {
          name: 'Prior Portfolio',
          position: 'Front-end Developer',
          stack: ['ruby', 'jekyll', 'liquid templating', 'javascript', 'css', 'github pages'],
          description: 'Designed and developed a rudimentary portfolio page using Jekyll static site generator'
        },
        {
          name: 'Animated Backgrounds',
          position: 'Front-end Developer',
          stack: ['ruby', 'jekyll', 'javascript', 'three.js', 'css', 'github pages'],
          description: 'designed and developed animated backgrounds using three.js, mostly to play around with framework.'
        },
        {
          name: 'Walk This Way',
          position: 'Full-Stack Developer',
          stack: ['ruby on rails', 'ruby', 'javascript', 'google maps api', 'css', 'html', 'ruby gems', 'heroku paas', 'postgresql'],
          description: 'Developed social web application for users to save and share their favourite city walks.'
        },
        {
          name: 'Other',
          position: 'Full-Stack Developer',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        }
      ]
    };
  }
  onClick(index) {
    console.log("click")
    console.log(this.props)
    console.log(index)
    console.log(this.state.allProjects[index])
    if (this.state.activeProject.name == this.state.allProjects[index].name) {
      this.setState({activeProject: Object.assign(this.state.emptyProject)})
      return;
    }
    this.setState({activeProject: this.state.allProjects[index]})
  }
  render() {
    return (
      <section className='proj'>
        <h2>Works & Projects</h2>
          <section className={`projects-list`}>
            {this.state.allProjects.map((proj, index) => {
              return (
                <section className={`projects proj-${index} ${this.state.activeProject.name == proj.name && "active"}`} onClick={() => this.onClick(index)} proj='hd' key={index}>
                  <h4>{proj.name}</h4>
                  <div className='project-detail'>
                    <p className='skills-list'>{proj.stack.map((skill, index) => {
                      return (<span className='stack-skill' key={index}>{skill}</span>)
                    })}</p>

                    <p>{proj.description}</p>
                  </div>
                </section>
              )
            })}
          </section>
          </section>


    )
  }
}

export default ProjectSection;
