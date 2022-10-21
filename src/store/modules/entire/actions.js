import { getEntireData } from "../../../service";
import {
  CHANGE_CURPAGE,
  CHANGE_ROOMSLIST,
  CHANGE_TOTAL_COUNT,
  CHANGE_ISLOADING,
} from "./constrant";

export const changeCurPageAction = (curpage) => ({
  type: CHANGE_CURPAGE,
  curpage,
});

export const changeRoomsListAction = (roomslist) => ({
  type: CHANGE_ROOMSLIST,
  roomslist,
});

export const changeTotalCountAction = (totalcount) => ({
  type: CHANGE_TOTAL_COUNT,
  totalcount,
});

export const changeLoadingAction = (isLoading) => ({
  type: CHANGE_ISLOADING,
  isLoading,
});

export const fetchEntireDataAction = (page = 0) => {
  return async (dispatch, getstate) => {
    //改变当前的页面
    dispatch(changeCurPageAction(page));

    dispatch(changeLoadingAction(true));
    const res = await getEntireData(page * 20);
    dispatch(changeLoadingAction(false));

    //改变当前的房间和总数量
    const roomslist = res.list;
    const totalcount = res.totalCount;
    dispatch(changeRoomsListAction(roomslist));
    dispatch(changeTotalCountAction(totalcount));
  };
};
