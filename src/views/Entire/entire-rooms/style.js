import styled from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  margin-top: 70px;
  padding: 0 40px 0 40px;
  > .list {
    display: flex;
    flex-wrap: wrap;
  }

  > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;
