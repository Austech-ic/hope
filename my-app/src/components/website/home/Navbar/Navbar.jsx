"use client"

import React, { useState } from 'react';
import styles from './navbar.module.css';
import { AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import { IoIosMenu } from 'react-icons/io';
import { MdOutlineSearch } from 'react-icons/md';
import { CiHeart } from 'react-icons/ci';
import { FiShoppingCart } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../../public/img/hope.jpg'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showMenuContent, setShowMenuContent] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    setShowMenuContent(!showMenuContent);
  };

  return (
    <div className={styles.main}>
      <div className={styles.textcont}>
        <div className='flex-1 '>
        <Image src={logo} alt='logo-img' className='w-[30%] md:w-[30%] xl:w-[20%]' />
        </div>


        <div>
          <IoIosMenu className={styles.menuicon} onClick={handleMenuClick} />
        </div>
      </div>


      {/* MOBILE VIEW */}

      {showMenuContent && (
        <div className={styles.mobilelistcont}>
          <ul className={styles.mobilelist}>
            <li className={styles.item}>
              <Link href={`/`} className={styles.link}>
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/`} className={styles.link}>
              About
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/`} className={styles.link}>
             Programs
              </Link>
            </li>
            <li className={styles.item}>
              <Link href={`/`} className={styles.link}>
              Contact 
              </Link>
            </li>
      
            <div className=' flex flex-col lg:flex-row md:pb-[20px] md:gap-[10px]'>
          <Link href={`/authpage`} className={styles.link}>
          Login
            </Link>
        
            <Link href={`/authpage`} className={styles.link}>
                <button className='bg-orange text-white rounded px-2 py-2'>
                  Register</button>
              </Link>
          </div>
           
          </ul>
        </div>
      )}


        {/* DESKTOP VIEW */}
      <div className={styles.listcont}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={`/`} className={styles.link}>
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={`/`} className={styles.link}>
            About
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={`/`} className={styles.link}>
           Programs
            </Link>
          </li>
          <li className={styles.item}>
            <Link href={`/`} className={styles.link}>
            Contact
            </Link>
          </li>
          <div className='flex flex-col items-center justify-center lg:flex-row gap-x-3'>
          <Link href={`/`} className={styles.link}>
          Login
            </Link>
            <div className='border border-gray-400 h-[3vh]'></div>
            <Link href={`/authpage`} className={styles.link}>
                <button className='bg-orange text-white rounded px-2 py-2'>
                  Register</button>
              </Link>
          </div>
          
        </ul>
      </div>

     
    </div>
  );
};

export default Navbar;
