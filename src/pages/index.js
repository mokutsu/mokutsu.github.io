import React from 'react'
import { Link } from 'gatsby'
import photo1 from '../components/photo1.jpg'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section
      style={{'background-color': 'white', 'width': '100%'}}>

      <div class='fixed-background'></div>
      <h1>Hi, I'm Misato.</h1>
      <p>Toronto-based Web Developer. <br></br>
      Passionate about good ux.</p>
    </section>


      <p>Among other things.</p>
      <section  style={{'background-color': 'white', 'width': '100%', 'height': '800px'}}>
        <span
          style={{
            'height': '300px'
          }}>About</span>
        <span>Stack</span>
        <span>Projects</span>
      </section>
  </Layout>
)

export default IndexPage
