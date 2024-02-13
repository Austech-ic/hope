import React from 'react'
import Footer from '../website/home/Footer/footer'
import Navbar from '../website/home/Navbar/Navbar'
import styles from './styles.module.css'
import Grp from '../../../public/img/grp.png'
import Image from 'next/image'
import Link from 'next/link'

const Auth = () => {
    return (
        <div className={styles.main}>
            <div className='p-5 md:p-16 lg:px-16 lg:py-20 rounded relative'>
                <div className='bg-white rounded p-10 md:p-[100px] lg:p-[100px] relative z-20'>
                    <p className='text-xs md:text-xl lg:text-base text-black text-center font-semibold'>Thank you for your interest in joining the SUPA Platform.</p>
                    <p className='text-xs md:text-xl lg:text-base pt-1  text-black text-center font-semibold'>Choose the option that best describes you to kickstart your journey with SUPA</p>
                    <p className='text-tiny md:text-base lg:text-sm pt-1 text-xs text-gray-400 text-center'>Please drop your BVN below to get Registered</p>

                    <div className='pt-10'>
                        <div className='flex justify-between items-center border rounded h-[4vh] md:h-[6vh] px-2 '>
                            <input 
                                placeholder='Enter BVN'
                                className=' text-xs md:text-xl lg:text-base' 
                            />
                            <button className='bg-orange text-white rounded px-2 h-[3vh] md:h-[4vh] text-xs md:text-xl lg:text-base'>Proceed</button>
                            
                        </div>
                    </div>
                    <div className='pt-10 md:pt-28 flex flex-col md:flex-row items-center justify-center gap-2'>
                    <p className='text-xs md:text-xl lg:text-base'>Already have an account?</p>
                    <Link href={`/`}>
                    <p className='text-xs md:text-xl lg:text-base'><span className='text-green font-bold'>Login</span> Here?</p>
                    </Link>
                </div>
                </div>
                
                <div className='absolute z-10 top-0 left-0 md:top-[38px] md:left-[36px] lg:top-[3rem] lg:left-[2.1rem] '>
                    <Image src={Grp} alt='grp-img' className='w-[30%] md:w-[40%] lg:w-[50%]' />
                </div>
               
            </div>
            
        </div>
    )
}

export default Auth;
