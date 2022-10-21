import styled from "styled-components";

export const FilterWrapper = styled.div`
  display: flex;
  position: fixed;
  height: 48px;
  align-items: center;
  z-index: 99;
  background-color: #ffffff;
  border-bottom: 1px solid #f2f2f2;
  top: 80px;
  left: 0;
  right: 0;
  .filter-item {
    font-weight: 400;
    padding: 6px 12px;
    border: 1px solid #dce0e0;
    margin: 0 4px 0 8px;
    border-radius: 5px;
    color: #484848;
    cursor: pointer;
    &:first-child {
      margin-left: 10px;
    }
  }

  .active {
    background: #008489;
    border: 1px solid #008489;
    color: #ffffff;
  }
`;
