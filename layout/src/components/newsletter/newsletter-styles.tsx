import styled from 'styled-components'

export const Container = styled.form`
  margin-top: 80px;

  display: flex;
  justify-content: center;
  gap: 50px;

  padding-block: 40px;

  border-block: 2px solid var(--color-4-500);

  @media screen and (max-width: 768px) {
    padding: 24px 31px;
    margin-top: 40px;

    flex-direction: column;
    gap: 8px;

    background: var(--color-3-500);
  }
`

export const Title = styled.span`
  font-family: 'Titillium Web';
  font-weight: 700;
  font-size: 24px;
  line-height: 37px;
  display: block;

  color: var(--color-2-900);

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`

export const InputContainer = styled.div`
  display: flex;
  width: 630px;
  height: 40px;

  position: relative;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 26px;
    gap: 15px;
  }
`

export const Input = styled.input`
  --button-size: 131px;

  display: flex;
  align-items: center;
  flex: 1;

  padding-inline: 24px calc(var(--button-size) + 24px);

  border: 1px solid var(--color-2-500);
  border-right: none;
  border-radius: 4px;

  font-family: 'Titillium Web';
  font-size: 14px;
  line-height: 21px;

  @media screen and (max-width: 768px) {
    padding-inline: 24px;
    border-right: 1px solid var(--color-2-500);
  }
`
