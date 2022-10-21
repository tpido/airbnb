import React, { memo, useState, useCallback } from "react";
import SectionFooter from "@/components/section-footer";
import SectionHeader from "@/components/section-header";
import SectionRooms from "@/components/section-rooms";
import SectionTab from "@/components/section-tab";
const HomeSectionV2 = memo((props) => {
  const { data = {} } = props;

  const nameList = Object.keys(data.dest_list);
  let [tabName, setTabName] = useState(nameList[0]);

  const handleTabClick = useCallback((item) => {
    setTabName(item);
  }, []);

  return (
    <div className="discount">
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <SectionTab tabName={nameList} handleTabClick={handleTabClick} />
      <SectionRooms roomsData={data.dest_list?.[tabName]} itemWidth="33.333%" />
      <SectionFooter name={tabName} color="#398288" />
    </div>
  );
});

export default HomeSectionV2;
