import React from "react";
import Link from "next/link";

export default function ProductItem({ item }: any) {
  return (
    <div
      key={item.id}
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        cursor: "pointer",
      }}
    >
      <ImageDiv>
        <Image src={`${item.images[0]}`} />
      </ImageDiv>
      <Link href={`/products/${item.title}`}>{item.title}</Link>
    </div>
  );
}

import Title from "@/styles/header/hiddenContainerComponents/Title";
import ImageDiv from "@/styles/header/hiddenContainerComponents/ImageDiv";
import Image from "@/styles/header/hiddenContainerComponents/Image";
