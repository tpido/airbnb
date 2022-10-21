import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { objLength } from "../../utils";
import { fetchGoodPrice } from "../../store/modules/home";
import HomeSectionV1 from "./c-cpns/home-section-v1";
import HomeSectionV2 from "./c-cpns/home-section-v2";
import HomeSectionV3 from "./c-cpns/home-section-v3";
import HomeBanner from "./c-cpns/HomeBanner/HomeBanner";
import { HomeWrapper } from "./style";
import LongFor from "./c-cpns/LongFor";
import { changeFixedAction } from "../../store/modules/main";
const Home = memo(() => {
  //从redux中获取数据
  const {
    goodPriceData = {},
    highScoreData = {},
    discountData = {},
    recommendData = {},
    longForData = {},
    plusData = {},
  } = useSelector(
    (state) => ({
      goodPriceData: state.home.goodPriceData,
      highScoreData: state.home.highScoreData,
      discountData: state.home.discountData,
      recommendData: state.home.recommendData,
      longForData: state.home.longForData,
      plusData: state.home.plusData,
    }),
    shallowEqual
  );

  //发送网络请求
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGoodPrice());
    dispatch(changeFixedAction(true));
  }, [dispatch]);

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {objLength(discountData) && <HomeSectionV2 data={discountData} />}
        {objLength(recommendData) && <HomeSectionV2 data={recommendData} />}
        {objLength(goodPriceData) && <HomeSectionV1 data={goodPriceData} />}
        {objLength(highScoreData) && <HomeSectionV1 data={highScoreData} />}
        {objLength(longForData) && <LongFor data={longForData} />}
        {objLength(plusData) && <HomeSectionV3 data={plusData} />}
      </div>
    </HomeWrapper>
  );
});

export default Home;
