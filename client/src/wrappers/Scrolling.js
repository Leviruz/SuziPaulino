import styled from "styled-components";

export const ScrollingW = styled.div`
  .parallax-container {
    height: 35vw;
    overflow: hidden;
    position: relative;
    overflow: hidden;
    background-position: 50% 50%;
  }
  @media (max-width: 600px) {
    .parallax-container {
      height: 100vw;
    }
  }

  .img_header {
    width: 100%;
    position: absolute;
    top: 0;
    transition: top 0.5s ease;
  }
`;
