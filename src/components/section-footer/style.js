import styled from "styled-components";

export const FooterWrapper = styled.div`
  margin: 10px 0 10px 0;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  span {
    color: ${(props) => props.color};
  }
`;
