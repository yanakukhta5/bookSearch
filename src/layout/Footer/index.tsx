import { FC, memo } from 'react'

import { Wrapper, Copyright, Link } from './style'
import { Container } from '@/components'

export const Footer : FC = memo(function(){
 return (
  <Wrapper>
   <Container>
    <Copyright>Разработала <Link href='https://github.com/yanakukhta5'>yanakukhta5</Link></Copyright>
   </Container>
  </Wrapper>
 )
})