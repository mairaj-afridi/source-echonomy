import React from 'react'
import Image from "next/image";

interface Props {
  image:string;
  status:string;
  name:string;
  images:string;
  fullimage:string;
}

function ProjectCard({ image,status,name,images,fullimage }:Props){
  return (
    <div className=" w-[440px] m-2 sm:w-[540px] h-[330px] sm:h-[380px]  bg-[#132743] rounded-3xl">
    {/* upper div */}
    <div className=" p-3 sm:p-6 flex gap-2 sm:gap-6 w-full h-[120px]  justify-between  ">
        <div className=" flex items-center gap-2 sm:gap-4 justify-center ">
            <Image
                src={image}  // Path to the image in the public directory
                alt="My Image"
                width={53}          // The desired width of the image
                height={57}         // The desired height of the image
            />
            <div className="flex items-start flex-col justify-center  ">
                <div className="flex items-center justify-center  text-white-main flex-row gap-2 ">

                    <h1 className="text-[16px] sm:text-[24px] font-bold  ">{name}</h1>
                    <h2 className="text-[16px]">UTK</h2>
                </div>
                <p className=" text-[12px] sm:text-[16px] leading-5 text-white-off ">{status}</p>
            </div>
        </div>
        <div className="flex flex-col text-white-main   ">
            <h1 className='text-[14px] sm:text-[16px]'>$0.05227</h1>
            <div className='flex gap- items-center justify-end'>
                <Image
                    src={images} // Path to the image in the public directory
                    alt="My Image"
                    width={20}          // The desired width of the image
                    height={20}         // The desired height of the image
                />
                <h2>-4.17</h2>
            </div>

        </div>
    </div>

    {/* down div */}
    <div className=" w-full h-full  ">
    <Image
                    src={fullimage} // Path to the image in the public directory
                    alt="My Image"
                    width={540}          // The desired width of the image
                    height={100}         // The desired height of the image
                />
    </div>
</div>
  )
}

export default ProjectCard