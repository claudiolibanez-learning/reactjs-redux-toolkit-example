import { useEffect } from "react";

import { useReduxDispath, useReduxSelector } from "../store/hooks"

import { productsSelector, fetchProductsAsync, STATUS } from "../store/features/products";

export function Home() {
  const dispatch = useReduxDispath();
  const products = useReduxSelector(productsSelector);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <br />

      {products.status === STATUS.LOADING && (
        <div>Carregando...</div>
      )}

      {products.status === STATUS.ERROR && (
        <div>Algo deu errado. Tente novamente!</div>
      )}

      {products.status === STATUS.IDLE && (
        products.data.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))
      )}

    </div>
  )
}