import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 308px;
  height: 64px;

  border-radius: 4px;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    width: 298px;
  }
`
