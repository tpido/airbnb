import React, { memo } from "react";
import LongForItem from "../../../../components/longfor-item";
import SectionHeader from "../../../../components/section-header";
import { LongForWrapper } from "./style";
import ScrollView from "../../../../base-ui/scroll-view/index";
const LongFor = memo((props) => {
  const { data } = props;
  //   console.log(data);
  return (
    <LongForWrapper>
      <SectionHeader title={data.title} subtitle={data.subtitle} />
      <ScrollView>
        {data.list.map((item, index) => (
          <LongForItem key={index} data={item} />
        ))}
      </ScrollView>
    </LongForWrapper>
  );
});

export default LongFor;
