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
  width: 100%;
  justify-content: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, auto));
  justify-items: stretch;
  grid-gap: 20px;
  margin-bottom: 20px;
  @media ${({ theme }) => theme.dimensions.s} {
    grid-template-columns: repeat(1, 1fr);
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
  margin-top: 20px;
  &:hover {
    transform: ${({ disabled }) => (disabled ? 'initial' : 'scale(1.01)')};
  }
  &:focus-visible {
    transform: scale(1.01);
  }
`
