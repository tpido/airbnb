import React, { memo } from "react";
import IconSearch from "../../../../assets/svg/IconSearch";
import { CenterWrapper } from "./style";
import searchTitles from "@/assets/data/search_titles";
import { useState } from "react";
const HeaderCenter = memo((props) => {
  const { isSearch, SearchClick } = props;
  const [curIndex, setCurIndex] = useState(0);
  const [tabIndex, settabIndex] = useState(-1);
  function TabsItemsClick(index) {
    setCurIndex(index);
  }

  function TopSearchHandle() {
    SearchClick();
  }

  const TopSearchElement = (
    <div className="top_search" onClick={TopSearchHandle}>
      <div className="left-box">搜索房源和体验</div>
      <div className="icon">
        <IconSearch />
      </div>
    </div>
  );

  const TitleElement = (
    <div className="searchTitles">
      <div className="searchTabs">
        {searchTitles.map((item, index) => (
          <div
            className="searchTabs_item"
            key={index}
            onClick={(e) => {
              TabsItemsClick(index);
            }}
          >
            <span className={curIndex === index ? "active" : ""}>
              {item.title}
            </span>
          </div>
        ))}
      </div>
      <div className="searchInfo">
        {searchTitles[curIndex].searchInfos.map((item, index) => (
          <div
            className={
              tabIndex === index ? "searchInfo_item active" : "searchInfo_item"
            }
            key={index}
            onClick={(e) => {
              settabIndex(index);
            }}
          >
            <div className="info">
              <div className="item_title">{item.title}</div>
              <div className="item_desc">{item.desc}</div>
            </div>
            <div className="divider"></div>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <CenterWrapper index={curIndex} isSearch={isSearch}>
      {isSearch ? TopSearchElement : TitleElement}
    </CenterWrapper>
  );
});

export default HeaderCenter;
