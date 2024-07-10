
import Layout from '@/components/Layout'
import PageHero from '@/components/Portfolio/PageHero'
import Projects from '@/components/Portfolio/Projects'
import { titleAnim , paraAnim , lineAnim, imageAnim } from '@/components/gsapAnimations';

export default function Portfolio() {
  titleAnim();
  paraAnim();
  lineAnim();
  imageAnim();

  return (
    <>
        <Layout>
            <PageHero/>
            <Projects/>
        </Layout>
    </>
  )
}


