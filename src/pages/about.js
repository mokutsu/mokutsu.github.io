import React from 'react'

import Layout from '../components/layout'

const AboutPage = () => (
  <Layout>
    <main style={{
      'padding': '2rem'
    }}>
    <h2>About </h2>
    <p>I'm a web developer, with 2 years of experience working as a full-stack dev. I've recently forayed into user experience, working with a major retailer for their e-commerce team. Though I love working with UXers, I really miss coding and actually getting to work on the technical issues, and creating these great experiences for end users.</p>

    <h2>Stack</h2>
    <p>
      As a dev, I've mostly worked on full stack projects in python and javascript. Most of the tools I've used are:</p>
      <ul>
        <li>Python: Django MVT framework, Django REST framework, testing</li>
        <li>Older JavaScript: ES5 (aka vanilla Javascript, plain JS), jquery</li>
        <li>Modern JavaScript: ES6, NPM, React, ES6, Babel, Webpack, Jest, Enzyme</li>
        <li>HTML5, CSS: scss, bootstrap</li>
        <li>Workflow tools: Version control (GIT, github), agile workflow (ok, agile-ish)</li>
      </ul>

    <h2>Other</h2>
    <p> I'm pretty into cooking, eating, and other.</p>
    </main>

  </Layout>
)

export default AboutPage
