import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

  form {
    height: 711px;
    width: 370px;
    border-radius: 4px;
    padding: 42px 22px 42px 22px;

    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;

    background: var(--grey-3);

    div {
      display: grid;
      text-align: initial;
    }

    span {
      font-family: Inter;
      font-size: 12px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      color: var(--grey-1);
    }

    h2 {
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      color: var(--grey-0);
    }
  }

  input,
  select {
    height: 48px;
    width: 329.92877197265625px;
    left: 0px;
    top: 28.78857421875px;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    background: var(--grey-2);
    margin: 10px 0 10px 0px;
    border: 1.2182px solid var(--grey-2);
  }

  label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12.182px;
    line-height: 0px;
    color: var(--grey-0);
    margin-bottom: 10px;
  }

  input::placeholder {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--grey-1);
  }

  select {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16.2426px;
    line-height: 26px;
    color: var(--grey-1);
  }
`;
