import Detail from '@/components/blog-detail/Detail'
import Pagehero from '@/components/blog-detail/Pagehero'
import RelatedBlogs from '@/components/blog-detail/RelatedBlogs'
import Layout from '@/components/Layout'
import React from 'react'

export default function blogdetail() {
 
  return (
    <>
    <Layout>
        <Pagehero/>
        <Detail/>
        <RelatedBlogs/>
    </Layout>
      
    </>
  )
}


