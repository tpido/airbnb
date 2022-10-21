import React, { memo, useState } from 'react'
import ScrollView from '../../base-ui/scroll-view';
import { TabWrapper } from './style';
const SectionTab = memo((props) => {
    const { tabName,handleTabClick }=props;
    const [curIndex,setcurIndex]=useState(0)

    function tabClick(index,item) {
        setcurIndex(index);
        handleTabClick(item)
    }
  return (
    <TabWrapper>
      <ScrollView>
      {
            tabName.map((item,index)=>(
                <div 
                className={curIndex===index?"tab-item active":"tab-item"}
                 key={index} 
                 onClick={()=>tabClick(index,item)}
                 >
                  {item}
                  </div>
            ))
        }
      </ScrollView>
      
    </TabWrapper>
  
  )
})

export default SectionTab