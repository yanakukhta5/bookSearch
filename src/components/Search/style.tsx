import styled from '@emotion/styled'

import { Button, Input } from '@/components'

export const Wrapper = styled.form`
  width: clamp(280px, 40%, 500px);
  height: 40px;
  display: flex;
  position: relative;
`

export const Submit = styled(Button)`
  aspect-ratio: 1 / 1;
  min-width: unset;
  background-image: url('/img/svg/search.svg');
  background-repeat: no-repeat;
  background-size: 75% 75%;
  background-position: center;
  position: absolute;
  height: 100%;
  right: 0;
  &:hover {
    transform: unset;
  }
`

export const Query = styled(Input)`
  width: 100%;
  font-family: 'Roboto';
`
