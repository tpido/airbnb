import React, { memo, useEffect, useRef, useState } from "react";
import IconLeft from "../../assets/svg/IconLeft";
import IconRight from "../../assets/svg/IconRight";
import { ViewWrapper } from "./style";
const ScrollView = memo((props) => {
  const scrollContentRef = useRef();
  const totalDistanceRef = useRef();
  const [showRight, setShowright] = useState(false);
  const [showLeft, setShowleft] = useState(false);
  const [posIndex, setposIndex] = useState(0);

  /*判断右箭头是否可视 */
  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth; //总共的长度
    const clientWidth = scrollContentRef.current.clientWidth; //可看到的长度
    totalDistanceRef.current = scrollWidth - clientWidth;
    console.log("scrollWidth: " + scrollWidth);
    console.log("clientWidth: " + clientWidth);
    if (totalDistanceRef.current > 0) setShowright(true);
  }, [scrollContentRef]);

  /* 左右按钮的逻辑判断*/
  function handleButtonClick(isRight) {
    const curIndex = isRight ? posIndex + 1 : posIndex - 1;
    const curEl = scrollContentRef.current.children[curIndex];
    const leftDistance = curEl.offsetLeft;
    scrollContentRef.current.style.transform = `translateX(-${leftDistance}px)`;
    setposIndex(curIndex);
    setShowright(totalDistanceRef.current > leftDistance);
    setShowleft(leftDistance > 0);
  }

  return (
    <ViewWrapper>
      {showLeft && (
        <div className="left-icon" onClick={(e) => handleButtonClick(false, e)}>
          <IconLeft />
        </div>
      )}
      {showRight && (
        <div className="right-icon" onClick={(e) => handleButtonClick(true, e)}>
          <IconRight />
        </div>
      )}
      <div className="scroll">
        <div className="scroll-content" ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ViewWrapper>
  );
});

export default ScrollView;
