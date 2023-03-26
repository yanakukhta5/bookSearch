import styled from '@emotion/styled'

export const Wrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBg};
  background-image: url('/img/header/background-min.jpg');
  background-size: cover;
  height: 60vh;
  position: relative;
  z-index: 1;
  display: grid;
  color: ${({ theme }) => theme.colors.primary};
  &::before {
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background-color: ${({ theme }) => theme.colors.overlay};
  }
  @media ${({ theme }) => theme.dimensions.s} {
    height: unset;
    padding: 30px 0px 20px 0;
  }
`

export const Content = styled.div`
  text-align: center;
`

export const Title = styled.h1`
  font-size: 46px;
  text-align: center;
  margin-bottom: 10px;
  @media ${({ theme }) => theme.dimensions.s} {
    font-size: 36px;
  }
`

export const Selects = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 20px;
  @media ${({ theme }) => theme.dimensions.md} {
    flex-direction: column;
    align-items: center;
  }
`

export const SelectGroup = styled.div`
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
  }
`

export const Categories = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 20px;
  text-align: center;
  align-items: center;
`

export const Tags = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  @media ${({ theme }) => theme.dimensions.s} {
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
