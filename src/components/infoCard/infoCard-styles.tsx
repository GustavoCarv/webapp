import styled from 'styled-components'

export const Container = styled.div`
  padding-inline: 161px;
  margin-top: 80px;

  display: flex;
  align-items: center;
`

export const Content = styled.div`
  padding-right: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: var(--color-2-900);
`

export const Title = styled.h2`
  max-width: 420px;

  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;  
`

export const Text = styled.p`
  max-width: 420px;
  width: 100%;

  font-family: 'Titillium Web';
  font-size: 14px;
  line-height: 21px;
`

export const ImageContainer = styled.div`
  flex-shrink: 1;
`
