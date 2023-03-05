import React from "react";
import axios from "axios";

export default function index({ productDetailData }: any) {
  return (
    <div>
      <h1>{productDetailData.title}</h1>
      <h1>{productDetailData.description}</h1>
      {/* <img src={`${productDetailData.images[0]}`} /> */}
      <h1>{productDetailData.price}</h1>
      <h1>{productDetailData.brand}</h1>
      <h1>{productDetailData.discountPercentage}</h1>
      <h1>{productDetailData.stock}</h1>
      <h1>{productDetailData.rating}</h1>
    </div>
  );
}

export async function getStaticPaths() {
  const { data } = await axios.get("https://dummyjson.com/products");

  return {
    fallback: false,
    paths: data.products.map((item: any) => ({
      params: { productTitle: item.title.toString() },
    })),
  };
}

export async function getStaticProps(context: any) {
  const productTitle = context.params.productTitle;

  const { data } = await axios.get("https://dummyjson.com/products");
  const selectedProduct = data.products.filter(
    (item: any) => item.title === productTitle
  );

  return {
    props: {
      productDetailData: selectedProduct[0],
    },
  };
}
