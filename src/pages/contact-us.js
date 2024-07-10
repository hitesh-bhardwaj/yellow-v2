
import Layout from "@/components/Layout";
import Pagehero from '@/components/contact/Pagehero';
import ContactForm from '@/components/contact/ContactForm';
import Address from '@/components/contact/Address';
import { titleAnim , paraAnim , lineAnim, imageAnim, fadeIn } from '@/components/gsapAnimations';

export default function Contact() {
  
    titleAnim();
    paraAnim();
    lineAnim();
    imageAnim();
    fadeIn();


 

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


