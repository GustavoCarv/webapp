import styled from 'styled-components'

export const Container = styled.div`
  padding-inline: 161px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 88px;

  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.08);

  @media (max-width: 768px) {
    display: none;
  }
`

export const Logo = styled.div`
  cursor: pointer;
`

export const SearchBarContainer = styled.div`
  display: flex;
  width: 791px;
  height: 40px;

  position: relative;
`

export const SearchBarInput = styled.input`
  --button-size: 119px;

  display: flex;
  align-items: center;
  flex: 1;

  background: var(--color-4-500);

  outline: none;
  border: none;
  border-radius: 10px;

  font-family: 'Titillium Web';
  font-size: 12px;
  line-height: 18px;

  color: var(--color-2-500);

  padding-inline: 24px calc(var(--button-size) + 24px);
`

export const RightSideContainer = styled.div`
  display: flex;
  align-items: center;

  height: 46px ;
`
