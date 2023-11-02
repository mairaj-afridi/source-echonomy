import React from 'react'
import Link from "next/link";
import Image from "next/image";
import ProjectCard from './ProjectCard';

const Project = () => {
    return (
        <section className='flex items-center  pb-32 flex-col gap-20 bg-brand-main  justify-center '>
            <div className="">
                <h1 className="text-black-500 text-center text-white-main  lea md:text-[52px] text-[26px] md:leading-[70px] leading-[40px] font-audiowide ">
                    Projects
                </h1>
            </div>
            <div className=' grid xl:grid-cols-2   grid-cols-1 gap-7'>

                {CardData.map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-5">
                        <ProjectCard name={item.name} status={item.status} image={item.image} images={item.smallimage} fullimage={item.fulimage} />
                    </div>
                ))}

            </div>

        </section>
    )
}

export default Project

const CardData = [
    {
        image: "/SVG/Vector.svg",
        name: `xMoney`,
        status: "The solution to make Open-Source as Competitive as Closed Source.",
        smallimage: "/SVG/card.svg",
        fulimage: "/SVG/leftimage.svg"
        
    },
    {
        image: "/SVG/Vector.svg",
        name: `xMoney`,
        status: "The solution to make Open-Source as Competitive as Closed Source.",
        smallimage: "/SVG/images.svg",
        fulimage: "/SVG/rightimage.svg"
    

    },
    {
        image: "/SVG/Vector.svg",
        name: `xMoney`,
        status: "The solution to make Open-Source as Competitive as Closed Source.",
        smallimage: "/SVG/card.svg",
        fulimage: "/SVG/leftimage.svg"


    },
    {
        image: "/SVG/Vector.svg",
        name: `xMoney`,
        status: "The solution to make Open-Source as Competitive as Closed Source.",
        smallimage: "/SVG/images.svg",
        fulimage: "/SVG/rightimage.svg"


    },
]