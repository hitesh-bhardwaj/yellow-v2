
import Layout from '@/components/Layout'
import PageHero from '@/components/Portfolio/PageHero'
import Projects from '@/components/Portfolio/Projects'
import { titleAnim , paraAnim , lineAnim, imageAnim , fadeUp } from '@/components/gsapAnimations';

export default function Portfolio() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();
  fadeUp();

  return (
    <>
        <Layout>
            <PageHero/>
            <Projects/>
        </Layout>
    </>
  )
}


