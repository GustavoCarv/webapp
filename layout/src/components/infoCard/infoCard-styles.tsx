import styled from 'styled-components'

export const Container = styled.section`
  padding-inline: 161px;
  margin-top: 80px;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding-left: 31px;
    padding-right: 0;
    gap: 24px;

    margin-top: 24px;

    flex-direction: column;
  }
`

export const Content = styled.div`
  padding-right: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  color: var(--color-2-900);

  @media (max-width: 768px) {
    padding-right: 60px;
  }
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

  @media (max-width: 768px) {
    padding-right: 31px;
  }
`
