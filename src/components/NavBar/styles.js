import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: royalblue;
  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  padding-left: 1.5rem;

  a {
    font-size: 1.25rem;
    color: white;
    text-decoration: none;
  }
`;
