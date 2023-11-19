import styled from "styled-components";

export const CardContainer = styled.section`
  position: relative;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  padding: 2rem;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.4rem;
`;

export const CardBodyContainer = styled.section`
  width: 100%;
  display: flex;
  gap: 1rem;
`;

export const CardBodyText = styled.article`
  display: flex;
  flex-direction: column;
  width: 50%;

  h2 {
    margin-bottom: 0.4rem;
  }

  p {
    text-align: justify;
    font-weight: 100;
    letter-spacing: 0.0625rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }
`;

export const CardBodyIcons = styled.section`
  display: flex;
  margin-top: 1.2rem;

  div {
    margin-right: 0.8rem;

    i {
      margin-right: 0.25rem;
    }
  }
`;

export const CardBodyImg = styled.article`
  display: flex;
  align-items: self-end;
  width: 50%;
  padding-bottom: 1.4rem;

  img {
    width: 100%;
    height: 80%;
    border-radius: 0.4rem;
    margin-bottom: 1rem;
  }
`;
