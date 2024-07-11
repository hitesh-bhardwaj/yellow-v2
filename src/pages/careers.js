import Essentials from '@/components/career/Essentials'
import Listing from '@/components/career/Listing'
import Pagehero from '@/components/career/Pagehero'
import Layout from '@/components/Layout'
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeIn , fadeUp } from '@/components/gsapAnimations';

export default function Career() {
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
        <Listing/>
        <Essentials/>
    </Layout>
    </>
  )
}


