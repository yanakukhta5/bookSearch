import styled from '@emotion/styled'

import { Button } from '@/components'

export const Wrapper = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  @media ${({ theme }) => theme.dimensions.lg} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${({ theme }) => theme.dimensions.md} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${({ theme }) => theme.dimensions.s} {
    grid-template-columns: repeat(1, 1fr);
    margin: 10px 0;
  }
`

export const Total = styled.h2`
  color: ${({ theme }) => theme.colors.third};
  font-size: 28px;
  text-align: center;
  margin: 0px 0px 20px;
  @media ${({ theme }) => theme.dimensions.s} {
    font-size: 20px;
  }
`

export const Query = styled.span`
  &::before,
  ::after {
    content: '"';
  }
`

export const ShowMore = styled(Button)`
  &:hover {
    transform: ${({ disabled }) => (disabled ? 'initial' : 'scale(1.01)')};
  }
  &:focus-visible {
    transform: scale(1.01);
  }
`
