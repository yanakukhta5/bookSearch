import styled from '@emotion/styled'

export const Error = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.third};
`

export const Top = styled.div`
  display: flex;
  gap: 20px;
  @media ${({ theme }) => theme.dimensions.s} {
    flex-direction: column;
  }
`

export const Image = styled.img`
  object-fit: contain;
  object-position: 0 50%;
  height: 350px;
  @media ${({ theme }) => theme.dimensions.s} {
    object-position: unset;
  }
`

export const Title = styled.h2`
  font-size: 36px;
`

export const Categories = styled.div`
  font-family: Roboto;
`

export const Authors = styled.div`
  color: ${({ theme }) => theme.colors.backup};
`

export const Description = styled.section`
  font-family: Roboto;
  padding: 15px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.backup};
`

export const Block = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
