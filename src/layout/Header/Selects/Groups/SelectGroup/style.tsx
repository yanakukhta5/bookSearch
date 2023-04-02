import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  p {
    margin-right: 10px;
    font-family: Roboto;
  }
  @media ${({ theme }) => theme.dimensions.s} {
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
  }
`
