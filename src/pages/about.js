import Layout from '@/components/Layout'
import Meet from '@/components/about/Meet'
import Pagehero from '@/components/about/Pagehero'
import Values from '@/components/about/Values'
import React from 'react'

export default function about() {
  return (
    <>
    <Layout>
        <Pagehero/>
        <Values/>
        <Meet/>
        
    </Layout>
      
    </>
  )
}

 
