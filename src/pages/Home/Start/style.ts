import styled from '@emotion/styled'

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Intro = styled.p`
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.third};
`

export const Description = styled.p`
  font-size: 25px;
  text-align: center;
  color: ${({ theme }) => theme.colors.third};
  font-family: Roboto;
`
