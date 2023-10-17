import styled from "styled-components";

export const CallW = styled.section`
  /* general  */
  padding: 50px 50px 0px 50px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
  flex-wrap: wrap;
  justify-content: center;

  /* div de texto */
  .text-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    max-width: 900px;
  }
  /* button and label */
  .align {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  }

  /* div de imagem */
  .image-container {
    order: 2;
    align-self: flex-end;
    display: flex;


    
  }

  /* texts */
  p,
  ul li,
  h3 {
    color: #2f4f4f;
  }
  p {
    font-size: 15px;
    padding-bottom: 15px;
  }
  li {
    font-size: 15px;
  }
  h3 {
    padding-top: 15px;
  }
  .title{
    font-weight: 600;
    padding: 30px 0;
    font-size: 1.5em;
  }
  .title2{
    font-weight: 600;
    padding: 30px 0;
  }

  /* img treatment */
  .img_hero {
    width: 250px;
  }
  .image-container {
    padding-top: 15px;
  }
  /* mobile */
  @media (max-width: 600px) {
    .img_hero {
      width: 50vw;
    }
    .align {
      margin: 20px 0;
      padding-bottom:0;
    }
    /* desktop */
  }
`;
