import { FC } from 'react'
import { Wrapper } from './style'

import { DropdownProps } from './types'

export const Search: FC<DropdownProps> = function ({ placeholder, startValue }) {
  return (
   <Wrapper class="select-menu">
   <div class="select-btn">
     <span class="sBtn-text">Select your option</span>
     <i class="bx bx-chevron-down"></i>
   </div>
 
   <ul class="options">
     <li class="option">
       <i class="bx bxl-instagram-alt" style="color: #E1306C;"></i>
       <span class="option-text">Instagram</span>
     </li>
     <li class="option">
       <i class="bx bxl-linkedin-square" style="color: #0E76A8;"></i>
       <span class="option-text">Linkedin</span>
     </li>
     <li class="option">
       <i class="bx bxl-facebook-circle" style="color: #4267B2;"></i>
       <span class="option-text">Facebook</span>
     </li>
     <li class="option">
       <i class="bx bxl-twitter" style="color: #1DA1F2;"></i>
       <span class="option-text">Twitter</span>
     </li>
   </ul>
 </Wrapper>
  )
}
