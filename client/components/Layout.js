import React from 'react'
import Head from 'next/head'
import { Menu } from './'

export default (props) => {
  const Content = props.content
  return (
  <main role="content">
    <Head><title>Lightswarm  |  {props.title}</title></Head>
    <Menu />
    <Content />
  </main>
)}
