import React from 'react';
import styled from 'styled-components';

const ToggleControl = styled.span`
  position: relative;
  padding: 0 4px;
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 40px;
  height: 10px;
  // background: #555;
  border: 1px solid rgb(59, 57, 57);
  position: relative;
  border-radius: 5px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  vertical-align: 2px;
  outline: none;

  &:checked + label {
    left: 30px;
  }

  &:focus-visible {
    outline: solid 2px white;
  }

  & + label {
    display: inline-block;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    transition: all 0.3s ease;
    cursor: pointer;
    position: absolute;
    left: 2px;
    background: #fff;
    opacity: 0.9;
    background-color: rgb(204, 197, 197);
  }
`;

const Toggle = ({ checked, onChange }) => (
  <ToggleControl>
    <Checkbox
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </ToggleControl>
);

export default Toggle;
