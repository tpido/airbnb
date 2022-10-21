import {
  CHANGE_CURPAGE,
  CHANGE_ROOMSLIST,
  CHANGE_TOTAL_COUNT,
  CHANGE_ISLOADING,
} from "./constrant";

const initialState = {
  curpage: 0, //当前页码
  roomslist: [], //房间列表
  totalcount: 0, //总个数
  isLoading: false, //是否正在加载
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CURPAGE:
      return { ...state, curpage: action.curpage };
    case CHANGE_ROOMSLIST:
      return { ...state, roomslist: action.roomslist };
    case CHANGE_TOTAL_COUNT:
      return { ...state, totalcount: action.totalcount };
    case CHANGE_ISLOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default reducer;
