import Listing from '@/components/blog/Listing'
import Pagehero from '@/components/blog/Pagehero'
import Layout from '@/components/Layout'
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeUp} from '@/components/gsapAnimations';


export default function Blog() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeUp();
 
  return (
    <>
      <Layout>
          <Pagehero/>
          <Listing/>
      </Layout>
    </>
  )
}


