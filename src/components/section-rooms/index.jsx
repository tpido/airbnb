import React, { memo } from "react";
import RoomItem from "../room-item";
import { RoomsWrappers } from "./style";

const SectionRooms = memo((props) => {
  const { roomsData = [], itemWidth = "25%" } = props;
  // console.log(roomsData);
  return (
    <RoomsWrappers>
      <ul className="room-list">
        {roomsData?.slice(0, 8).map((item) => (
          <RoomItem item={item} key={item.id} itemWidth={itemWidth} />
        ))}
      </ul>
    </RoomsWrappers>
  );
});

export default SectionRooms;
