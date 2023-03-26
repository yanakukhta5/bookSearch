import styled from '@emotion/styled'

export const Wrapper = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.footerBg};
  background-image: url('/img/footer/background-min.jpeg');
  background-size: cover;
  background-position: center;
  height: 10vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  &::before {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    content: '';
    background-color: ${({ theme }) => theme.colors.overlay};
  }
`

export const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.backup};
  &::before {
    content: '©';
    padding-right: 5px;
  }
`

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
`
