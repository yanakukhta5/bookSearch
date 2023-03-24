import styled from '@emotion/styled'

export const Wrapper = styled.select`
  position: relative;
  display: block;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary};
  box-sizing: border-box;
  margin: 0;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  appearance: none;
  padding: 0px 30px 0px 10px;
  font-family: Roboto;
  background-color: ${({ theme }) => theme.colors.transparent};
  background-image: url('/public/img/svg/triangle.svg');
  background-repeat: no-repeat, repeat;
  background-position: right 9px top 50%, 0 0;
  background-size: 16px auto, 100%;
  cursor: pointer;
  height: 40px;
  * {
    background: ${({ theme }) => theme.colors.transparent};
    font: Roboto;
  }
`

export const Option = styled.option`
  appearance: none;
  background-color: ${({ theme }) => theme.colors.third};
`
