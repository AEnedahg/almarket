"use client"
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react';
import logo from '../../public/svg/nav/favicon.svg';
import Image from 'next/image';
import Link from 'next/link';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { easeIn } from 'motion';
function Nav() {

  const [activeNav, setActiveNav] = useState(false);

  function mobileNav() {
    setActiveNav(!activeNav)
  }
  return (
    <header
      className="relative w-screen p-4 flex justify-between items-center lg:max-w-[1440px]
    mx-auto lg:px-25 font-poppins relative z-20
    "
    >
      <Link href="/" className="cursor-pointer">
        <Image src={logo} alt="logo" className="h-25 w-40" />
      </Link>
      <nav className="relative lg:hidden">
        <RxHamburgerMenu
          className="size-10 cursor-pointer"
          onClick={mobileNav}
        />
        <AnimatePresence>
          {activeNav && (
            <motion.div
              initial={{ width: 0 }}
              animate={{
                width: 300,
                transition: {
                  duration: 0.5,
                  ease: easeIn,
                },
              }}
              exit={{ width: 0 }}
              className="absolute bg-[#001358] h-screen pt-20 -top-12 -right-4
          flex flex-col gap-y-5 items-center *:text-white w-screen
          "
            >
              <IoMdClose
                className="size-10 text-white cursor-pointer"
                onClick={mobileNav}
              />
              <div className="flex flex-col *:text-center *:text-2xl gap-y-5">
                <Link href="/">Home</Link>
                <Link href="/features">Features</Link>
                <Link href="/contact-us">Contact</Link>
                <Link href="/about us">About Us</Link>
                <div className="flex flex-col gap-y-5">
                  <Link href="/sign-up">
                    <button>Sign up</button>
                  </Link>
                  <Link href="/login">
                    <button>Login</button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <div className="hidden lg:flex lg:w-3/5 lg:justify-between">
        <div className="lg:flex lg:justify-between lg:items-center lg:w-1/2">
          <Link href="/features">Features</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/about us">About Us</Link>
        </div>
        <div className="flex lg:w-2/4 justify-center gap-x-7">
          <Link href="/sign-up">
            <button
              className="text-white py-2 flex items-center justify-center bg-black
            rounded-md w-25
            "
            >
              Sign up
            </button>
          </Link>
          <Link href="/login">
            <button
              className="text-white py-2 flex items-center justify-center bg-black
            rounded-md w-25
            "
            >
              Login
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Nav