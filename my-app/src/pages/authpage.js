import Auth from '@/components/auth/auth'
import Footer from '@/components/website/home/Footer/footer'
import Navbar from '@/components/website/home/Navbar/Navbar'
import React from 'react'

const Authpage = () => {
  return (
    <div>
        <Navbar />
        <Auth />
        <Footer />
    </div>
  )
}

export default Authpage