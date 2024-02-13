import Image from 'next/image'
import React from 'react'
import Two from '../../../../../public/img/two.jpg'
import Rec from '../../../../../public/img/te.png'
import Tess from '../../../../../public/img/ttt.png'
import Text from '../../../../../public/img/text.jpg'
import { FaArrowRight } from "react-icons/fa6";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineBell } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";


const Sectionone = () => {
    const details = [
       {
        id:1,
        pic:Rec,
        label:"Incredible Experience",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
       },
       {
        id:2,
        pic:Rec,
        label:"Dependable, Responsive, Professional",
        text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit ",
       }
    ]
    return (
        <div>
            <div className='flex flex-col lg:flex-row gap-y-10 p-5 md:p-8 lg:p-16'>
                <div className='flex-1'> 
                    <p className='text-base md:text-3xl lg:text-2xl xl:text-3xl leading-6 md:leading-10 lg:leading-9 xl:leading-10 font-semibold'>Training and <span className='text-green'>Empowerment</span> <br/> towards an eco-friendly environment</p>
                    <p className='pt-3 md:pt-5 xl:pt-6 text-gray-500 text-xs md:text-2xl lg:text-base xl:text-base leading-5 md:leading-9 lg:leading-7 xl:leading-7 font-dn-sans'>Empowering artisans through tech-enabled skills training, licensing, access to essential toolkits, and promoting industry standard excellence.</p>
                    <div className='pt-5 md:pt-8 lg:pt-10'>
                        <button className='flex items-center gap-2 bg-green text-white text-sm md:text-2xl lg:text-lg xl:text-xl
                         px-4 py-2 md:py-3 md:px-10 rounded font-dn-sans'>Get Started
                        <FaArrowRight />
                        </button>
                        </div>
                        <div className='pt-12 md:pt-20 lg:pt-24 xl:pt-52'>
                        <Image src={Text} alt='pic-image' className='w-[80%] lg:w-[90%]' />
                        </div>
                </div>
                <div className='flex-1'> 
                    <Image src={Two} alt='pic-image' />
                </div>
            </div>
            <div className='p-5 md:p-8 lg:p-16'>
                <p className='text-center font-arima text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-medium'>Benefits of the  program</p>

               <div className='p-5 md:p-20 lg:p-10 grid lg:grid-cols-3 md:gap-y-10 gap-x-10'>

               <div className='flex flex-col items-center lg:items-start lg:flex-row  gap-4'>
                <div className='bg-light rounded-full w-[50px] h-[50px] p-[14px] md:w-[100px] md:h-[100px] md:p-[25px] lg:w-[70px] lg:h-[70px] lg:p-[20px] flex  items-center justify-center'>
                <BsHandbag className='text-orangetwo w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]'/>
                </div>
               <div className='flex flex-col gap-2'> 
                <p className='text-center lg:text-start font-medium font-arima text-sm md:text-2xl lg:text-lg '>Employability</p>
                <p className='text-center lg:text-start text-xs md:text-xl lg:text-sm '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
               </div>
                </div>

                <div className='flex flex-col items-center lg:items-start lg:flex-row  gap-4'>
                <div className='bg-lite rounded-full w-[50px] h-[50px] p-[14px] md:w-[100px] md:h-[100px] md:p-[25px] lg:w-[70px] lg:h-[70px] lg:p-[20px] flex  items-center justify-center'>
                <IoIosPeople className='text-green w-[100px] h-[100px]'/>
                </div>
                <div className='flex flex-col gap-2'> 
                <p className='text-center lg:text-start font-medium font-arima text-sm md:text-2xl lg:text-lg '>Increase your network </p>
                <p className='text-center lg:text-start text-xs md:text-xl lg:text-sm '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
               </div>
                </div>

                <div className='flex flex-col items-center lg:items-start lg:flex-row  gap-4'>
                <div className='bg-light rounded-full w-[50px] h-[50px] p-[14px] md:w-[100px] md:h-[100px] md:p-[25px] lg:w-[70px] lg:h-[70px] lg:p-[20px] flex  items-center justify-center'>
                <HiOutlineBell className='text-orangetwo w-[100px] h-[100px]'/>
                </div>
                <div className='flex flex-col gap-2'> 
                <p className='text-center lg:text-start font-medium font-arima text-sm md:text-2xl lg:text-lg '>Access to opportuinities</p>
                <p className='text-center lg:text-start text-xs md:text-xl lg:text-sm '>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
               </div>
                </div>

               
               
               </div>
            </div>
            <div className='p-5 md:p-8 lg:p-16 bg-orange flex flex-col justify-center items-center '>
              <div className='w-[85%] lg:w-[45%] tracking-widest font-medium font-dn-sans flex justify-center items-center'>
              <p className='text-white text-center text-xl md:text-4xl lg:text-3xl xl:text-4xl '>What our current applicants said about us 😍</p>
              </div>
              <div className='flex flex-col lg:flex-row items-center gap-y-6 gap-x-16 px-3 py-8 md:p-16 lg:p-10 xl:p-16'>
              <div className='flex-1'>
                <Image src={Rec} alt='rec-img' />
               
              </div>
              <div className='flex-1'>
                <Image src={Tess} alt='rec-img' />
               
              </div>
              </div>
            </div>
            <div className='p-5 md:p-8 lg:p-16 flex flex-col justify-center items-center ' >
            <div className='w-[95%] md:w-[75%] lg:w-[50%] tracking-widest font-medium font-arima flex justify-center items-center'>
              <p className='text-center text-xl md:text-4xl lg:text-3xl xl:text-4xl '>Ready to level up your skills? Start with a step, become better every other day </p>
              
              </div>
              <div className='pt-5 md:pt-8 lg:pt-10'>
                        <button className=' bg-green text-white font-dn-sans text-sm md:text-2xl lg:text-lg xl:text-xl
                         px-4 py-2 md:py-3 md:px-10 rounded'>Get Registered Now
                        
                        </button>
                        </div>
             
              </div>
        </div>
    )
}

export default Sectionone