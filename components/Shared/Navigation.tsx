"use client";

import React, { useState } from 'react'
import Button from './Button'
import Image from "next/image";

import Link from "next/link";
import Wrapper from './Wrapper';


const Navigation = () => {

const [dialogue , setDialogue]=useState(false)

    return (
        <Wrapper
        id="TopNavigation"
        outerContainerStyle={`h-[104px] bg-brand-primary sticky  z-[100]"} bg-black-secondary text-white-main `}
        innerContainerStyle="flex justify-between items-center"
    >
        <div className='flex items-center justify-center gap-[14px]'>
         {/* Logo */}
         <Link href={"/"} className="relative  w-[50px] h-[40px]" >
         <Image src={"/Logo/logo.png"} priority alt="konnect.io logo" fill sizes="" className="object-contain pointer-events-none" />
        </Link>
          <h1 className='text-[16px] text-center font-audiowide'>Open Source <br/> Economy</h1>
          
    </div>
            <Link href={"/auth/login"} >
                <Button text="Connect" style="bg-red-success rounded-full text-white-main  " onClick={() => setDialogue(true)} />
            </Link>
            
</Wrapper>
        
    )
}

export default Navigation