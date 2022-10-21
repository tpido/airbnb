import styled from "styled-components";

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #f2f2f2;

  &.fixed {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 99;
  }

  .content {
    position: relative;
    z-index: 99;
    background: #fff;
    padding: 0 20px 0 20px;
    .top {
      height: 80px;
      display: flex;
      align-items: center;
    }

    .search-area {
      height: ${(props) => (props.isSearch === true ? "0px" : "100px")};
      transition: all 200ms ease-in;
    }
  }

  .cover {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;
