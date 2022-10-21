import React, { memo } from "react";
import { useState } from "react";
import filterData from "../../../assets/data/filter_data.json";
import { FilterWrapper } from "./style";

const EntireFilter = memo(() => {
  const [fitlerArr, setfilterArr] = useState([]);

  function filterItemClick(item) {
    let tempArr = [...fitlerArr];
    /*插入操作 */
    if (fitlerArr.indexOf(item) < 0) {
      tempArr.push(item);
      setfilterArr(tempArr);
    } else {
      /*删除操作 */
      const Itemindex = fitlerArr.indexOf(item);
      tempArr.splice(Itemindex, 1);
      setfilterArr(tempArr);
    }
  }

  return (
    <FilterWrapper>
      {filterData.map((item, index) => (
        <div
          key={index}
          className={
            fitlerArr.indexOf(item) >= 0 ? "filter-item active" : "filter-item"
          }
          onClick={() => filterItemClick(item)}
        >
          {item}
        </div>
      ))}
    </FilterWrapper>
  );
});

export default EntireFilter;
