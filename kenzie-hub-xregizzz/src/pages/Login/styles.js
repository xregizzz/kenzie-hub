import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;

  h1 {
    font-size: 1.5rem;
    margin-bottom: 25px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-size: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    height: 502px;
    width: 369px;
    border-radius: 4px;
    padding: 42px, 22px, 42px, 22px;
    background: var(--grey-3);

    div {
      display: grid;
      text-align: initial;
      margin-bottom: 10px;
    }
    span {
      font-family: "Inter";
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 18px;
      color: var(--grey-1);
      margin-bottom: 10px;
    }

    button {
      margin: 15px 0px 20px 0px;
    }

    h2 {
      margin: 40px 0px 40px 0px;
    }
  }

  input {
    height: 48px;
    width: 329.92877197265625px;
    left: 0px;
    top: 28.78857421875px;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background: var(--grey-2);
    margin: 10px 0 10px 0px;
    border: 1.22px solid var(--grey-0);
  }

  label {
    font-family: "Inter";
    font-weight: 400;
    font-size: 12.182px;
    color: var(--grey-0);
  }
`;
