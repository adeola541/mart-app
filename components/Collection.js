import Image from "next/image";
import Link from "next/link";
import React from "react";

function Collection() {
  return (
    <>
      <div className="collections">
        <div className="collections__items">
          <Link href="/mens-watches" className="item" title="Men's Watches">
            <img
             
             src="https://cdn.shopify.com/s/files/1/0332/7193/products/IMG_9527-439_2000x.jpg?v=1527726590"
             alt="Men's Watches"
             className="h-full w-full object-cover object-center"
           />
            <h2 className="item__title">Men's Watches</h2>
          </Link>
          <Link href="/womens-watches" className="item" title="Women's Watches">
            <img
              src="https://cdn.shopify.com/s/files/1/0304/4120/9955/products/241812264_240031084763798_6196861573207105581_n.jpg?v=1639066060&width=832"
              alt="Men's Watches"
              className="h-full w-full object-cover object-center"            />
            </Link>
            <Link href="/womens-watches" className="item" title="Women's Watches">
            <img
              src="https://cdn.shopify.com/s/files/1/0600/7137/products/edited-adele.jpg?v=1510264742"
              alt="Women's Watches"
             className="h-full w-full object-cover object-center"
            />
            <h2 className="item__title">Women's Watches</h2>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Collection;
