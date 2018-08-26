import React from 'react';
// import { Link } from 'gatsby'
import photo2 from '../components/photo2.jpg'
import Layout from '../components/layout'
import ProjectSection from '../components/projects';
import noun_user from '../components/noun_user.svg';

import twitter_512 from '../components/twitter_512.png';
import github from '../components/github.jpg';
import unnamed from '../components/unnamed.jpg';
// import mokutsu_resume_201808 from '../components/mokutsu_resume_201808.pdf';

const IndexPage = () => (
  <Layout>
    <header className='intro-header'>
      <section className='text-container'>
        <div  className='text-background'>
          <div className='header-text'>
            <h1 className='header-text-h1'>Hi there.</h1>
            <div className='subtext'>
              <p>I'm Misato.  </p>
              <div className='header-pt'>
                <span className='svg-container'>
                  <svg x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 91.834592,961.34871 c -1.0317,0.041 -2.0409,0.4995 -2.75,1.25 -10.567698,11.0566 -34.400798,36.5888 -46.374998,49.18729 l -14.0625,-12.40609 c -1.5707,-1.3911 -4.2657,-1.2275 -5.6566,0.3434 -1.3909,1.57089 -1.227,4.26589 0.3441,5.65659 l 17,14.9999 c 1.5368,1.361 4.154,1.2434 5.5625,-0.25 11.1694,-11.6857 37.946998,-40.43549 48.999998,-51.99989 1.109,-1.1432 1.43,-2.9804 0.7745,-4.4319 -0.6555,-1.4515 -2.2461,-2.4254 -3.837,-2.3493 z m -87.8436977,10.0312 0,67.99989 c 2e-4,2.0943 1.9057,3.9998 4,4 l 69.9999997,0 c 2.0943,-2e-4 3.999798,-1.9057 3.999998,-4 l 0,-34.9999 c 0.03,-2.1133 -1.886498,-4.057 -3.999998,-4.057 -2.1135,0 -4.0299,1.9437 -4,4.057 l 0,30.9999 -62,0 0,-59.99989 54,0 c 2.1132,0.03 4.057,-1.8865 4.057,-4 0,-2.1135 -1.9438,-4.0299 -4.057,-4 l -57.9999997,0 c -2.4198,0.044 -3.9556,2.3142 -4,4 z" fill="#000000" marker="none" visibility="visible" display="inline" overflow="visible"/></g> </svg>
                </span>
                <p> Toronto-based Web Developer. </p>
              </div>
              <div className='header-pt'>
                <span className='svg-container'>
                  <svg x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 91.834592,961.34871 c -1.0317,0.041 -2.0409,0.4995 -2.75,1.25 -10.567698,11.0566 -34.400798,36.5888 -46.374998,49.18729 l -14.0625,-12.40609 c -1.5707,-1.3911 -4.2657,-1.2275 -5.6566,0.3434 -1.3909,1.57089 -1.227,4.26589 0.3441,5.65659 l 17,14.9999 c 1.5368,1.361 4.154,1.2434 5.5625,-0.25 11.1694,-11.6857 37.946998,-40.43549 48.999998,-51.99989 1.109,-1.1432 1.43,-2.9804 0.7745,-4.4319 -0.6555,-1.4515 -2.2461,-2.4254 -3.837,-2.3493 z m -87.8436977,10.0312 0,67.99989 c 2e-4,2.0943 1.9057,3.9998 4,4 l 69.9999997,0 c 2.0943,-2e-4 3.999798,-1.9057 3.999998,-4 l 0,-34.9999 c 0.03,-2.1133 -1.886498,-4.057 -3.999998,-4.057 -2.1135,0 -4.0299,1.9437 -4,4.057 l 0,30.9999 -62,0 0,-59.99989 54,0 c 2.1132,0.03 4.057,-1.8865 4.057,-4 0,-2.1135 -1.9438,-4.0299 -4.057,-4 l -57.9999997,0 c -2.4198,0.044 -3.9556,2.3142 -4,4 z" fill="#000000" marker="none" visibility="visible" display="inline" overflow="visible"/></g> </svg>
                </span>
                <p>Cares about good ux.</p>
              </div>

              <div className='header-pt'>
              <span className='svg-container'>
              <svg x="0px" y="0px" viewBox="0 0 100 125"><g transform="translate(0,-952.36218)"><path d="m 91.834592,961.34871 c -1.0317,0.041 -2.0409,0.4995 -2.75,1.25 -10.567698,11.0566 -34.400798,36.5888 -46.374998,49.18729 l -14.0625,-12.40609 c -1.5707,-1.3911 -4.2657,-1.2275 -5.6566,0.3434 -1.3909,1.57089 -1.227,4.26589 0.3441,5.65659 l 17,14.9999 c 1.5368,1.361 4.154,1.2434 5.5625,-0.25 11.1694,-11.6857 37.946998,-40.43549 48.999998,-51.99989 1.109,-1.1432 1.43,-2.9804 0.7745,-4.4319 -0.6555,-1.4515 -2.2461,-2.4254 -3.837,-2.3493 z m -87.8436977,10.0312 0,67.99989 c 2e-4,2.0943 1.9057,3.9998 4,4 l 69.9999997,0 c 2.0943,-2e-4 3.999798,-1.9057 3.999998,-4 l 0,-34.9999 c 0.03,-2.1133 -1.886498,-4.057 -3.999998,-4.057 -2.1135,0 -4.0299,1.9437 -4,4.057 l 0,30.9999 -62,0 0,-59.99989 54,0 c 2.1132,0.03 4.057,-1.8865 4.057,-4 0,-2.1135 -1.9438,-4.0299 -4.057,-4 l -57.9999997,0 c -2.4198,0.044 -3.9556,2.3142 -4,4 z" fill="#000000" marker="none" visibility="visible" display="inline" overflow="visible"/></g> </svg>
            </span>
                 <p>Likes checking boxes.</p>
              </div>
            </div>

        </div>
      </div>
    </section>
      <section className='img-container'>
        <img src={photo2} alt="" className='banner-img'/>
      </section>

    </header>
    <section id="project-section">
      <ProjectSection title={'Some Works & Projects'} projectType={'dev'}/>
      <ProjectSection title={'Other Works (UX)'} projectType={'ux'} />
    </section>

    <section className='about' id="about">
      <h2>About</h2>
      <div>Hi, I'm Misato; I like solving problems, building useful things, and helping users. I'm an avid learner, coffee afficionado, tech enthusiast, and staunchly pro-oxford comma. <p className='testimonial-note'>
        Here's some nice words people have said.
      </p>
    </div>

        <div className='testimonial-list'>
          <div className='testimonial'>
            <img src={noun_user} alt=""/>
            <p>"she was a pleasure to work with! ...her ability to apply new concepts made her a strong team member."</p>
            <p className='testimonial-attribution'>~ Tina, Walk This Way Project</p>
          </div>
          <div className='testimonial'>
            <img src={noun_user} alt=""/>
            <p>"She was a great contributor to the team and a pleasure to work with!"</p>
            <p className='testimonial-attribution'>~ Judy, BizXPro Employer</p>
          </div>

          <div className='testimonial'>
            <img src={noun_user} alt=""/>
            <p>"...team player who can easily work with anyone, and motivate other team members around her"</p>
            <p  className='testimonial-attribution'>~ Xiu, Bitmaker Classmate</p>
          </div>

        </div>
        <div className='resume'>
          <p>Want something a little less fluffly?  I hear you. </p><p> Contact me to get the latest copy of my resume. Or just say hi, chat about projects, work, etc. Ya know.</p>
        </div>

    </section>

    <section className='contact' id="contact">
      <h2>Contact</h2>
        <ul className='contact-list'>
          <li><a href="//linkedin.com/in/mokutsu" target="_blank" rel="noopener noreferrer">
            <img src={unnamed} alt="" className='social-link contact-section'/><span>mokutsu</span></a></li>
          <li>
            <a href="//github.com/mokutsu"  target="_blank" rel="noopener noreferrer"><img src={github} alt="" className='social-link contact-section'/><span>mokutsu</span></a></li>
          <li><a href="//twitter.com/mokutsu2"  target="_blank" rel="noopener noreferrer"><img src={twitter_512} alt="" className='contact-section social-link'/> <span>@mokutsu2</span></a></li>
        </ul>
    </section>

  </Layout>
)

export default IndexPage
