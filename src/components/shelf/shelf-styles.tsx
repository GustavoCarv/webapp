import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 80px;
  padding-inline: 161px;
  overflow: hidden;

  .slick-list {
    margin: 0 -16px;
  }
  .slick-slide > div {
    padding: 0 8px;
  }

  .slick-next,
  .slick-prev {
    content: '';
    width: 19px;
    height: 32px;

    top: 270px;
    transform: translateY(0);

    z-index: 100;
    position: absolute;
    background: red;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;

    &::before {
      display: none;
    }
  }

  .slick-prev {
    background: url('/assets/arrow-left.svg');
    left: 0;
  }

  .slick-next {
    background: url('/assets/arrow.svg');
    right: 0;
  }

  @media screen and (max-width: 768px) {
    padding-left: 31px;
    padding-right: 0;

    margin-top: 40px;

    overflow: hidden;

    .slick-slider {
      margin: 0 -16px;
    }

    .slick-slide > div {
      padding: 0;
    }

    .slick-list {
      margin: 0 16px;
    }

    .slick-next,
    .slick-prev {
      display: none !important;
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
  margin-bottom: 24px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
    line-height: 37px;

    margin-bottom: 16px;
  }
`

export const ContainerProducts = styled.div`
  display: flex;
  gap: 15px;
  padding-inline: 0px;
  margin-top: 24px;
`
