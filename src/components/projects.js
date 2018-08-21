import React from 'react';

class ProjectSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: {
        name: 'G Adventures',
        stack: 'JavaScript',
        description: ''
      },
      allProjects: [

      ]
    };
  }

  render() {
    return (
      <section className='proj'>
        <h2>What I've been working on</h2>
        <div className='main-box'>
          <h3>{this.state.activeProject.name}</h3>
          <p>{this.state.activeProject.stack}</p>
          <p>{this.state.activeProject.description}</p>
        </div>
        <section className='projects-list'>
            <section className='projects pro-1'>
              The Home Depot
              <section>

              </section>
            </section>


            <section className='projects pro-2'>
              G Adventures
              <section>

              </section>
            </section>

            <section className='projects pro-3'>
              BizXPro
            </section>

            <section className='projects pro-4'>
              Blackout
            </section>

            <section className='projects pro-5'>
              City Explorer
            </section>

            <section className='projects pro-6'>
              Wild Fork Foods
            </section>

            <section className='projects pro-7'>
              Vision Quest
            </section>


            <section className='projects pro-8'>
              Chris Tam
            </section>


            <section className='projects pro-9'>
              Walk This Way
              <section>

              </section>
            </section>


          </section>
        </section>
    )
  }
}

export default ProjectSection;
