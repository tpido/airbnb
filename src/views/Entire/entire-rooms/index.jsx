import React, { memo } from "react";
import { RoomsWrapper } from "./style";
import RoomItem from "@/components/room-item";
import { useSelector } from "react-redux";
const EntireRooms = memo((props) => {
  const { roomslist, totalcount, isLoading } = useSelector((state) => ({
    roomslist: state.entire.roomslist,
    totalcount: state.entire.totalcount,
    isLoading: state.entire.isLoading,
  }));
  return (
    <RoomsWrapper>
      <h2>总共有{totalcount}个房源</h2>
      <div className="list">
        {roomslist.map((item, index) => (
          <RoomItem key={item._id} item={item} itemWidth="20%"></RoomItem>
        ))}
      </div>

      {isLoading && <div className="cover"></div>}
    </RoomsWrapper>
  );
});

export default EntireRooms;
