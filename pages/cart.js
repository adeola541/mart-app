import { Fragment, useState } from "react";
import { Dialog, Transition, Menu } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { 
   LoginIcon, 
  SearchIcon, 
  ShoppingCartIcon 
} 
from "@heroicons/react/outline";


const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const cart = () => {
  const [open, setOpen] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const submitHandler = (e) =>{
    e.preventDefault();
    router.push(`/search?query=${query}`)
  };
  
  return (
    <>
     
      <div className="">
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

        <Transition.Root show={open} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={setOpen}>
            <Transition.Child
              as={Fragment}
              enter="ease-in-out duration-500"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in-out duration-500"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                  <Transition.Child
                    as={Fragment}
                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                    enterFrom="translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                    leaveFrom="translate-x-0"
                    leaveTo="translate-x-full"
                  >
                    <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                      <div className="flex h-full flex-col overflow-y-scroll bg-black shadow-xl">
                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                          <div className="flex items-start justify-between">
                            <Dialog.Title className="text-lg font-medium text-white">
                              Shopping cart
                            </Dialog.Title>
                            <div className="ml-3 flex h-7 items-center">
                              <button
                                type="button"
                                className="-m-2 p-2 text-white hover:text-gray-500"
                                onClick={() => setOpen(false)}
                              >
                                <span className="sr-only">Close panel</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </button>
                            </div>
                          </div>

                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                {products.map((product) => (
                                  <li key={product.id} className="flex py-6">
                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                      <img
                                        src={product.imageSrc}
                                        alt={product.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col">
                                      <div>
                                        <div className="flex justify-between text-base font-medium text-white">
                                          <h3>
                                            <a href={product.href}>
                                              {product.name}
                                            </a>
                                          </h3>
                                          <p className="ml-4">
                                            {product.price}
                                          </p>
                                        </div>
                                        <p className="mt-1 text-sm text-white">
                                          {product.color}
                                        </p>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-white">
                                          Qty {product.quantity}
                                        </p>

                                        <div className="flex">
                                          <button
                                            type="button"
                                            className="font-medium text-indigo-600 hover:text-indigo-500"
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 px-2 py-5 sm:px-5">
                          <div className="flex justify-between text-base font-medium text-white">
                            <p>Subtotal</p>
                            <p>$262.00</p>
                          </div>
                          <p className="mt-0.5 text-sm text-white">
                            Shipping and taxes calculated at checkout.
                          </p>
                          <div className="mt-6">
                            <a
                              href="#"
                              className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                            >
                              Checkout
                            </a>
                          </div>
                          <div className="mt-4 flex justify-center text-center text-sm text-white">
                            <p>
                              or
                              <button
                                type="button"
                                className="  font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </p>
                          </div>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
      <div className="row">
        <div className="container-fluid">
          <div className="copyright">
            Copyright 2023 | All Rights Reserved by Mart Shopping Complex.
          </div>
        </div>
      </div>
    </>
  );
};

export default cart;
