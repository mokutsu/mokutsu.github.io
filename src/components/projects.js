import React from 'react';

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: {
        name: '',
        stack: '',
        description: '',
      },
      allProjects: [
        {
          name: 'The Home Depot',
          position: 'UX Analyst',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        },
        {
          name: 'G Adventures',
          position: 'Full-Stack Developer',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        },
        {
          name: 'BizXPro',
          position: 'Full-Stack Developer',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        },
        {
          name: 'BlackOut',
          position: 'Full-Stack Developer',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        },
        {
          name: 'Wild Fork Foods',
          position: 'Full-Stack Developer',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        },
        {
          name: 'City Explorer',
          position: 'Full-Stack Developer',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        },
        {
          name: 'Walk This Way',
          position: 'Full-Stack Developer',
          stack: ['ux', 'ux strategy', 'information architecture', 'taxonomy', 'web analytics', 'heat maps', 'clicktale', 'ab testing'],
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium facere aliquam sint delectus, veritatis totam odio voluptatem neque animi. Sapiente molestiae eaque saepe, natus eligendi. Ea aut omnis, accusantium sapiente.'
        },
        {
          name: 'Chris Tam',
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
    this.setState({activeProject: this.state.allProjects[index]})
  }
  render() {
    return (
      <section className='proj'>
        <h2>Works & Projects</h2>
        <section className='projects-demo'>
          <div className='main-box'>
            ACTIVE PROJECT HERE
            <h3>{this.state.activeProject.name}</h3>
            <p>{this.state.activeProject.stack}</p>
            <p>{this.state.activeProject.description}</p>
          </div>
          <section className='projects-list'>
            {this.state.allProjects.map((proj, index) => {
              return (
                <section className={`projects proj-${index} ${this.state.activeProject.name == proj.name && "active"}`} onClick={() => this.onClick(index)} proj='hd' key={index}>
                  {proj.name}
                  {proj.position}
                  {proj.stack}
                </section>
              )
            })}
          </section>
          </section>
        </section>


    )
  }
}

export default ProjectSection;
