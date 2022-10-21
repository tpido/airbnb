import styled from "styled-components";

export const ViewWrapper = styled.div`
  position: relative;
  .scroll {
    overflow: hidden;
    position: relative;
  }

  .scroll-content {
    display: flex;
    transition: all 300ms ease;
  }

  .left-icon {
    cursor: pointer;
    z-index: 1;
    padding: 5px;
    top: 52%;
    left: -1%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 50%;
  }

  .right-icon {
    cursor: pointer;
    z-index: 1;
    padding: 5px;
    top: 50%;
    right: -3.5%;
    transform: translate(-50%, -50%);
    position: absolute;
    border: 1px solid #ccc;
    border-radius: 50%;
  }
`;
