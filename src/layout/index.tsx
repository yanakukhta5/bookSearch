import { FC, memo } from 'react'
import { Outlet } from 'react-router-dom'

import { Container, ErrorBoundary } from '@/components'

import { ErrorContent } from './ErrorContent'

import { Header } from './Header'
import { Footer } from './Footer'
import { Main } from './style'

export const Layout: FC = memo(function () {
  return (
    <ErrorBoundary errorContent={<ErrorContent />}>
      <Header />

      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
      
      <Footer />
    </ErrorBoundary>
  )
})