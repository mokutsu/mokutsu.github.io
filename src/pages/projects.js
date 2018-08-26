import React from 'react';
// import { Link } from 'gatsby'
import Layout from '../components/layout';

const IndexPage = () => (
  <Layout>
    <div>
      <figure style={{width: '25%', height: '25%', border: '1px solid grey'}}>
          <img src="https://www.doi.gov/sites/doi.gov/files/uploads/seaotterkodiaknwrlisahuppusfws.jpg" alt=""
          style={{width: '100%', height: '100%'}}
        />
          <figcaption style={{padding: '0.5rem'}}>
            <h2>My projec 1</h2>
            <p style={{fontSize: '0.6rem', opacity: 0}}>description of work Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum quia maiores esse deserunt autem similique, perferendis, omnis, perspiciatis id delectus ullam explicabo vitae sequi fuga debitis fugit nulla sit quam?</p>
          </figcaption>

      </figure>


    </div>
  </Layout>
)

export default IndexPage
