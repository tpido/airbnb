import React, { memo } from 'react'
import SectionFooter from '../../../../components/section-footer'
import SectionHeader from '../../../../components/section-header'
import SectionRooms from '../../../../components/section-rooms'
const HomeSectionV1 = memo((props) => {
    const {data = {} }=props;
    // console.log(data)
  return (
    <div>
        <SectionHeader title={data.title} subtitle={data.subtitle}/>
        <SectionRooms roomsData={data.list}/>
        <SectionFooter name={data.name} />
    </div>
  )
})

export default HomeSectionV1