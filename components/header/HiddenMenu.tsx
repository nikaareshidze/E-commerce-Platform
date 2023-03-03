import React from "react";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";

import { setMenuIsShown } from "@/store/hiddenMenuSlice";

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

export default function HiddenMenu() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<Product[]>([]);
  const [smartphones, setSmartphones] = useState<Product[]>([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setProducts(response.data.products);
    });
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) => item.category === "smartphones");
    setSmartphones(filtered);
  }, [products]);

  return (
    <HiddenContainer
      onMouseEnter={() => {
        dispatch(setMenuIsShown(true));
      }}
      onMouseLeave={() => {
        dispatch(setMenuIsShown(false));
      }}
    >
      {smartphones.map((item) => (
        <Smartphones item={item} />
      ))}
    </HiddenContainer>
  );
}

import HiddenContainer from "@/styles/header/HiddenContainer";
import Smartphones from "./Smartphones";
