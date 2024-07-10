/* eslint-disable react-hooks/rules-of-hooks */
import Overview from '@/components/career-detail/Overview'
import Pagehero from '@/components/career-detail/Pagehero'
import Layout from '@/components/Layout'
import { titleAnim , paraAnim , lineAnim, imageAnim ,fadeIn } from '@/components/gsapAnimations';

export default function careerdetail() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeIn();
  return (
    <>
    <Layout>
        <Pagehero/>
        <Overview/>
    </Layout>
      
    </>
  )
}


