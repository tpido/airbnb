import styled from "styled-components";

export const ItemWrapper = styled.div`
  width: ${(props) => props.itemWidth};
  box-sizing: border-box;
  padding: 8px;
  flex-shrink: 0;
  .inner {
    .swiper {
      position: relative;
      &:hover {
        .control {
          display: flex;
        }
      }

      .dots {
        position: absolute;
        margin: 0 auto;
        width: 30%;
        left: 0;
        right: 0;
        z-index: 9;
        bottom: 10px;
        overflow: hidden;
      }
    }
  }
  .control {
    /* color: #ccc; */
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: none;
    justify-content: space-between;
    align-items: center;
    z-index: 9;
    cursor: pointer;
    .btn-left {
      padding-left: 10px;
      display: flex;
      align-items: center;
      height: 100%;
      background: linear-gradient(
        to left,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );
    }
    .btn-right {
      padding-right: 10px;
      display: flex;
      align-items: center;
      height: 100%;
      background: linear-gradient(
        to right,
        transparent 0%,
        rgba(0, 0, 0, 0.25) 100%
      );
    }
  }

  .item {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    width: 20.25%;
    flex-wrap: nowrap;
  }

  .dot-item {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #fff;
    flex-shrink: 0;

    &.active {
      width: 8px;
      height: 8px;
    }
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    //这里的高度是上面itemwrapper盒子宽度2/3
    //若父盒子没有设置对应的高度,则高度是相对于宽度的
    //relative的百分比高宽是想对付父盒子的 若没有则相对于body部分
    padding: 66.66% 0 0 0;
    img {
      position: absolute;
      //absolute的百分比高宽是相对于绝对定位的 若没有则相对于body部分
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      /*让图片覆盖整个封面 */
      object-fit: cover;
    }
  }

  .desc {
    .verify_info {
      font-size: 8px;
      color: ${(props) => props.verifyColor};
      margin: 3px 0 3px 0;
    }
    .room-name {
      /* 设置 display 为 -webkit-box 或者 -webkit-inline-box 时为隐藏状态 */
      display: -webkit-inline-box;
      -webkit-line-clamp: 2; /* 设置超出多少行隐藏 */
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .price {
      font-size: 8px;
    }

    .rating {
      margin-top: 5px;
      display: flex;
      align-items: center;
      font-size: 12px;
    }
  }
`;
