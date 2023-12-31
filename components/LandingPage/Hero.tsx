"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react'


import Button from '../Shared/Button'

const Hero = () => {
    const [dialogue, setDialogue] = useState(false)

    return (
        <section className='flex items-center p-4 pb-20 md:pb-32 flex-col gap-12 md:gap-20 pt-12 bg-brand-main  justify-center '>
            <aside className="lg:w-[70%] w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-black-500 text-center text-white-main md:text-[60px] text-[40px] md:leading-[70px] leading-[40px] font-audiowide ">
                    Fastest  & secure <br /> <span className="text-red-success   ">open-source</span> marketplace
                </h1>
                <p className="md:text-[20px] text-white-off text-center leading-7 text-[13px] text-black-300">
                    The solution to make Open-Source asCompetitive as  <br /> Closed Source.
                </p>
            </aside>
            <div className=" w-[300px] h-[115px] flex items-center justify-start relative  ">
                {/* <Link href={"/auth/login"} className="absolute bottom-0 " > */}
                    <div className="absolute bottom-0 ">

                    <Button text="Register a Project" style="bg-red-success h-[45px] md:h-[50px]  py-[20px] px-[46px] w-[208px] md:w-[200px]    rounded-full text-white-main  " onClick={() => setDialogue(true)} />
                    </div>
                {/* </Link> */}
                <Link href={"/"} className="absolute right-0 bottom-0 w-[120px] md:w-[145px] h-[104px] md:h-[116px]" >
                    <Image src={"/Intersect1.jpeg"} priority alt="konnect.io logo" fill sizes="" className="object-contain h-40 w-20 pointer-events-none" />
                </Link>
            </div>
        </section>

    )
}
export default Hero