import React from 'react';
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



const products = [
               {
                 id: 1,
                 name: 'Basic Tee',
                 href: '#',
                 imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
                 imageAlt: "Front of men's Basic Tee in black.",
                 price: '$35',
                 color: 'Black',
               },
               {
                              id: 2,
                              name: 'shirt',
                              href: '#',
                              imageSrc: 'https://www.theshirtcompany.com/cdn/shop/products/christiane-burnt-orange-shirt-dress-front-2_1800x1800.jpg?v=1679945865',
                              imageAlt: "christiane-burnt-orange-shirt-dress",
                              price: '$6500',
                              color: 'Orange',
                            },
                            
                            {
                              id: 3,
                              name: '',
                              href: '#',
                              imageSrc :'https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/d69031s.jpg?im=Resize,width=364',
                              imageAlt: "",
                              price: '$35',
                              color: 'Black',
                            },
                            {
                              id: 2,
                              name: '',
                              href: '#',
                              imageSrc: 'https://xcdn.next.co.uk/common/items/default/default/publications/g75/shotzoom/4104/428-930s.jpg?im=Resize,width=364',
                              imageAlt: "",
                              price: '',
                              color: '',
                            },
                            {
                              id: 2,
                              name: 'Basic Tee',
                              href: '#',
                              imageSrc: 
                              'https://xcdn.next.co.uk/common/items/default/default/publications/g75/shotzoom/2321/c51-385s.jpg?im=Resize,width=364',
                              imageAlt: "",
                              price: '$35',
                              color: 'Black',
                            },
                            {
                              id: 2,
                              name: '',
                              href: '#',
                              imageSrc: 'https://xcdn.next.co.uk/common/items/default/default/publications/g98/shotzoom/162/884-599s.jpg?im=Resize,width=364',
                              imageAlt: "",
                              price: '$35',
                              color: 'Black',
                            },
                            {
                              id: 2,
                              name: 'PINK',
                              href: '#',
                              imageSrc: 'https://cdn.shopify.com/s/files/1/0675/1004/2838/products/SELS3015_PINK_1.jpg?v=1681252053',
                              imageAlt: "PINK",
                              price: '$35',
                              color: 'Black',
                            },    
               // More products...
             ]
const store = () => {
 
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

        <div className="isolate  bg-black  lg:space-x-8 ">
        <h2 className="text-2xl text-center font-bold tracking-tight text-white">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-40 overflow-hidden 
              rounded-md lg:aspect-none group-hover:opacity-75 lg:h-50">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=""
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-white">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-white">{product.color}</p>
                  <p className="font-medium text-white">{product.price}</p>

                </div>
                
              </div>
              <button type="submit" href="/order"
                className="mt-10 flex w-40  items-center 
                justify-center rounded-md border border-transparent
                 bg-white px-8 py-3 text-base font-medium text-black 
                 focus:outline-none focus:ring-2"
              >
              Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    {/* </div> */}

 
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

export default store

