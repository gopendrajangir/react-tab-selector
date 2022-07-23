import React, { useState, useEffect, useRef } from 'react'
import Tab from './Tab';

interface TabSelectorProps {
  tabs: string[];
  defaultTab: string;
}

function TabSelector({ tabs, defaultTab }: TabSelectorProps) {
  const [selectedTabIdx, setSelectedTabIdx] = useState(tabs.indexOf(defaultTab));

  const selectedTabRef = useRef(null);
  const previousSelectedTabRef = useRef(null);

  return (
    <div className="container">
      {
        tabs.map((tabName: string, i: number) => {
          return (
            <Tab
              key={tabName}
              selectedTabRef={selectedTabRef}
              previousSelectedTabRef={previousSelectedTabRef}
              selectedTabIdx={selectedTabIdx}
              setSelectedTabIdx={setSelectedTabIdx}
              index={i}
            >
              {tabName}
            </Tab>
          )
        })
      }
    </div>
  )
}

export default React.memo(TabSelector);