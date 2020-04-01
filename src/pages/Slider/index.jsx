import React from 'react'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import LayoutOne from './Layout1'
import LayoutTwo from './Layout2'
import LayoutThree from './Layout3'
import {
  SliderContainer,
  CircleClose,
  CircleLeft,
  CircleRight
} from './styles.js'
function Slider() {
  return (
    <SliderContainer>
      <CircleClose />
      <CircleLeft>
        <LeftOutlined style={{ fontSize: '20px', color: '#fff' }} />
      </CircleLeft>
      <CircleRight>
        <RightOutlined style={{ fontSize: '20px', color: '#fff' }} />
      </CircleRight>
      {/* <LayoutOne /> */}
      {/* <LayoutTwo /> */}
      <LayoutThree />
    </SliderContainer>
  )
}
export default Slider