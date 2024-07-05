import Portfolio from '@/components/HomePage/Portfolio'
import Layout from '@/components/Layout'
import PageHero from '@/components/Portfolio/PageHero'
import Projects from '@/components/Portfolio/Projects'

import React from 'react'

export default function portfolio() {
  return (
    <>
    <Layout>
        <PageHero/>
        <Projects/>
        
    </Layout>
      
    </>
  )
}


