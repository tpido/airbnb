import React, { memo } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchEntireDataAction } from "../../store/modules/entire/actions";
import { changeFixedAction } from "../../store/modules/main";
import EntireFilter from "./entire-filter";
import EntirePagination from "./entire-pagination";
import EntireRooms from "./entire-rooms";

const Entire = memo(() => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEntireDataAction());
    dispatch(changeFixedAction(true));
  }, [dispatch]);

  return (
    <div>
      <EntireFilter />
      <EntireRooms />
      <EntirePagination />
    </div>
  );
});

export default Entire;
