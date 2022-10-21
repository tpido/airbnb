import styled from "styled-components";

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-start;
  color: ${(props) => props.theme.color.primaryColor};
  .logo {
    cursor: pointer;
  }
`;
