import React from 'react'
import styles from './success.module.css'
import Grp from '../../../../../public/img/grp.png'
import pp from '../../../../../public/img/pp.png'
import mark from '../../../../../public/img/mark.png'
import Image from 'next/image'



const Successcomp = () => {
  return (
    <div className={styles.main}>
    <div className=' w-[90%] px-5 py-10 md:p-10 lg:px-16 lg:py-20 rounded relative'>
        <div className='bg-white rounded px-10 py-10 md:p-[100px] lg:p-[100px] relative z-20'>
         <div className='flex items-center justify-between gap-6 '>
         <Image src={pp} alt='grp-img' className='w-[10%] flex-1' />
         <Image src={pp} alt='grp-img' className='w-[10%] flex-1' />
         <Image src={pp} alt='grp-img' className='w-[10%] flex-1' />
         <Image src={pp} alt='grp-img' className=' w-[10%] flex-1' />

         </div>

         <div className='p-10 flex flex-col items-center gap-4 md:gap-6'>
         <div className='flex justify-center items-center '>
         <Image src={mark} alt='grp-img' className='w-[30%] xl:w-[25%] ' />
         </div>
         <p className='text-green text-2xl md:text-5xl lg:text-4xl xl:text-5xl font-bold'>Congratulations</p>
         <p className='text-xs text-center md:text-xl lg:text-lg xl:text-xl pt-5 md:pt-10 lg:pt-20 text-gray-600'>Kindly check your mail for login details</p>
         </div>
         
         
         
          
         

       

        
        </div>
        
        
        <div className='absolute z-10 top-[19px] left-[4px] md:top-[10px] md:left-[14px] lg:top-[3rem] lg:left-[2.1rem]  '>
            <Image src={Grp} alt='grp-img' className='w-[30%] md:w-[40%] lg:w-[50%] xl:w-[30%]' />
        </div>
       
    </div>
   
    
</div>
  )
}

export default Successcomp