import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  width: 952px;

  margin-bottom: 64px;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-inline: 31px;
    justify-content: start;
    flex-direction: column;

    gap: 16px;

    margin-bottom: 56px;
  }
`
