import { FC } from 'react'
import { Outlet } from 'react-router-dom'

import { Container } from '@/components'

import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './style'

export const Layout: FC = function () {
  return (
    <>
      <Header />
        <Main>
          <Container>
            <Outlet />
          </Container>
        </Main>
      <Footer />
    </>
  )
}
