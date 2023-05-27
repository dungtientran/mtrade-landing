import Banner from '@/components/Banner';
import ContactBanner from '@/components/ContactBanner';
import Compaties from '@/components/Compaties';
import BannerIcons from '@/components/BannerIcons';
import Nav from '@/components/Nav';
import { Metadata } from 'next';



export default function Home() {
  return (
    <>
      <Nav />
      <Banner />
      <Compaties />
      {/* <BannerIcons /> */}
      <ContactBanner />
    </>
  )
}

