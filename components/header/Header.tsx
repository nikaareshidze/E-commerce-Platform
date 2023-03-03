import React from "react";
import Logo from "./Logo";
import { RootState } from "@/store/store";

import { useDispatch, useSelector } from "react-redux";

import {
  setSmartphonesIsShown,
  setLaptopsIsShown,
} from "@/store/hiddenMenuSlice";

export default function Header() {
  const dispatch = useDispatch();
  const smartphonesIsShown = useSelector(
    (state: RootState) => state.hiddenMenu.smartphonesIsShown
  );
  const laptopsIsShown = useSelector(
    (state: RootState) => state.hiddenMenu.laptopsIsShown
  );

  return (
    <>
      <HeaderContainer>
        <BurgerbarIcon className="material-symbols-outlined">
          menu
        </BurgerbarIcon>
        <CurrentFlex>
          <Logo />
          <HeaderNavbarContainerleft>
            <HeaderNavbarContainerLeftChildDiv
              onMouseEnter={() => {
                dispatch(setSmartphonesIsShown(true));
              }}
              onMouseLeave={() => {
                dispatch(setSmartphonesIsShown(false));
              }}
            >
              <HeaderNavbarTitle>Phones</HeaderNavbarTitle>
            </HeaderNavbarContainerLeftChildDiv>

            <HeaderNavbarContainerLeftChildDiv
              onMouseEnter={() => {
                dispatch(setLaptopsIsShown(true));
              }}
              onMouseLeave={() => {
                dispatch(setLaptopsIsShown(false));
              }}
            >
              <HeaderNavbarTitle>Laptops </HeaderNavbarTitle>
            </HeaderNavbarContainerLeftChildDiv>
          </HeaderNavbarContainerleft>
        </CurrentFlex>

        <CurrentFlex>
          <HeaderNavbarContainerRight>
            <HeaderNavbarTitle>Store</HeaderNavbarTitle>
            <HeaderNavbarTitle>OneTopia</HeaderNavbarTitle>
            <HeaderNavbarTitle>Oneplus Featuring</HeaderNavbarTitle>
            <HeaderNavbarTitle>Community</HeaderNavbarTitle>
            <HeaderNavbarTitle>Support</HeaderNavbarTitle>
          </HeaderNavbarContainerRight>
          <Icon className="material-symbols-outlined">shopping_cart</Icon>
          <UserIcon className="material-symbols-outlined">
            account_circle
          </UserIcon>
        </CurrentFlex>
      </HeaderContainer>
      {smartphonesIsShown && <Smartphones />}
      {laptopsIsShown && <Laptops />}
    </>
  );
}

import HeaderContainer from "@/styles/header/HeaderContainer";
import HeaderNavbarTitle from "@/styles/header/HeaderNavbarTitle";
import HeaderNavbarContainer from "@/styles/header/HeaderNavbarContainer";
import HeaderNavbarContainerLeftChildDiv from "@/styles/header/HeaderNavbarContainerLeftChildDiv";
import Flex from "@/styles/Flex";
import Icon from "@/styles/header/Icon";
import styled from "styled-components";
import Smartphones from "./Smartphones";
import Laptops from "./Laptops";

const HeaderNavbarContainerRight = styled(HeaderNavbarContainer)`
  @media (max-width: 1360px) {
    display: none;
  }
`;
const HeaderNavbarContainerleft = styled(HeaderNavbarContainer)`
  height: 100%;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const UserIcon = styled(Icon)`
  @media (max-width: 1024px) {
    display: none;
  }
`;
const BurgerbarIcon = styled(Icon)`
  display: none;
  @media (max-width: 1024px) {
    display: inline;
  }
`;
const CurrentFlex = styled(Flex)`
  height: 100%;
  align-items: center;
`;
