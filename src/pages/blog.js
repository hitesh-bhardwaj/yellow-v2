import Listing from '@/components/blog/Listing'
import Pagehero from '@/components/blog/Pagehero'
import Layout from '@/components/Layout'
// import { Layout } from 'lucide-react'
import React from 'react'

export default function blog() {
  return (
    <>
    <Layout>
        <Pagehero/>
        <Listing/>
    </Layout>
      
    </>
  )
}


