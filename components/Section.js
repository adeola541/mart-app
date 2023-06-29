import React from "react";
import { BadgeCheckIcon, GlobeAltIcon,  ReceiptTaxIcon, StatusOnlineIcon, TicketIcon } from "@heroicons/react/outline";

const Section = () => {
  return (
    <>
      <div
        className="features-bar 
      mx-auto flex max-w-7xl  
      items-center justify-between p-6 w-auto bg-black text-white "
      >
        <div className="center ">
          <div
            className="features-bar__items mx-auto  
            justify-center md:flex px-9  flex space-x-7"
          >
            <div className="item item--shipping">
              <div className="item__inner">
                <div className="item__icon text-white">
                  <GlobeAltIcon  className="h-10 w-10 " aria-hidden="true "/>
                </div>
                <div className="item__title desktop">
                  Free Shipping Worldwide
                </div>
              </div>
            </div>
            <div className="item item--warranty">
              <div className="item__inner">
                <div className="item__icon text-white place-items-center ">
                <BadgeCheckIcon className="h-10 w-10 " aria-hidden="true "/>
                </div>
                <div className="item__title">10 Year Warranty</div>
              </div>
            </div>
            <div className="item item--returns">
              <div className="item__inner">
                <div className="item__icon text-white">
                  <ReceiptTaxIcon className="h-10 w-10 " aria-hidden="true "/>

                </div>
                <div className="item__title mobile">60 Days Returns</div>
              </div>
            </div>
            <div className="item item--express">
              <div className="item__inner">
                <div className="item__icon">
                  <TicketIcon className="h-10 w-10 " aria-hidden="true "/>

                </div>
                <div className="item__title">Express Delivery</div>
              </div>
            </div>
         <div> 
          <StatusOnlineIcon className="h-10 w-10 " aria-hidden="true "/>
          <p className="text-sm">BLACK FRIDAY DISCOUNT! </p>
          </div>
          </div>
        </div>
      </div>

      {/* Grid image display */}
      <div className="relative overflow-hidden bg-orange-200">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">The Prime Collection</h1>
              <p className="mt-4 text-xl text-gray-500">
              Don't settle for less. We have  everything in-house, down to the smallest details.
               When you buy an Mart Collection, you're purchasing the best quality products.
              </p>

              <a
                href="#"
                className="inline-block rounded-md border border-transparent
                   bg-black px-8 py-3 text-center font-medium text-white
                    hover:bg-indigo-700"
              >
                SHOP NOW
              </a>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 
                  lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div
                    className="absolute transform sm:left-1/2 sm:top-0 
                  sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 
                  grid gap-4 grid-cols-2"
                  >
                    {/* GRID 1 */}
                    <div className="flex  items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0   ">
                        <div
                          className="h-64 w-44 overflow-hidden rounded-lg 
                        sm:opacity-0 lg:opacity-100"
                        >
                          <img
                            src="https://primeambassador.com/assets/images/watch-1863.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                    {/* Grid1 STOP */}
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/79/7844611/1.jpg?7026"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    {/* GRID 2 */}

                      {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0304/4120/9955/products/image.jpg?v=1641328060&width=1200"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div> */}
                      {/* GRID 3 STOP */}
                      {/* <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-44 overflow-hidden rounded-lg 
                        sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/12/004238/1.jpg?4091"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      
      </>
      );
};

      export default Section;
