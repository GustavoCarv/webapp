import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;

  width: 308px;
  height: 64px;
  padding-left: 27px;

  background: var(--color-4-500);
  border-radius: 4px;
`
export const Content = styled.div`
  font-family: 'Titillium Web';
  color: var(--color-2-500);

  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
`
