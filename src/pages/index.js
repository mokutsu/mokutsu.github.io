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
      <p>Toronto-based Web Developer. </p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi explicabo est voluptatibus odit cum cumque! Nobis possimus, est laudantium ullam reiciendis eos, animi iste. Deserunt temporibus consequuntur porro, libero vero.</p>
      <p>Among other things.</p>
    </section>

        <nav>
          <ul>
            <li>about</li>
            <li>projects</li>
            <li>contact</li>
          </ul>
        </nav>
  </Layout>
)

export default IndexPage
