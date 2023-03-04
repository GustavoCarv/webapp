import styled from 'styled-components'

export const Container = styled.div`
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  padding: 0 14px 0 17px;
  border-radius: 8px;
  border: 1px solid transparent;

  height: 100%;

  &.is-active {
    border-color: var(--color-1-500);
  }

  img {
    height: 16px;
  }

  p {
    font-family: 'Titillium Web';
    font-size: 14px;
    line-height: 21px;

    color: var(--color-2-500);
    white-space: nowrap;
  }
`
