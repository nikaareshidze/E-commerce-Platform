import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 50px;

  padding: 0 60px;

  @media (max-width: 1024px) {
    padding: 0 10px;
  }
`;

export default HeaderContainer;
