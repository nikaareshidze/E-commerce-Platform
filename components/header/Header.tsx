import React from "react";
import Logo from "./Logo";
import { RootState } from "@/store/store";

import { useDispatch, useSelector } from "react-redux";

import { setMenuIsShown } from "@/store/hiddenMenuSlice";

export default function Header() {
  const dispatch = useDispatch();
  const menuIsShown = useSelector(
    (state: RootState) => state.hiddenMenu.menuisShown
  );

  return (
    <>
      <HeaderContainer>
        <BurgerbarIcon className="material-symbols-outlined">
          menu
        </BurgerbarIcon>
        <CurrentFlex>
          <Logo />
          <HeaderNavbarContainerleft
            onMouseEnter={() => {
              dispatch(setMenuIsShown(true));
            }}
            onMouseLeave={() => {
              dispatch(setMenuIsShown(false));
            }}
          >
            <HeaderNavbarTitle>Phones</HeaderNavbarTitle>
            <HeaderNavbarTitle>Audio</HeaderNavbarTitle>
            <HeaderNavbarTitle>Tablet</HeaderNavbarTitle>
            <HeaderNavbarTitle>Accessories</HeaderNavbarTitle>
            <HeaderNavbarTitle>Offers</HeaderNavbarTitle>
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
      {menuIsShown && <HiddenMenu />}
    </>
  );
}

import HeaderContainer from "@/styles/header/HeaderContainer";
import HeaderNavbarTitle from "@/styles/header/HeaderNavbarTitle";
import HeaderNavbarContainer from "@/styles/header/HeaderNavbarContainer";
import Flex from "@/styles/Flex";
import Icon from "@/styles/header/Icon";
import styled from "styled-components";
import HiddenMenu from "./HiddenMenu";

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
