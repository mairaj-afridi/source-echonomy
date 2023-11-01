import React from 'react'
import Link from "next/link";
import Image from "next/image";

const Project = () => {
    return (
        <section className='flex items-center  pb-32 flex-col gap-20 bg-brand-main  justify-center '>
            <div className="">
                <h1 className="text-black-500 text-center text-white-main  lea md:text-[52px] text-[26px] md:leading-[70px] leading-[40px] font-audiowide ">
                    Projects
                </h1>
            </div>
            <div className='grid grid-cols-2 gap-7'>

                {[0, 1, 2, 3].map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-5">
                        <div className="w-[540px] h-[396px]  bg-[#132743] rounded-3xl">
                            {/* upper div */}
                            <div className=" p-6 flex gap-6 w-full h-[120px]  justify-between  ">
                                {/* <Image src={"/SVG/Vector.svg"} priority alt="" fill sizes="" /> */}
                                <div className=" flex items-center gap-4 justify-center ">

                                    <Image
                                        src="/SVG/Vector.svg"  // Path to the image in the public directory
                                        alt="My Image"
                                        width={53}          // The desired width of the image
                                        height={57}         // The desired height of the image
                                    />
                                    <div className="flex items-start flex-col justify-center  ">
                                        <div className="flex items-center justify-center  text-white-main flex-row gap-2 ">

                                            <h1 className="text-[24px] font-bold  ">xMoney</h1>
                                            <h2 className="text-[16px]">UTK</h2>
                                        </div>
                                        <p className="text-[16px] leading-5 text-white-off ">The solution to make Open-Source <br /> as Competitive as Closed Source.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col text-white-main   ">
                                    <h1>$0.05227</h1>
                                    <div className='flex gap- items-center justify-end'>
                                        <Image
                                            src="/SVG/card.svg"  // Path to the image in the public directory
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="540" height="258" viewBox="0 0 540 258" fill="none">
                                    <path d="M543.774 208.053L547 203.59V268H-7V29.5624H-3.77435L-0.951965 16.7335L2.27368 10.0401L5.49927 11.7134H9.12805L16.3857 6.1356L26.0626 18.4068L32.1106 10.5979L35.7394 11.1556L42.1907 0L45.0131 12.2712L49.4483 20.0801L52.2708 18.4068L55.8996 19.5224L59.1252 15.6179L62.3508 21.7535L66.786 16.7335L71.6245 16.1757L78.4789 20.6379L81.3013 21.1957L85.7365 17.849L92.591 25.1002L99.8486 40.1603L105.09 40.7181L108.316 41.8336L111.138 40.1603L115.17 40.7181L117.993 64.7027L122.025 66.9338L125.25 65.2605L128.073 73.6272L134.927 81.4362L140.572 66.376L144.604 61.9138L147.83 67.4916L151.055 64.1449L157.507 70.8383L161.539 83.6673H164.361L167.99 86.4562L171.619 84.7828L174.441 78.6472L177.667 81.4362L180.892 90.3607L184.521 84.7828L187.344 85.3406L190.166 92.034L193.795 90.9184L197.827 78.0895L201.052 128.29L204.278 122.712L207.504 126.616L210.729 121.596L213.955 132.752H217.18L220.406 122.154L223.632 119.365L226.857 113.23L234.115 109.883L238.953 112.114L243.792 110.999L247.017 116.576L250.243 111.556L253.469 113.23L256.694 112.114L263.146 118.25L267.178 115.461L273.629 116.576L276.854 111.556L280.08 117.134L283.306 116.019L286.531 125.501L289.757 107.652L292.983 110.999L296.208 105.421L302.659 109.325L305.885 124.943L313.143 126.059L319.594 114.345L322.82 119.923L326.448 114.345L329.674 117.134L332.496 123.828L336.125 124.943L341.77 114.903L346.205 116.019L349.431 108.767H352.656L355.882 114.903H358.704L362.333 123.27L365.559 112.114L368.785 112.672L372.01 96.4963L375.236 90.9184L378.461 69.7227L385.719 61.9138L388.945 63.0294L392.17 57.4515L398.622 66.9338L401.444 63.5871H405.073L408.298 72.5117L411.524 63.5871L414.75 68.0494L417.975 76.9739L422.007 70.2805L425.233 69.165L428.459 74.185L431.684 72.5117L434.91 74.7428L438.135 182.395L441.361 170.681L444.587 174.586L451.038 170.123L454.263 157.294C455.742 155.249 461.924 147.812 461.924 147.812L471.198 173.47L474.424 145.023L477.649 141.677L480.472 142.234L487.326 151.717L490.552 152.832L494.18 157.852L497.809 158.968L501.035 158.41L503.857 159.526L507.486 158.968L510.712 150.601H513.534L517.163 202.475L520.389 200.801H523.614L526.84 196.897L530.872 199.128L534.098 203.59L540.549 204.148L543.774 208.053Z" fill="url(#paint0_linear_12_8066)" stroke="#FF5E1A" />
                                    <defs>
                                        <linearGradient id="paint0_linear_12_8066" x1="270" y1="0" x2="270" y2="268" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#FF5E1A" stop-opacity="0.6" />
                                            <stop offset="0.961135" stop-color="#FF5E1A" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </section>
    )
}

export default Project