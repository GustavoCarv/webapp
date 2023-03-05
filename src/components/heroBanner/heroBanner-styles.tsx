import styled from 'styled-components'

export const Container = styled.section`
  height: 600px;

  .flickity-prev-next-button.previous,
  .flickity-prev-next-button.next {
    background: none;
    opacity: 1;
  }

  .flickity-prev-next-button.previous {
    left: 161px;
  }

  .flickity-prev-next-button.next {
    right: 161px;
  }

  .flickity-page-dots {
    bottom: 25px;

    .dot {
      width: 16px;
      height: 16px;
      background: none;
      border: 2px solid var(--color-1-500);
      opacity: 1;
    }

    .dot.is-selected {
      background-color: var(--color-1-500);
    }
  }
`
