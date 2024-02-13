import React from 'react'
import logo from '../../../../../public/img/hope.jpg'
import It from '../../../../../public/img/it.png'
import Image from 'next/image'
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='p-5 md:p-8 lg:p-16'>
 <div className=' flex flex-col items-center lg:flex-row gap-y-4'>
     
     <div className='flex-1  flex justify-center items-center lg:justify-start '>
       <Image src={logo} alt='logo-img' className='w-[60%] md:w-[90%] lg:w-[15%] xl:w-[15%]' />
     </div>
     <div className='flex-2  '>
       <ul className='flex items-center gap-y-4 gap-x-8 text-xs md:text-xl lg:text-sm'>
           <li>About Us</li>
           <li>Programs</li>
           <li>Opportunities</li>
           <li>Support</li>
       </ul>

     </div>
     <div className='flex-1 flex items-center justify-center lg:justify-end gap-4 '>
     <FaTwitter className='text-green w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]'   />
     <FaFacebookF className='text-green w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
     <FaInstagram className='text-green w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
     <FaGithub className='text-green w-[15px] h-[15px] md:w-[20px] md:h-[20px] lg:w-[15px] lg:h-[15px]' />
     </div>
   </div>
  <div className='py-5 md:py-10'>
  <div className='border border-b-gray-300'></div>
  </div>
  <div className='flex flex-col lg:flex-row  items-center justify-between gap-y-4'>
    <p className='text-xs md:text-xl lg:text-sm'>© Copyright 2024, All Rights Reserved</p>
    <div className='flex items-center gap-4 lg:justify-between'>
        <p className='text-xs md:text-xl lg:text-sm'>Powered By:-</p>
        <Image src={It} alt='footer-img' className='w-[30%] md:w-[40%] lg:w-[30%]' />
    </div>
  </div>
    </div>
   
  )
}

export default Footer