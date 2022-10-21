import React, { memo } from "react";
import SectionHeader from "../../../../components/section-header";
import ScrollView from "../../../../base-ui/scroll-view";
import RoomItem from "../../../../components/room-item";
import SectionFooter from "../../../../components/section-footer";

const HomeSectionV3 = memo((props) => {
  const { data } = props;
  console.log(data);
  return (
    <div>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <ScrollView>
        {data.list.map((item, index) => (
          <RoomItem item={item} itemWidth="20%" key={index}></RoomItem>
        ))}
      </ScrollView>
      <SectionFooter name={data.type} color="#398288" />
    </div>
  );
});
export default HomeSectionV3;
