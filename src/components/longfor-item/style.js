import styled from "styled-components";

export const ItemWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 20%;
  padding-right: 5px;
  flex-shrink: 0;
  &:last-child {
    padding-right: 0;
  }

  img {
    width: 100%;
  }

  .info {
    position: absolute;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    left: 50%;
    transform: translate(-50%);
    bottom: 20px;

    .price {
      margin-top: 5px;
      font-size: 10px;
    }
  }
`;
