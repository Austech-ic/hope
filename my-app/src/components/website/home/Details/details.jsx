import React from 'react'
import styles from './details.module.css'
import Grp from '../../../../../public/img/grp.png'
import hv from '../../../../../public/img/hv.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

const Details = () => {
    return (
        <div className={styles.main}>
            <div className=' w-[90%] px-5 py-10 md:p-10 lg:px-16 lg:py-20 rounded relative'>
                <div className='bg-white rounded px-10 py-10 md:p-[100px] lg:p-[100px] relative z-20'>
                  <p className='font-bold'>Candidate info</p>
                 
                  <div className='flex flex-col lg:flex-row items-center justify-between gap-y-2 gap-x-10  py-4 '>
                  <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>Fullname</label>
                        <input placeholder='Tolulope Afolayan Segun' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>Gender</label>
                        <input placeholder='Male' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-smm'>Age</label>
                        <input placeholder='28' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                  </div>
                  
                  <div className='flex flex-col lg:flex-row items-center justify-between gap-y-2 gap-x-10 '>
                    <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>LGA</label>
                        <input placeholder='Irepodun' className='border text-xs md:text-lg lg:text-base  rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>State Of Origin</label>
                        <input placeholder='Kwara State' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2 w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>Phone Number</label>
                        <input placeholder='+23408067223963' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                  </div>

                 <div className='flex items-center justify-between lg:justify-end gap-10 pt-5 md:pt-10'>
               <Link href={`/authpage`}>
               <div>
                <button className='text-white bg-gray-300 px-4 py-1 md:px-8 md:py-2 rounded flex justify-center items-center gap-2 text-sm md:text-xl lg:text-base xl:text-sm'><FaArrowLeft /> 
                Previous</button>
                </div></Link>
                <Link href={`/infopagetwo`}>
                <div>
                <button className='text-white bg-green px-4 py-1  md:px-8 md:py-2 rounded flex justify-center items-center gap-2 text-sm md:text-xl lg:text-base xl:text-sm'>Next
                <FaArrowRight />
                </button>
                </div></Link>
                 </div>

                 <div className='flex justify-center items-center pt-5'>
                    <Image src={hv} alt='hav-img' className='w-[100%] lg:w-[70%] xl:w-[40%]' />
                 </div>
                </div>
                
                
                <div className='absolute z-10 top-[19px] left-[4px] md:top-[10px] md:left-[14px] lg:top-[3rem] lg:left-[2.1rem]  '>
                    <Image src={Grp} alt='grp-img' className='w-[30%] md:w-[40%] lg:w-[50%] xl:w-[30%]' />
                </div>
               
            </div>
           
            
        </div>
    )
}

export default Details
