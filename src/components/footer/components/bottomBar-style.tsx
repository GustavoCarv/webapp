import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--color-2-500);
  width: 100%;

  height: 85px;
  padding-inline: 161px;
`

export const ContainerSocialMedia = styled.div`
  display: flex;
  align-items: center;
  gap: 22px;
`

export const ContainerCompanies = styled.div`
  display: flex;
  gap: 20px;
  color: var(--color-white);
`
export const ContentCompany = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5px;

  span {
    // TODO: Adicionar fonte
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 14px;
  }
`
