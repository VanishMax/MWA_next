import React from 'react'

import Nav from '../components/nav'
import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <title>Modern Web App</title>
      <meta name='description' content='MWA is a progressive solution to build awesome web applications'/>
      <meta name='keywords' content='MWA, Modern Web App, PWA, Progressive Web App, Next.js, Next, Tailwind, Redux, WebDev'/>
      <meta name='author' content='VanishMax'/>
    </Head>
    <Nav />
    <div className='hero'>
      <h1 className='title'>Next.js + Tailwind css</h1>
    </div>
  </div>
)