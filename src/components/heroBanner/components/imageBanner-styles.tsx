import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 600px;

  position: relative;

  picture {
    height: 100%;
  }

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }

  @media (max-width: 768px) {
    height: 320px;
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

    @media (max-width: 768px) {
      font-size: 30px;
      line-height: 37px;

      max-width: 240px;
      width: 240px;
      margin-bottom: 24px;
    }
  }

  p {
    font-family: 'Montserrat';
    font-size: 20px;
    line-height: 24px;

    margin-bottom: 32px;
    max-width: 472px;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 17px;

      max-width: 240px;
      width: 240px;
      margin-bottom: 16px;
    }
  }

  @media (max-width: 768px) {
    top: 63px;
    left: 50%;
    transform: translateX(-50%);
  }
`
