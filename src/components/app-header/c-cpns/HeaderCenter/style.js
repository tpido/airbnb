import styled from "styled-components";

export const CenterWrapper = styled.div`
  .top_search {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #ccc;
    border-radius: 30px;
    width: 300px;
    height: 48px;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    ${(props) => props.theme.mixin.hoverBoxShadow}

    .left-box {
      display: flex;
      padding: 20px;
      font-size: 14px;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      background-color: ${(props) => props.theme.color.primaryColor};
      margin-right: 10px;
    }
  }

  .searchTitles {
    position: relative;
    .searchTabs {
      display: flex;
      cursor: pointer;
      .searchTabs_item {
        padding: 10px 16px;
        font-size: 16px;

        > span {
          font-weight: 400;
          padding-bottom: 7px;

          &.active {
            border-bottom: 2px solid #000;
          }
        }
      }
    }

    .searchInfo {
      position: absolute;
      left: -346px;
      top: 60px;
      display: flex;
      align-items: center;
      width: 850px;
      height: ${(props) => (props.isSearch ? "0px" : "66px")};
      transition: height 200ms ease-in;
      border-radius: 32px;
      border: 1px solid #ddd;
      background-color: #fff;

      .searchInfo_item {
        height: 100%;
        display: flex;
        justify-content: space-between;
        /* flex-direction: column; */
        flex: 1;
        align-items: center;
        cursor: pointer;

        &:last-child {
          .divider {
            border: none;
          }
        }

        .info {
          display: flex;
          flex-direction: column;
          padding: 0 30px;
          .item_title {
            font-size: 10px;
          }

          .item_desc {
            font-weight: 400;
          }
        }

        .divider {
          height: 40px;
          border: 1px solid #ccc;
        }

        &.active {
          background-color: rgba(0, 0, 0, 0.1);
          border-radius: 30px;
        }
      }
    }
  }
`;
