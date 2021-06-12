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
      background: ${theme.neutralLight};
      
      @media screen and (min-width: 992px) {
         margin-left: 80px;
      }
      
   }
   

   h1, h2, h3, h4, h5, h6 {
      color: ${theme.primaryColor};
   }
   
   p {
      font-family: ${theme.fontSecondary};
      color: ${theme.textColor};
      font-size: 0.9rem;
      margin-bottom: 1rem;
      
      @media screen and (min-width: 992px) {
         font-size: 0.95rem;
      }
   }

   blockquote {
      padding: 1rem 2rem;
      margin: 0 0 1rem 2rem;
      border-left: 0.5rem ${theme.primaryColor} solid;
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
       
      /* @media screen and (min-width: 768px) {
         width: 90%;
      }
      @media screen and (min-width: 1024px) {
         width: 85%;
      } */
   }

   img {
      max-width: 100%;
      margin-bottom: 1rem;
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
      padding: 0.65rem 1rem;
      background: ${theme.accentColor};
      color: ${theme.primaryColor};
      outline: none;
      border: none;
      font-size: 0.9rem;
      cursor: pointer;
      transition: ${theme.transitionEase};
      margin-bottom: 0;
      text-transform: capitalize;

      &:hover {
         background:${theme.primaryColor};
         color:  ${theme.themeWhite};
      }

      @media screen and (min-width: 1024px) {
         padding: 0.85rem 1.5rem;
         font-size: 1.15rem;
      }
   }

   

   
`
