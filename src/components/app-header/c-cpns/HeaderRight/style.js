import styled from "styled-components";

export const RightWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  span {
    padding: 10px;
    border-radius: 40%;
    font-size: 14px;
    color: #484848;
    &:hover {
      background-color: #f7f7f7;
      cursor: pointer;
    }
  }

  .left-box {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 20px;
  }

  .profile {
    position: relative;
    display: flex;
    width: 77px;
    height: 42px;
    border-radius: 25px;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #ddd;
    cursor: pointer;
    ${(props) => props.theme.mixin.hoverBoxShadow}

    .panel {
      padding-top: 10px;
      position: absolute;
      z-index: 999;
      background-color: white;
      width: 240px;
      height: 210px;
      right: 0;
      top: 60px;
      font-weight: 400;
      border-radius: 10px;
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.3);
      .top {
        border-bottom: 1px solid #ccc;
      }
      .top > div {
        height: 40px;
        line-height: 40px;
        padding-left: 10px;
        font-weight: 400;
        font-size: 14px;
        &:hover {
          background-color: #f7f7f7;
        }
      }
      .bottom > div {
        line-height: 40px;
        height: 40px;
        padding-left: 10px;
        font-weight: 400;
        font-size: 14px;
        &:hover {
          background-color: #f7f7f7;
        }
      }
    }
  }
`;
