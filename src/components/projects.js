import React from 'react';
// import thailand_beach from './thailand_beach.jpg';
// import network_wires from './network_wires.jpg';
import projectList from './project_list.js';

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
      allProjects: projectList.filter(proj => proj.projectType == props.projectType)
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
        <h2>{this.props.title}</h2>
          <section className={`projects-list`}>
            {this.state.allProjects.map((proj, index) => {
              return (
                <section className={`projects proj-${index} ${this.state.activeProject.name == proj.name && "active"}`} onClick={() => this.onClick(index)} id={proj.name.toLowerCase().replace(' ', '-').replace(' ', '-')} key={index}>

                  <div className={`card card-header ${this.state.activeProject.name !== proj.name ? "shown":"hidden"}`}>
                    <h4>{proj.name}</h4>
                  </div>
                  <div className={`card card-details ${this.state.activeProject.name == proj.name ? "shown":"hidden"}`}>

                      <h4>{proj.name}</h4>
                      <div className='project-detail'>

                        <p>{proj.description}</p>
                        <p className='skills-list'>{proj.stack.map((skill, index) => {
                          return (<span className={`stack-skill ${skill}`} key={index}>{skill}</span>)
                        })}</p>

                      </div>
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
