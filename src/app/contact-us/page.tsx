import Nav from '@/components/Nav'
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Liên Hệ | Malaysia B2B to Vietnam'
}
const Contact = () => {
  return (
    <>
      <Nav />
      <div className='wrapper flex items-center justify-center min-h-screen py-[100px]'>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf6LmdI8pfay-3kmgn9QYrHThLPCETGqgqEepbA6P-0ByLSFw/viewform?embedded=true"
          width='640'
          height='1224'
        ></iframe>
      </div>
    </>
  )
}

export default Contact
