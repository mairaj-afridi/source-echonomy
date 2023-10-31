"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react'


import Button from '../Shared/Button'

const Hero = () => {
    const [dialogue, setDialogue] = useState(false)


    return (
        <section className='flex items-center flex-col gap-6 bg-black-secondary justify-center '>
            <aside className="lg:w-[60%] w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-black-500 text-center text-white-main  md:text-[60px] text-[30px] md:leading-[70px] leading-[40px] font-audiowide ">
                    Fastest  & secure <br /> open-source  marketplace
                </h1>
                <p className="md:text-[20px] text-white-off text-center text-[14px] text-black-300">
                    The solution to make Open-Source as <br /> Competitive as Closed Source.
                </p>
            </aside>
            <div className=" w-[300px] h-[115px] flex items-center justify-start relative  ">
                <Link href={"/auth/login"} className="absolute bottom-0 " >
                    <Button text="Register a Project" style="bg-red-success h-[50px]  py-[20px] px-[46px] w-[200px]    rounded-full text-white-main  " onClick={() => setDialogue(true)} />
                </Link>
                <Link href={"/"} className="absolute right-0 bottom-0   w-[145px] h-[116px]" >
                    <Image src={"/Intersect1.jpeg"} priority alt="konnect.io logo" fill sizes="" className="object-contain h-40 w-20 pointer-events-none" />
                </Link>

            </div>

        </section>

    )
}

export default Hero