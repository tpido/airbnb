import React, { memo } from 'react'
import LogoSvg from '@/assets/svg/LogoSvg'
import { LeftWrapper } from './style'
const HeaderLeft = memo(() => {
  return (
    <LeftWrapper>
      <div className='logo'>
      <LogoSvg />
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft