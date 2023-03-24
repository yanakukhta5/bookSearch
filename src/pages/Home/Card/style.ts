import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

export const CardNavLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  padding: 20px;
  text-align: center;
  width: clamp(235px, 100%, 285px);
  background-color: ${({ theme }) => theme.colors.secondary};
  font-family: 'Roboto';
  grid-template-columns: 40% 60%;
  border: 1px solid ${({ theme }) => theme.colors.backup};
  color: ${({theme}) => theme.colors.third};
  border-radius: 6px;
  height: 380px;
  break-inside: avoid;
  overflow: hidden;
  cursor: pointer;
  @media ${({ theme }) => theme.dimensions.s} {
    flex-direction: row;
    width: calc(100vw - 40px);
    height: fit-content;
    padding: 10px;
    height: 210px;
    text-align: left;
    margin: 0 auto 10px;
  }
`

export const Title = styled.p`
  display: block;
  line-height: 1.2;
  max-height: 55px;
  overflow: hidden;
  font-size: 22px;
  max-width: 100%;
  margin: 10px 0px;
  color: ${({theme}) => theme.colors.accent};
  @media ${({ theme }) => theme.dimensions.s} {
    font-size: 16px;
  }
`

export const Author = styled.p`
  font-family: monospace;
  font-size: 11px;
`

export const Thumbnail = styled.img`
  object-fit: contain;
`

export const Category = styled.p`
  text-transform: lowercase;
  font-family: cursive;
  margin-top: 10px;
  & span {
    text-transform: capitalize;
  }
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  @media ${({ theme }) => theme.dimensions.s} {
    width: 100%;
    margin-left: 15px;
  }
`
