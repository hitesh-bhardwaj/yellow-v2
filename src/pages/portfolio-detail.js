import Layout from '@/components/Layout'
import Casestudy from '@/components/Portfolio-detail/Casestudy'
import Pagehero from '@/components/Portfolio-detail/Pagehero'
import RelatedWorks from '@/components/Portfolio-detail/RelatedWorks';
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
        <RelatedWorks/>
      </Layout>
    </>
  )
}

 
