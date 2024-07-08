import Essentials from '@/components/career/Essentials'
import Listing from '@/components/career/Listing'
import Pagehero from '@/components/career/Pagehero'
import Layout from '@/components/Layout'
import React from 'react'

export default function career() {
  return (
    <>
    <Layout>
        <Pagehero/>
        <Listing/>
        <Essentials/>
    </Layout>
      
    </>
  )
}


