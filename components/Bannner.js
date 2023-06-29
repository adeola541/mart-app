import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import {
  CCardImage,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";

const Bannner = () => {
  return (
    <>
  
      <CCarousel controls indicators dark>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://primeambassador.com/assets/images/head-bg-01.jpg"
            alt="slide 1"
          />
          <CCarouselCaption className=" d-md-block  ">
            <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
              <div
                className="h-64 w-60 overflow-hidden rounded-lg 
                        sm:opacity-0 lg:opacity-100"
              >
                <img
                  src="https://primeambassador.com/assets/images/watch-1863.png"
                  alt=""
                  className="h-full w-full object-cover object-center "
                />
              </div>
            </div>
            <h5 className=" font-bold tracking-tight text-gray-900 sm:text-6xl  ">
              MEN'S COLLECTION
            </h5>
            <p className="mt-4  text-gray-900">
              Set yourself apart from the realm of the ordinary and make your
              mark with a unique, stunning horological masterpiece.
            </p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CImage
            className="d-block w-100"
            src="https://primeambassador.com/assets/images/head-bg-03.jpg"
            alt="slide 2"
          />
          <CCarouselCaption className=" d-md-block">
            <h5 className="text-xl font-bold tracking-tight text-white sm:text-xl">
              WOMEN'S COLLECTION
            </h5>
            <p className="mt-2 text-white">
              Explore our selection of premium designer wears. All of our
              collection feature a built-in interchangeability system, allowing
              you to look elegant everytime.
            </p>
          </CCarouselCaption>
        </CCarouselItem>
        <CCarouselItem>
          <CCardImage
            className="d-block w-100"
            src="https://primeambassador.com/assets/images/promo-08.jpg"
            alt="slide 3"
          />
          <CCarouselCaption className=" d-md-block">
            <h5 className=" font-bold tracking-tight text-gray-900 sm:text-l">
              Summer styles available now
            </h5>
            <p className="mt-4  text-gray-900">
              Shop our collection of women’s watches that complement your unique
              personality, while adding an elegant classical touch of luxurious
              expression to any outfit..
            </p>
          </CCarouselCaption>
        </CCarouselItem>
      </CCarousel>
    </>
  );
};

export default Bannner;
