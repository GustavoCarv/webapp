import styled from 'styled-components'

export const Container = styled.div`
  background-color: var(--color-2-500);

  display: flex;
  justify-content: center;
  height: 24px;
`

export const Content = styled.div`
  // TODO: Configurar fonte do google Titillium
  font-family: 'Titillium Web', 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;

  color: var(--color-white);

  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    line-height: 18px;
  }
`
