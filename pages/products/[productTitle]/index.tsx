import React, { useState } from "react";
import axios from "axios";

import Header from "@/components/header/Header";

export default function index({ productDetailData }: any) {
  const [stockIsShown, setStockIsShown] = useState(false);

  return (
    <>
      <Header />
      <div style={{ display: "flex", marginTop: "24px" }}>
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={`${productDetailData.images[0]}`} />
        </div>
        <div
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <ProductName>{productDetailData.title}</ProductName>
          <ProductDescription>
            {productDetailData.description}
          </ProductDescription>
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <ProductPrice>{`$${productDetailData.price}`}</ProductPrice>
            <ProductDiscount>
              {`${productDetailData.discountPercentage}%`}
            </ProductDiscount>
          </div>
          <>
            <ProductAvailability
              onClick={() => {
                setStockIsShown(true);
              }}
            >
              Check availability
            </ProductAvailability>
            {stockIsShown && (
              <ProductDescription>{`${productDetailData.stock} items are left`}</ProductDescription>
            )}
          </>
        </div>
      </div>
    </>
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

import ProductName from "@/styles/products-details/ProductName";
import ProductDescription from "@/styles/products-details/ProductDescription";
import ProductPrice from "@/styles/products-details/ProductPrice";
import ProductDiscount from "@/styles/products-details/ProductDiscount";
import ProductAvailability from "@/styles/products-details/ProductAvailability";
