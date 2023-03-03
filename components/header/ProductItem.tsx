import React from "react";

export default function ProductItem({ item }: any) {
  return (
    <div
      key={item.id}
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <ImageDiv>
        <Image src={`${item.images[0]}`} />
      </ImageDiv>
      <Title>{item.title}</Title>
    </div>
  );
}

import Title from "@/styles/header/hiddenContainerComponents/Title";
import ImageDiv from "@/styles/header/hiddenContainerComponents/ImageDiv";
import Image from "@/styles/header/hiddenContainerComponents/Image";
