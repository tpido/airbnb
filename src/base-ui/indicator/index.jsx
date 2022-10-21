import React, { createRef, memo, useEffect } from "react";
import { IndicatorWrapper } from "./style";

const Indicator = memo((props) => {
  const { curIndex = 0 } = props;
  const listRef = createRef();

  useEffect(() => {
    const curindexEl = listRef.current.children[curIndex];
    const itemOffsetLeft = curindexEl.offsetLeft;
    const itemWidth = curindexEl.clientWidth;
    const listWidth = listRef.current.clientWidth;
    const listScrollWidth = listRef.current.scrollWidth;
    const totalDistance = listScrollWidth - listWidth;
    let width = itemWidth * 0.5 + itemOffsetLeft - listWidth * 0.5;

    if (width < 0) width = 0;
    if (width > totalDistance) width = totalDistance;

    listRef.current.style.transform = `translateX(${-width}px)`;
  }, [curIndex, listRef]);

  return (
    <IndicatorWrapper>
      <div className="list" ref={listRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
