/* eslint-disable react-hooks/rules-of-hooks */
import Layout from '@/components/Layout'
import Pagehero from '@/components/services-detail/Pagehero'
import About from '@/components/services-detail/About'
import Detail from '@/components/services-detail/Detail'
import { titleAnim , paraAnim , lineAnim, imageAnim , imgAnim , fadeUp} from '@/components/gsapAnimations';

export default function servicesdetail() {
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
        <About/>
        <Detail/>
    </Layout>
      
    </>
  )
}


