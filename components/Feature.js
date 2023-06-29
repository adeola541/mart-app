import React from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "shirt",
    href: "#",
    imageSrc:
      "https://www.theshirtcompany.com/cdn/shop/products/christiane-burnt-orange-shirt-dress-front-2_1800x1800.jpg?v=1679945865",
    imageAlt: "christiane-burnt-orange-shirt-dress",
    price: "$6500",
    color: "Orange",
  },

  {
    id: 3,
    name: "",
    href: "#",
    imageSrc:
      "https://xcdn.next.co.uk/common/items/default/default/itemimages/altitemzoom/d69031s.jpg?im=Resize,width=364",
    imageAlt: "",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "",
    href: "#",
    imageSrc:
      "https://xcdn.next.co.uk/common/items/default/default/publications/g75/shotzoom/4104/428-930s.jpg?im=Resize,width=364",
    imageAlt: "",
    price: "",
    color: "",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://xcdn.next.co.uk/common/items/default/default/publications/g75/shotzoom/2321/c51-385s.jpg?im=Resize,width=364",
    imageAlt: "",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "",
    href: "#",
    imageSrc:
      "https://xcdn.next.co.uk/common/items/default/default/publications/g98/shotzoom/162/884-599s.jpg?im=Resize,width=364",
    imageAlt: "",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "PINK",
    href: "#",
    imageSrc:
      "https://cdn.shopify.com/s/files/1/0675/1004/2838/products/SELS3015_PINK_1.jpg?v=1681252053",
    imageAlt: "PINK",
    price: "$35",
    color: "Black",
  },
  // More products...
];
const Feature = () => {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={product.href}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.name}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {product.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
                <button
                  type="submit"
                  href="/order"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-black px-8 py-3 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
