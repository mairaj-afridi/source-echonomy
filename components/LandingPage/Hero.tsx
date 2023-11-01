"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react'


import Button from '../Shared/Button'

const Hero = () => {
    const [dialogue, setDialogue] = useState(false)


    return (
        <section className='flex items-center flex-col gap-20 pt-12 bg-brand-main  justify-center '>
            <aside className="lg:w-[70%] w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-black-500 text-center text-white-main  lea md:text-[60px] text-[30px] md:leading-[70px] leading-[40px] font-audiowide ">
                    Fastest  & secure <br /> <span className="text-red-success   ">open-source</span> marketplace
                </h1>
                <p className="md:text-[20px] text-white-off text-center leading-7 text-[14px] text-black-300">
                    The solution to make Open-Source asCompetitive as  <br /> Closed Source.
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

            <div className="">
                <h1 className="text-black-500 text-center text-white-main  lea md:text-[52px] text-[26px] md:leading-[70px] leading-[40px] font-audiowide ">
                    Projects
                </h1>
            </div>

            {/* main div */}
            <div className="bg-yellow-300 flex items-center justify-center gap-5">
                <div className="w-[540px] h-[396px]  bg-[#132743] rounded-3xl">
                    {/* upper div */}
                    <div className="bg-green-500 p-6 flex gap-6 w-full h-[120px]  ">
                        {/* <Image src={"/SVG/Vector.svg"} priority alt="" fill sizes="" /> */}

                            <Image
                                src="/SVG/Vector.svg"  // Path to the image in the public directory
                                alt="My Image"
                                width={53}          // The desired width of the image
                                height={57}         // The desired height of the image
                            />
                        <div className="flex items-start flex-col justify-between  ">
                            <div className="flex items-center justify-center  flex-row gap-2 ">

                            <h1 className="text-[24px]">xMoney</h1>
                            <h2 className="text-[16px]">UTK</h2>
                            </div>
                            <p className="text-[16px] leading-5">The solution to make Open-Source <br /> as Competitive as Closed Source.</p>
                        </div>
                    </div>

                    {/* down div */}
                    <div className="bg-green-200 w-full h-full  ">
                        hfakjhkjhkjkhjjjjhhjkhjkjhkhjk
                    </div>
                </div>

            </div>


        </section>

    )
}

export default Hero