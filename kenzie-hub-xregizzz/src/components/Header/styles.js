import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  border-bottom: 1px solid var(--grey-3);

  h1 {
    font-size: large;
    color: var(--color-primary);
    margin-left: 22%;
  }

  button {
    margin-right: 22%;
    margin-right: 22%;
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
