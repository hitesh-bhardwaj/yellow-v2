/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Works from '@/components/Portfolio-detail/Works'
import Pagehero from '@/components/services/Pagehero'
import ServiceList from '@/components/services/ServiceList'
import { titleAnim , paraAnim , lineAnim, imageAnim, imgAnim } from '@/components/gsapAnimations';


export default function services() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  imgAnim();

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


