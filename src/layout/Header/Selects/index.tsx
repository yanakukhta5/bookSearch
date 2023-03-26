import { FC, memo } from 'react'

import { Groups } from './Groups'
import { TagList } from './TagList'

export const Selects: FC = memo(function () {
  return (
    <>
      <Groups />
      <TagList />
    </>
  )
})
