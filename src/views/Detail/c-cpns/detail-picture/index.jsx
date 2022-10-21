import React, { memo } from "react";
import { useState } from "react";
import PictureBrowser from "../../../../base-ui/picture-browser";
import { PictureWrapper } from "./style";
const DetailPicture = memo((props) => {
  const { picturesData = [] } = props;
  const [showBrowser, setshowBrowser] = useState(false);

  function showBrowserHandle(isShow = true) {
    setshowBrowser(isShow);
  }
  return (
    <PictureWrapper>
      <div className="left">
        <div className="left-item">
          <img src={picturesData[0]} alt="" />
          <div className="cover"></div>
        </div>
      </div>
      <div className="right">
        {picturesData.slice(1, 5).map((item, index) => (
          <div className="right-item" key={item}>
            <img src={item} alt="" />
            <div className="cover"></div>
          </div>
        ))}
      </div>
      <div className="showBrowsers">
        <div onClick={showBrowserHandle}>查看图片</div>
      </div>
      {showBrowser && (
        <PictureBrowser
          picturesData={picturesData}
          closeClick={(e) => setshowBrowser(false)}
        />
      )}
    </PictureWrapper>
  );
});

export default DetailPicture;
