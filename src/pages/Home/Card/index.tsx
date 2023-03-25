import { FC, memo } from 'react'

import { CardNavLink, Title, Thumbnail, Author, Category, Text } from './style'

import { Item } from '@/types'

export const Card: FC<Item> = memo(function ({ volumeInfo, id }) {
  return (
    <CardNavLink to={`/book/${id}`}>

      {volumeInfo?.imageLinks?.thumbnail && <Thumbnail src={volumeInfo.imageLinks.thumbnail} alt={volumeInfo.title} />}

      <Text>
        <Title>{volumeInfo.title.length > 70 ? volumeInfo.title.slice(70) + '...' : volumeInfo.title}</Title>

        {volumeInfo?.authors?.map((author) => (
          <Author key={author}>{author}</Author>
        ))}
        
        {volumeInfo?.categories?.map((category) => (
          <Category key={category}>
            <span>Жанр: </span>
            {category}
          </Category>
        ))}
      </Text>

    </CardNavLink>
  )
})

