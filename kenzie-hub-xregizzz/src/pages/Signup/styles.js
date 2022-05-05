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
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  border-radius: 4px;

  form {
    width: 100%;
    height: 70vh;
    overflow-y: scroll;
    text-align: center;
    background-color: rgb(33, 37, 41);
    padding: 15px 35px 40px;
    border-radius: 4px;

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
      font-size: 20px;
      line-height: 28px;
      color: var(--grey-0);
      margin: 20px;
    }
    p {
      margin-bottom: 25px;
      font-size: 13px;
      font-weight: 100;
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
    margin-top: 10px;
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
    margin-top: 20px;
  }
`;
export const NavDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 230px;

  margin: 50px;

  button {
    background-color: var(--grey-3);
    border-radius: 4px;
    border: none;
    color: var(--grey-0);
    font-size: 0.8rem;
    padding: 10px 20px 10px 20px;
  }

  button:hover {
    filter: opacity(0.9);
  }
`;
