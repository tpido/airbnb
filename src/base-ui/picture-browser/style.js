import styled from "styled-components";

export const BrowserWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #262626;
  z-index: 999;

  > div {
    position: relative;
  }

  .header {
    height: 77px;

    .close {
      position: absolute;
      right: 30px;
      top: 15px;
      cursor: pointer;
      z-index: 999;
    }
  }

  .content {
    flex: 1;
    display: flex;
    > div {
      height: 100%;
    }

    .left,
    .right {
      position: absolute;
      width: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .right {
      right: 0;
    }

    .center {
      flex: 1;
      display: flex;
      justify-content: center;

      .wrapper {
        position: relative;
        height: 70vh;
        width: 90vh;
        background-color: red;
        overflow: hidden;

        .wrapper_content {
          width: 100%;
          height: 100%;
          display: flex;
          position: absolute;
          transition: transform 200ms ease;

          .wrapper_item {
            width: 100%;
            height: 100%;
            flex-shrink: 0;
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  .footer {
    height: 100px;
    margin-top: 10px;
    margin-bottom: 24px;
    .footer_content {
      height: 100px;
      position: relative;
      top: ${(props) => (props.showlist ? "0px" : "102px")};
      transition: top 300ms ease;
    }

    .info {
      color: #ccc;
      max-width: 100vh;
      margin: auto;
      display: flex;
      justify-content: space-between;

      .right_info {
        cursor: pointer;
      }
    }

    .indicator {
      max-width: 100vh;
      margin: auto;
      overflow: hidden;
      .indicator_content {
        width: 100px;
        flex-shrink: 0;
        padding: 0 5px;
        position: relative;

        img {
          width: 100%;
          height: 100%;
        }

        .cover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.3);
        }
      }
    }
  }
`;
