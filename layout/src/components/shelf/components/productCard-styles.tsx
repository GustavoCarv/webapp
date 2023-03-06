import styled from 'styled-components'

export const ContainerColors = styled.div`
  display: flex;
  gap: 8px;

  margin-top: 8px;
  padding-inline: 27px;
`
export const Container = styled.div`
  width: 308px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (max-width: 768px) {
    min-height: 600px;
  }
`
export const ColorOption = styled.div`
  cursor: pointer;
  width: 27px;
  height: 27px;
  border: 1px solid transparent;
  border-radius: 4px;
`

export const Price = styled.p`
  padding-inline: 27px;

  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;

  color: var(--color-2-500);
`

export const Name = styled.p`
  padding-inline: 27px;

  font-family: 'Titillium Web';
  font-size: 16px;
  line-height: 24px;

  color: var(--color-2-900);
`
export const Description = styled.p`
  padding-inline: 27px;

  font-family: 'Titillium Web';
  font-size: 12px;
  line-height: 18px;

  color: var(--color-2-900);
  opacity: 0.5;
`

export const ContainerButton = styled.div`
  display: flex;
  align-items: end;
  flex: 1;

  padding-inline: 27px;
`
