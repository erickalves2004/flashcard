import styled from "styled-components";

export const Container = styled.form`
  width: 50vw;
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  .text {
    padding: 1.5rem;
    border-bottom: 1px solid royalblue;
    outline: none;
    width: 75%;
  }
  label {
    margin: 1.5rem;
  }
  textarea {
    height: 8rem;
  }
  .radioButton {
    margin: 1rem;
  }
  .buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 1.5rem;
    .sendButton {
      padding: 1rem;
      background-color: royalblue;
      color: white;
      width: 50%;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: 0.1s ease;
      &:hover {
        filter: brightness(0.85);
      }
    }
    .cancel {
      background-color: rgba(255, 64, 64, 1);
    }
  }
`;
