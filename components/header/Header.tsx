import React, { useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [shown, setShown] = useState(false);

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
              setShown(true);
            }}
            onMouseLeave={() => {
              setShown(false);
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
      {shown && (
        <HiddenContainer
          onMouseEnter={() => {
            setShown(true);
          }}
          onMouseLeave={() => {
            setShown(!shown);
          }}
        />
      )}
    </>
  );
}

import HeaderContainer from "@/styles/header/HeaderContainer";
import HeaderNavbarTitle from "@/styles/header/HeaderNavbarTitle";
import HeaderNavbarContainer from "@/styles/header/HeaderNavbarContainer";
import Flex from "@/styles/Flex";
import Icon from "@/styles/header/Icon";
import HiddenContainer from "@/styles/header/HiddenContainer";
import styled from "styled-components";

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
