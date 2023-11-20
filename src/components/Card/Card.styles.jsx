import styled from "styled-components";

export const CardContainer = styled.section`
  position: relative;
  max-width: 100%;
  padding: 1.6rem;
  background: #fff;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 0.4rem;
`;

export const CardBodyContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0.8rem;
`;

export const CardBodyText = styled.article`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;

  h2 {
    width: 250px;
    font-size: 2rem;
    /* margin-bottom: 1rem; */
  }

  p.text {
    /* text-align: justify; */
    font-weight: 100;
    letter-spacing: 0.0625rem;
    line-height: 1.5;
    /* margin-bottom: 1.2rem; */
  }
`;

export const CardBodyIcons = styled.section`
  display: flex;
  /* margin-top: 1.2rem; */
  bottom: 0;
  padding-bottom: 0.8rem;

  div {
    margin-right: 0.8rem;

    i {
      margin-right: 0.25rem;
    }
  }
`;

export const CardBodyImg = styled.article`
  display: flex;
  width: 100%;
  padding-bottom: 1.4rem;

  img {
    width: 100%;
    height: 60%;
    border-radius: 0.4rem;
  }
`;
