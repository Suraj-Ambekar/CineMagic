import React, {useState} from 'react';
import "./styles.scss";

const SwitchTabs = ({data, onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  return (
    <div className='switchingTabs'>
      <div className='tabItems'>
        {data.map((tab, index)=> {
          <span key={index} className={`tabItem`}>
            {tab}
          </span>
        })}
      </div>
      <span className='movingBg' style={{left}} />
    </div>
  )
}
export default SwitchTabs