import React from 'react'
import Wrapper from './Wrapper'
import Image from "next/image";
import Link from 'next/link'
import { FaTwitter} from 'react-icons/fa';
import { BsFacebook, BsDiscord } from 'react-icons/bs';




const Footer = () => {
  return (
    <Wrapper
    id="TopNavigation"
    outerContainerStyle={`h-[104px] bg-brand-primary sticky  z-[100]"} bg-black-off text-white-main `}
    innerContainerStyle="flex justify-between items-center"
>
    <div className='flex items-center justify-center gap-[14px]'>
         {/* Logo */}
         <Link href={"/"} className="relative  w-[50px] h-[40px]" >
         <Image src={"/Logo/logo.png"} priority alt="konnect.io logo" fill sizes="" className="object-contain pointer-events-none" />
        </Link>
          <h1 className='text-[16px] text-center font-audiowide'>Open Source <br/> Economy</h1>
          
    </div>
    <div className='flex items-center justify-center gap-4'>
    <BsFacebook size={28} color="rec-success" />
    <FaTwitter size={28} color="blue" />
    <BsDiscord size={28} color="red" />
    
   

    </div>
    <div className='flex items-center justify-center'>
     <h1 className='font-audiowide text-[18px] font-normal leading-[70px] '>lauriane@opensource.com</h1>
    </div>
</Wrapper>
  )
}

export default Footer