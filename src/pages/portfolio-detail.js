import Layout from '@/components/Layout'
import Casestudy from '@/components/Portfolio-detail/Casestudy'
import Pagehero from '@/components/Portfolio-detail/Pagehero'
import Works from '@/components/Portfolio-detail/Works'
import React from 'react'

export default function Portfoliodetail() {
  return (
    <>
      <Layout>
        <Pagehero/>
        <Casestudy/>
        <Works/>
      </Layout>
    </>
  )
}

 
