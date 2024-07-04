import Layout from '@/components/Layout'
import Pagehero from '@/components/services-detail/Pagehero'
import About from '@/components/services-detail/About'
import Detail from '@/components/services-detail/Detail'
import React from 'react'
import Works from '@/components/Portfolio-detail/Works'

export default function servicesdetail() {
  return (
    <>
    <Layout>
        <Pagehero/>
        <About/>
        <Detail/>
        
    </Layout>
      
    </>
  )
}


