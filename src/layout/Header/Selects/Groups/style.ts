import styled from '@emotion/styled'

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  @media ${({ theme }) => theme.dimensions.md} {
    flex-direction: column;
    align-items: center;
  }
`
