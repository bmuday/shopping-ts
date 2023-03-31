"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import ProductCard from "components/ProductCard";
import { dummyProducts } from "dummydata";

const HomePage = () => {
  return (
    <>
      <h1 className="flex items-center justify-center p-5 text-lg font-bold text-green-500">
        This Is The Home Page! Everyone can see it.
      </h1>
      <div className="flex flex-wrap gap-4 p-4">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
