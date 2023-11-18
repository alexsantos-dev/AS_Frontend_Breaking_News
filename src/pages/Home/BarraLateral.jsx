import styled from "styled-components";

export const BarraLateral = styled.div`
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #b6e8ff, #72ccf6);
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-moz-scrollbar {
    width: 8px;
  }

  &::-moz-scrollbar-thumb {
    background: linear-gradient(to bottom, #1cb6fc, #3d4cfc);
    border-radius: 8px;
  }

  &::-moz-scrollbar-track {
    background-color: #fff;
  }
`;
