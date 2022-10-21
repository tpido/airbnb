import { Pagination } from "@mui/material";
import React, { memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEntireDataAction } from "../../../store/modules/entire/actions";
import { PaginationWrapper } from "./style";

const EntirePagination = memo((props) => {
  const dispatch = useDispatch();
  const { roomslist, curpage, totalcount } = useSelector((state) => ({
    roomslist: state.entire.roomslist,
    curpage: state.entire.curpage,
    totalcount: state.entire.totalcount,
  }));

  const totalPage = Math.ceil(totalcount / 20);
  const startCount = curpage * 20 + 1;
  const endCount = startCount + 19 > totalcount ? totalcount : startCount + 19;

  function handlePage(event, page) {
    window.scrollTo(0, 0);
    dispatch(fetchEntireDataAction(page - 1));
  }

  return (
    <PaginationWrapper>
      {!!roomslist.length && (
        <div className="list">
          <Pagination count={totalPage} onChange={handlePage} color="primary" />
          <div className="info">
            第{startCount}-{endCount}个房源，共超过{totalcount}个
          </div>
        </div>
      )}
    </PaginationWrapper>
  );
});

export default EntirePagination;
