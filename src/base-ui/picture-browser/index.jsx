import React, { memo, useEffect, useRef, useState } from "react";
import IconClose from "../../assets/svg/IconClose";
import { BrowserWrapper } from "./style";
import IconLeft from "@/assets/svg/IconLeft";
import IconRight from "../../assets/svg/IconRight";
import Indicator from "../indicator";
const PictureBrowser = memo((props) => {
  const { closeClick, picturesData } = props;
  const [curIndex, setcurIndex] = useState(0);
  const [showlist, setshowlist] = useState(true);
  const wrapperRef = useRef();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  });

  function closeHandle() {
    closeClick();
  }

  function indicatorClick(isNext = true) {
    let selectedIndex = isNext ? curIndex + 1 : curIndex - 1;
    let length = picturesData.length - 1;

    if (selectedIndex < 0) selectedIndex = length;
    if (selectedIndex > length) selectedIndex = 0;

    const offsetLeft = wrapperRef.current.children[selectedIndex].offsetLeft;
    wrapperRef.current.style.transform = `translateX(${-offsetLeft}px)`;
    setcurIndex(selectedIndex);
  }

  function showListHandle() {
    const listState = !showlist;
    setshowlist(listState);
    console.log(showlist);
  }

  return (
    <BrowserWrapper showlist={showlist}>
      <div className="header">
        <div className="close" onClick={closeHandle}>
          <IconClose />
        </div>
      </div>
      <div className="content">
        <div className="left" onClick={(e) => indicatorClick(false)}>
          <IconLeft width="77px" height="77px" color="white" />
        </div>
        <div className="center">
          <div className="wrapper">
            <div className="wrapper_content" ref={wrapperRef}>
              {picturesData.map((item, index) => (
                <div className="wrapper_item" key={index}>
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="right" onClick={indicatorClick}>
          <IconRight width="77px" height="77px" color="white" />
        </div>
      </div>
      <div className="footer">
        <div className="footer_content">
          <div className="info">
            <div className="left_info">
              roomslist:
              {curIndex + 1} / {picturesData.length}
            </div>
            <div className="right_info" onClick={showListHandle}>
              <span>{showlist ? "隐藏" : "显示"}图片列表</span>
            </div>
          </div>
          <div className="indicator">
            <Indicator curIndex={curIndex}>
              {picturesData.map((item, index) => (
                <div className="indicator_content" key={index}>
                  <img src={item} alt="" />
                  {curIndex !== index && <div className="cover"></div>}
                </div>
              ))}
            </Indicator>
          </div>
        </div>
      </div>
    </BrowserWrapper>
  );
});

export default PictureBrowser;
