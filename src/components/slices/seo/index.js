import React from 'react'
import { Helmet } from 'react-helmet'
import General from './general.js'
import OpenGraph from './openGraph.js'
import Twitter from './twitter.js'

const SEOIndex = ({ slice }) => {
  return (
    <Helmet>
      <html lang="en-nz" />
      <meta name="google-site-verification" content="DAiQEMzcJlBMppysBm9TztriuQblYdj_9Rlbi23ddC0" />
      <General />
      <OpenGraph />
      <Twitter />
    </Helmet>
  )
}
export default SEOIndex
