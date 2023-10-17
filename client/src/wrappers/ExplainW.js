import styled from "styled-components";

export const ExplainW = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 100px 0;
  color: #2f4f4f;
  margin: auto;
  width: 70vw;
  
  /* texts */

  h2{
    margin-bottom: 15px;
    font-size: 1.7rem;;
  }
  p{
    margin-bottom: 25px;
    font-size: 1.1rem;
  }
  

  @media screen and (max-width:600px) {
    button{
      margin-top: 40px ;
    }
    p{
      margin-top: 10px;
    }
    h2{
      font-size: 1.5rem;
    }
  }
`;