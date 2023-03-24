import { FC } from 'react'
import { Wrapper, Option } from './style'

import { SelectProps } from './types'

export const Select: FC<SelectProps> = function ({
  startValue,
  options,
  onChange,
  hideFirst = false
}) {
  return (
    <Wrapper onChange={onChange}>
      {startValue && (
        <Option value={startValue.name} hidden={hideFirst}>
          {startValue.text}
        </Option>
      )}
      {options.map((option) => (
        <Option value={option.name} key={option.name}>
          {option.text}
        </Option>
      ))}
    </Wrapper>
  )
}
