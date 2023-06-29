import { MailIcon, SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import { Dialog, Menu } from "@headlessui/react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { 
   LoginIcon, 
  SearchIcon, 
  ShoppingCartIcon 
} 
from "@heroicons/react/outline";
import { useState } from "react";

const Newsletter = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const submitHandler = (e) =>{
    e.preventDefault();
    router.push(`/search?query=${query}`)
  };
  return (
    <>            <header >
    <nav
      className=" mx-auto flex max-w-7xl 
     items-center justify-between p-6 w-auto bg-black " aria-label= "Global" >
      <div className="flex lg:hidden ">
        <button
          type="button"
          className=" inline-flex items-center 
       justify-center rounded-md p-2.5 text-gray-300"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="flex lg:flex-1 ">
        <Link href="/" className="text-lg no-underline  text-white font-bold">
          MARTAPP
        </Link>
      </div>
      <ul
        className=" list-none list-inside items-center
     justify-center space-y-8 hidden md:flex md:space-x-6
      md:space-y-0  text-white"
      >
        
          <Link  className="text-white no-underline "
          href="/">Home</Link>
          <Link className="text-white no-underline "
          href="/store">Shop</Link>
          <Link  
          className="text-white no-underline "
           href="/Newsletter">Blog</Link>
          <Link  
          className="text-white no-underline 
          "href="/contact">Contacts</Link>
      </ul>

      <form 
      onSubmit={submitHandler}
        className="mx-auto  hidden
      justify-center md:flex px-8 text-white"
      
      >
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          className="rounded-tr-none rounded-br-none 
        p-0.5 text-sm   focus:ring-0"
          placeholder="Search products"
          
        />
           <button
          className="rounded rounded-tl-none rounded-bl-none bg-white p-1 text-sm dark:text-black"
          type="submit"
          id="button-addon2"
        >
          <SearchIcon className="h-5 w-5"></SearchIcon>
        </button>
       
      </form>
      
      <div
        className=" lg:flex lg:flex-1 lg:justify-end 
    -mx-3 block rounded-lg px-3 py-2.5 text-base 
    font-semibold leading-7 ">
        <div className="text-white items-center z-10">
        <Menu as="div" className=" relative inline-block">
            <ShoppingCartIcon className="h-4 w-4"  />
          </Menu>
          <Link href="/cart" className="p-2 text-white no-underline ">
            Cart
            <span
              className="ml-1 rounded-full bg-black-600 
         px-2 py-1 text-xs font-bold text-white"
            ></span>
          </Link>

          <Menu as="div" className=" relative inline-block">
            <LoginIcon className="h-4 w-4"  />
          </Menu>
          <Link href="/login" className="text-white no-underline p-2">

            Login
          </Link>
        </div>
      </div>
    </nav>

    <Dialog
      as="div"
      className="lg:hidden"
      open={mobileMenuOpen}
      onClose={setMobileMenuOpen}
    >
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel
        className="fixed inset-y-0 right-0 z-10
     w-full overflow-y-auto bg-slate-700 px-6 py-6 sm:max-w-sm 
     sm:ring-1 sm:ring-gray-900/10"
      >
        <div className="flex items-center justify-between ">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-6 flow-root ">
          <div
            className="-my-6 divide-y
         divide-gray-500/10"
          >
            <Link href="/" className=" text-white no-underline text-lg font-bold">
              MARTAPP
            </Link>

            <div className="space-y-2 py-6 text-">

            <Menu as="div">
              <a
                href="/"
                className=" no-underline  -mx-3 block rounded-lg px-3 py-2 
              text-base font-semibold leading-7
               text-gray-900  hover:bg-gray-50"
              > Home </a>
              </Menu>

              <Menu as="div" >
              <a
                href=".store"
                className="-mx-3 block rounded-lg px-3 py-2 
              text-base font-semibold leading-7  no-underline  text-gray-900
               hover:bg-gray-50"
              >
                Shop                  
           </a>
          </Menu>
              
              <Menu as="div" >
              <a
                href="/Newsletter"
                className="-mx-3 block rounded-lg px-3 py-2 
              text-base font-semibold leading-7 no-underline  text-gray-900
               hover:bg-gray-50"
              >
                Blog
              </a>

          </Menu>
             
              <Menu as="div" >
              <a
                href="/contact"
                className="-mx-3 block rounded-lg px-3 py-2 text-base 
              font-semibold leading-7 text-gray-900 hover:bg-gray-50  no-underline "
              >
                Contacts
               </a>

          </Menu>
              
            </div>

            <div className="py-6">
              <form
                className="mx-auto  
              justify-center md:flex"
              >
                <input
                  onChange={(e) => setQuery(e.target.value)}
                  type="text"
                  className=" rounded-tr-none rounded-br-none p-1 
                text-sm   focus:ring-0"
                  placeholder="Search products"
                />
                 <button
          className="rounded rounded-tl-none rounded-bl-none bg-white p-1 text-sm dark:text-black"
          type="submit"
          id="button-addon2"
        >
          <SearchIcon className="h-5 w-5"></SearchIcon>
        </button>
              </form>
              <Menu as="div" className=" text-white  relative inline-block">
            <ShoppingCartIcon className="h-4 w-4" aria-hidden="true " />
          </Menu>
          <Link href="/cart" className=" text-white no-underline p-2">
            Cart
            <span
              className="ml-1 rounded-full bg-black-600 
         px-2 py-1 text-xs font-bold  no-underline  text-white"
            ></span>
          </Link>

          <Menu as="div" className=" text-white  relative inline-block">
            <LoginIcon className="h-4 w-4" aria-hidden="true " />
          </Menu>
          <Link href="/login" className=" text-white no-underline p-2">

            Login
          </Link>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  </header>
               <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
               <div className="mx-auto max-w-7xl px-6 lg:px-8">
                 <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                   <div className="max-w-xl lg:max-w-lg">
                     <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Subscribe to our newsletter.</h2>
                     <p className="mt-4 text-lg leading-8 text-gray-300">
                       Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt
                       dolore.
                     </p>
                     <div className="mt-6 flex max-w-md gap-x-4">
                       <label htmlFor="email-address" className="sr-only">
                         Email address
                       </label>
                       <input
                         id="email-address"
                         name="email"
                         type="email"
                         autoComplete="email"
                         required
                         className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                         placeholder="Enter your email"
                       />
                       <button
                         type="submit"
                         className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                       >
                         Subscribe
                       </button>
                     </div>
                   </div>
                   <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                     <div className="flex flex-col items-start">
                       <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                       <MailIcon className="h-6 w-6" aria-hidden="true" />
                       </div>
                       <dt className="mt-4 font-semibold text-white">Weekly articles</dt>
                       <dd className="mt-2 leading-7 text-gray-400">
                         Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.
                       </dd>
                     </div>
                     <div className="flex flex-col items-start">
                       <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                        <SparklesIcon className="h-6 w-6" aria-hidden="true" />
                       </div>
                       <dt className="mt-4 font-semibold text-white">No spam</dt>
                       <dd className="mt-2 leading-7 text-gray-400">
                         Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.
                       </dd>
                     </div>
                   </dl>
                 </div>
               </div>
               <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
                 <div
                   className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#fc8989] opacity-30"
                   style={{
                     clipPath:
                       'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                   }}
                 />
               </div>

               {/* footer */}

       
      <div className="row">
        <div className="container-fluid">
          <div className="copyright">
            Copyright 2023 | All Rights Reserved by Mart Shopping Complex.
          </div>
        </div>
      </div>
    
             </div>
</>

            
  )
}

export default Newsletter
