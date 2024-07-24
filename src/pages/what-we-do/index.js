/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import RelatedWorks from '@/components/Portfolio-detail/RelatedWorks'
import Pagehero from '@/components/services/Pagehero'
import ServiceList from '@/components/services/ServiceList'
import { titleAnim , paraAnim , lineAnim, imageAnim, imgAnim , fadeUp} from '@/components/gsapAnimations';

export default function services() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  imgAnim();
  fadeUp();

  return (
    <>
    <Layout>
        <Pagehero/>
        <ServiceList/>
        <RelatedWorks/>
    </Layout>
    </>
  )
}


