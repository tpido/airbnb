import React, { memo } from "react";
import { HeaderWrapper } from "./style";
const SectionHeader = memo((props) => {
  const { title = "", subtitle = "" } = props;
  // console.log(props);
  return (
    <HeaderWrapper>
      <h2 className="title">{title}</h2>
      {subtitle && <div className="subtitle">{subtitle}</div>}
    </HeaderWrapper>
  );
});

export default SectionHeader;
