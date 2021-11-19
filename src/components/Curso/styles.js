import styled from "styled-components";

export const Container = styled.div`
  width: 30%;
  height: 15rem;
  padding: 2rem;
  background-color: rgba(64, 64, 128, 0.75);
  color: white;
  position: relative;

  p {
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  bold {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: rgba(255, 255, 255, 0.5);
  }

  .buttons {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;

    button {
      cursor: pointer;
      background: transparent;
      color: rgba(255, 255, 255, 0.85);
      transition: 150ms ease;

      &:hover {
        transform: scale(1.1);
        color: rgba(255, 255, 255, 1);
      }
    }
  }
`;
