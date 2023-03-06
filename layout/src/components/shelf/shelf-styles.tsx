import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 80px;
  padding-inline: 161px;

  @media screen and (max-width: 768px) {
    padding-left: 31px;
    padding-right: 0;

    margin-top: 40px;

    overflow: hidden;

    .slick-slider {
      margin: 0 -16px;
    }

    .slick-list {
      margin: 0 16px;
    }
  }
`

export const Title = styled.p`
  font-family: 'Titillium Web';

  font-weight: 700;
  font-size: 32px;
  line-height: 49px;

  text-align: center;

  color: var(--color-2-500);

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 37px;

    margin-bottom: 16px ;
  }
`

export const ContainerProducts = styled.div`
  display: flex;
  gap: 15px;
  padding-inline: 0px;
  margin-top: 24px;
`
