import React from 'react';
import useDarkMode from 'use-dark-mode';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;

  & > button {
    font-size: 1.7em;
    background: none;
    border: none;
    color: rgb(204, 197, 197);
    cursor: pointer;
    transition: color 0.5s ease;

    &:focus {
      outline: none;
    }
  }
`;

const DarkModeCommands = () => {
  const darkMode = useDarkMode(false);

  return (
    <Container>
      <button onClick={darkMode.toggle}>{darkMode.value ? '☀' : '☾'}</button>
    </Container>
  );
};

export default DarkModeCommands;
