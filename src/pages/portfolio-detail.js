import Layout from '@/components/Layout'
import Casestudy from '@/components/Portfolio-detail/Casestudy'
import Pagehero from '@/components/Portfolio-detail/Pagehero'
import Works from '@/components/Portfolio-detail/Works'
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeIn , fadeUp } from '@/components/gsapAnimations';

export default function Portfoliodetail() {
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
        <Casestudy/>
        <Works/>
      </Layout>
    </>
  )
}

 
