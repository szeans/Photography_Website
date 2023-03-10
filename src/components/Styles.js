import styled from 'styled-components';
  
export const Heading = styled.h1`
   text-align: center;
   color: black;
`;
  
export const Content = styled.div`
   overflowY: scroll;
   height: 50px;
`;
  
export const Button = styled.div`
   display: flex;
   justify-content: center;
   position: relative; 
   width: 100%;
   top: 10px;
   height: 70px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: black;
`