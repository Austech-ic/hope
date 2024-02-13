import React from 'react'
import styles from './detailstwo.module.css'
import Grp from '../../../../../public/img/grp.png'
import hv from '../../../../../public/img/hv.png'
import fr from '../../../../../public/img/fr.png'
import ri from '../../../../../public/img/ri.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight,FaArrowLeft } from "react-icons/fa6";

const DetailsTwo = () => {
    return (
        <div className={styles.main}>
            <div className=' w-[90%] px-5 py-10 md:p-10 lg:px-16 lg:py-20 rounded relative'>
                <div className='bg-white rounded px-10 py-10 md:p-[100px] lg:p-[100px] relative z-20'>
                  <p className='font-bold'>Other info</p>
                 
                  <div className='flex flex-col lg:flex-row items-center justify-between gap-y-2 gap-x-10  py-4 '>
                  <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>Marital Status</label>
                        <input placeholder='Enter here....' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>Current Location</label>
                        <input placeholder='Enter here' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2  w-full'>
                        <label className='text-sm md:text-xl lg:text-base xl:text-sm'>House Address</label>
                        <input placeholder='Enter here.....' className='border text-xs md:text-lg lg:text-base rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                  </div>
                  
                  <div className='flex flex-col lg:flex-row  justify-between gap-y-4 gap-x-10 '>
                    <div className='flex flex-col gap-1 lg:gap-2 w-full lg:w-[35%] xl:w-[30%] '>
                    <label className='text-sm md:text-xl lg:text-base xl:text-sm'>Email Addresss</label>
                        <input placeholder='Enter here.....' className='border text-xs md:text-lg lg:text-base  rounded-lg bg-transparent p-1 lg:p-2  outline-none' />
                    </div>
                    <div className='flex flex-col gap-1 lg:gap-2 w-full lg:w-[65%] xl:w-[65%] '>
                        <label className='text-xs md:text-lg lg:text-base'>Upload Image</label>
                       <div className='shadow-2xl p-10 lg:p-20  rounded-2xl'>
                     <div className='flex items-center justify-center'> 
                         <Image src={ri} alt='fr-img' className='w-[20%] lg:w-[30%] xl:w-[20%] ' />
                     </div>
                     <p className='text-xs md:text-lg lg:text-base text-center'>Browse Files to upload</p>
                       </div>
                    </div>
                  
                  </div>

                 <div className='flex items-center justify-between lg:justify-end gap-10 pt-5 md:pt-10'>
               <Link href={`/info`}>
               <div>
                <button className='text-white bg-gray-300 px-4 py-1 md:px-8 md:py-2 rounded flex justify-center items-center gap-2 text-sm md:text-xl lg:text-base xl:text-sm'><FaArrowLeft /> 
                Previous</button>
                </div></Link>
               
                <div>
                <button className='text-white bg-green px-4 py-1  md:px-8 md:py-2 rounded flex justify-center items-center gap-2 text-sm md:text-xl lg:text-base xl:text-sm'>Submit
                <FaArrowRight />
                </button>
                </div>
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

export default DetailsTwo
