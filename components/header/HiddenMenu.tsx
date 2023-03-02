import React from "react";
import { useDispatch } from "react-redux";

import { setMenuIsShown } from "@/store/hiddenMenuSlice";

export default function HiddenMenu() {
  const dispatch = useDispatch();

  return (
    <HiddenContainer
      onMouseEnter={() => {
        dispatch(setMenuIsShown(true));
      }}
      onMouseLeave={() => {
        dispatch(setMenuIsShown(false));
      }}
    >
      HiddenMenu
    </HiddenContainer>
  );
}

import HiddenContainer from "@/styles/header/HiddenContainer";
