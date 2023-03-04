import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { setSmartphonesIsShown } from "@/store/hiddenMenuSlice";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export default function Smartphones() {
  const dispatch = useDispatch();

  const [smartphones, setSmartphones] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      const smartphones = response.data.products.filter(
        (item: any) => item.category === "smartphones"
      );
      setSmartphones(smartphones);
    });
  }, []);

  return (
    <HiddenContainer
      onMouseEnter={() => {
        dispatch(setSmartphonesIsShown(true));
      }}
      onMouseLeave={() => {
        dispatch(setSmartphonesIsShown(false));
      }}
    >
      {smartphones.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </HiddenContainer>
  );
}

import HiddenContainer from "@/styles/header/HiddenContainer";
import ProductItem from "./ProductItem";
