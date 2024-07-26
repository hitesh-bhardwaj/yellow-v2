
import Layout from "@/components/Layout";
import Pagehero from '@/components/contact/Pagehero';
import Address from '@/components/contact/Address';
import { titleAnim , paraAnim , lineAnim, imageAnim, fadeIn , fadeUp} from '@/components/gsapAnimations';
import ContactForm from "@/components/contact/ContactForm";
// import ContactForm from "@/components/contact/ContactForm";


export default function Contact() {
  
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
        <ContactForm/>
        <Address/>
    </Layout>
      
    </>
  )
}


