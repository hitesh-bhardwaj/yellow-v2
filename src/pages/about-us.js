import Layout from '@/components/Layout'
import Join from '@/components/about/Join'
import Meet from '@/components/about/Meet'
import Pagehero from '@/components/about/Pagehero'
import Work from '@/components/about/Work'
import Values from '@/components/about/Values'
import React from 'react'
import { titleAnim , paraAnim , lineAnim, imageAnim, fadeIn , fadeUp } from '@/components/gsapAnimations';

export default function About() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeIn();
  fadeUp();
  return (
    <>
    <Layout>
        <Pagehero/>
        <Values/>
        <Meet/>
        <Join/>
        
        <Work/>
        
    </Layout>
      
    </>
  )
}

 
