import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  padding-inline: 161px;
  margin-top: 24px;

  @media screen and (max-width: 768px) {
    padding-left: 31px;
    padding-right: 0;

    overflow: hidden ;

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
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;

  color: var(--color-2-500);

  padding-bottom: 5px;
  margin-bottom: 16px;
`
