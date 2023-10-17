import styled from "styled-components";

export const HeaderW = styled.header`
  background-color: black;
  color: yellow;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
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

    /* Adicionado: */
    -webkit-text-fill-color: transparent;
  }
`;
