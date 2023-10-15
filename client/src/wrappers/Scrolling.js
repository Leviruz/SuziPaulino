import styled from "styled-components";

export const ScrollingW = styled.div`
  .parallax-container {
    height: 35vw;
    overflow: hidden;
    position: relative;
    background-position: 50% 50%;
    background-color: #f0f8ff;
  }
  @media (max-width: 600px) {
    .parallax-container {
      height: 70vw;
    }
  }
`;

export const ImgBanner = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  transition: top 0.5s ease;
`;
