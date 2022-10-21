import styled from "styled-components";

export const TabWrapper = styled.div`
  /* display: flex; */
  /* box-sizing: border-box; */
  .tab-item {
    box-sizing: border-box;
    flex-shrink: 0;
    padding: 15px 43px;
    margin-left: 10px;
    border: 0.5px solid #ccc;
    cursor: pointer;
    font-weight: 400;
    &:first-child {
      margin-left: 0;
    }
    ${(props) => props.theme.mixin.hoverBoxShadow}
  }
  .active {
    background-color: ${(props) => props.theme.color.secondaryColor};
    color: white;
  }
`;
