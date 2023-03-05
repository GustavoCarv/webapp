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

  &:hover {
    box-shadow: unset;
    transform: unset;
  }

  &.button-primary {
    width: 119px;
    position: absolute;
    height: 100%;
    right: 0px;
  }

  &.button-CTA {
    width: 119px;
    height: 48px;

    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }

  &.button-newsletter {
    width: 131px;
    position: absolute;
    height: 42px;
    right: 0px;

    // TODO: Pensar em como corrigir depois
    top: -1px;
    right: -1px;

    font-family: 'Titillium Web';
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }
`
