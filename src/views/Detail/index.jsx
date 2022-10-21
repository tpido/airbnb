import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeFixedAction } from "../../store/modules/main";
import DetailPicture from "./c-cpns/detail-picture";
const Detail = memo(() => {
  const { detailData } = useSelector((state) => ({
    detailData: state.detail.detailData,
  }));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeFixedAction(false));
  });

  return (
    <div>
      <DetailPicture picturesData={detailData.picture_urls} />
    </div>
  );
});

export default Detail;
