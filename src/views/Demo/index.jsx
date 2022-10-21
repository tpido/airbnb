import React, { memo } from "react";
import { createRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { DemoWrapper } from "./style";
const index = memo(() => {
  const arr = ["111", "222", "333", "444", "555", "666", "777"];
  const [curIndex, setCurindex] = useState(0);
  const listRef = createRef();

  useEffect(() => {
    const curindexEl = listRef.current.children[curIndex];
    const itemOffsetLeft = curindexEl.offsetLeft;
    const itemWidth = curindexEl.clientWidth;
    const listWidth = listRef.current.clientWidth;
    const listScrollWidth = listRef.current.scrollWidth;
    const totalDistance = listScrollWidth - listWidth;
    let width = itemWidth * 0.5 + itemOffsetLeft - listWidth * 0.5;
    // console.log(listWidth, listScrollWidth);
    if (width < 0) width = 0;
    if (width > totalDistance) width = totalDistance;
    listRef.current.style.transform = `translateX(${-width}px)`;
  }, [curIndex, listRef]);

  /* 按钮的判断逻辑*/
  function buttonClick(isNext = true) {
    let newIndex = isNext ? curIndex + 1 : curIndex - 1;

    /*越界的情况 */
    if (newIndex < 0) newIndex = arr.length - 1;
    if (newIndex >= arr.length) newIndex = 0;
    setCurindex(newIndex);
    // console.log(newIndex);
  }

  return (
    <DemoWrapper>
      <div className="selector">
        <button
          onClick={(e) => {
            buttonClick(false);
          }}
        >
          上一个
        </button>
        <button onClick={buttonClick}>下一个</button>
      </div>
      <div className="wrapper">
        <div className="list-item" ref={listRef}>
          {arr.map((item, index) => (
            <button key={item}>{item}</button>
          ))}
        </div>
      </div>
    </DemoWrapper>
  );
});

export default index;
