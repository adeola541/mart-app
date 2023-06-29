import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { Dialog, Menu } from "@headlessui/react";
import Link from "next/link";
import "react-toastify/dist/ReactToastify.css";
import { 
   LoginIcon, 
  SearchIcon, 
  ShoppingCartIcon 
} 
from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const contact = () => {
               const [agreed, setAgreed] = useState(false)
               const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
               const submitHandler = (e) =>{
                 e.preventDefault();
                 router.push(`/search?query=${query}`)
               };
  return (
    <>
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

    <div className="isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      
      {/* <div>        <PhoneIcon className="" aria-hidden="true"  color='white'/>
</div> */}
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact sales</h2>
        <p className="mt-2 text-lg leading-8 text-white">
          Contact Us for more information
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-white">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-white">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20
                 text-black shadow-sm ring-1 ring-inset ring-black-300
                 placeholder:text-black focus:ring-2 focus:ring-inset
                  focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2
                 text-white shadow-sm ring-1 ring-inset ring-gray-300
                  placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                   focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-white">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>
{/* footer */}



      <div className="row">
        <div className="container-fluid">
          <div className="copyright">
            Copyright 2023 | All Rights Reserved by Mart Shopping Complex.
          </div>
        </div>
      </div>
    </>
  )
}

export default contact
