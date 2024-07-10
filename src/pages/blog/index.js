import Listing from '@/components/blog/Listing'
import Pagehero from '@/components/blog/Pagehero'
import Layout from '@/components/Layout'
import { titleAnim , paraAnim , lineAnim, imageAnim } from '@/components/gsapAnimations';


export default function Blog() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
 
  return (
    <>
      <Layout>
          <Pagehero/>
          <Listing/>
      </Layout>
    </>
  )
}


