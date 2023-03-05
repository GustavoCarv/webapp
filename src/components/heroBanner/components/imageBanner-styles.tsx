import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 600px;

  position: relative;

  img {
    object-fit: cover;
    height: 100%;
  }
`

export const Content = styled.div`
  position: absolute;
  top: 151px;
  left: 323px;

  // TODO: Adicionar fonte
  font-family: 'Montserrat';
  color: var(--color-white);

  h1,
  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 49px;

    margin-bottom: 40px;
    max-width: 472px;
  }

  p {
    font-family: 'Montserrat';
    font-size: 20px;
    line-height: 24px;

    margin-bottom: 32px;
    max-width: 472px;
  }
`
