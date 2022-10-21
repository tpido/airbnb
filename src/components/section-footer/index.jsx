import React, { memo } from "react";
import { useNavigate } from "react-router-dom";
import { FooterWrapper } from "./style";

const SectionFooter = memo((props) => {
  let { name = "显示全部 >", color = "black" } = props;
  if (name !== "显示全部 >") name = `显示更多${name}房源 >`;
  let navigate = useNavigate();

  function handleNavigate() {
    navigate("/entire");
  }
  return (
    <FooterWrapper color={color}>
      <span onClick={handleNavigate}>{name}</span>
    </FooterWrapper>
  );
});

export default SectionFooter;
