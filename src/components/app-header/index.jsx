import React, { memo, useState } from "react";
import { HeaderWrapper } from "./style";
import HeaderLeft from "./c-cpns/HeaderLeft";
import HeaderRight from "./c-cpns/HeaderRight";
import HeaderCenter from "./c-cpns/HeaderCenter";
import { shallowEqual, useSelector } from "react-redux";
const AppHeader = memo(() => {
  const { isFixed } = useSelector(
    (state) => ({
      isFixed: state.main.isFixed,
    }),
    shallowEqual
  );

  const [isSearch, setisSearch] = useState(true);

  return (
    <HeaderWrapper className={isFixed ? "fixed" : ""} isSearch={isSearch}>
      <div className="content">
        <div className="top">
          <HeaderLeft />
          <HeaderCenter
            isSearch={isSearch}
            SearchClick={(e) => {
              setisSearch(false);
            }}
          />
          <HeaderRight />
        </div>
        <div className="search-area"></div>
      </div>

      {!isSearch && (
        <div
          className="cover"
          onClick={(e) => {
            setisSearch(true);
          }}
        ></div>
      )}
    </HeaderWrapper>
  );
});

export default AppHeader;
