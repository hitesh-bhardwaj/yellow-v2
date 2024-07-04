import React from 'react'
import Layout from "@/components/Layout";
import Pagehero from '@/components/contact/Pagehero';
import ContactForm from '@/components/contact/ContactForm';
import Address from '@/components/contact/Address';

export default function contact() {
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


