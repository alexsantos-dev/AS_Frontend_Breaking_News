import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
 /* [Paleta de cores (degradê 0-4)]
  0 - #1cb6fc
  1 - #23a0fc
  2 - #2c80fc
  3 - #375ffc
  4 - #23a0fc
 */

@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}


html,
body {
  scroll-behavior: smooth;
  max-width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;

 
} 



`;
