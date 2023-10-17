import styled from "styled-components";

export const HeaderW = styled.header`
  .container {
    padding: 10px;
    color: yellow;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 1;
  }

  /* gradient text */
  .gradient {
    background: linear-gradient(
      to right,
      #bf953f,
      #fcf6ba,
      #b38728,
      #fbf5b7,
      #aa771c
    );
    color: black;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* end gradient text */
  p {
    font-size: 1.2rem;
  }
  .logo {
    width: 2rem;
    margin-left: 10px;
  }
  
`;
