import React from 'react';
import styled from 'styled-components';

import Toggle from './Toggle';
import useDarkMode from 'use-dark-mode';

const Container = styled.div`
  display: flex;
  & > button {
    font-size: 1.7em;
    background: none;
    border: none;
    color: #fac002;
    cursor: pointer;
    transition: color 0.5s ease;
    &:last-child {
      color: rgb(204, 197, 197);
    }

    &:focus {
      outline: none;
    }
  }
`;

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <Container className="dark-mode-toggle">
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      <Toggle checked={darkMode.value} onChange={darkMode.toggle} />
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </Container>
  );
};

export default DarkModeToggle;
