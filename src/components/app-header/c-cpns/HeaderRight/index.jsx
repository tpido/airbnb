import React, { memo, useEffect, useState } from "react";
import IconAvatar from "../../../../assets/svg/IconAvatar";
import IconLang from "../../../../assets/svg/IconLang";
import IconMenu from "../../../../assets/svg/IconMenu";
import { RightWrapper } from "./style";
const HeaderRight = memo(() => {
  const [showPanel, setPanel] = useState(false);

  useEffect(() => {
    function panelHandle() {
      setPanel(false);
    }
    window.addEventListener("click", panelHandle, true);
    return () => {
      window.removeEventListener("click", panelHandle);
    };
  });

  function showPanelHandle() {
    setPanel(true);
  }

  return (
    <RightWrapper>
      <div className="left-box">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconLang />
        </span>
      </div>
      <div className="profile" onClick={showPanelHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div>登录</div>
              <div>注册</div>
            </div>
            <div className="bottom">
              <div>出租房源</div>
              <div>开展体验</div>
              <div>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
