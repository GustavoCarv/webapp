import styled from 'styled-components'

export const CloseButton = styled.button`
  all: unset;
  cursor: pointer;

  position: absolute;
  right: 0;
  top: -27px;
  // TODO: Importar fonte
  font-family: 'Lato';
  font-size: 12px;
  line-height: 20px;
  text-transform: uppercase;
  color: var(--color-white);
`

export const ContainerImage = styled.div`
  img {
    max-height: 100%;
    object-fit: none;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  margin-top: 130px;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 768px) {
    margin-top: 47.5px;
    margin-bottom: 25px
  }

  input {
    margin-top: 13px;
    width: 322px;
    height: 40px;

    border: 1px solid #c4c4c4;
    border-radius: 10px;

    padding-inline: 13px;

    font-family: 'Titillium Web';
    font-size: 12px;
    line-height: 20px;

    color: var(--color-4);

    @media screen and (max-width: 768px) {
      width: 258px;
    }
  }

  button {
    width: 322px;
    height: 40px;
    border-radius: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;

    background-color: var(--color-1-500);
    border: none;
    color: var(--color-white);
    font-family: 'Titillium Web';

    font-weight: 700;
    font-size: 12px;
    line-height: 20px;

    text-transform: uppercase;

    @media screen and (max-width: 768px) {
      width: 258px;
    }
  }
`

export const Title = styled.p`
  font-family: 'Titillium Web';
  font-size: 12px;
  line-height: 20px;

  text-transform: uppercase;

  color: var(--color-2-500);
`

export const Text = styled.p`
  font-family: 'Titillium Web';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  text-align: center;

  color: var(--color-4);

  span {
    font-weight: 700;
    display: block;
  }

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`
