import Footer from '@/components/Shared/Footer'
import Navigation from '@/components/Shared/Navigation'
import Home from '@/views/Home'
import Image from 'next/image'
import { Fragment } from "react";

export const metadata = {
  title: 'Welcome | Konnect.io',
  description: 'Welcome | Konnect.io',
}

export default function Page() {
  return (
    <Fragment>
    <Navigation/>
      <Home />
      <Footer />
      </Fragment>
    
  )
}