import { FC, memo } from 'react'

import { Select } from '@/components'

import { Wrapper } from './style'

import { SelectGroupProps } from './types'

export const SelectGroup: FC<SelectGroupProps> = memo(function ({
  description,
  onChange,
  options,
  ...props
}) {
  return (
    <Wrapper>
      <p>{description}</p>
      <Select onChange={onChange} options={options} {...props} />
    </Wrapper>
  )
})
