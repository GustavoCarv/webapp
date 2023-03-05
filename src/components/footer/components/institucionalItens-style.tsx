import styled from 'styled-components'

export const ContainerLinks = styled.ul`
  list-style: none;
  padding: 0;

  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Title = styled.span`
  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;

  color: var(--color-2-500);

  margin-bottom: 24px;
  display: block ;
`

export const Link = styled.a`
  display: block;

  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  text-decoration: none ;

  color: var(--color-2-900);
`
