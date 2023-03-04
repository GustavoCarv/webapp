import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  cursor: pointer;

  // TODO: Lembrar da fonte
  font-family: 'Titillium Web';
  font-size: 14px;
  line-height: 21px;

  color: var(--color-white);
  background-color: var(--color-1-500);
  border-radius: 8px;
  border: none;

  &.button-primary {
    width: 119px;
    position: absolute;
    height: 100%;
    right: 0px;
  }
`
