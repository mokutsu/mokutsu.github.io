import React from 'react'
import { Link } from 'gatsby'
import photo2 from '../components/photo2.jpg'
import canva_desk from '../components/canva_desk.jpg';
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <section
      className='banner'
    >
      {/* <div className='img-container'> */}
        {/* <img className='test-img' src={photo2} alt=""/> */}
      {/* </div> */}

    </section>
    <section className='text-container'>
      <div  className='text-background'>
      </div>
        <div className='header-text'>
          <h1 className='header-text-h1'>Hello.</h1>
          <p>Toronto-based Web Developer. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi explicabo est voluptatibus odit cum cumque! Nobis possimus, est laudantium ullam reiciendis eos, animi iste. Deserunt temporibus consequuntur porro, libero vero.</p>
          <p>Among other things.</p>
      </div>

    </section>

  </Layout>
)

export default IndexPage
