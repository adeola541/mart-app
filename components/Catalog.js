import Image from 'next/image'
import React from 'react'

const Catalog = () => {
  return (
    <>
      <div className="bestsellers">
        <div className="bestsellers__back-text">2020</div>
        <div className="center">
          <h3 className="bestsellers__title">The Top Sellers</h3>
          <div className="bestsellers__items">
            {/* <div className="item">
              <a href=""
               className="item__inner" 
              title="2 In1 Watch Fashion Rhinestone Wrist Watch For Ladies+ Bracelet Watch-Beige">
                <div className="item__image">
                  <Image
                  className="lazyload"
                   data-src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/66/9347221/1.jpg?7499"
                   alt="2 In1 Watch Fashion Rhinestone Wrist Watch For Ladies+ Bracelet Watch-Beige"/></div>
                <div className="item__title">2 In1 Watch Fashion Rhinestone Wrist Watch For Ladies+ Bracelet Watch-Beige</div>
                <div className="item__price">
                  <span 
                  // style="text-decoration: line-through; padding-right: 10px;"
                  >$199</span>$149</div>
              </a>
            </div>
            <div className="item">
              <a href="" className="item__inner" 
              title="VEJARO T13 Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set- Blue">
                <div className="item__image">
                  <Image className="lazyload" 
                  data-src="https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/14/6647301/1.jpg?7341" 
                  alt="VEJARO T13 Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set- Blue"/></div>
                <div className="item__title">VEJARO T13 Men's 2 In 1 Short Sleeve T-Shirt & Shorts Set- Blue</div>
                <div className="item__price">
                  <span 
                  // style="text-decoration: line-through; padding-right: 10px;"
                  >$199</span>$149</div>
              </a>
            </div> */}
            <div className="item">
               <div className="item__inner" title= "Tungsten Steel">
                <div className="item__image">
                <Image
                 className=""
                  src=""
               
               width="300" height="300"
               alt="ungsten Steel"/>
              
                   </div>
                <div className="item__title">Tungsten Steel </div>
                <div className="item__price">
                  <span >$199</span>$149</div>
            </div>
          </div>
          </div>
         </div>
         </div>
    </>
  )
}

export default Catalog
