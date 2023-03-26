import { FC, memo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Container, Button } from '@/components'
import { useAppDispatch, useAppSelector } from '@/hooks'

import { SearchForm } from './SearchForm'
import { Selects } from './Selects'

import { Wrapper, Title } from './style'

export const Header: FC = memo(function () {
  const dispatch = useAppDispatch()
  const books = useAppSelector((store) => store.books)

  const { id } = useParams()

  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  return (
    <Wrapper>
      <Container>
        <Title>Search for books</Title>

        <SearchForm />

        {id && (
          <Button background="transparent" onClick={goBack}>
            Go back
          </Button>
        )}

        <Selects />
      </Container>
    </Wrapper>
  )
})
