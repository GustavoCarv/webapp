import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-inline: 161px;
  margin-top: 80px;

  @media (max-width: 768px) {
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
export const ContainerBenefits = styled.ul`
  display: flex;
  gap: 15px;
  padding-inline: 0;
`

export const Title = styled.p`
  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 32px;
  line-height: 49px;

  text-align: center;

  color: var(--color-2-500);

  margin-bottom: 17px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 37px;
  }
`
