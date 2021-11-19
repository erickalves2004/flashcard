import styled from "styled-components";

export const Container = styled.div`
  .title {
    font-size: 3rem;
  }

  .add {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.85);
    transition: 100ms ease;

    &:hover {
      color: rgba(0, 0, 0, 1);
    }
  }

  padding: 1.5rem;

  .cursos {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding: 1.5rem;
  }
`;
