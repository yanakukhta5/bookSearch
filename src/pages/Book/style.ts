import styled from '@emotion/styled'

export const Wrapper = styled.section`
  display: flex;
  align-self: flex-start;
  justify-content: space-evenly;
  margin: 20px 0;
  flex-direction: column;
  gap: 20px;
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
  font-size: 40px;
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

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`
