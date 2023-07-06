import React from 'react'
import Link from 'next/link';
import { Dialog, Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";
import { 
   LoginIcon, 
  SearchIcon, 
  ShoppingCartIcon 
} 
from "@heroicons/react/outline";

const login = () => {


  return (             
               <>
                  < div className=' bg-black text-white'> 
                <header >
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
        <div className="mx-auto max-w-2xl text-center">
             <form
             action=""
                 className=" mx-auto max-w-screen-md">
                 <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Login</h1>
                 <div className="mb-4">
                   <label htmlFor="email">Email</label>
                   <input
                     type="email"
                     className="w-full"
                     id="email"
                     autoFocus
                     value=""
                     onChange=""
                   >                   
                   </input>
                     <div className="text-red-500"></div>
               
                 </div>
                 <div className="mb-4">
                   <label htmlFor="password">Password</label>
                   <input
                     type="password"
                     className="w-full"
                     id="password"
                     autoFocus
                     value=""
                     onChange=""
                     />
                   
                 </div>
                 <div className="mb-4 ">
                   <button className="primary-button">Login</button>
                 </div>
                 <div className="mb-4 ">
                   Don&apos;t have an account? &nbsp;
                   <Link href="/register">Register</Link>
                 </div>
               </form>
               </div>

{/* footer  */}
      
      <div className="row">
        <div className="container-fluid">
          <div className="copyright">
            Copyright 2023 | All Rights Reserved by Mart Shopping Complex.
          </div>
        </div>
      </div></div>
               </>
  )
}

export default login
