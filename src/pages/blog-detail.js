import Detail from '@/components/blog-detail/Detail'
import Pagehero from '@/components/blog-detail/Pagehero'
import RelatedBlogs from '@/components/blog-detail/RelatedBlogs'
import Layout from '@/components/Layout'
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeIn ,fadeUp } from '@/components/gsapAnimations';

export default function blogdetail() {
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
        <Detail/>
        <RelatedBlogs/>
    </Layout>
      
    </>
  )
}


