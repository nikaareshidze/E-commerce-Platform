import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { setLaptopsIsShown } from "@/store/hiddenMenuSlice";

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

export default function Laptops() {
  const dispatch = useDispatch();

  const [laptops, setLaptops] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      const laptops = response.data.products.filter(
        (item: any) => item.category === "laptops"
      );
      setLaptops(laptops);
    });
  }, []);

  return (
    <HiddenContainer
      onMouseEnter={() => {
        dispatch(setLaptopsIsShown(true));
      }}
      onMouseLeave={() => {
        dispatch(setLaptopsIsShown(false));
      }}
    >
      {laptops.map((item) => (
        <ProductItem item={item} key={item.id} />
      ))}
    </HiddenContainer>
  );
}

import HiddenContainer from "@/styles/header/HiddenContainer";
import ProductItem from "./ProductItem";
