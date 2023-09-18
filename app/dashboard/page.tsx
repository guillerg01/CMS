
import React from 'react'
import Layout from './layout'
import App from './app'
import {ApiProvider } from '@/context/contextprovider'
const page = () => {
  return (
  <ApiProvider>
    
    
    <Layout></Layout>
    
    </ApiProvider>
  )
}

export default page
