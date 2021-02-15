import styled from "styled-components";

export  const Container = styled.div`
 width: 100vw;
 height: 100vh;

 display: flex;
 justify-content: center;
 align-items: center;

 h1{
   font-size: 54px;
   color:${props => props.theme.colors.primary};
   margin-top: 48px;
 }
 p{
   margin-top: 24px;
   font-size: 24px;
   line-height: 32px;
 }
`;