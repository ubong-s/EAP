import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`

   * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: ${theme.fontPrimary};
   }
   
   html {
      position: relative;
   }
   
   body {
      line-height: 1.4;
      
      @media screen and (min-width: 992px) {
         margin-left: 80px;
      }
      
   }
   

   h1, h2, h3, h4, h5, h6 {
      color: ${theme.primaryColor};
      font-weight: 400;
   }
   
   p {
      font-family: ${theme.fontSecondary};
      color: ${theme.textColor};
      font-size: 0.9rem;
      
      @media screen and (min-width: 992px) {
         font-size: 1rem;
      }
   }

   a{
      text-decoration: none;
      
   }

   ul {
      list-style: none;
   }

   main {
      min-height: 100vh;
   }

   .container {
      width: 90%;
      margin: 0 auto;
       
      @media screen and (min-width: 1024px) {
         width: 85%;
      }
   }

   main, footer {
      filter: ${({ toggleMenu }) => (toggleMenu ? "blur(3px)" : "")};
      -webkit-filter: ${({ toggleMenu }) => (toggleMenu ? "blur(3px)" : "")};
   }

   section {
      padding: 4rem 0;
      
     
     @media screen and (min-width: 1024px) {
         padding: 6rem 0;
      }
   }

   .btn {
      padding: 0.5rem 1rem;
      background: ${theme.accentColor};
      color: ${theme.primaryColor};
      outline: none;
      border: none;
      font-size: 0.9rem;
      border-radius: 50px;
      cursor: pointer;
      transition: ${theme.transitionEase};
      margin-bottom: 0;

      &:hover {
         background:${theme.primaryColor};
         color:  ${theme.themeWhite};
      }

      @media screen and (min-width: 1024px) {
         padding: 1rem 2rem;
         font-size: 1.15rem;
      }
   }
`
