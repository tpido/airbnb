import React, { memo } from "react";
import { ItemWrapper } from "./style";

const LongForItem = memo((props) => {
  const { data } = props;
  //   console.log(data);
  return (
    <ItemWrapper>
      <img src={data.picture_url} alt="" />
      <div className="info">
        <div className="city">{data.city}</div>
        <div className="price">{data.price}</div>
      </div>
    </ItemWrapper>
  );
});

export default LongForItem;
