import Layout from '@/components/Layout'
import Works from '@/components/Portfolio-detail/Works'
import Pagehero from '@/components/services/Pagehero'
import ServiceList from '@/components/services/ServiceList'
import React from 'react'

export default function services() {
  return (
    <>
    <Layout>
        <Pagehero/>
        <ServiceList/>
        <Works/>
    </Layout>
      
    </>
  )
}


