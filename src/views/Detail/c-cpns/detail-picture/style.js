import styled from "styled-components";

export const PictureWrapper = styled.div`
  display: flex;
  position: relative;
  height: 600px;
  background: #000;

  > .left,
  > .right {
    width: 50%;
    cursor: pointer;

    .left-item {
      position: relative;
      height: 100%;
      overflow: hidden;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 200ms ease-in;
    }

    .cover {
      position: absolute;
      opacity: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.3);
      transition: opacity 200ms ease-in;
    }
  }

  &:hover {
    .left-item,
    .right-item {
      &:hover {
        .cover {
          opacity: 0;
        }

        img {
          transform: scale(1.08);
        }
      }
    }
  }

  .right {
    display: flex;
    flex-wrap: wrap;

    .right-item {
      box-sizing: border-box;
      width: 50%;
      height: 50%;
      border: 0.9px solid black;
      position: relative;
      overflow: hidden;
    }
  }

  .showBrowsers {
    position: absolute;
    right: 15px;
    bottom: 15px;
    cursor: pointer;

    > div {
      padding: 9px 10px;
      background: #fff;
      border-radius: 3px;
    }
  }
`;
