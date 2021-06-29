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
      font-weight:700;
      letter-spacing: 0.5px;
      margin-bottom: 0.5rem;
      
   }

   @media screen and (min-width: 1024px) {
      h1 {
       font-size: 34px;
      }

      h2 {
       font-size: 28px;
      }
      
      h3 {
       font-size: 25px;
      }

      h4 {
       font-size: 22px;
      }

      h5 {
       font-size: 18px;
      }

   }
   
   p {
      font-family: ${theme.fontSecondary};
      color: ${theme.textColor};
      margin-bottom: 1rem;
      line-height: 1.5;
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
      } */
      @media screen and (min-width: 1024px) {
         width: 85%;
         max-width: 1400px;
      } 
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
      padding: 4.5rem 0;
      
     
     @media screen and (min-width: 1024px) {
         padding: 7rem 0;
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
      font-weight: 700;
      box-shadow: ${theme.shadow};

      &:hover {
         background:${theme.primaryColor};
         color:  ${theme.themeWhite};
      }

      @media screen and (min-width: 1024px) {
         padding: 0.75rem 1rem;
         font-size: 1rem;
      }
   }

   .logo{
      font-weight: 700;
   }

   .date {
      font-weight: 700;
      line-height: 0;
   }

   
`
