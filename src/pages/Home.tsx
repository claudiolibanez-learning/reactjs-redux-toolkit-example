import { useEffect, useState } from "react";

import { useReduxDispath, useReduxSelector } from "../store/hooks"

import { productsSelector, fetchProducts, STATUS } from "../store/slices/products";



interface Product {
  id: number,
  name: string,
  description: string,
}

export function Home() {
  // const [products, setProducts] = useState<Product[]>([]);

  const dispatch = useReduxDispath();
  const products = useReduxSelector(productsSelector);

  useEffect(() => {
    // 1# REDUX-THUNK

    // const fetchProducts = async () => {
    //   const res = await fetch('http://localhost:3000/products');
    //   const data = await res.json();

    //   setProducts(data);
    // }

    // fetchProducts();

    // 2# REDUX-THUNK

    dispatch(fetchProducts());
  }, []);

  if (products.status === STATUS.LOADING) {
    return <div>Carregando...</div>
  }

  if (products.status === STATUS.ERROR) {
    return <div>Deu erro!</div>
  }

  return (
    <div>
      <h1>Home</h1>
      <br />

      {products.data.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}
    </div>
  )
}