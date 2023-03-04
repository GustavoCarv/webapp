import styled from 'styled-components'

export const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px ;

  width: 147px;
  text-align: center;
  height: 100%;

  font-family: 'Titillium Web';
  font-size: 14px;
  line-height: 21px;

  color: var(--color-2-500);

  &.is-active {
    color: var(--color-1-500);
    font-weight: 700;
  }
`
