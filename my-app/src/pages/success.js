import Footer from '@/components/website/home/Footer/footer'
import Navbar from '@/components/website/home/Navbar/Navbar'
import Successcomp from '@/components/website/home/Successcomp/successcomp'
import Image from 'next/image'
import React from 'react'
import Successimage from '../../public/img/suc.png'

const Success = () => {
  return (
    <div>
      <Navbar />
      <Successcomp />
      <Footer />
    </div>
  )
}

export default Success