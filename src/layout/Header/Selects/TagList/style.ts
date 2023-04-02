import styled from '@emotion/styled'

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  align-items: center;
  width: calc(100vw - 40px);
`

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
  @media ${({ theme }) => theme.dimensions.s} {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`

export const Category = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.backup};
  border-radius: 3px;
  width: min-content;
  padding: 5px 20px;
  text-align: center;
`

export const Close = styled.button`
  position: relative;
  left: 15px;
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.colors.transparent};
  border: none;
  cursor: pointer;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 8px;
    left: 2px;
    background-color: ${({ theme }) => theme.colors.backup};
    width: 13px;
    height: 2px;
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
`
