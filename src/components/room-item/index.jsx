import React, { memo, createRef, useState } from "react";
import { Divider, Rating } from "@mui/material";
import { ItemWrapper } from "./style";
import { Carousel } from "antd";
import IconLeft from "../../assets/svg/IconLeft";
import IconRight from "../../assets/svg/IconRight";
import Indicator from "../../base-ui/indicator";
import { getDetailDataAction } from "../../store/modules/detail";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const RoomItem = memo((props) => {
  const { item, itemWidth } = props;
  const carouselRef = createRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [curIndex, setCurIndex] = useState(0);

  /*左右按钮处理逻辑 */
  function btnClick(isRight = true, event) {
    isRight ? carouselRef.current.next() : carouselRef.current.prev();
    let newindex = isRight ? curIndex + 1 : curIndex - 1;
    const length = item.picture_urls.length;

    /*左右越界判断 */
    if (newindex < 0) newindex = length - 1;
    if (newindex > length - 1) newindex = 0;

    setCurIndex(newindex);
    event.stopPropagation();
  }

  /* 图片点击处理逻辑*/
  function swiperClick(item) {
    navigate("/detail");
    dispatch(getDetailDataAction(item));
  }

  const pictureElement = (
    <div className="cover">
      <img src={item.picture_url} alt="" />
    </div>
  );

  const swiperElement = (
    <div className="swiper" onClick={(e) => swiperClick(item)}>
      <div className="control">
        <Divider
          className="btn-left"
          onClick={(e) => {
            btnClick(false, e);
          }}
        >
          <IconLeft width="30px" height="30px" />
        </Divider>
        <div
          className="btn-right"
          onClick={(e) => {
            btnClick(true, e);
          }}
        >
          <IconRight width="30px" height="30px" />
        </div>
      </div>
      <div className="dots">
        <Indicator curIndex={curIndex}>
          {item?.picture_urls?.map((item, index) => (
            <div className="item" key={item}>
              <span
                className={curIndex === index ? "dot-item active" : "dot-item"}
              ></span>
            </div>
          ))}
        </Indicator>
      </div>
      <div className="carousel">
        <Carousel dotPosition="bottom" dots={false} ref={carouselRef}>
          {item?.picture_urls?.map((item, index) => (
            <div className="cover" key={item}>
              <img src={item} alt="" />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );

  return (
    // css in js 可以通过这种方式传递props
    <ItemWrapper
      verifyColor={item.verify_info?.text_color || "#767676"}
      itemWidth={itemWidth}
    >
      <div className="inner">
        {item.picture_urls ? swiperElement : pictureElement}
        <div className="desc">
          <div className="verify_info">
            {item.verify_info.messages.join(".")}
          </div>
          <div className="room-name">{item.name}</div>
          <div className="price">{item.price_format}/晚</div>
          <div className="rating">
            <Rating
              defaultValue={5}
              value={item.star_rating}
              precision={0.5}
              size="small"
              sx={{
                color: "#008489",
                fontSize: "12px",
              }}
              readOnly
            />
            {item.bottom_info?.content}
          </div>
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
