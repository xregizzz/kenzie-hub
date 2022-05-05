import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.greySchema ? "#868E96" : "#FF577F")};
  color: ${(props) => (props.greySchema ? "#F8F9FA" : "#FFFFFF")};
  border: 1.2182px solid
    ${(props) => (props.greySchema ? "#868E96" : "#ff577f")};
  height: 48px;
  border-radius: 4.06066px;
  font-family: "Inter";
  font-weight: 500;
  padding: 0px 22px 0px 22px;
  width: 326px;
  margin-top: 15px;

  :hover {
    filter: brightness(0.9);
  }
`;
