import styled from "styled-components";

export const ContainerResults = styled.section`
  top: 72px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchNews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 15px;
  margin: 1rem auto;
  width: 80%;
`;

export const TextResults = styled.div`
  width: 78%;
  display: flex;
  justify-content: left;
  align-items: center;
  /* background-color: #fff; */
  border-radius: 0.4rem;
  color: #1cb6fc;
  font-weight: 100;
  margin-top: 1rem;
`;
