import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  /* position: fixed; */
  padding: 0.7rem 2.5rem;
  top: 0;
  right: 0;
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
`;

export const ImageLogo = styled.img`
  width: 7rem;
  height: 4rem;
  object-fit: cover;
  cursor: pointer;
`;

export const Searcher = styled.div`
  width: 20rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.4rem;

  input {
    color: black;
    outline: none;
    font-size: 0.9rem;
    font-weight: 100;
    padding: 0.62rem 1rem;
    background-color: #fff;
    border: none;
    /* border: 1px solid transparent; */
    width: 100%;
    border-radius: 0.4rem 0 0 0.4rem;
    caret-color: #1cb6fc;
    letter-spacing: 0.0625rem;
    &::placeholder {
      font-style: italic;
    }

    &:focus {
      border: inset 1px #1cb6fc;
      font-weight: 100;
    }
  }

  button {
    border: none;
    background-color: transparent;
    color: #1cb6fc;
    border-radius: 0 0.4rem 0.4rem 0;
    border: 1px solid transparent;
    padding: 0.62rem 1rem;
    transition: 0.3s;

    &:hover {
      cursor: pointer;
      background-color: #ededed;
    }
  }
`;

export const LoginBtn = styled.button`
  background: linear-gradient(to bottom, #1cb6fc, #3d4cfc);
  padding: 0.6rem 2rem;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.0625rem;
  color: #fff;
  cursor: pointer;
  border-radius: 0.8rem;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  &:hover {
    background: #1cb6fc;
  }
`;

export const ErrorSpan = styled.span`
  background-color: #ffaeae;
  color: #9e0000;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: bold;
`;
