import Image from "next/image";
import React, { FC } from "react";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/croc1.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/croc2.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/croc3.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc: "/shoe.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export const ProductList: FC = () => {
  return (
    <div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-white">
          Hot moments
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-80 aspect-w-1 aspect-h-1 rounded-md overflow-hidden opacity-75 group-hover:opacity-100 lg:h-80 lg:aspect-none">
                <div className="relative w-full h-full object-center object-cover lg:w-full lg:h-full">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    layout="fill"
                  />
                </div>
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
                </div>
                <p className="text-sm font-medium text-white">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
