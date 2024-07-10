import Layout from '@/components/Layout'
import Join from '@/components/about/Join'
import Meet from '@/components/about/Meet'
import Pagehero from '@/components/about/Pagehero'
import Values from '@/components/about/Values'
import Work from '@/components/about/Work'
import React from 'react'
import { titleAnim , paraAnim , lineAnim, imageAnim, fadeIn } from '@/components/gsapAnimations';

export default function About() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeIn();
  return (
    <>
    <Layout>
        <Pagehero/>
        {/* <Values/> */}
        <Meet/>
        <Join/>
        <Work/>
        
    </Layout>
      
    </>
  )
}

 
